// ════════════════════════════════════════════════
//  maths-ch03-visuals.js — Pair of Linear Equations
//  Auto-loaded jab Chapter 3 khulta hai.
//  Registers into: VISUAL_TEMPLATES, VISUAL_INITS
// ════════════════════════════════════════════════

// ════ CH03 VISUAL TEMPLATES ════
Object.assign(VISUAL_TEMPLATES, {

'three-line-types': (s) => `
<div class="l-badge" style="background:rgba(88,166,255,.12);color:var(--blue);">VISUAL</div>
<div class="l-h">${s.title}</div>
<div style="font-size:.84rem;color:var(--sub);margin-bottom:.75rem;line-height:1.6;">${s.intro||''}</div>
<div class="case-grid">
  <div class="case-card sel" id="lt-btn-1" onclick="ltShow(1)">
    <div class="case-num" style="color:var(--green)">Case 1</div>
    <div class="case-desc">Intersecting Lines<br>→ Unique Solution ✅</div>
  </div>
  <div class="case-card" id="lt-btn-2" onclick="ltShow(2)">
    <div class="case-num" style="color:var(--blue)">Case 2</div>
    <div class="case-desc">Coincident Lines<br>→ Infinite Solutions ♾️</div>
  </div>
</div>
<div class="case-grid" style="grid-template-columns:1fr;">
  <div class="case-card" id="lt-btn-3" onclick="ltShow(3)">
    <div class="case-num" style="color:var(--red)">Case 3</div>
    <div class="case-desc">Parallel Lines → No Solution ❌</div>
  </div>
</div>
<div class="vis-card">
  <div class="vis-title" id="lt-title">📏 Case 1 — Intersecting Lines <span class="fig-badge">Fig. 3.1</span></div>
  <svg class="graph" id="lt-svg" viewBox="0 0 340 260" xmlns="http://www.w3.org/2000/svg">
    <g stroke="rgba(255,255,255,0.05)" stroke-width="0.5">
      <line x1="20" y1="50" x2="320" y2="50"/><line x1="20" y1="90" x2="320" y2="90"/>
      <line x1="20" y1="130" x2="320" y2="130"/><line x1="20" y1="170" x2="320" y2="170"/>
      <line x1="20" y1="210" x2="320" y2="210"/>
      <line x1="70" y1="10" x2="70" y2="250"/><line x1="120" y1="10" x2="120" y2="250"/>
      <line x1="170" y1="10" x2="170" y2="250"/><line x1="220" y1="10" x2="220" y2="250"/>
      <line x1="270" y1="10" x2="270" y2="250"/>
    </g>
    <line x1="15" y1="130" x2="330" y2="130" stroke="rgba(255,255,255,.3)" stroke-width="1.5"/>
    <line x1="170" y1="12" x2="170" y2="250" stroke="rgba(255,255,255,.3)" stroke-width="1.5"/>
    <polygon points="330,126 337,130 330,134" fill="rgba(255,255,255,.3)"/>
    <polygon points="166,12 170,5 174,12" fill="rgba(255,255,255,.3)"/>
    <text x="333" y="134" fill="rgba(255,255,255,.4)" font-size="9" font-family="Hind">X</text>
    <text x="173" y="10" fill="rgba(255,255,255,.4)" font-size="9" font-family="Hind">Y</text>
    <text x="70" y="143" fill="rgba(255,255,255,.25)" font-size="8" font-family="Hind" text-anchor="middle">-2</text>
    <text x="120" y="143" fill="rgba(255,255,255,.25)" font-size="8" font-family="Hind" text-anchor="middle">-1</text>
    <text x="220" y="143" fill="rgba(255,255,255,.25)" font-size="8" font-family="Hind" text-anchor="middle">1</text>
    <text x="270" y="143" fill="rgba(255,255,255,.25)" font-size="8" font-family="Hind" text-anchor="middle">2</text>
    <line id="lt-line1" x1="0" y1="0" x2="0" y2="0" stroke="#3FB950" stroke-width="2.5" stroke-linecap="round"/>
    <line id="lt-line2" x1="0" y1="0" x2="0" y2="0" stroke="#58A6FF" stroke-width="2.5" stroke-linecap="round"/>
    <circle id="lt-sol" cx="170" cy="130" r="8" fill="none" stroke="#F0B429" stroke-width="2.5" class="zero-pulse"/>
    <circle id="lt-soldot" cx="170" cy="130" r="4" fill="#F0B429"/>
    <text id="lt-sollbl" x="170" y="118" fill="#F0B429" font-size="10" font-family="Hind" text-anchor="middle" font-weight="bold"></text>
    <text id="lt-eq1" x="25" y="25" fill="#3FB950" font-size="10" font-family="Hind" font-weight="bold"></text>
    <text id="lt-eq2" x="25" y="42" fill="#58A6FF" font-size="10" font-family="Hind" font-weight="bold"></text>
  </svg>
  <div class="point-info" id="lt-info" style="text-align:left;font-size:.83rem;"></div>
</div>
<div class="insight" id="lt-insight"></div>`,

'graphical-method': (s) => `
<div class="l-badge" style="background:rgba(88,166,255,.12);color:var(--blue);">VISUAL</div>
<div class="l-h">${s.title}</div>
<div style="font-size:.84rem;color:var(--sub);margin-bottom:.75rem;line-height:1.6;">${s.intro||''}</div>
<div class="case-grid">
  <div class="case-card sel" id="gm-btn-1" onclick="gmShow(1)"><div class="case-num" style="color:var(--p);font-size:.85rem;">Example 1</div><div class="case-desc">x–2y=0<br>3x+4y=20<br><span style="color:var(--green)">Akhila Problem</span></div></div>
  <div class="case-card" id="gm-btn-2" onclick="gmShow(2)"><div class="case-num" style="color:var(--gold);font-size:.85rem;">Example 3</div><div class="case-desc">y=2x–2<br>y=4x–4<br><span style="color:var(--gold)">Champa Problem</span></div></div>
</div>
<div class="vis-card">
  <div class="vis-title" id="gm-title">📈 Example 1 — Akhila: x–2y=0 aur 3x+4y=20 <span class="fig-badge">Fig. 3.1</span></div>
  <div class="table-wrap" id="gm-table"></div>
  <svg class="graph" id="gm-svg" viewBox="0 0 340 280" xmlns="http://www.w3.org/2000/svg">
    <g stroke="rgba(255,255,255,0.05)" stroke-width="0.5">
      <line x1="20" y1="40" x2="320" y2="40"/><line x1="20" y1="80" x2="320" y2="80"/>
      <line x1="20" y1="120" x2="320" y2="120"/><line x1="20" y1="160" x2="320" y2="160"/>
      <line x1="20" y1="200" x2="320" y2="200"/><line x1="20" y1="240" x2="320" y2="240"/>
      <line x1="60" y1="10" x2="60" y2="270"/><line x1="100" y1="10" x2="100" y2="270"/>
      <line x1="140" y1="10" x2="140" y2="270"/><line x1="180" y1="10" x2="180" y2="270"/>
      <line x1="220" y1="10" x2="220" y2="270"/><line x1="260" y1="10" x2="260" y2="270"/>
      <line x1="300" y1="10" x2="300" y2="270"/>
    </g>
    <line x1="15" y1="160" x2="325" y2="160" stroke="rgba(255,255,255,.3)" stroke-width="1.5"/>
    <line x1="140" y1="8" x2="140" y2="272" stroke="rgba(255,255,255,.3)" stroke-width="1.5"/>
    <polygon points="325,156 332,160 325,164" fill="rgba(255,255,255,.3)"/>
    <polygon points="136,8 140,1 144,8" fill="rgba(255,255,255,.3)"/>
    <text x="328" y="164" fill="rgba(255,255,255,.4)" font-size="9" font-family="Hind">X</text>
    <text x="143" y="7" fill="rgba(255,255,255,.4)" font-size="9" font-family="Hind">Y</text>
    <text x="60" y="173" fill="rgba(255,255,255,.25)" font-size="8" text-anchor="middle" font-family="Hind">-2</text>
    <text x="100" y="173" fill="rgba(255,255,255,.25)" font-size="8" text-anchor="middle" font-family="Hind">-1</text>
    <text x="180" y="173" fill="rgba(255,255,255,.25)" font-size="8" text-anchor="middle" font-family="Hind">1</text>
    <text x="220" y="173" fill="rgba(255,255,255,.25)" font-size="8" text-anchor="middle" font-family="Hind">2</text>
    <text x="260" y="173" fill="rgba(255,255,255,.25)" font-size="8" text-anchor="middle" font-family="Hind">3</text>
    <text x="300" y="173" fill="rgba(255,255,255,.25)" font-size="8" text-anchor="middle" font-family="Hind">4</text>
    <text x="132" y="44" fill="rgba(255,255,255,.25)" font-size="8" text-anchor="end" font-family="Hind">3</text>
    <text x="132" y="84" fill="rgba(255,255,255,.25)" font-size="8" text-anchor="end" font-family="Hind">2</text>
    <text x="132" y="124" fill="rgba(255,255,255,.25)" font-size="8" text-anchor="end" font-family="Hind">1</text>
    <text x="132" y="204" fill="rgba(255,255,255,.25)" font-size="8" text-anchor="end" font-family="Hind">-1</text>
    <text x="132" y="244" fill="rgba(255,255,255,.25)" font-size="8" text-anchor="end" font-family="Hind">-2</text>
    <line id="gm-line1" x1="0" y1="0" x2="0" y2="0" stroke="#3FB950" stroke-width="2.5" stroke-linecap="round"/>
    <line id="gm-line2" x1="0" y1="0" x2="0" y2="0" stroke="#F0B429" stroke-width="2.5" stroke-linecap="round"/>
    <circle id="gm-sol" cx="0" cy="0" r="9" fill="none" stroke="#FF6B35" stroke-width="2.5" class="zero-pulse"/>
    <circle id="gm-soldot" cx="0" cy="0" r="4.5" fill="#FF6B35"/>
    <text id="gm-sollbl" x="0" y="0" fill="#FF6B35" font-size="11" font-family="Hind" text-anchor="middle" font-weight="bold"></text>
    <text id="gm-eq1lbl" x="22" y="22" fill="#3FB950" font-size="10" font-family="Hind" font-weight="bold"></text>
    <text id="gm-eq2lbl" x="22" y="38" fill="#F0B429" font-size="10" font-family="Hind" font-weight="bold"></text>
  </svg>
</div>
<div class="insight" id="gm-insight"></div>`,

'substitution-steps': (s) => `
<div class="l-badge" style="background:rgba(255,107,53,.12);color:var(--p);">VISUAL</div>
<div class="l-h">${s.title}</div>
<div style="font-size:.84rem;color:var(--sub);margin-bottom:.75rem;line-height:1.6;">${s.intro||''}</div>
<div class="vis-card">
  <div class="vis-title">🔄 Substitution Method — Step by Step</div>
  <div style="background:linear-gradient(135deg,rgba(255,107,53,.07),rgba(240,180,41,.04));border:1px solid rgba(255,107,53,.15);border-radius:12px;padding:.9rem;margin-bottom:.8rem;text-align:center;">
    <div style="font-size:.7rem;color:var(--sub);font-weight:700;text-transform:uppercase;letter-spacing:.8px;margin-bottom:.4rem;">Equations</div>
    <div style="font-family:'Courier New',monospace;font-size:.95rem;font-weight:700;color:var(--p);">7x – 15y = 2 &nbsp;&nbsp; ...(1)</div>
    <div style="font-family:'Courier New',monospace;font-size:.95rem;font-weight:700;color:var(--gold);margin-top:.2rem;">x + 2y = 3 &nbsp;&nbsp;&nbsp;&nbsp; ...(2)</div>
  </div>
  <div class="steps-list" id="sub-steps-list">
    <div class="step-item" id="sub-s1" style="opacity:.3;transition:opacity .5s;">
      <div class="step-n">1</div>
      <div><strong style="color:var(--gold);">Eq(2) se x express karo:</strong><br>x + 2y = 3<br><span style="font-family:'Courier New',monospace;font-size:.9rem;color:var(--blue);">x = 3 – 2y &nbsp; ...(3)</span></div>
    </div>
    <div class="step-item" id="sub-s2" style="opacity:.3;transition:opacity .5s;">
      <div class="step-n">2</div>
      <div><strong style="color:var(--gold);">Eq(1) mein substitute karo:</strong><br>7(<span style="color:var(--blue);">3–2y</span>) – 15y = 2<br>21 – 14y – 15y = 2<br>–29y = –19<br><span style="font-family:'Courier New',monospace;font-size:.9rem;color:var(--green);">y = 19/29 ✅</span></div>
    </div>
    <div class="step-item" id="sub-s3" style="opacity:.3;transition:opacity .5s;">
      <div class="step-n">3</div>
      <div><strong style="color:var(--gold);">y ki value Eq(3) mein daalo:</strong><br>x = 3 – 2(19/29)<br>x = 3 – 38/29 = (87–38)/29<br><span style="font-family:'Courier New',monospace;font-size:.9rem;color:var(--green);">x = 49/29 ✅</span></div>
    </div>
    <div class="step-item" id="sub-s4" style="opacity:.3;transition:opacity .5s;">
      <div class="step-n">✓</div>
      <div><strong style="color:var(--green);">Solution:</strong><br>x = 49/29 &nbsp;&nbsp; y = 19/29<br><span style="font-size:.78rem;color:var(--sub);">Verify: 7(49/29)–15(19/29) = 343/29–285/29 = 58/29 = 2 ✅</span></div>
    </div>
  </div>
  <div style="display:flex;gap:.5rem;margin-top:.9rem;justify-content:center;">
    <button onclick="subPrev()" style="background:rgba(255,255,255,.05);border:1px solid var(--border);color:var(--txt);padding:.5rem 1rem;border-radius:9px;cursor:pointer;font-family:'Hind',sans-serif;font-weight:700;font-size:.8rem;">← Peeche</button>
    <button onclick="subNext()" id="sub-next-btn" style="background:linear-gradient(135deg,var(--p),#FF8F5E);border:none;color:white;padding:.5rem 1.2rem;border-radius:9px;cursor:pointer;font-family:'Hind',sans-serif;font-weight:700;font-size:.8rem;">Agla Step →</button>
    <button onclick="subReset()" style="background:rgba(255,255,255,.05);border:1px solid var(--border);color:var(--sub);padding:.5rem .8rem;border-radius:9px;cursor:pointer;font-family:'Hind',sans-serif;font-weight:700;font-size:.8rem;">🔄</button>
  </div>
  <div class="point-info" id="sub-progress" style="margin-top:.5rem;text-align:center;">Step 1/4 — Pehle ek variable express karo</div>
</div>
<div class="insight"><div class="insight-h">🎯 Substitution Method — Rule</div>
Step 1: Ek variable isolate karo (coefficient 1 wala easy hota hai)<br>
Step 2: Doosri equation mein substitute karo → ek variable milta hai<br>
Step 3: Woh value wapas daalo → doosra variable milta hai</div>`,

'elimination-steps': (s) => `
<div class="l-badge" style="background:rgba(63,185,80,.1);color:var(--green);">VISUAL</div>
<div class="l-h">${s.title}</div>
<div style="font-size:.84rem;color:var(--sub);margin-bottom:.75rem;line-height:1.6;">${s.intro||''}</div>
<div class="vis-card">
  <div class="vis-title">➕➖ Elimination Method — Step by Step</div>
  <div style="background:linear-gradient(135deg,rgba(63,185,80,.07),rgba(88,166,255,.04));border:1px solid rgba(63,185,80,.18);border-radius:12px;padding:.9rem;margin-bottom:.8rem;text-align:center;">
    <div style="font-size:.7rem;color:var(--sub);font-weight:700;text-transform:uppercase;letter-spacing:.8px;margin-bottom:.4rem;">NCERT Example 8 — Income Problem</div>
    <div style="font-family:'Courier New',monospace;font-size:.9rem;font-weight:700;color:var(--green);">9x – 4y = 2000 &nbsp; ...(1)</div>
    <div style="font-family:'Courier New',monospace;font-size:.9rem;font-weight:700;color:var(--blue);margin-top:.2rem;">7x – 3y = 2000 &nbsp; ...(2)</div>
    <div style="font-size:.72rem;color:var(--sub);margin-top:.4rem;">Incomes: ₹9x aur ₹7x | Savings: ₹2000 each</div>
  </div>
  <div class="steps-list" id="elim-steps-list">
    <div class="step-item" id="elim-s1" style="opacity:.3;transition:opacity .5s;">
      <div class="step-n">1</div>
      <div><strong style="color:var(--gold);">y ke coefficients equal banao:</strong><br>Eq(1)×3: <span style="color:var(--green);">27x – 12y = 6000 ...(3)</span><br>Eq(2)×4: <span style="color:var(--blue);">28x – 12y = 8000 ...(4)</span></div>
    </div>
    <div class="step-item" id="elim-s2" style="opacity:.3;transition:opacity .5s;">
      <div class="step-n">2</div>
      <div><strong style="color:var(--gold);">Eq(4) – Eq(3) karo (y eliminate hoga):</strong><br>(28x–27x) – (12y–12y) = 8000–6000<br><span style="font-family:'Courier New',monospace;font-size:.9rem;color:var(--green);">x = 2000 ✅</span></div>
    </div>
    <div class="step-item" id="elim-s3" style="opacity:.3;transition:opacity .5s;">
      <div class="step-n">3</div>
      <div><strong style="color:var(--gold);">x=2000 ko Eq(1) mein daalo:</strong><br>9(2000) – 4y = 2000<br>18000 – 4y = 2000<br>4y = 16000<br><span style="font-family:'Courier New',monospace;font-size:.9rem;color:var(--green);">y = 4000 ✅</span></div>
    </div>
    <div class="step-item" id="elim-s4" style="opacity:.3;transition:opacity .5s;">
      <div class="step-n">✓</div>
      <div><strong style="color:var(--green);">Monthly Incomes:</strong><br>Person 1: ₹9×2000 = <span style="color:var(--gold);font-weight:800;">₹18,000</span><br>Person 2: ₹7×2000 = <span style="color:var(--gold);font-weight:800;">₹14,000</span><br><span style="font-size:.78rem;color:var(--sub);">Verify: 18000:14000 = 9:7 ✅ | Savings: 18000–4000×4=2000 ✅</span></div>
    </div>
  </div>
  <div style="display:flex;gap:.5rem;margin-top:.9rem;justify-content:center;">
    <button onclick="elimPrev()" style="background:rgba(255,255,255,.05);border:1px solid var(--border);color:var(--txt);padding:.5rem 1rem;border-radius:9px;cursor:pointer;font-family:'Hind',sans-serif;font-weight:700;font-size:.8rem;">← Peeche</button>
    <button onclick="elimNext()" style="background:linear-gradient(135deg,var(--green),#2EA043);border:none;color:white;padding:.5rem 1.2rem;border-radius:9px;cursor:pointer;font-family:'Hind',sans-serif;font-weight:700;font-size:.8rem;">Agla Step →</button>
    <button onclick="elimReset()" style="background:rgba(255,255,255,.05);border:1px solid var(--border);color:var(--sub);padding:.5rem .8rem;border-radius:9px;cursor:pointer;font-family:'Hind',sans-serif;font-weight:700;font-size:.8rem;">🔄</button>
  </div>
  <div class="point-info" id="elim-progress" style="margin-top:.5rem;text-align:center;">Step 1/4 — Coefficients equal banao</div>
</div>
<div class="insight"><div class="insight-h">🎯 Elimination Method — Rule</div>
Step 1: Kisi ek variable ke coefficients equal karo (multiply karke)<br>
Step 2: Add ya Subtract karo → woh variable khatam!<br>
Step 3: Bacha ek variable → solve → doosra bhi milta hai</div>`

});



