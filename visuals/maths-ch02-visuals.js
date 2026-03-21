// ════════════════════════════════════════════════
//  maths-ch02-visuals.js — Polynomials Visuals
//  Auto-loaded jab Chapter 2 khulta hai.
//  Registers into: VISUAL_TEMPLATES, VISUAL_INITS
// ════════════════════════════════════════════════

// Coordinate helpers for linear graph
const LIN = { ox:170, oy:150, scale:30 };
function lx(x){ return LIN.ox + x * LIN.scale; }
function ly(y){ return LIN.oy - y * LIN.scale; }


// ════════════════════════════════════════════════
//  SVG TEMPLATES
// ════════════════════════════════════════════════
Object.assign(VISUAL_TEMPLATES, {

'linear-graph': (s) => `
<div class="l-badge" style="background:rgba(163,113,247,.12);color:var(--purple);">VISUAL</div>
<div class="l-h">${s.title}</div>
<div style="font-size:.84rem;color:var(--sub);margin-bottom:.75rem;line-height:1.6;">${s.intro||'Slider chalao aur dekho zero kaise change hota hai!'}</div>
<div class="vis-card">
  <div class="vis-title">📈 y = ax + b ka Graph <span class="fig-badge">Fig. 2.1</span></div>
  <div class="range-wrap">
    <div class="range-lbl"><span>Slope (a): <strong id="slope-val">2</strong></span><span>Intercept (b): <strong id="intercept-val">3</strong></span></div>
    <input type="range" min="-4" max="4" value="2" step="0.5" id="slope-range" oninput="updateLinear()">
    <input type="range" min="-6" max="6" value="3" step="0.5" id="intercept-range" oninput="updateLinear()" style="margin-top:.4rem;">
  </div>
  <svg class="graph" viewBox="0 0 340 280" xmlns="http://www.w3.org/2000/svg">
    <g stroke="rgba(255,255,255,0.05)" stroke-width="0.5">
      <line x1="20" y1="30" x2="320" y2="30"/><line x1="20" y1="70" x2="320" y2="70"/><line x1="20" y1="110" x2="320" y2="110"/><line x1="20" y1="150" x2="320" y2="150"/><line x1="20" y1="190" x2="320" y2="190"/><line x1="20" y1="230" x2="320" y2="230"/>
      <line x1="60" y1="20" x2="60" y2="260"/><line x1="110" y1="20" x2="110" y2="260"/><line x1="160" y1="20" x2="160" y2="260"/><line x1="210" y1="20" x2="210" y2="260"/><line x1="260" y1="20" x2="260" y2="260"/><line x1="310" y1="20" x2="310" y2="260"/>
    </g>
    <line x1="20" y1="150" x2="320" y2="150" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/>
    <line x1="170" y1="20" x2="170" y2="270" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/>
    <polygon points="320,146 328,150 320,154" fill="rgba(255,255,255,0.3)"/>
    <polygon points="166,20 170,12 174,20" fill="rgba(255,255,255,0.3)"/>
    <text x="325" y="154" fill="rgba(255,255,255,0.5)" font-size="10" font-family="Hind">X</text>
    <text x="174" y="14" fill="rgba(255,255,255,0.5)" font-size="10" font-family="Hind">Y</text>
    <text x="106" y="164" fill="rgba(255,255,255,0.35)" font-size="9" font-family="Hind" text-anchor="middle">-2</text>
    <text x="136" y="164" fill="rgba(255,255,255,0.35)" font-size="9" font-family="Hind" text-anchor="middle">-1</text>
    <text x="166" y="164" fill="rgba(255,255,255,0.35)" font-size="9" font-family="Hind" text-anchor="middle">0</text>
    <text x="196" y="164" fill="rgba(255,255,255,0.35)" font-size="9" font-family="Hind" text-anchor="middle">1</text>
    <text x="226" y="164" fill="rgba(255,255,255,0.35)" font-size="9" font-family="Hind" text-anchor="middle">2</text>
    <text x="256" y="164" fill="rgba(255,255,255,0.35)" font-size="9" font-family="Hind" text-anchor="middle">3</text>
    <text x="158" y="74" fill="rgba(255,255,255,0.35)" font-size="9" font-family="Hind" text-anchor="end">3</text>
    <text x="158" y="114" fill="rgba(255,255,255,0.35)" font-size="9" font-family="Hind" text-anchor="end">1</text>
    <text x="158" y="194" fill="rgba(255,255,255,0.35)" font-size="9" font-family="Hind" text-anchor="end">-1</text>
    <text x="158" y="234" fill="rgba(255,255,255,0.35)" font-size="9" font-family="Hind" text-anchor="end">-3</text>
    <line id="lin-line" x1="0" y1="0" x2="0" y2="0" stroke="#58A6FF" stroke-width="2.5" stroke-linecap="round"/>
    <circle id="lin-zero" cx="0" cy="150" r="6" fill="#3FB950" class="zero-pulse"/>
    <text id="lin-zero-lbl" x="0" y="0" fill="#3FB950" font-size="10" font-weight="bold" font-family="Hind" text-anchor="middle"></text>
    <circle id="lin-p1" cx="0" cy="0" r="4" fill="#F0B429"/><text id="lin-p1-lbl" x="0" y="0" fill="#F0B429" font-size="9" font-family="Hind" text-anchor="middle"></text>
    <circle id="lin-p2" cx="0" cy="0" r="4" fill="#F0B429"/><text id="lin-p2-lbl" x="0" y="0" fill="#F0B429" font-size="9" font-family="Hind" text-anchor="middle"></text>
    <text id="lin-eq" x="0" y="0" fill="#58A6FF" font-size="11" font-weight="bold" font-family="Hind"></text>
  </svg>
  <div class="point-info" id="lin-info">Sliders move karo — graph change hoga!</div>
</div>
<div class="expl"><div class="expl-h">📖 NCERT Se — Section 2.2</div>y = 2x + 3 ke liye zero = <strong>(–3/2, 0)</strong>. General rule: <strong>y = ax + b ka zero = –b/a</strong></div>
<div class="insight"><div class="insight-h">🎯 Key Insight</div>Linear polynomial → HAMESHA exactly ek zero!</div>`,

'parabola-table': (s) => `
<div class="l-badge" style="background:rgba(163,113,247,.12);color:var(--purple);">VISUAL</div>
<div class="l-h">${s.title}</div>
<div style="font-size:.84rem;color:var(--sub);margin-bottom:.75rem;line-height:1.6;">${s.intro||''}</div>
<div class="vis-card">
  <div class="vis-title">📊 NCERT Table 2.1 <span class="fig-badge">Fig. 2.2</span></div>
  <div class="table-wrap"><table><tr><th>x</th><th>–2</th><th>–1</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr><tr><td><strong>y=x²–3x–4</strong></td><td>6</td><td class="zero">0 ✓</td><td class="neg">–4</td><td class="neg">–6</td><td class="neg">–6</td><td class="neg">–4</td><td class="zero">0 ✓</td><td>6</td></tr></table></div>
  <div style="font-size:.75rem;color:var(--green);font-weight:700;margin-bottom:.8rem;">✅ x = –1 aur x = 4 → y = 0 → Zeroes hain!</div>
  <svg class="graph" id="para-svg" viewBox="0 0 340 300" xmlns="http://www.w3.org/2000/svg">
    <g stroke="rgba(255,255,255,0.05)" stroke-width="0.5">
      <line x1="20" y1="30" x2="320" y2="30"/><line x1="20" y1="70" x2="320" y2="70"/><line x1="20" y1="110" x2="320" y2="110"/><line x1="20" y1="150" x2="320" y2="150"/><line x1="20" y1="190" x2="320" y2="190"/><line x1="20" y1="230" x2="320" y2="230"/><line x1="20" y1="270" x2="320" y2="270"/>
      <line x1="50" y1="10" x2="50" y2="290"/><line x1="90" y1="10" x2="90" y2="290"/><line x1="130" y1="10" x2="130" y2="290"/><line x1="170" y1="10" x2="170" y2="290"/><line x1="210" y1="10" x2="210" y2="290"/><line x1="250" y1="10" x2="250" y2="290"/><line x1="290" y1="10" x2="290" y2="290"/>
    </g>
    <line x1="20" y1="150" x2="320" y2="150" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/>
    <line x1="130" y1="10" x2="130" y2="290" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/>
    <polygon points="320,146 328,150 320,154" fill="rgba(255,255,255,0.3)"/>
    <polygon points="126,10 130,2 134,10" fill="rgba(255,255,255,0.3)"/>
    <text x="325" y="154" fill="rgba(255,255,255,0.4)" font-size="9">X</text><text x="133" y="10" fill="rgba(255,255,255,0.4)" font-size="9">Y</text>
    <text x="50" y="163" fill="rgba(255,255,255,0.3)" font-size="8.5" text-anchor="middle" font-family="Hind">–2</text>
    <text x="90" y="163" fill="rgba(255,255,255,0.3)" font-size="8.5" text-anchor="middle" font-family="Hind">–1</text>
    <text x="130" y="163" fill="rgba(255,255,255,0.3)" font-size="8.5" text-anchor="middle" font-family="Hind">0</text>
    <text x="170" y="163" fill="rgba(255,255,255,0.3)" font-size="8.5" text-anchor="middle" font-family="Hind">1</text>
    <text x="210" y="163" fill="rgba(255,255,255,0.3)" font-size="8.5" text-anchor="middle" font-family="Hind">2</text>
    <text x="250" y="163" fill="rgba(255,255,255,0.3)" font-size="8.5" text-anchor="middle" font-family="Hind">3</text>
    <text x="290" y="163" fill="rgba(255,255,255,0.3)" font-size="8.5" text-anchor="middle" font-family="Hind">4</text>
    <text x="122" y="34" fill="rgba(255,255,255,0.3)" font-size="8.5" text-anchor="end" font-family="Hind">6</text>
    <text x="122" y="74" fill="rgba(255,255,255,0.3)" font-size="8.5" text-anchor="end" font-family="Hind">4</text>
    <text x="122" y="114" fill="rgba(255,255,255,0.3)" font-size="8.5" text-anchor="end" font-family="Hind">2</text>
    <text x="122" y="194" fill="rgba(255,255,255,0.3)" font-size="8.5" text-anchor="end" font-family="Hind">–2</text>
    <text x="122" y="234" fill="rgba(255,255,255,0.3)" font-size="8.5" text-anchor="end" font-family="Hind">–4</text>
    <text x="122" y="274" fill="rgba(255,255,255,0.3)" font-size="8.5" text-anchor="end" font-family="Hind">–6</text>
    <path id="para-path" d="" fill="none" stroke="#A371F7" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <g id="para-points"></g>
    <circle cx="90" cy="150" r="7" fill="none" stroke="#3FB950" stroke-width="2.5" class="zero-pulse"/><circle cx="90" cy="150" r="3.5" fill="#3FB950"/>
    <text x="90" y="141" fill="#3FB950" font-size="9.5" font-weight="bold" text-anchor="middle" font-family="Hind">(–1,0)</text>
    <circle cx="290" cy="150" r="7" fill="none" stroke="#3FB950" stroke-width="2.5" class="zero-pulse"/><circle cx="290" cy="150" r="3.5" fill="#3FB950"/>
    <text x="290" y="141" fill="#3FB950" font-size="9.5" font-weight="bold" text-anchor="middle" font-family="Hind">(4,0)</text>
    <text x="30" y="40" fill="#A371F7" font-size="11" font-weight="bold" font-family="Hind">y = x² – 3x – 4</text>
  </svg>
</div>
<div class="insight"><div class="insight-h">🎯 Key Insight</div><strong>Zeroes = x-axis ke cutting points.</strong> Table mein jahan y=0 → woh zero!</div>`,

'three-cases': (s) => `
<div class="l-badge" style="background:rgba(163,113,247,.12);color:var(--purple);">VISUAL</div>
<div class="l-h">${s.title}</div>
<div style="font-size:.84rem;color:var(--sub);margin-bottom:.75rem;line-height:1.6;">${s.intro||''}</div>
<div class="case-grid">
  <div class="case-card sel" id="case-btn-1" onclick="showCase(1)"><div class="case-num" style="color:var(--green)">Case 1</div><div class="case-desc">2 distinct zeroes</div></div>
  <div class="case-card" id="case-btn-2" onclick="showCase(2)"><div class="case-num" style="color:var(--gold)">Case 2</div><div class="case-desc">1 repeated zero</div></div>
</div>
<div class="case-grid" style="grid-template-columns:1fr;">
  <div class="case-card" id="case-btn-3" onclick="showCase(3)"><div class="case-num" style="color:var(--red)">Case 3</div><div class="case-desc">0 zeroes — No real roots</div></div>
</div>
<div class="vis-card">
  <div class="vis-title" id="case-title">📊 Case 1 — 2 Distinct Zeroes <span class="fig-badge">Fig. 2.3</span></div>
  <svg class="graph" id="case-svg" viewBox="0 0 340 260" xmlns="http://www.w3.org/2000/svg">
    <g stroke="rgba(255,255,255,0.05)" stroke-width="0.5">
      <line x1="20" y1="50" x2="320" y2="50"/><line x1="20" y1="90" x2="320" y2="90"/><line x1="20" y1="130" x2="320" y2="130"/><line x1="20" y1="170" x2="320" y2="170"/><line x1="20" y1="210" x2="320" y2="210"/>
      <line x1="80" y1="20" x2="80" y2="250"/><line x1="130" y1="20" x2="130" y2="250"/><line x1="180" y1="20" x2="180" y2="250"/><line x1="230" y1="20" x2="230" y2="250"/><line x1="280" y1="20" x2="280" y2="250"/>
    </g>
    <line x1="20" y1="130" x2="330" y2="130" stroke="rgba(255,255,255,0.35)" stroke-width="1.5"/>
    <line x1="170" y1="15" x2="170" y2="250" stroke="rgba(255,255,255,0.35)" stroke-width="1.5"/>
    <polygon points="330,126 338,130 330,134" fill="rgba(255,255,255,0.3)"/>
    <polygon points="166,15 170,7 174,15" fill="rgba(255,255,255,0.3)"/>
    <text x="334" y="134" fill="rgba(255,255,255,0.4)" font-size="9" font-family="Hind">X</text>
    <text x="174" y="12" fill="rgba(255,255,255,0.4)" font-size="9" font-family="Hind">Y</text>
    <path id="case-path" d="" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <g id="case-zeros"></g>
    <text id="case-eq-lbl" x="25" y="30" font-size="10.5" font-weight="bold" font-family="Hind"></text>
    <text id="case-info-lbl" x="170" y="248" font-size="10" text-anchor="middle" font-family="Hind" font-weight="bold"></text>
  </svg>
  <div class="point-info" id="case-expl-box" style="font-size:.83rem;text-align:left;min-height:48px;"></div>
</div>
<div class="insight" id="case-insight"></div>`,

'cubic-graph': (s) => `
<div class="l-badge" style="background:rgba(88,166,255,.12);color:var(--blue);">VISUAL</div>
<div class="l-h">${s.title}</div>
<div style="font-size:.84rem;color:var(--sub);margin-bottom:.75rem;line-height:1.6;">${s.intro||''}</div>
<div class="vis-card">
  <div class="vis-title">📊 y = x³ – 4x — NCERT Table 2.2 <span class="fig-badge">Fig. 2.6</span></div>
  <div class="table-wrap"><table><tr><th>x</th><th>–2</th><th>–1</th><th>0</th><th>1</th><th>2</th></tr><tr><td><strong>y=x³–4x</strong></td><td class="zero">0 ✓</td><td>3</td><td class="zero">0 ✓</td><td>–3</td><td class="zero">0 ✓</td></tr></table></div>
  <svg class="graph" id="cubic-svg" viewBox="0 0 340 280" xmlns="http://www.w3.org/2000/svg">
    <g stroke="rgba(255,255,255,0.05)" stroke-width="0.5">
      <line x1="20" y1="40" x2="320" y2="40"/><line x1="20" y1="80" x2="320" y2="80"/><line x1="20" y1="120" x2="320" y2="120"/><line x1="20" y1="160" x2="320" y2="160"/><line x1="20" y1="200" x2="320" y2="200"/><line x1="20" y1="240" x2="320" y2="240"/>
      <line x1="80" y1="15" x2="80" y2="265"/><line x1="130" y1="15" x2="130" y2="265"/><line x1="180" y1="15" x2="180" y2="265"/><line x1="230" y1="15" x2="230" y2="265"/><line x1="280" y1="15" x2="280" y2="265"/>
    </g>
    <line x1="20" y1="160" x2="330" y2="160" stroke="rgba(255,255,255,0.35)" stroke-width="1.5"/>
    <line x1="180" y1="15" x2="180" y2="270" stroke="rgba(255,255,255,0.35)" stroke-width="1.5"/>
    <polygon points="330,156 338,160 330,164" fill="rgba(255,255,255,0.3)"/>
    <polygon points="176,15 180,7 184,15" fill="rgba(255,255,255,0.3)"/>
    <text x="334" y="164" fill="rgba(255,255,255,0.4)" font-size="9" font-family="Hind">X</text>
    <text x="183" y="13" fill="rgba(255,255,255,0.4)" font-size="9" font-family="Hind">Y</text>
    <text x="80" y="173" fill="rgba(255,255,255,0.3)" font-size="8.5" text-anchor="middle" font-family="Hind">–2</text>
    <text x="130" y="173" fill="rgba(255,255,255,0.3)" font-size="8.5" text-anchor="middle" font-family="Hind">–1</text>
    <text x="180" y="173" fill="rgba(255,255,255,0.3)" font-size="8.5" text-anchor="middle" font-family="Hind">0</text>
    <text x="230" y="173" fill="rgba(255,255,255,0.3)" font-size="8.5" text-anchor="middle" font-family="Hind">1</text>
    <text x="280" y="173" fill="rgba(255,255,255,0.3)" font-size="8.5" text-anchor="middle" font-family="Hind">2</text>
    <path id="cubic-path" d="" fill="none" stroke="#58A6FF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="80" cy="160" r="7" fill="none" stroke="#3FB950" stroke-width="2.5" class="zero-pulse"/><circle cx="80" cy="160" r="3.5" fill="#3FB950"/>
    <text x="80" y="148" fill="#3FB950" font-size="9.5" font-weight="bold" text-anchor="middle" font-family="Hind">(–2,0)</text>
    <circle cx="180" cy="160" r="7" fill="none" stroke="#3FB950" stroke-width="2.5" class="zero-pulse"/><circle cx="180" cy="160" r="3.5" fill="#3FB950"/>
    <text x="193" y="148" fill="#3FB950" font-size="9.5" font-weight="bold" text-anchor="middle" font-family="Hind">(0,0)</text>
    <circle cx="280" cy="160" r="7" fill="none" stroke="#3FB950" stroke-width="2.5" class="zero-pulse"/><circle cx="280" cy="160" r="3.5" fill="#3FB950"/>
    <text x="280" y="148" fill="#3FB950" font-size="9.5" font-weight="bold" text-anchor="middle" font-family="Hind">(2,0)</text>
    <text x="25" y="30" fill="#58A6FF" font-size="11" font-weight="bold" font-family="Hind">y = x³ – 4x</text>
  </svg>
</div>
<div class="expl"><div class="expl-h">📖 NCERT — Cubic Zeroes</div>x³–4x = x(x–2)(x+2) → Zeroes = –2, 0, 2</div>
<div class="summary-grid">
  <div class="sum-card"><span class="sum-ico">📏</span><div class="sum-t">Linear (n=1)</div><div class="sum-d">Exactly 1 zero</div></div>
  <div class="sum-card"><span class="sum-ico">🪸</span><div class="sum-t">Quadratic (n=2)</div><div class="sum-d">0, 1, or 2 zeroes</div></div>
  <div class="sum-card"><span class="sum-ico">〰️</span><div class="sum-t">Cubic (n=3)</div><div class="sum-d">At most 3 zeroes</div></div>
  <div class="sum-card" style="border-color:rgba(240,180,41,.2);background:rgba(240,180,41,.04);"><span class="sum-ico">🎯</span><div class="sum-t" style="color:var(--gold);">General Rule</div><div class="sum-d">Degree n → atmost n zeroes</div></div>
</div>`

}); // end Object.assign VISUAL_TEMPLATES

