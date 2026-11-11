'use client';

import { useEffect, useRef, useState } from 'react';
import { thronglets } from '@/content/site';

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
  // Original pixel landscape with overcast ridges, coastal firs and a wet clearing.
  const ridge = (colour, points, bottom) => {
    for (let i = 0; i < points.length - 1; i++) {
      const [left, top] = points[i];
      const [right, nextTop] = points[i + 1];
      for (let x = left; x < right; x += 2) {
        const y = Math.round((top + (nextTop - top) * (x - left) / (right - left)) / 2) * 2;
        rect(colour, x, y, 2, bottom - y);
      }
    }
  };
  const fir = (x, bottom, height, colour, trunk) => {
    rect(trunk, x - 1, bottom - height + 5, 3, height - 5);
    for (let y = 0; y < height - 7; y += 4) {
      const width = Math.max(2, Math.round(y * .25) + (Math.floor(y / 12) % 2 ? 2 : 0));
      rect(colour, x - width, bottom - height + y, width * 2 + 1, 4);
      if (y > 8) rect(colour, x - width - 2, bottom - height + y + 2, width * 2 + 5, 2);
    }
  };
  rect('#52616a', 0, 0, WIDTH, HEIGHT);
  rect('#596870', 0, 0, WIDTH, 20);
  rect('#5d6b73', 0, 20, WIDTH, 18);
  rect('#64727a', 0, 38, WIDTH, 17);
  // Broad cloud shelves keep the sky still while the creatures move.
  rect('#617078', 0, 12, 105, 4);
  rect('#617078', 82, 16, 92, 3);
  rect('#53636d', 201, 7, 159, 5);
  rect('#53636d', 236, 12, 124, 4);
  rect('#6a777e', 134, 35, 135, 4);
  rect('#6a777e', 103, 39, 142, 3);
  ridge('#465860', [[0,72],[30,59],[58,65],[110,29],[146,58],[174,53],[217,76],[267,48],[301,61],[330,45],[360,59]], 114);
  ridge('#354c54', [[0,91],[42,72],[69,79],[103,63],[144,81],[174,75],[217,95],[252,76],[283,66],[322,85],[360,78]], 126);
  rect('#697980', 0, 89, WIDTH, 4);
  rect('#5e7177', 34, 93, 265, 3);
  for (const [x, height] of [[8,46],[28,34],[51,54],[74,39],[96,49],[121,34],[145,30],[166,35],[190,29],[212,37],[236,41],[256,35],[281,54],[303,43],[327,60],[351,46]]) {
    fir(x, 124, height, '#2c4248', '#34494c');
  }
  rect('#566d71', 0, 110, WIDTH, 4);
  rect('#61777a', 34, 114, 288, 3);
  rect('#4c6265', 0, 117, WIDTH, 7);
  // Damp earth and a pale path leave the simulation's walking area open.
  rect('#293936', 0, 124, WIDTH, HEIGHT - 124);
  ridge('#344440', [[0,139],[32,130],[70,138],[105,127],[145,131],[177,127],[211,134],[250,129],[281,138],[324,132],[360,140]], HEIGHT);
  ridge('#404c46', [[100,256],[113,208],[143,185],[155,156],[178,124],[194,124],[207,157],[229,184],[249,209],[271,256]], HEIGHT);
  // Reflected strips of cloud in shallow water, deliberately muted.
  for (const [x, y, width] of [[151,144,36],[172,166,31],[148,188,47],[188,212,47],[130,233,34],[248,156,25],[68,181,23],[280,218,28]]) {
    rect('#34484a', x - 3, y - 1, width + 6, 4);
    rect('#687b7b', x, y, width, 1);
    rect('#4c6365', x + 5, y + 2, Math.max(8, width - 11), 1);
  }
  for (let i = 0; i < 68; i++) {
    const x = (i * 83 + 17) % WIDTH;
    const y = 133 + (i * 41) % 120;
    rect(i % 3 ? '#293c37' : '#4a5850', x, y, 2 + i % 4, 1);
  }
  // Near firs frame the clearing without blocking the creatures.
  fir(8, 161, 135, '#182d2a', '#293b32');
  fir(347, 165, 145, '#172d2b', '#2d3b32');
  fir(-10, 207, 126, '#142824', '#26392e');
  fir(368, 214, 139, '#122723', '#27392f');
  rect('#202e2a', 0, 247, WIDTH, 9);
  for (let i = 0; i < 25; i++) {
    const x = (i * 47 + 5) % WIDTH;
    rect('#293e33', x, 242 + i % 5, 9, 3);
    rect('#3e5042', x + 2, 240 + i % 5, 3, 3);
  }
  apples.forEach(item => apple(item.x - 5, item.y - 5));
  [...creatures].sort((a, b) => a.y - b.y).forEach(creature => {
    const frame = Math.floor(time * 6 + creature.phase) % 2;
    const bounce = creature.walking ? frame : 0;
    const x = Math.round(creature.x - 16);
    const y = Math.round(creature.y - 37 - bounce);
    rect('#22302d', x + 4, creature.y - 1, 24, 4);
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
        setMessage(isPaused ? 'Apple added, resume the animation to feed the creatures' : 'Apple added to the field');
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
    <figcaption className="field-title">Thronglets</figcaption>
    <canvas ref={canvas} width={WIDTH} height={HEIGHT} role="img" aria-label="Six golden pixel creatures in a misty Pacific Northwest forest clearing with dark fir trees, mountain ridges and wet ground" aria-describedby="field-instructions" onPointerDown={feedAtPointer} />
    <div className="field-controls"><button type="button" className="button button-small" onClick={() => simulation.current?.feed()}>Feed <span aria-hidden="true">+</span></button><button type="button" className="field-pause" onClick={toggleAnimation}>{paused ? 'Resume animation' : 'Pause animation'}</button></div>
    <p id="field-instructions" className="field-instructions">Click the field or use Feed to drop an apple</p>
    <blockquote className="field-quote">
      <p>“{thronglets.quote}”</p>
      <footer>{thronglets.speaker} · <cite><a href={thronglets.sourceUrl} target="_blank" rel="noopener noreferrer">{thronglets.source}</a></cite></footer>
    </blockquote>
    <span className="sr-only" role="status">{message}</span>
  </figure>;
}
