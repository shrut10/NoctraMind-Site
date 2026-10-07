'use client';

import { useEffect, useRef, useState } from 'react';

const WIDTH = 360;
const HEIGHT = 256;
const random = (low, high) => low + Math.random() * (high - low);
const point = () => ({ x: random(38, 320), y: random(130, 231) });
const palette = { o: '#ab702e', y: '#f6c855', l: '#ffe49a', b: '#538f9c', d: '#356574', w: '#fff9dd', k: '#323d30', r: '#dd8f57' };
// Original 16 × 19 pixel sprites; each row is a row of pixels, not an image file.
const sprite = [
  '......yy........', '.....ylly.......', '..yyyyllyyyyyy..', '.oyylllllyylllo.',
  '.oyylllllyylllo.', '..oyylllllyyyo..', '...yllllllly....', '...ywwlywwly....',
  '...ywklywkly....', '...ywklywkly....', '...ylllollly....', '....yllllly.....',
  '...yybbbbbbyy...', '..ylybbbbbblyl..', '...yybddbdbyy...', '.....bbbbbb.....',
  '.....yyyyyy.....', '.....yy..yy.....', '....ooo..ooo....',
];

function drawScene(ctx, creatures, apples, time) {
  ctx.imageSmoothingEnabled = false;
  const rect = (colour, x, y, width, height) => {
    ctx.fillStyle = colour;
    ctx.fillRect(Math.round(x), Math.round(y), width, height);
  };
  const apple = (x, y) => {
    rect('#4d6138', x + 4, y - 3, 2, 4);
    rect('#6d8b40', x + 6, y - 2, 3, 2);
    rect('#9d4534', x + 1, y + 1, 8, 7);
    rect('#c85e42', x, y + 2, 10, 4);
    rect('#e99166', x + 2, y + 2, 2, 2);
    rect('#9d4534', x + 2, y + 7, 6, 2);
  };
  rect('#cbded2', 0, 0, WIDTH, HEIGHT);
  rect('#e8e8ce', 249, 16, 23, 23);
  // Distant hedgerows, an open meadow and an irregular earth path.
  for (let i = 0; i < 10; i++) {
    rect(i % 2 ? '#93b794' : '#a4bfa0', i * 43 - 15, 44 + (i % 3) * 5, 58, 30);
  }
  rect('#88a86a', 0, 72, WIDTH, HEIGHT - 72);
  rect('#99b775', 9, 96, 342, 160);
  rect('#a9bd79', 45, 139, 251, 79);
  rect('#a9bd79', 76, 119, 192, 116);
  rect('#bdba85', 153, 89, 36, 18);
  rect('#c9bf90', 160, 103, 38, 21);
  rect('#c9bf90', 180, 117, 44, 14);
  // Fence rails sit behind the creatures.
  rect('#8e7650', 0, 83, 153, 4);
  rect('#8e7650', 190, 83, 170, 4);
  rect('#d2b785', 0, 78, 153, 5);
  rect('#d2b785', 190, 78, 170, 5);
  for (let x = 10; x < WIDTH; x += 25) {
    if (x > 147 && x < 191) continue;
    rect('#8e7650', x + 2, 75, 5, 24);
    rect('#ead09b', x, 72, 5, 24);
  }
  // Deterministic details keep grass from flickering between frames.
  for (let i = 0; i < 75; i++) {
    const x = (i * 79 + 13) % WIDTH;
    const y = 102 + (i * 43) % 149;
    rect(i % 3 ? '#8ea66a' : '#bac785', x, y, 3, 2);
    if (i % 3 === 0) rect('#78915e', x + 3, y - 2, 1, 4);
  }
  const tree = (x, y) => {
    rect('#8b9c60', x - 13, y + 25, 40, 6);
    rect('#876145', x + 3, y, 8, 29);
    rect('#af8251', x + 3, y, 3, 27);
    rect('#456b49', x - 19, y - 21, 49, 26);
    rect('#527c4e', x - 24, y - 39, 57, 29);
    rect('#618b54', x - 17, y - 52, 44, 37);
    rect('#75965b', x - 10, y - 58, 29, 26);
    rect('#86a364', x - 8, y - 48, 9, 5);
    apple(x - 13, y - 22); apple(x + 14, y - 30);
  };
  tree(39, 97); tree(310, 99);
  for (const [x, y] of [[20, 188], [323, 168], [50, 244], [272, 238], [131, 115], [335, 229]]) {
    rect('#688651', x + 2, y, 2, 7);
    rect('#f4e0a4', x, y - 2, 6, 3);
    rect('#df9b71', x + 2, y - 4, 2, 6);
  }
  apples.forEach(item => apple(item.x - 5, item.y - 5));
  [...creatures].sort((a, b) => a.y - b.y).forEach(creature => {
    const frame = Math.floor(time * 6 + creature.phase) % 2;
    const bounce = creature.walking ? frame : 0;
    const x = Math.round(creature.x - 16);
    const y = Math.round(creature.y - 37 - bounce);
    rect('#82945c', x + 4, creature.y - 1, 24, 4);
    sprite.forEach((row, py) => [...row].forEach((pixel, px) => {
      if (!palette[pixel]) return;
      const step = py >= 17 && creature.walking ? (px < 8 ? frame : -frame) : 0;
      const look = pixel === 'k' && creature.direction < 0 ? -1 : 0;
      rect(palette[pixel], x + (px + look) * 2, y + py * 2 + step, 2, 2);
    }));
    if (creature.hungry && Math.floor((time + creature.phase) / 5) % 3 === 0) {
      rect('#5b6b4c', x + 9, y - 28, 26, 23);
      rect('#fff9e4', x + 11, y - 26, 22, 19);
      rect('#fff9e4', x + 12, y - 6, 4, 4);
      rect('#fff9e4', x + 8, y + 1, 3, 3);
      apple(x + 17, y - 21);
    } else if (creature.happy > 0) {
      rect('#ad5947', x + 13, y - 12, 4, 4);
      rect('#ad5947', x + 19, y - 12, 4, 4);
      rect('#cb765b', x + 13, y - 9, 10, 3);
      rect('#cb765b', x + 16, y - 6, 4, 3);
    }
  });
}

