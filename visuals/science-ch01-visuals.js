// ════════════════════════════════════════════════
//  science-ch01-visuals.js
//  Chemical Reactions and Equations
//  Auto-loaded jab Science Chapter 1 khulta hai
// ════════════════════════════════════════════════

Object.assign(VISUAL_TEMPLATES, {

// ── 1. Balancing Steps (Fe + H₂O NCERT Example) ──
'balancing-steps': (s) => `
<div class="l-badge" style="background:rgba(63,185,80,.12);color:var(--green);">VISUAL</div>
<div class="l-h">${s.title}</div>
<div style="font-size:.84rem;color:var(--sub);margin-bottom:.75rem;line-height:1.6;">${s.intro||''}</div>
<div class="vis-card">
  <div class="vis-title">⚖️ NCERT Method — Hit and Trial</div>
  <div style="background:rgba(0,0,0,.3);border-radius:10px;padding:.8rem;text-align:center;margin-bottom:.9rem;font-family:'Courier New',monospace;">
    <div style="font-size:.75rem;color:var(--sub);margin-bottom:.4rem;font-family:'Hind',sans-serif;font-weight:700;">SKELETAL EQUATION (Unbalanced):</div>
    <div style="font-size:1rem;font-weight:700;color:var(--p);">Fe + H₂O → Fe₃O₄ + H₂</div>
  </div>
  <div id="bal-steps-list" class="steps-list">
    <div class="step-item" id="bal-s1" style="opacity:.3;transition:opacity .5s;">
      <div class="step-n">I</div>
      <div><strong style="color:var(--gold);">Box each formula (don't change inside):</strong><br>
      <span style="font-family:'Courier New',monospace;font-size:.88rem;background:rgba(255,255,255,.05);padding:.2rem .5rem;border-radius:5px;border:1px solid rgba(255,255,255,.15);">Fe</span> + 
      <span style="font-family:'Courier New',monospace;font-size:.88rem;background:rgba(255,255,255,.05);padding:.2rem .5rem;border-radius:5px;border:1px solid rgba(255,255,255,.15);">H₂O</span> → 
      <span style="font-family:'Courier New',monospace;font-size:.88rem;background:rgba(255,255,255,.05);padding:.2rem .5rem;border-radius:5px;border:1px solid rgba(255,255,255,.15);">Fe₃O₄</span> + 
      <span style="font-family:'Courier New',monospace;font-size:.88rem;background:rgba(255,255,255,.05);padding:.2rem .5rem;border-radius:5px;border:1px solid rgba(255,255,255,.15);">H₂</span></div>
    </div>
    <div class="step-item" id="bal-s2" style="opacity:.3;transition:opacity .5s;">
      <div class="step-n">II</div>
      <div><strong style="color:var(--gold);">Count atoms (LHS vs RHS):</strong>
      <div class="table-wrap" style="margin-top:.5rem;">
        <table><tr><th>Element</th><th>LHS</th><th>RHS</th><th>Balanced?</th></tr>
        <tr><td>Fe</td><td>1</td><td>3</td><td style="color:var(--red);">❌</td></tr>
        <tr><td>H</td><td>2</td><td>2</td><td style="color:var(--green);">✅</td></tr>
        <tr><td>O</td><td>1</td><td>4</td><td style="color:var(--red);">❌</td></tr></table>
      </div></div>
    </div>
    <div class="step-item" id="bal-s3" style="opacity:.3;transition:opacity .5s;">
      <div class="step-n">III</div>
      <div><strong style="color:var(--gold);">O balance karo — Fe₃O₄ mein 4 O hain:</strong><br>
      H₂O ko <span style="color:var(--blue);font-weight:800;">4</span> banana padega:<br>
      <span style="font-family:'Courier New',monospace;">Fe + <span style="color:var(--blue);font-weight:800;">4</span>H₂O → Fe₃O₄ + H₂</span><br>
      <span style="font-size:.75rem;color:var(--sub);">Ab O: LHS=4, RHS=4 ✅. Par H aur Fe still unbalanced!</span></div>
    </div>
    <div class="step-item" id="bal-s4" style="opacity:.3;transition:opacity .5s;">
      <div class="step-n">IV</div>
      <div><strong style="color:var(--gold);">H balance karo — 4H₂O mein 8 H:</strong><br>
      H₂ ko <span style="color:var(--purple);font-weight:800;">4</span> banana padega:<br>
      <span style="font-family:'Courier New',monospace;">Fe + 4H₂O → Fe₃O₄ + <span style="color:var(--purple);font-weight:800;">4</span>H₂</span><br>
      <span style="font-size:.75rem;color:var(--sub);">Ab H: LHS=8, RHS=8 ✅. Sirf Fe bacha!</span></div>
    </div>
    <div class="step-item" id="bal-s5" style="opacity:.3;transition:opacity .5s;">
      <div class="step-n">V</div>
      <div><strong style="color:var(--gold);">Fe balance karo — Fe₃O₄ mein 3 Fe:</strong><br>
      Fe ko <span style="color:var(--green);font-weight:800;">3</span> banana padega:<br>
      <span style="font-family:'Courier New',monospace;font-size:.9rem;color:var(--green);font-weight:700;"><span style="color:var(--green);">3</span>Fe + 4H₂O → Fe₃O₄ + 4H₂</span> ✅<br>
      <span style="font-size:.75rem;color:var(--sub);">Fe: 3=3 ✅ | H: 8=8 ✅ | O: 4=4 ✅ — BALANCED!</span></div>
    </div>
    <div class="step-item" id="bal-s6" style="opacity:.3;transition:opacity .5s;">
      <div class="step-n">✓</div>
      <div><strong style="color:var(--green);">Final Balanced Equation with Physical States:</strong><br>
      <span style="font-family:'Courier New',monospace;font-size:.9rem;color:var(--green);font-weight:700;">3Fe(s) + 4H₂O(g) → Fe₃O₄(s) + 4H₂(g)</span><br>
      <span style="font-size:.78rem;color:var(--sub);">Note: H₂O par (g) hai — steam use hoti hai! Not liquid water.</span></div>
    </div>
  </div>
  <div style="display:flex;gap:.5rem;margin-top:.9rem;justify-content:center;flex-wrap:wrap;">
    <button onclick="balPrev()" style="background:rgba(255,255,255,.05);border:1px solid var(--border);color:var(--txt);padding:.5rem 1rem;border-radius:9px;cursor:pointer;font-family:'Hind',sans-serif;font-weight:700;font-size:.8rem;">← Peeche</button>
    <button onclick="balNext()" style="background:linear-gradient(135deg,var(--green),#2EA043);border:none;color:white;padding:.5rem 1.2rem;border-radius:9px;cursor:pointer;font-family:'Hind',sans-serif;font-weight:700;font-size:.8rem;">Agla Step →</button>
    <button onclick="balReset()" style="background:rgba(255,255,255,.05);border:1px solid var(--border);color:var(--sub);padding:.5rem .8rem;border-radius:9px;cursor:pointer;font-family:'Hind',sans-serif;font-weight:700;font-size:.8rem;">🔄 Reset</button>
  </div>
  <div class="point-info" id="bal-progress" style="margin-top:.5rem;text-align:center;">Step 1/6 — Pehle har formula box mein rakho</div>
</div>
<div class="insight"><div class="insight-h">🎯 Hit-and-Trial Method Rule</div>
Sabse zyada atoms wale compound se shuru karo → wo element balance karo → phir baaki. Formula mat badlo — sirf coefficient badhao!</div>`,

// ── 2. Reaction Types Interactive ──
'reaction-types': (s) => `
<div class="l-badge" style="background:rgba(63,185,80,.12);color:var(--green);">VISUAL</div>
<div class="l-h">${s.title}</div>
<div style="font-size:.84rem;color:var(--sub);margin-bottom:.75rem;line-height:1.6;">${s.intro||''}</div>
<div style="display:flex;flex-direction:column;gap:.5rem;margin-bottom:.8rem;">
  <button onclick="rtShow('combo')" id="rt-combo" class="case-card sel" style="text-align:left;padding:.7rem .9rem;border-radius:11px;cursor:pointer;border:2px solid var(--green);background:rgba(63,185,80,.08);">
    <span style="font-weight:800;color:var(--green);">1️⃣ Combination</span> <span style="color:var(--sub);font-size:.75rem;">A + B → AB</span>
  </button>
  <button onclick="rtShow('decomp')" id="rt-decomp" class="case-card" style="text-align:left;padding:.7rem .9rem;border-radius:11px;cursor:pointer;border:2px solid var(--border);background:var(--card);">
    <span style="font-weight:800;color:var(--blue);">2️⃣ Decomposition</span> <span style="color:var(--sub);font-size:.75rem;">AB → A + B</span>
  </button>
  <button onclick="rtShow('disp')" id="rt-disp" class="case-card" style="text-align:left;padding:.7rem .9rem;border-radius:11px;cursor:pointer;border:2px solid var(--border);background:var(--card);">
    <span style="font-weight:800;color:var(--p);">3️⃣ Displacement</span> <span style="color:var(--sub);font-size:.75rem;">A + BC → AC + B</span>
  </button>
  <button onclick="rtShow('ddisp')" id="rt-ddisp" class="case-card" style="text-align:left;padding:.7rem .9rem;border-radius:11px;cursor:pointer;border:2px solid var(--border);background:var(--card);">
    <span style="font-weight:800;color:var(--purple);">4️⃣ Double Displacement</span> <span style="color:var(--sub);font-size:.75rem;">AB + CD → AD + CB</span>
  </button>
  <button onclick="rtShow('redox')" id="rt-redox" class="case-card" style="text-align:left;padding:.7rem .9rem;border-radius:11px;cursor:pointer;border:2px solid var(--border);background:var(--card);">
    <span style="font-weight:800;color:var(--gold);">5️⃣ Redox</span> <span style="color:var(--sub);font-size:.75rem;">Oxidation + Reduction simultaneously</span>
  </button>
</div>
<div class="vis-card" id="rt-detail">
  <div class="vis-title" id="rt-title">⚗️ Combination Reaction</div>
  <div class="formula-chip" id="rt-eq">CaO(s) + H₂O(l) → Ca(OH)₂(aq) + Heat</div>
  <div class="expl" id="rt-expl">
    <div class="expl-h" id="rt-expl-h">📖 Kya hota hai?</div>
    <div id="rt-expl-body">2+ reactants mein se 1 product banta hai. NCERT Activity 1.4: Quick lime + water → slaked lime. Beaker hot ho jaata hai — EXOTHERMIC!</div>
  </div>
  <div class="insight" id="rt-insight">
    <div class="insight-h">🎯 Trick to Remember</div>
    <div id="rt-trick">Combination = Combine = milna. Exothermic mostly hoti hai.</div>
  </div>
</div>`

}); // end Object.assign VISUAL_TEMPLATES

