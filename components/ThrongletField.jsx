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
  // Monitor grid: the simulation remains interactive without scenery.
  rect('#101625', 0, 0, WIDTH, HEIGHT);
  for (let x = 0; x < WIDTH; x += 12) rect(x % 60 ? '#1b2538' : '#303a52', x, 0, 1, HEIGHT);
  for (let y = 0; y < HEIGHT; y += 12) rect(y % 60 ? '#1b2538' : '#303a52', 0, y, WIDTH, 1);
  rect('#3b5763', 16, 19, 328, 1);
  rect('#3b5763', 16, 72, 328, 1);
  // Decorative trace, independent of the simulation and project data.
  const trace = [[22,49], [66,49], [76,43], [85,49], [112,49], [123,60], [137,29],
    [148,56], [159,49], [197,49], [207,44], [217,49], [245,49], [254,60],
    [266,30], [278,57], [290,49], [338,49]];
  ctx.beginPath();
  trace.forEach(([x,y], i) => i ? ctx.lineTo(x,y) : ctx.moveTo(x,y));
  ctx.strokeStyle = '#8de2c3';
  ctx.lineWidth = 1.25;
  ctx.stroke();
  for (let x = 22; x < 342; x += 12) rect('#536681', x, 78, 1, x % 5 ? 3 : 6);
  apples.forEach(item => apple(item.x - 5, item.y - 5));
  [...creatures].sort((a, b) => a.y - b.y).forEach(creature => {
    const frame = Math.floor(time * 6 + creature.phase) % 2;
    const bounce = creature.walking ? frame : 0;
    const x = Math.round(creature.x - 16);
    const y = Math.round(creature.y - 37 - bounce);
    rect('#394762', x + 4, creature.y - 1, 24, 4);
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
    <canvas ref={canvas} width={WIDTH} height={HEIGHT} role="img" aria-label="Six golden pixel creatures on a dark monitor grid, with apple thought bubbles when they are hungry" aria-describedby="field-instructions" onPointerDown={feedAtPointer} />
    <div className="field-controls"><button type="button" className="button button-small" onClick={() => simulation.current?.feed()}>Feed <span aria-hidden="true">+</span></button><button type="button" className="field-pause" onClick={toggleAnimation}>{paused ? 'Resume animation' : 'Pause animation'}</button></div>
    <p id="field-instructions" className="field-instructions">Click the field or use Feed to drop an apple</p>
    <span className="sr-only" role="status">{message}</span>
  </figure>;
}