export default function ThrongletField() {
  const canvas = useRef(null);
  const simulation = useRef(null);
  const [paused, setPaused] = useState(false);
  const [message, setMessage] = useState('Click the field or use Feed to drop an apple');

  useEffect(() => {
    const element = canvas.current;
    const ctx = element.getContext('2d');
    if (!ctx) return;
    const creatures = Array.from({ length: 6 }, (_, i) => ({
      x: 55 + (i % 3) * 119, y: 153 + Math.floor(i / 3) * 72,
      target: point(), wait: i * .45, phase: i * 3, direction: 1,
      hungry: true, hunger: 0, happy: 0, walking: false,
    }));
    const apples = [];
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let isPaused = preference.matches;
    let inView = false;
    let frame = 0;
    let last = 0;
    let time = 0;
    setPaused(isPaused);
    const draw = () => drawScene(ctx, creatures, apples, time);
    function update(dt) {
      time += dt;
      for (let i = apples.length - 1; i >= 0; i--) {
        apples[i].age += dt;
        if (apples[i].age > 40) apples.splice(i, 1);
      }
      creatures.forEach(creature => {
        creature.happy = Math.max(0, creature.happy - dt);
        creature.hunger = Math.max(0, creature.hunger - dt);
        creature.hungry = creature.hunger === 0;
        creature.wait -= dt;
        const food = creature.hungry ? [...apples].sort((a, b) => Math.hypot(a.x - creature.x, a.y - creature.y) - Math.hypot(b.x - creature.x, b.y - creature.y))[0] : null;
        const target = food || creature.target;
        const dx = target.x - creature.x;
        const dy = target.y - creature.y;
        const distance = Math.hypot(dx, dy);
        creature.walking = (food || creature.wait <= 0) && distance > 2;
        if (creature.walking) {
          const step = Math.min(distance, (food ? 24 : 12) * dt);
          creature.x += dx / distance * step;
          creature.y += dy / distance * step;
          creature.direction = dx < 0 ? -1 : 1;
        } else if (distance <= 2) {
          if (food) {
            apples.splice(apples.indexOf(food), 1);
            creature.hunger = random(14, 26);
            creature.hungry = false;
            creature.happy = 3;
            setMessage('Apple eaten');
          }
          creature.target = point();
          creature.wait = random(1, 3);
        }
      });
    }
    function tick(now) {
      if (!last) last = now;
      if (now - last >= 65) {
        update(Math.min((now - last) / 1000, .12));
        last = now;
        draw();
      }
      frame = requestAnimationFrame(tick);
    }
    function sync() {
      cancelAnimationFrame(frame);
      last = 0;
      if (!isPaused && inView && !document.hidden) frame = requestAnimationFrame(tick);
      draw();
    }
    const observer = new IntersectionObserver(([entry]) => { inView = entry.isIntersecting; sync(); });
    observer.observe(element);
    const motionChanged = () => { isPaused = preference.matches; setPaused(isPaused); sync(); };
    preference.addEventListener('change', motionChanged);
    document.addEventListener('visibilitychange', sync);
    simulation.current = {
      pause(value) { isPaused = value; sync(); },
      feed(x = random(55, 305), y = random(138, 223)) {
        if (apples.length >= 4) { setMessage('There are already four apples in the field'); return; }
        apples.push({ x: Math.max(38, Math.min(320, x)), y: Math.max(130, Math.min(231, y)), age: 0 });
        setMessage(isPaused ? 'Apple added — resume the animation to feed the creatures' : 'Apple added to the field');
        draw();
      },
    };
    draw();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      preference.removeEventListener('change', motionChanged);
      document.removeEventListener('visibilitychange', sync);
      simulation.current = null;
    };
  }, []);

  function toggleAnimation() {
    simulation.current?.pause(!paused);
    setPaused(!paused);
  }
  function feedAtPointer(event) {
    const bounds = event.currentTarget.getBoundingClientRect();
    simulation.current?.feed((event.clientX - bounds.left) / bounds.width * WIDTH, (event.clientY - bounds.top) / bounds.height * HEIGHT);
  }

  return <figure className="creature-field">
    <figcaption className="field-title"><span>Thronglets</span><span>Pixel simulation</span></figcaption>
    <canvas ref={canvas} width={WIDTH} height={HEIGHT} role="img" aria-label="Six golden pixel creatures exploring a green field, with apple thought bubbles when they are hungry" aria-describedby="field-instructions" onPointerDown={feedAtPointer} />
    <div className="field-controls"><button type="button" className="button button-small" onClick={() => simulation.current?.feed()}>Feed <span aria-hidden="true">+</span></button><button type="button" className="field-pause" onClick={toggleAnimation}>{paused ? 'Resume animation' : 'Pause animation'}</button></div>
    <p id="field-instructions" className="field-instructions">Click the field or use Feed to drop an apple</p>
    <span className="sr-only" role="status">{message}</span>
  </figure>;
}