// ════════════════════════════════════════════════
//  JS FUNCTIONS
// ════════════════════════════════════════════════

// ── Balancing Steps ──
let _balStep = 0;
const _balMsgs = [
  'Step 1/6 — Pehle har formula box mein rakho',
  'Step 2/6 — Atoms count karo LHS vs RHS',
  'Step 3/6 — Oxygen balance karo (largest compound se shuru)',
  'Step 4/6 — Hydrogen balance karo',
  'Step 5/6 — Iron balance karo',
  'Step 6/6 — Final balanced equation! ✅'
];
function balNext() { if(_balStep<5){_balStep++; _balRefresh();} }
function balPrev() { if(_balStep>0){_balStep--; _balRefresh();} }
function balReset() { _balStep=0; _balRefresh(); }
function _balRefresh() {
  for(let i=0;i<6;i++) {
    const el=document.getElementById(`bal-s${i+1}`);
    if(el) el.style.opacity = i<=_balStep ? '1' : '0.3';
  }
  const prog=document.getElementById('bal-progress');
  if(prog) prog.textContent = _balMsgs[_balStep];
}

// ── Reaction Types ──
const _rtData = {
  'combo': {
    title: '⚗️ 1. Combination Reaction',
    color: 'var(--green)',
    eq: 'CaO(s) + H₂O(l) → Ca(OH)₂(aq) + Heat',
    h: '📖 2+ Reactants → 1 Product',
    body: 'NCERT Activity 1.4: Quick lime + water → slaked lime. Beaker hot ho jaata hai → EXOTHERMIC!\n\nAur examples: C + O₂ → CO₂ (burning coal), 2H₂ + O₂ → 2H₂O',
    trick: 'Combination = Combine = milna. Almost always EXOTHERMIC hoti hai!'
  },
  'decomp': {
    title: '⚗️ 2. Decomposition Reaction',
    color: 'var(--blue)',
    eq: 'CaCO₃(s) →(heat)→ CaO(s) + CO₂(g)',
    h: '📖 1 Reactant → 2+ Products',
    body: 'Combination ka ULTA! Energy chahiye (heat/light/electricity).\n\n• Thermal: FeSO₄ → Fe₂O₃ + SO₂ + SO₃\n• Electrolytic: 2H₂O → 2H₂ + O₂\n• Photolytic: 2AgCl →(sunlight)→ 2Ag + Cl₂',
    trick: 'Decompose = tod dena. ENDOTHERMIC hoti hai (energy absorb).'
  },
  'disp': {
    title: '⚗️ 3. Displacement Reaction',
    color: 'var(--p)',
    eq: 'Fe(s) + CuSO₄(aq) → FeSO₄(aq) + Cu(s)',
    h: '📖 More reactive element displaces less reactive',
    body: 'NCERT Activity 1.9: Iron nail → brown (Cu deposit), blue solution → fade.\n\nFe is more reactive than Cu → Fe displaces Cu.\n\nZn + CuSO₄ → ZnSO₄ + Cu\nPb + CuCl₂ → PbCl₂ + Cu',
    trick: 'Reactivity Series: K > Na > Ca > Mg > Al > Zn > Fe > Pb > Cu > Ag > Au'
  },
  'ddisp': {
    title: '⚗️ 4. Double Displacement',
    color: 'var(--purple)',
    eq: 'Na₂SO₄(aq) + BaCl₂(aq) → BaSO₄(s) + 2NaCl(aq)',
    h: '📖 Ions exchange between two compounds',
    body: 'NCERT Activity 1.10: White BaSO₄ precipitate bana!\n\nSO₄²⁻ + Ba²⁺ → BaSO₄ (insoluble precipitate)\nNa⁺ + Cl⁻ → NaCl (stays in solution)\n\nPrecipitation reaction bhi kehte hain!',
    trick: 'AB + CD → AD + CB. Ions swap karte hain like dance partners!'
  },
  'redox': {
    title: '⚗️ 5. Oxidation-Reduction (Redox)',
    color: 'var(--gold)',
    eq: 'CuO(s) + H₂(g) →(heat)→ Cu(s) + H₂O(l)',
    h: '📖 Simultaneous oxidation + reduction',
    body: 'CuO → Cu: Oxygen lose = REDUCED\nH₂ → H₂O: Oxygen gain = OXIDISED\n\nDono ek saath hote hain!\n\nOIL RIG trick:\nOxidation Is Loss (of oxygen/electrons)\nReduction Is Gain (of oxygen/electrons)',
    trick: 'OIL RIG yaad karo! Reducing agent khud oxidise hota hai, Oxidising agent khud reduce hota hai.'
  }
};