// ════ CH03 JS FUNCTIONS ════

// ── Three Line Types ──
function ltShow(n) {
  [1,2,3].forEach(i => {
    const b = document.getElementById(`lt-btn-${i}`);
    if(b) b.classList.remove('sel','sel3');
  });
  const btn = document.getElementById(`lt-btn-${n}`);
  if(btn) btn.classList.add(n===3?'sel3':'sel');
  ltDraw(n);
}

function ltDraw(n) {
  // Coordinate helpers: origin (170,130), 1 unit = 50px x, 40px y
  const ox=170, oy=130, sx=50, sy=40;
  const px = x => ox + x*sx;
  const py = y => oy - y*sy;

  const line1 = document.getElementById('lt-line1');
  const line2 = document.getElementById('lt-line2');
  const sol = document.getElementById('lt-sol');
  const soldot = document.getElementById('lt-soldot');
  const sollbl = document.getElementById('lt-sollbl');
  const eq1 = document.getElementById('lt-eq1');
  const eq2 = document.getElementById('lt-eq2');
  const title = document.getElementById('lt-title');
  const info = document.getElementById('lt-info');
  const insight = document.getElementById('lt-insight');
  if(!line1) return;

  if(n===1) {
    // x-2y=0 → y=x/2 and 3x+4y=20 → y=(20-3x)/4
    const f1 = x => x/2;
    const f2 = x => (20-3*x)/4;
    line1.setAttribute('x1',px(-2)); line1.setAttribute('y1',py(f1(-2))); line1.setAttribute('x2',px(6)); line1.setAttribute('y2',py(f1(6)));
    line2.setAttribute('x1',px(0)); line2.setAttribute('y1',py(f2(0))); line2.setAttribute('x2',px(6)); line2.setAttribute('y2',py(f2(6)));
    // Solution: x=4, y=2
    sol.setAttribute('cx',px(4)); sol.setAttribute('cy',py(2)); sol.setAttribute('display','');
    soldot.setAttribute('cx',px(4)); soldot.setAttribute('cy',py(2));
    sollbl.setAttribute('x',px(4)); sollbl.setAttribute('y',py(2)-12); sollbl.textContent='(4, 2)';
    eq1.textContent='x – 2y = 0'; eq2.textContent='3x + 4y = 20';
    title.innerHTML='📏 Case 1 — Intersecting Lines <span class="fig-badge">NCERT Fig 3.1</span>';
    info.innerHTML='<strong style="color:var(--green)">Lines intersect at (4, 2)</strong> → x=4, y=2 ek unique solution hai!<br><span style="color:var(--sub);font-size:.78rem;">a₁/a₂ = 1/3 ≠ b₁/b₂ = –2/4 → Intersecting confirmed!</span>';
    insight.innerHTML='<div class="insight-h">🎯 Case 1 — Consistent Pair</div>a₁/a₂ <strong>≠</strong> b₁/b₂ → Exactly <strong>1 unique solution</strong>. Lines ek point par milti hain!';
  } else if(n===2) {
    // 2x+3y=9 and 4x+6y=18 (same line!)
    const f1 = x => (9-2*x)/3;
    line1.setAttribute('x1',px(-1)); line1.setAttribute('y1',py(f1(-1))); line1.setAttribute('x2',px(4)); line1.setAttribute('y2',py(f1(4)));
    // Draw line2 slightly offset to show it's the same but colored differently
    line2.setAttribute('x1',px(-1)); line2.setAttribute('y1',py(f1(-1))+3); line2.setAttribute('x2',px(4)); line2.setAttribute('y2',py(f1(4))+3);
    sol.setAttribute('display','none'); soldot.setAttribute('display','none'); sollbl.textContent='';
    eq1.textContent='2x + 3y = 9'; eq2.textContent='4x + 6y = 18 (same!)';
    title.innerHTML='📏 Case 2 — Coincident Lines <span class="fig-badge">NCERT</span>';
    info.innerHTML='<strong style="color:var(--blue)">Lines ek doosre par perfectly overlap karti hain!</strong> → Infinite solutions (har line ka point solution hai)<br><span style="color:var(--sub);font-size:.78rem;">a₁/a₂=b₁/b₂=c₁/c₂=1/2 → Coincident confirmed!</span>';
    insight.innerHTML='<div class="insight-h">🎯 Case 2 — Dependent Consistent</div>a₁/a₂ = b₁/b₂ = c₁/c₂ → <strong>Infinite solutions</strong>. Dono equations actually same equation hain!';
  } else {
    // x+2y=4 and 2x+4y=12 (parallel)
    const f1 = x => (4-x)/2;
    const f2 = x => (12-2*x)/4;
    line1.setAttribute('x1',px(-2)); line1.setAttribute('y1',py(f1(-2))); line1.setAttribute('x2',px(4)); line1.setAttribute('y2',py(f1(4)));
    line2.setAttribute('x1',px(-2)); line2.setAttribute('y1',py(f2(-2))); line2.setAttribute('x2',px(4)); line2.setAttribute('y2',py(f2(4)));
    sol.setAttribute('display','none'); soldot.setAttribute('display','none'); sollbl.textContent='';
    eq1.textContent='x + 2y = 4'; eq2.textContent='2x + 4y = 12';
    title.innerHTML='📏 Case 3 — Parallel Lines <span class="fig-badge">NCERT</span>';
    info.innerHTML='<strong style="color:var(--red)">Lines kabhi nahi milti!</strong> → No solution (inconsistent pair)<br><span style="color:var(--sub);font-size:.78rem;">a₁/a₂=b₁/b₂=1/2 ≠ c₁/c₂=4/12=1/3 → Parallel confirmed!</span>';
    insight.innerHTML='<div class="insight-h">🎯 Case 3 — Inconsistent Pair</div>a₁/a₂ = b₁/b₂ <strong>≠</strong> c₁/c₂ → <strong>No solution</strong>. Lines hamesha alag rehti hain!';
  }
}

