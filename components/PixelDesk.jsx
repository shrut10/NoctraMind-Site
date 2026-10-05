'use client';

import { useState } from 'react';

// Original illustration, drawn on a 320 × 232 pixel grid. No game assets.
export default function PixelDesk() {
  const [night, setNight] = useState(false);
  return (
    <figure className={`desk ${night ? 'desk-night' : ''}`}>
      <div className="desk-title"><span aria-hidden="true">◆</span> my little workspace <span aria-hidden="true">◆</span></div>
      <svg viewBox="0 0 320 232" role="img" aria-label={`A pixel-art desk with a brain-signal monitor, books, plants and a ${night ? 'moonlit' : 'sunny'} window.`} shapeRendering="crispEdges">
        <path fill={night ? '#897c83' : '#ecdbb1'} d="M0 0h320v232H0z" />
        <path fill={night ? '#756974' : '#dfc496'} d="M0 0h320v8H0zM0 0h8v232H0zM312 0h8v232h-8zM0 156h320v8H0z" />
        <path fill={night ? '#62565f' : '#c49b6c'} d="M0 164h320v68H0z" />
        <path fill={night ? '#544d56' : '#af815b'} d="M0 183h320v3H0zM0 208h320v3H0zM54 164h3v19h-3zM227 186h3v22h-3zM102 211h3v21h-3z" />
        <path fill="#684e38" d="M29 19h122v101H29z" />
        <path fill="#b98151" d="M33 23h114v93H33z" />
        <path fill={night ? '#36445c' : '#abd4ca'} d="M39 29h102v79H39z" />
        {night ? <>
          <path fill="#fff0b9" d="M111 36h12v4h4v12h-4v4h-12v-4h-4V40h4z" />
          <path fill="#36445c" d="M116 34h13v14h-13z" />
          <path fill="#f1e0ab" d="M51 41h3v3h-3zM82 37h2v2h-2zM72 58h3v3h-3zM128 67h2v2h-2z" />
        </> : <>
          <path fill="#ffe8a3" d="M110 36h14v4h4v14h-4v4h-14v-4h-4V40h4z" />
          <path fill="#fdf5db" d="M49 44h16v4h8v5H43v-5h6zM87 63h19v4h7v4H80v-4h7z" />
        </>}
        <path fill={night ? '#526b67' : '#80aa77'} d="M39 89h10V78h12v-7h12v7h12v11h15v-9h13v-8h13v8h15v28H39z" />
        <path fill={night ? '#344e4c' : '#4e7857'} d="M39 101h11v-8h18v-6h16v11h17v-7h18v9h22v8H39z" />
        <path fill="#8c603e" d="M86 25h7v86h-7zM35 64h110v6H35zM24 116h132v8H24z" />
        <path fill="#d9ae72" d="M24 116h132v3H24z" />
        <path fill="#684e38" d="M187 52h103v7H187z" />
        <path fill="#b98151" d="M185 48h109v5H185z" />
        <path fill="#536e4b" d="M193 19h10v29h-10z" />
        <path fill="#c4754c" d="M205 14h12v34h-12z" />
        <path fill="#e1b758" d="M220 22h9v26h-9z" />
        <path fill="#f4e9c9" d="M195 25h6v3h-6zM207 19h8v3h-8zM222 28h5v3h-5z" />
        <path fill="#486840" d="M269 31h4v14h-4zM258 26h11v8h-7v-4h-4zM273 19h10v8h-4v4h-6z" />
        <path fill="#b76945" d="M261 38h20v4h-2v6h-16v-6h-2z" />
        <path fill="#263e35" d="M91 85h124v75H91z" />
        <path fill="#54745c" d="M95 89h116v67H95z" />
        <path fill="#1f3733" d="M100 95h106v50H100z" />
        <path fill="#6e927c" d="M105 101h32v3h-32zM105 107h20v2h-20zM184 101h16v2h-16zM184 106h11v2h-11z" />
        <path fill="none" stroke="#d9d887" strokeWidth="2" d="M105 126h13v-4h9v8h7v-13h5v19h5v-10h9v-4h6v7h9v-15h4v23h5v-10h10v-4h13" />
        <path fill="#92b592" d="M149 149h6v3h-6z" />
        <path fill="#364c3e" d="M144 160h19v8h11v5h-41v-5h11z" />
        <path fill="#5c4333" d="M41 173h239v10H41zM48 183h12v40H48zM262 183h12v40h-12z" />
        <path fill="#b47f51" d="M37 165h247v9H37zM52 185h5v35h-5zM265 185h5v35h-5z" />
        <path fill="#dfb478" d="M37 165h247v3H37z" />
        <path fill="#e4d7b1" d="M105 166h81v6h-81z" />
        <path fill="#8b8b67" d="M111 166h2v3h-2zM117 166h2v3h-2zM123 166h2v3h-2zM129 166h2v3h-2zM135 166h2v3h-2zM141 166h2v3h-2zM147 166h2v3h-2zM153 166h2v3h-2zM159 166h2v3h-2zM165 166h2v3h-2zM171 166h2v3h-2z" />
        <path fill="#b56840" d="M227 144h19v20h-19zM246 146h6v12h-6z" />
        <path fill="#f6ddae" d="M229 146h15v3h-15z" />
        <path fill="#ecdbb1" d="M246 149h3v6h-3z" />
        <path fill="#e2c894" d="M73 160h21v5H73z" />
        <path fill="#b15d42" d="M70 156h25v5H70z" />
        <path fill="#36553e" d="M54 116h5v32h-5zM40 115h12v5h4v9h-7v-5h-9zM59 101h10v11h-5v7h-6zM60 130h13v8H60z" />
        <path fill="#779151" d="M43 116h8v4h-8zM61 103h6v7h-6zM61 131h10v3H61z" />
        <path fill="#914f39" d="M43 143h30v7h-3v15H46v-15h-3z" />
        <path fill="#bd7950" d="M46 146h24v4H46zM49 152h7v10h-7z" />
        <path fill="#795941" d="M194 190h45v6h-45zM189 196h55v9h-55zM196 205h8v22h-8zM229 205h8v22h-8z" />
        <path fill="#bd8654" d="M194 190h45v3h-45zM194 196h45v6h-45z" />
        <path fill="#e4bd74" d="M10 218h9v3h-9zM301 176h9v3h-9z" />
      </svg>
      <figcaption><span>{night ? 'One more experiment…' : 'Ideas growing here.'}</span><button type="button" className="scene-switch" aria-pressed={night} onClick={() => setNight(!night)}>{night ? 'Day mode' : 'Night mode'} <span aria-hidden="true">{night ? '☀' : '☾'}</span></button></figcaption>
    </figure>
  );
}
