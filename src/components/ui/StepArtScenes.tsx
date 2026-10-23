/* The four "how it works" diagrams — assets/svg/step-* rebuilt as code.
   Animations are transform/opacity/stroke only (see .sa-* rules in base.css). */

const S = { '--sa-d': '0ms' } as React.CSSProperties
const d = (ms: number) => ({ '--sa-d': `${ms}ms` }) as React.CSSProperties

/* 01 — Publish a repo: catalogue tiles populate one by one. */
export function StepOne() {
  const tiles = [
    { x: 136, y: 104, f: 'var(--gs-gray-300)' }, { x: 196, y: 104, f: 'var(--gs-gray-400)' },
    { x: 256, y: 104, f: 'var(--gs-gray-300)' }, { x: 136, y: 164, f: 'var(--gs-gray-400)' },
    { x: 196, y: 164, f: 'var(--gs-gray-300)' }, { x: 256, y: 164, f: 'var(--gs-gray-400)' },
  ]
  return (
    <g>
      <rect x="88" y="52" width="180" height="180" rx="38" fill="var(--inverse-bg)" />
      <rect x="90" y="54" width="216" height="216" rx="56" fill="var(--surface)" />
      <rect x="104" y="68" width="180" height="180" rx="38" fill="var(--bg)" />
      {tiles.map((t, i) => (
        <rect
          key={i} x={t.x} y={t.y} width="48" height="48" rx="12" fill={t.f}
          className="sa-tile" style={d(i * 260)} />
      ))}
      <rect x="136" y="234" width="110" height="10" rx="5" fill="var(--gs-gray-400)" className="sa-fade" style={d(1700)} />
      <rect x="136" y="252" width="72" height="10" rx="5" fill="var(--gs-gray-400)" className="sa-fade" style={d(1900)} />
      <g className="sa-slide" style={S}>
        <rect x="304" y="196" width="100" height="26" rx="13" fill="var(--inverse-bg)" />
        <path d="M348 209h24m-9-8l9 8-9 8" stroke="var(--on-primary)" strokeWidth="3.5"
          fill="none" strokeLinecap="round" strokeLinejoin="round" className="sa-arrow" />
      </g>
    </g>
  )
}

/* 02 — Fork it: the repo square clones itself and drifts down-right. */
export function StepTwo() {
  return (
    <g>
      <rect x="150" y="86" width="160" height="160" rx="36" fill="var(--inverse-bg)" />
      <rect x="152" y="88" width="196" height="196" rx="52" fill="var(--surface)" />
      <rect x="162" y="98" width="160" height="160" rx="36" fill="var(--bg)" />
      <rect x="182" y="118" width="52" height="52" rx="14" fill="var(--gs-gray-300)" />
      <rect x="246" y="118" width="52" height="52" rx="14" fill="var(--gs-gray-400)" />
      <rect x="182" y="184" width="92" height="10" rx="5" fill="var(--gs-gray-400)" />
      <rect x="182" y="200" width="64" height="10" rx="5" fill="var(--gs-gray-400)" />
      {/* the forked copy — repeats the card, smaller, travelling out */}
      <g className="sa-clone">
        <rect x="216" y="150" width="120" height="120" rx="28" fill="var(--inverse-bg)" />
        <rect x="222" y="156" width="108" height="108" rx="22" fill="var(--bg)" />
        <rect x="236" y="170" width="36" height="36" rx="10" fill="var(--gs-gray-300)" />
        <rect x="236" y="216" width="70" height="9" rx="4.5" fill="var(--gs-gray-400)" />
      </g>
      <g className="sa-pop" style={d(1600)}>
        <rect x="298" y="78" width="96" height="30" rx="15" fill="var(--bg)" stroke="var(--inverse-bg)" strokeWidth="2.5" />
        <path d="M322 93h14m-7-7v14" stroke="var(--inverse-bg)" strokeWidth="3" strokeLinecap="round" />
        <rect x="344" y="87" width="36" height="8" rx="4" fill="var(--inverse-bg)" />
      </g>
    </g>
  )
}

/* 03 — Storefront goes live: phone tiles fill, order pill slides in. */
export function StepThree() {
  const tiles = [0, 1, 2, 3, 4, 5]
  return (
    <g>
      <rect x="176" y="42" width="150" height="290" rx="26" fill="var(--inverse-bg)" />
      <rect x="184" y="52" width="134" height="270" rx="18" fill="var(--bg)" />
      <rect x="226" y="60" width="50" height="9" rx="4.5" fill="var(--inverse-bg)" />
      {tiles.map((i) => (
        <rect
          key={i}
          x={i % 2 === 0 ? 194 : 254} y={84 + Math.floor(i / 2) * 62}
          width="50" height="50" rx="14"
          fill={i % 3 === 0 ? 'var(--gs-gray-300)' : i % 3 === 1 ? 'var(--gs-gray-400)' : 'var(--gs-gray-200)'}
          className="sa-tile" style={d(i * 220)} />
      ))}
      <rect x="194" y="284" width="110" height="22" rx="11" fill="var(--inverse-bg)" className="sa-fade" style={d(1500)} />
      <g className="sa-toast" style={d(1900)}>
        <rect x="326" y="140" width="124" height="30" rx="15" fill="var(--bg)" stroke="var(--inverse-bg)" strokeWidth="2.5" />
        <circle cx="344" cy="155" r="7" fill="var(--inverse-bg)" />
        <rect x="358" y="150" width="72" height="9" rx="4.5" fill="var(--gs-gray-400)" />
      </g>
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <rect
          key={`px${i}`} x={44 + (i % 4) * 26} y={150 + Math.floor(i / 4) * 26}
          width="11" height="11" rx="3" fill="var(--inverse-bg)"
          className="sa-twinkle" style={d(i * 320)} />
      ))}
    </g>
  )
}

/* 04 — Orders fulfil: check draws itself, payout dots light up. */
export function StepFour() {
  const dots = [296, 330, 364, 398]
  return (
    <g>
      <rect x="100" y="66" width="170" height="170" rx="38" fill="var(--inverse-bg)" />
      <rect x="102" y="68" width="206" height="206" rx="54" fill="var(--surface)" />
      <rect x="114" y="80" width="170" height="170" rx="38" fill="var(--bg)" />
      <rect x="114" y="174" width="170" height="14" fill="var(--gs-gray-200)" />
      <rect x="192" y="80" width="26" height="94" fill="var(--gs-gray-300)" />
      <g>
        <circle cx="352" cy="128" r="34" fill="none" stroke="var(--inverse-bg)" strokeWidth="7" />
        <path d="M336 128l11 11 22-22" fill="none" stroke="var(--inverse-bg)" strokeWidth="7"
          strokeLinecap="round" strokeLinejoin="round" className="sa-check" />
      </g>
      <line x1="296" y1="244" x2="398" y2="244" stroke="var(--inverse-bg)" strokeWidth="2" opacity=".2" />
      {dots.map((cx, i) => (
        <circle key={cx} cx={cx} cy="244" r="6"
          fill={i === 3 ? 'var(--bg)' : 'var(--inverse-bg)'}
          stroke="var(--inverse-bg)" strokeWidth="2"
          className="sa-dot" style={d(1000 + i * 400)} />
      ))}
    </g>
  )
}