function rtShow(type) {
  // Update button states
  ['combo','decomp','disp','ddisp','redox'].forEach(t => {
    const btn = document.getElementById(`rt-${t}`);
    if(!btn) return;
    btn.style.borderColor = 'var(--border)';
    btn.style.background = 'var(--card)';
  });
  const d = _rtData[type];
  if(!d) return;
  const btn = document.getElementById(`rt-${type}`);
  if(btn){ btn.style.borderColor = d.color; btn.style.background = `${d.color}18`; }

  const title = document.getElementById('rt-title');
  const eq = document.getElementById('rt-eq');
  const h = document.getElementById('rt-expl-h');
  const body = document.getElementById('rt-expl-body');
  const trick = document.getElementById('rt-trick');
  if(title) title.innerHTML = d.title;
  if(eq) { eq.textContent = d.eq; eq.style.borderColor = `${d.color}40`; }
  if(h) h.textContent = d.h;
  if(body) body.innerHTML = d.body.replace(/\n/g,'<br>');
  if(trick) trick.textContent = d.trick;
}

// ════════════════════════════════════════════════
//  REGISTER INITS
// ════════════════════════════════════════════════
Object.assign(VISUAL_INITS, {
  'balancing-steps': () => { _balStep=0; _balRefresh(); },
  'reaction-types':  () => rtShow('combo'),
});