// ── JS Functions ──
function updateLinear(){
  const a = parseFloat(document.getElementById('slope-range').value);
  const b = parseFloat(document.getElementById('intercept-range').value);
  document.getElementById('slope-val').textContent = a;
  document.getElementById('intercept-val').textContent = b;
  const x1=-4,x2=4,y1=a*x1+b,y2=a*x2+b;
  document.getElementById('lin-line').setAttribute('x1',lx(x1));
  document.getElementById('lin-line').setAttribute('y1',ly(y1));
  document.getElementById('lin-line').setAttribute('x2',lx(x2));
  document.getElementById('lin-line').setAttribute('y2',ly(y2));
  const zero=-b/a;
  document.getElementById('lin-zero').setAttribute('cx',lx(zero));
  document.getElementById('lin-zero-lbl').setAttribute('x',lx(zero));
  document.getElementById('lin-zero-lbl').setAttribute('y',ly(0)-10);
  document.getElementById('lin-zero-lbl').textContent = a!==0?`(${Math.round(zero*100)/100}, 0)`:'';
  const px1=-2,py1=a*px1+b,px2=2,py2=a*px2+b;
  document.getElementById('lin-p1').setAttribute('cx',lx(px1));
  document.getElementById('lin-p1').setAttribute('cy',ly(py1));
  document.getElementById('lin-p1-lbl').setAttribute('x',lx(px1));
  document.getElementById('lin-p1-lbl').setAttribute('y',ly(py1)-8);
  document.getElementById('lin-p1-lbl').textContent=`(${px1},${py1})`;
  document.getElementById('lin-p2').setAttribute('cx',lx(px2));
  document.getElementById('lin-p2').setAttribute('cy',ly(py2));
  document.getElementById('lin-p2-lbl').setAttribute('x',lx(px2));
  document.getElementById('lin-p2-lbl').setAttribute('y',ly(py2)-8);
  document.getElementById('lin-p2-lbl').textContent=`(${px2},${py2})`;
  const sign=b>=0?'+':'';
  document.getElementById('lin-eq').textContent=`y = ${a}x ${sign}${b}`;
  document.getElementById('lin-eq').setAttribute('x',lx(a>0?-3.5:-0.5));
  document.getElementById('lin-eq').setAttribute('y',ly(a>0?a*-3.5+b+1:b+1)-8);
  document.getElementById('lin-info').textContent=`y = ${a}x + ${b} | Zero = -b/a = -(${b})/(${a}) = ${Math.round(zero*100)/100}`;
}