// ── Graphical Method ──
let _gmEx = 1;
function gmShow(n) {
  _gmEx = n;
  [1,2].forEach(i => { const b=document.getElementById(`gm-btn-${i}`); if(b) b.classList.remove('sel','sel3'); });
  const btn = document.getElementById(`gm-btn-${n}`); if(btn) btn.classList.add('sel');
  gmDraw(n);
}

function gmDraw(n) {
  const ox=140, oy=160, sx=40, sy=40;
  const px = x => ox + x*sx;
  const py = y => oy - y*sy;
  const line1=document.getElementById('gm-line1'), line2=document.getElementById('gm-line2');
  const sol=document.getElementById('gm-sol'), soldot=document.getElementById('gm-soldot'), sollbl=document.getElementById('gm-sollbl');
  const eq1lbl=document.getElementById('gm-eq1lbl'), eq2lbl=document.getElementById('gm-eq2lbl');
  const title=document.getElementById('gm-title'), insight=document.getElementById('gm-insight');
  const tbl=document.getElementById('gm-table');
  if(!line1) return;

  if(n===1) {
    // x-2y=0 → y=x/2 | 3x+4y=20 → y=(20-3x)/4
    line1.setAttribute('x1',px(0)); line1.setAttribute('y1',py(0)); line1.setAttribute('x2',px(4)); line1.setAttribute('y2',py(2));
    line2.setAttribute('x1',px(0)); line2.setAttribute('y1',py(5)); line2.setAttribute('x2',px(4)); line2.setAttribute('y2',py(2));
    sol.setAttribute('cx',px(4)); sol.setAttribute('cy',py(2));
    soldot.setAttribute('cx',px(4)); soldot.setAttribute('cy',py(2));
    sollbl.setAttribute('x',px(4)+2); sollbl.setAttribute('y',py(2)-13); sollbl.textContent='B(4,2) ← Solution!';
    eq1lbl.textContent='x – 2y = 0'; eq2lbl.textContent='3x + 4y = 20';
    title.innerHTML='📈 Example 1 — x–2y=0 aur 3x+4y=20 <span class="fig-badge">Fig. 3.1</span>';
    insight.innerHTML='<div class="insight-h">🎯 Solution: x=4, y=2</div>Akhila ne 4 rides li aur 2 baar Hoopla khela! Verify: 4–2(2)=0 ✅ aur 3(4)+4(2)=20 ✅';
    tbl.innerHTML=`<table><tr><th colspan="3" style="text-align:left;color:var(--green)">x–2y=0</th><th colspan="3" style="text-align:left;color:var(--gold)">3x+4y=20</th></tr><tr><td>x</td><td>0</td><td>4</td><td>x</td><td>0</td><td>4</td></tr><tr><td>y=x/2</td><td class="zero">0</td><td class="zero">2</td><td>y=(20–3x)/4</td><td class="zero">5</td><td class="zero">2</td></tr></table>`;
  } else {
    // y=2x-2 | y=4x-4
    line1.setAttribute('x1',px(0)); line1.setAttribute('y1',py(-2)); line1.setAttribute('x2',px(2)); line1.setAttribute('y2',py(2));
    line2.setAttribute('x1',px(0)); line2.setAttribute('y1',py(-4)); line2.setAttribute('x2',px(2)); line2.setAttribute('y2',py(4));
    sol.setAttribute('cx',px(1)); sol.setAttribute('cy',py(0));
    soldot.setAttribute('cx',px(1)); soldot.setAttribute('cy',py(0));
    sollbl.setAttribute('x',px(1)+5); sollbl.setAttribute('y',py(0)-12); sollbl.textContent='(1,0) ← Solution!';
    eq1lbl.textContent='y = 2x – 2'; eq2lbl.textContent='y = 4x – 4';
    title.innerHTML='📈 Example 3 — Champa Problem <span class="fig-badge">Fig. 3.2</span>';
    insight.innerHTML='<div class="insight-h">🎯 Solution: x=1, y=0</div>Champa ne 1 pant kharida, 0 skirts! Verify: y=2(1)–2=0 ✅ aur y=4(1)–4=0 ✅';
    tbl.innerHTML=`<table><tr><th colspan="3" style="text-align:left;color:var(--green)">y=2x–2</th><th colspan="3" style="text-align:left;color:var(--gold)">y=4x–4</th></tr><tr><td>x</td><td>0</td><td>2</td><td>x</td><td>0</td><td>1</td></tr><tr><td>y</td><td class="neg">–2</td><td class="zero">2</td><td>y</td><td class="neg">–4</td><td class="zero">0</td></tr></table>`;
  }
}