function drawParabola(){
  const pts=[]; const ox=130,oy=150,sx=40,sy=20;
  for(let x=-2.5;x<=5.5;x+=0.15){
    const y=x*x-3*x-4,px=ox+x*sx,py=oy-y*sy;
    if(py>0&&py<295) pts.push(`L${px},${py}`);
  }
  if(pts.length){pts[0]='M'+pts[0].substring(1); document.getElementById('para-path').setAttribute('d',pts.join(' '));}
  const tableX=[-2,-1,0,1,2,3,4,5],tableY=[6,0,-4,-6,-6,-4,0,6];
  const g=document.getElementById('para-points'); if(!g)return; g.innerHTML='';
  tableX.forEach((x,i)=>{
    const y=tableY[i],px=ox+x*sx,py=oy-y*sy;
    if(py>0&&py<295){
      const c=document.createElementNS('http://www.w3.org/2000/svg','circle');
      c.setAttribute('cx',px);c.setAttribute('cy',py);c.setAttribute('r',y===0?0:3.5);
      c.setAttribute('fill',y===0?'#3FB950':'rgba(240,180,41,0.5)'); g.appendChild(c);
    }
  });
}

function showCase(n){
  [1,2,3].forEach(i=>{ const b=document.getElementById(`case-btn-${i}`); if(b) b.classList.remove('sel','sel3'); });
  const btn=document.getElementById(`case-btn-${n}`); if(btn) btn.classList.add(n===3?'sel3':'sel');
  drawCase(n);
}

function drawCase(n){
  const path=document.getElementById('case-path'),zeros=document.getElementById('case-zeros');
  const title=document.getElementById('case-title'),infoLbl=document.getElementById('case-info-lbl');
  const explBox=document.getElementById('case-expl-box'),insight=document.getElementById('case-insight');
  if(!path)return; zeros.innerHTML='';
  const ox=170,oy=130,sx=40,sy=22;
  const toSvg=(x,y)=>({px:ox+x*sx,py:oy-y*sy});
  let eqFn,color,eqStr,infoStr,caseTitle,caseExpl,caseInsight;
  if(n===1){ eqFn=x=>x*x+x-2; color='#3FB950'; eqStr='y = x² + x – 2'; infoStr='2 distinct zeroes: x = –2 aur x = 1'; caseTitle='📊 Case 1 — 2 Distinct Zeroes <span class="fig-badge">Fig. 2.3</span>'; caseExpl='Parabola x-axis ko <strong>2 alag points</strong> A aur A' par kaatta hai.<br>Condition: <strong>D = b² – 4ac &gt; 0</strong>'; caseInsight='<div class="insight-h">🎯 Case 1</div>D &gt; 0 → 2 unequal real roots!'; }
  else if(n===2){ eqFn=x=>(x-1)*(x-1); color='#F0B429'; eqStr='y = (x–1)²'; infoStr='1 repeated zero: x = 1'; caseTitle='📊 Case 2 — 1 Repeated Zero <span class="fig-badge">Fig. 2.4</span>'; caseExpl='Parabola x-axis ko exactly <strong>ek point par touch</strong> karta hai.<br>Condition: <strong>D = 0</strong>'; caseInsight='<div class="insight-h">🎯 Case 2</div>D = 0 → equal roots. Vertex x-axis par!'; }
  else { eqFn=x=>x*x+2*x+3; color='#F85149'; eqStr='y = x²+2x+3'; infoStr='0 zeroes — No real roots!'; caseTitle='📊 Case 3 — No Real Zeroes <span class="fig-badge">Fig. 2.5</span>'; caseExpl='Parabola x-axis ko <strong>kabhi nahi kaatta</strong>.<br>Condition: <strong>D &lt; 0</strong>'; caseInsight='<div class="insight-h">🎯 Case 3</div>D &lt; 0 → No real roots!'; }
  const pts=[];
  for(let x=-4;x<=4;x+=0.12){ const y=eqFn(x),{px,py}=toSvg(x,y); if(py>10&&py<245) pts.push(`${pts.length===0?'M':'L'}${px.toFixed(1)},${py.toFixed(1)}`); }
  path.setAttribute('d',pts.join(' ')); path.setAttribute('stroke',color);
  const ns='http://www.w3.org/2000/svg';
  if(n===1){ [[-2,0],[1,0]].forEach(([x,y])=>{ const{px,py}=toSvg(x,y); const c=document.createElementNS(ns,'circle'); c.setAttribute('cx',px);c.setAttribute('cy',py);c.setAttribute('r','7');c.setAttribute('fill','none');c.setAttribute('stroke','#3FB950');c.setAttribute('stroke-width','2.5');c.setAttribute('class','zero-pulse');zeros.appendChild(c); const c2=document.createElementNS(ns,'circle');c2.setAttribute('cx',px);c2.setAttribute('cy',py);c2.setAttribute('r','3.5');c2.setAttribute('fill','#3FB950');zeros.appendChild(c2); const t=document.createElementNS(ns,'text');t.setAttribute('x',px);t.setAttribute('y',py-11);t.setAttribute('fill','#3FB950');t.setAttribute('font-size','9.5');t.setAttribute('font-family','Hind');t.setAttribute('text-anchor','middle');t.setAttribute('font-weight','bold');t.textContent=`(${x},0)`;zeros.appendChild(t); }); }
  else if(n===2){ const{px,py}=toSvg(1,0); const c=document.createElementNS(ns,'circle');c.setAttribute('cx',px);c.setAttribute('cy',py);c.setAttribute('r','8');c.setAttribute('fill','none');c.setAttribute('stroke','#F0B429');c.setAttribute('stroke-width','2.5');zeros.appendChild(c); const c2=document.createElementNS(ns,'circle');c2.setAttribute('cx',px);c2.setAttribute('cy',py);c2.setAttribute('r','4');c2.setAttribute('fill','#F0B429');zeros.appendChild(c2); const t=document.createElementNS(ns,'text');t.setAttribute('x',px);t.setAttribute('y',py-12);t.setAttribute('fill','#F0B429');t.setAttribute('font-size','10');t.setAttribute('font-family','Hind');t.setAttribute('text-anchor','middle');t.setAttribute('font-weight','bold');t.textContent='(1, 0) — repeated';zeros.appendChild(t); }
  else { const t=document.createElementNS(ns,'text');t.setAttribute('x','170');t.setAttribute('y','20');t.setAttribute('fill','#F85149');t.setAttribute('font-size','10');t.setAttribute('font-family','Hind');t.setAttribute('text-anchor','middle');t.setAttribute('font-weight','bold');t.textContent='× x-axis par koi zero nahi!';zeros.appendChild(t); }
  const eqLbl=document.getElementById('case-eq-lbl');
  if(eqLbl){eqLbl.textContent=eqStr;eqLbl.setAttribute('fill',color);}
  if(infoLbl){infoLbl.textContent=infoStr;infoLbl.setAttribute('fill',color);}
  if(title) title.innerHTML=caseTitle;
  if(explBox) explBox.innerHTML=caseExpl;
  if(insight) insight.innerHTML=caseInsight;
}

function drawCubic(){
  const path=document.getElementById('cubic-path'); if(!path)return;
  const ox=180,oy=160,sx=50,sy=40; const pts=[];
  for(let x=-2.8;x<=2.8;x+=0.1){ const y=x*x*x-4*x,px=ox+x*sx,py=oy-y*sy; if(py>10&&py<265) pts.push(`${pts.length===0?'M':'L'}${px.toFixed(1)},${py.toFixed(1)}`); }
  path.setAttribute('d',pts.join(' '));
}

// ── Register Inits ──
Object.assign(VISUAL_INITS, {
  'linear-graph':   () => updateLinear(),
  'parabola-table': () => drawParabola(),
  'three-cases':    () => showCase(1),
  'cubic-graph':    () => drawCubic(),
});