// ── Substitution Steps ──
let _subStep = 0;
const _subMsgs = ['Step 1/4 — Pehle ek variable express karo','Step 2/4 — Doosri equation mein substitute karo','Step 3/4 — y ki value se x nikalo','Step 4/4 — Solution verified! 🎉'];
function subNext() { if(_subStep<3){_subStep++; _subRefresh();} }
function subPrev() { if(_subStep>0){_subStep--; _subRefresh();} }
function subReset() { _subStep=0; _subRefresh(); }
function _subRefresh() {
  for(let i=0;i<4;i++) {
    const el=document.getElementById(`sub-s${i+1}`);
    if(el) el.style.opacity = i<=_subStep ? '1' : '0.3';
  }
  const prog=document.getElementById('sub-progress');
  if(prog) prog.textContent = _subMsgs[_subStep];
}

// ── Elimination Steps ──
let _elimStep = 0;
const _elimMsgs = ['Step 1/4 — Coefficients equal banao','Step 2/4 — Subtract karo → y eliminate!','Step 3/4 — x ki value se y nikalo','Step 4/4 — Monthly incomes calculate! 🎉'];
function elimNext() { if(_elimStep<3){_elimStep++; _elimRefresh();} }
function elimPrev() { if(_elimStep>0){_elimStep--; _elimRefresh();} }
function elimReset() { _elimStep=0; _elimRefresh(); }
function _elimRefresh() {
  for(let i=0;i<4;i++) {
    const el=document.getElementById(`elim-s${i+1}`);
    if(el) el.style.opacity = i<=_elimStep ? '1' : '0.3';
  }
  const prog=document.getElementById('elim-progress');
  if(prog) prog.textContent = _elimMsgs[_elimStep];
}


// ── Register Inits ──
Object.assign(VISUAL_INITS, {
  'three-line-types':    () => ltDraw(1),
  'graphical-method':    () => gmDraw(1),
  'substitution-steps':  () => { _subStep=0; _subRefresh(); },
  'elimination-steps':   () => { _elimStep=0; _elimRefresh(); },
});
