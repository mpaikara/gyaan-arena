// ════════════════════════════════════════════════
//  science-ch02-visuals.js — Acids, Bases and Salts
//  Auto-loaded jab Science Chapter 2 khulta hai.
//  Registers into: VISUAL_TEMPLATES, VISUAL_INITS
// ════════════════════════════════════════════════

// ════ CH02 VISUAL TEMPLATES ════
Object.assign(VISUAL_TEMPLATES, {

// ── Visual 1: Indicator Colours ──
'indicator-colors': (s) => `
<div class="l-badge" style="background:rgba(63,185,80,.12);color:var(--green);">VISUAL</div>
<div class="l-h">${s.title}</div>
<div style="font-size:.84rem;color:var(--sub);margin-bottom:.75rem;line-height:1.6;">${s.intro||''}</div>
<div class="case-grid" style="grid-template-columns:repeat(3,1fr);gap:.5rem;margin-bottom:.8rem;">
  <div class="case-card sel" id="ind-btn-1" onclick="indShow(1)" style="padding:.6rem .4rem;">
    <div class="case-num" style="color:var(--blue);font-size:.8rem;">🔵 Litmus</div>
  </div>
  <div class="case-card" id="ind-btn-2" onclick="indShow(2)" style="padding:.6rem .4rem;">
    <div class="case-num" style="color:var(--p);font-size:.8rem;">🧪 Phenolph.</div>
  </div>
  <div class="case-card" id="ind-btn-3" onclick="indShow(3)" style="padding:.6rem .4rem;">
    <div class="case-num" style="color:var(--gold);font-size:.8rem;">🧪 Methyl Org.</div>
  </div>
</div>
<div class="case-grid" style="grid-template-columns:repeat(2,1fr);gap:.5rem;margin-bottom:.8rem;">
  <div class="case-card" id="ind-btn-4" onclick="indShow(4)" style="padding:.6rem .4rem;">
    <div class="case-num" style="color:#F59E0B;font-size:.8rem;">🌿 Haldi</div>
  </div>
  <div class="case-card" id="ind-btn-5" onclick="indShow(5)" style="padding:.6rem .4rem;">
    <div class="case-num" style="color:var(--sub);font-size:.8rem;">🧅 Olfactory</div>
  </div>
</div>
<div class="vis-card" id="ind-card">
  <div class="vis-title" id="ind-title">🔵 Litmus — Sabse Famous Indicator!</div>
  <div style="display:flex;gap:.8rem;margin:.7rem 0;" id="ind-colors">
    <div style="flex:1;border-radius:10px;padding:.8rem;text-align:center;" id="ind-acid-box">
      <div style="font-size:1.6rem;margin-bottom:.3rem;" id="ind-acid-icon">🔴</div>
      <div style="font-weight:700;font-size:.85rem;" id="ind-acid-label">Acid mein</div>
      <div style="font-size:.78rem;color:var(--sub);margin-top:.2rem;" id="ind-acid-val">Red ho jaata hai</div>
    </div>
    <div style="flex:1;border-radius:10px;padding:.8rem;text-align:center;background:rgba(255,255,255,.05);">
      <div style="font-size:1.6rem;margin-bottom:.3rem;">⚪</div>
      <div style="font-weight:700;font-size:.85rem;">Neutral mein</div>
      <div style="font-size:.78rem;color:var(--sub);margin-top:.2rem;" id="ind-neutral-val">Purple rehta hai</div>
    </div>
    <div style="flex:1;border-radius:10px;padding:.8rem;text-align:center;" id="ind-base-box">
      <div style="font-size:1.6rem;margin-bottom:.3rem;" id="ind-base-icon">🔵</div>
      <div style="font-weight:700;font-size:.85rem;" id="ind-base-label">Base mein</div>
      <div style="font-size:.78rem;color:var(--sub);margin-top:.2rem;" id="ind-base-val">Blue ho jaata hai</div>
    </div>
  </div>
  <div class="point-info" id="ind-examples" style="font-size:.82rem;margin-top:.5rem;"></div>
</div>
<div class="insight" id="ind-insight"></div>`,

// ── Visual 2: Acid Reactions Summary ──
'acid-reactions-summary': (s) => `
<div class="l-badge" style="background:rgba(255,107,53,.12);color:var(--p);">VISUAL</div>
<div class="l-h">${s.title}</div>
<div style="font-size:.84rem;color:var(--sub);margin-bottom:.75rem;line-height:1.6;">${s.intro||''}</div>
<div class="vis-card">
  <div class="vis-title">⚗️ Acid Ke Saath Reactions — 5 Rules</div>
  <div style="display:flex;flex-direction:column;gap:.55rem;" id="rxn-list">
    <div class="rxn-row" id="rxn-1" onclick="rxnClick(1)" style="cursor:pointer;border:1px solid rgba(63,185,80,.3);border-radius:10px;padding:.65rem .8rem;background:rgba(63,185,80,.06);">
      <div style="display:flex;align-items:center;gap:.6rem;">
        <span style="font-size:1.1rem;">🔩</span>
        <div>
          <div style="font-weight:700;font-size:.85rem;color:var(--green)">Acid + Metal → Salt + H₂↑</div>
          <div style="font-size:.76rem;color:var(--sub)">Click karo detail dekhne ke liye</div>
        </div>
        <span style="margin-left:auto;font-size:.8rem;color:var(--sub);" id="rxn-arr-1">▼</span>
      </div>
      <div id="rxn-det-1" style="display:none;margin-top:.5rem;font-size:.8rem;line-height:1.7;border-top:1px solid rgba(255,255,255,.07);padding-top:.5rem;">
        <strong>Example:</strong> Zn + H₂SO₄ → ZnSO₄ + H₂↑<br>
        <strong>Test:</strong> Gas ko soap bubble mein bharke candle ke paas → 'Pop' sound! 💥<br>
        <strong>Note:</strong> NaOH ke saath Zinc bhi H₂ deta hai: 2NaOH + Zn → Na₂ZnO₂ + H₂↑
      </div>
    </div>
    <div class="rxn-row" id="rxn-2" onclick="rxnClick(2)" style="cursor:pointer;border:1px solid rgba(240,180,41,.3);border-radius:10px;padding:.65rem .8rem;background:rgba(240,180,41,.06);">
      <div style="display:flex;align-items:center;gap:.6rem;">
        <span style="font-size:1.1rem;">🪨</span>
        <div>
          <div style="font-weight:700;font-size:.85rem;color:var(--gold)">Acid + Metal Carbonate → Salt + CO₂↑ + H₂O</div>
          <div style="font-size:.76rem;color:var(--sub)">Click karo detail dekhne ke liye</div>
        </div>
        <span style="margin-left:auto;font-size:.8rem;color:var(--sub);" id="rxn-arr-2">▼</span>
      </div>
      <div id="rxn-det-2" style="display:none;margin-top:.5rem;font-size:.8rem;line-height:1.7;border-top:1px solid rgba(255,255,255,.07);padding-top:.5rem;">
        <strong>Example:</strong> Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂↑<br>
        <strong>Test:</strong> CO₂ → lime water milky kar deta hai (CaCO₃ white precipitate) 🥛<br>
        <strong>Also:</strong> NaHCO₃ + HCl → NaCl + H₂O + CO₂↑<br>
        <strong>Yaad karo:</strong> Limestone, chalk, marble — sab CaCO₃ hain!
      </div>
    </div>
    <div class="rxn-row" id="rxn-3" onclick="rxnClick(3)" style="cursor:pointer;border:1px solid rgba(88,166,255,.3);border-radius:10px;padding:.65rem .8rem;background:rgba(88,166,255,.06);">
      <div style="display:flex;align-items:center;gap:.6rem;">
        <span style="font-size:1.1rem;">🧫</span>
        <div>
          <div style="font-weight:700;font-size:.85rem;color:var(--blue)">Acid + Base → Salt + H₂O (Neutralisation!)</div>
          <div style="font-size:.76rem;color:var(--sub)">Click karo detail dekhne ke liye</div>
        </div>
        <span style="margin-left:auto;font-size:.8rem;color:var(--sub);" id="rxn-arr-3">▼</span>
      </div>
      <div id="rxn-det-3" style="display:none;margin-top:.5rem;font-size:.8rem;line-height:1.7;border-top:1px solid rgba(255,255,255,.07);padding-top:.5rem;">
        <strong>Example:</strong> NaOH + HCl → NaCl + H₂O<br>
        <strong>Ion level:</strong> H⁺(aq) + OH⁻(aq) → H₂O(l) 💧<br>
        <strong>Activity 2.6:</strong> NaOH + phenolphthalein = Pink → HCl daalo → Colourless ho jaata hai!<br>
        <strong>Phir NaOH daalo</strong> → Pink wapas! (base excess ho gayi)
      </div>
    </div>
    <div class="rxn-row" id="rxn-4" onclick="rxnClick(4)" style="cursor:pointer;border:1px solid rgba(167,139,250,.3);border-radius:10px;padding:.65rem .8rem;background:rgba(167,139,250,.06);">
      <div style="display:flex;align-items:center;gap:.6rem;">
        <span style="font-size:1.1rem;">🧲</span>
        <div>
          <div style="font-weight:700;font-size:.85rem;color:#A78BFA">Acid + Metal Oxide → Salt + H₂O</div>
          <div style="font-size:.76rem;color:var(--sub)">Click karo detail dekhne ke liye</div>
        </div>
        <span style="margin-left:auto;font-size:.8rem;color:var(--sub);" id="rxn-arr-4">▼</span>
      </div>
      <div id="rxn-det-4" style="display:none;margin-top:.5rem;font-size:.8rem;line-height:1.7;border-top:1px solid rgba(255,255,255,.07);padding-top:.5rem;">
        <strong>Example:</strong> CuO + 2HCl → CuCl₂ + H₂O<br>
        <strong>Observation:</strong> Solution Blue-Green ho jaata hai (CuCl₂ ka colour!) 🟢<br>
        <strong>Yaad karo:</strong> Metal oxides = Basic oxides (base ki tarah react karte hain)
      </div>
    </div>
    <div class="rxn-row" id="rxn-5" onclick="rxnClick(5)" style="cursor:pointer;border:1px solid rgba(251,113,133,.3);border-radius:10px;padding:.65rem .8rem;background:rgba(251,113,133,.06);">
      <div style="display:flex;align-items:center;gap:.6rem;">
        <span style="font-size:1.1rem;">💨</span>
        <div>
          <div style="font-weight:700;font-size:.85rem;color:#FB7185">Non-Metal Oxide + Base → Salt + H₂O</div>
          <div style="font-size:.76rem;color:var(--sub)">Click karo detail dekhne ke liye</div>
        </div>
        <span style="margin-left:auto;font-size:.8rem;color:var(--sub);" id="rxn-arr-5">▼</span>
      </div>
      <div id="rxn-det-5" style="display:none;margin-top:.5rem;font-size:.8rem;line-height:1.7;border-top:1px solid rgba(255,255,255,.07);padding-top:.5rem;">
        <strong>Example:</strong> CO₂ + Ca(OH)₂ → CaCO₃ + H₂O<br>
        <strong>Yaad karo:</strong> Non-metallic oxides = Acidic oxides (acid ki tarah react karte hain base ke saath)<br>
        <strong>Activity 2.5:</strong> Lime water se CO₂ pass karo → Milky CaCO₃ banta hai!
      </div>
    </div>
  </div>
</div>`,

// ── Visual 3: pH Scale ──
'ph-scale': (s) => `
<div class="l-badge" style="background:rgba(88,166,255,.12);color:var(--blue);">VISUAL</div>
<div class="l-h">${s.title}</div>
<div style="font-size:.84rem;color:var(--sub);margin-bottom:.75rem;line-height:1.6;">${s.intro||''}</div>
<div class="vis-card">
  <div class="vis-title">📊 pH Scale — 0 Se 14 Tak <span class="fig-badge">NCERT Fig 2.7</span></div>
  <svg viewBox="0 0 340 60" xmlns="http://www.w3.org/2000/svg" style="width:100%;border-radius:8px;margin:.5rem 0;">
    <defs>
      <linearGradient id="phGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style="stop-color:#FF0000"/>
        <stop offset="7%" style="stop-color:#FF4500"/>
        <stop offset="14%" style="stop-color:#FF6600"/>
        <stop offset="21%" style="stop-color:#FF8C00"/>
        <stop offset="28%" style="stop-color:#FFA500"/>
        <stop offset="35%" style="stop-color:#FFD700"/>
        <stop offset="43%" style="stop-color:#ADFF2F"/>
        <stop offset="50%" style="stop-color:#00FF7F"/>
        <stop offset="57%" style="stop-color:#00CED1"/>
        <stop offset="64%" style="stop-color:#1E90FF"/>
        <stop offset="71%" style="stop-color:#0000FF"/>
        <stop offset="79%" style="stop-color:#4B0082"/>
        <stop offset="86%" style="stop-color:#6600CC"/>
        <stop offset="93%" style="stop-color:#7B00D4"/>
        <stop offset="100%" style="stop-color:#9400D3"/>
      </linearGradient>
    </defs>
    <rect x="10" y="15" width="320" height="22" rx="11" fill="url(#phGrad)"/>
    <text x="10" y="50" fill="rgba(255,255,255,.7)" font-size="7.5" font-family="Hind" text-anchor="middle">0</text>
    <text x="33" y="50" fill="rgba(255,255,255,.7)" font-size="7.5" font-family="Hind" text-anchor="middle">1</text>
    <text x="56" y="50" fill="rgba(255,255,255,.7)" font-size="7.5" font-family="Hind" text-anchor="middle">2</text>
    <text x="79" y="50" fill="rgba(255,255,255,.7)" font-size="7.5" font-family="Hind" text-anchor="middle">3</text>
    <text x="102" y="50" fill="rgba(255,255,255,.7)" font-size="7.5" font-family="Hind" text-anchor="middle">4</text>
    <text x="125" y="50" fill="rgba(255,255,255,.7)" font-size="7.5" font-family="Hind" text-anchor="middle">5</text>
    <text x="148" y="50" fill="rgba(255,255,255,.7)" font-size="7.5" font-family="Hind" text-anchor="middle">6</text>
    <text x="170" y="50" fill="rgba(255,255,255,.9)" font-size="7.5" font-family="Hind" font-weight="bold" text-anchor="middle">7</text>
    <text x="192" y="50" fill="rgba(255,255,255,.7)" font-size="7.5" font-family="Hind" text-anchor="middle">8</text>
    <text x="215" y="50" fill="rgba(255,255,255,.7)" font-size="7.5" font-family="Hind" text-anchor="middle">9</text>
    <text x="238" y="50" fill="rgba(255,255,255,.7)" font-size="7.5" font-family="Hind" text-anchor="middle">10</text>
    <text x="261" y="50" fill="rgba(255,255,255,.7)" font-size="7.5" font-family="Hind" text-anchor="middle">11</text>
    <text x="284" y="50" fill="rgba(255,255,255,.7)" font-size="7.5" font-family="Hind" text-anchor="middle">12</text>
    <text x="307" y="50" fill="rgba(255,255,255,.7)" font-size="7.5" font-family="Hind" text-anchor="middle">13</text>
    <text x="330" y="50" fill="rgba(255,255,255,.7)" font-size="7.5" font-family="Hind" text-anchor="middle">14</text>
    <line x1="170" y1="10" x2="170" y2="40" stroke="white" stroke-width="1.5" stroke-dasharray="2,2"/>
    <text x="170" y="9" fill="white" font-size="7" font-family="Hind" text-anchor="middle" font-weight="bold">NEUTRAL</text>
    <text x="70" y="9" fill="rgba(255,100,100,.9)" font-size="7" font-family="Hind" text-anchor="middle">← ACIDIC</text>
    <text x="260" y="9" fill="rgba(100,150,255,.9)" font-size="7" font-family="Hind" text-anchor="middle">BASIC →</text>
    <circle id="ph-dot" cx="170" cy="26" r="5" fill="white" stroke="rgba(0,0,0,.5)" stroke-width="1.5" style="filter:drop-shadow(0 0 4px white)"/>
  </svg>
  <div style="margin:.5rem 0;font-size:.8rem;color:var(--sub);text-align:center;">Kisi substance par click karo:</div>
  <div class="case-grid" style="grid-template-columns:repeat(3,1fr);gap:.4rem;">
    <div class="case-card" onclick="phShow('gastric',1.2)" style="padding:.5rem .3rem;cursor:pointer;">
      <div style="font-size:.7rem;font-weight:700;color:#FF4500">Gastric Juice</div>
      <div style="font-size:.65rem;color:var(--sub)">pH ≈ 1.2</div>
    </div>
    <div class="case-card" onclick="phShow('nimbu',2.2)" style="padding:.5rem .3rem;cursor:pointer;">
      <div style="font-size:.7rem;font-weight:700;color:#FF8C00">Nimbu</div>
      <div style="font-size:.65rem;color:var(--sub)">pH ≈ 2.2</div>
    </div>
    <div class="case-card" onclick="phShow('coffee',4.5)" style="padding:.5rem .3rem;cursor:pointer;">
      <div style="font-size:.7rem;font-weight:700;color:#FFD700">Coffee</div>
      <div style="font-size:.65rem;color:var(--sub)">pH ≈ 4-5</div>
    </div>
    <div class="case-card" onclick="phShow('paani',7)" style="padding:.5rem .3rem;cursor:pointer;">
      <div style="font-size:.7rem;font-weight:700;color:#00FF7F">Pure Paani</div>
      <div style="font-size:.65rem;color:var(--sub)">pH = 7</div>
    </div>
    <div class="case-card" onclick="phShow('blood',7.4)" style="padding:.5rem .3rem;cursor:pointer;">
      <div style="font-size:.7rem;font-weight:700;color:#00CED1">Blood</div>
      <div style="font-size:.65rem;color:var(--sub)">pH ≈ 7.4</div>
    </div>
    <div class="case-card" onclick="phShow('magnesia',10)" style="padding:.5rem .3rem;cursor:pointer;">
      <div style="font-size:.7rem;font-weight:700;color:#1E90FF">Milk of Magnesia</div>
      <div style="font-size:.65rem;color:var(--sub)">pH ≈ 10</div>
    </div>
  </div>
  <div class="point-info" id="ph-info" style="margin-top:.6rem;font-size:.83rem;">
    <strong style="color:var(--green)">Pure Paani</strong> — pH = 7. Bilkul neutral! Koi bhi acid ya base nahi dissolved.
  </div>
</div>
<div class="insight" id="ph-insight">
  <div class="insight-h">🔑 pH Scale Ka Raaz</div>
  Jitna <strong>kam pH</strong> → utne <strong>zyada H⁺ ions</strong> → <strong>zyada acidic</strong>!<br>
  Jitna <strong>zyada pH</strong> → utne <strong>zyada OH⁻ ions</strong> → <strong>zyada basic</strong>!
</div>`,

// ── Visual 4: Chlor-Alkali Process ──
'chlor-alkali-process': (s) => `
<div class="l-badge" style="background:rgba(88,166,255,.12);color:var(--blue);">VISUAL</div>
<div class="l-h">${s.title}</div>
<div style="font-size:.84rem;color:var(--sub);margin-bottom:.75rem;line-height:1.6;">${s.intro||''}</div>
<div class="vis-card">
  <div class="vis-title">🏭 Chlor-Alkali Process <span class="fig-badge">NCERT Fig 2.8</span></div>
  <svg viewBox="0 0 340 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;border-radius:8px;">
    <!-- Background -->
    <rect x="0" y="0" width="340" height="240" fill="rgba(255,255,255,.02)" rx="8"/>
    <!-- Tank -->
    <rect x="60" y="60" width="220" height="130" rx="8" fill="rgba(88,166,255,.08)" stroke="rgba(88,166,255,.4)" stroke-width="1.5"/>
    <!-- Brine liquid -->
    <rect x="61" y="120" width="218" height="69" rx="0" fill="rgba(88,166,255,.12)"/>
    <!-- Membrane in middle -->
    <line x1="170" y1="60" x2="170" y2="190" stroke="rgba(240,180,41,.8)" stroke-width="2.5" stroke-dasharray="5,3"/>
    <text x="170" y="55" fill="rgba(240,180,41,.9)" font-size="8" font-family="Hind" text-anchor="middle" font-weight="bold">Membrane</text>
    <!-- Anode (left) -->
    <rect x="90" y="70" width="18" height="110" rx="4" fill="rgba(255,107,53,.7)"/>
    <text x="99" y="67" fill="rgba(255,107,53,.9)" font-size="8" font-family="Hind" text-anchor="middle">Anode (+)</text>
    <!-- Cathode (right) -->
    <rect x="232" y="70" width="18" height="110" rx="4" fill="rgba(63,185,80,.7)"/>
    <text x="241" y="67" fill="rgba(63,185,80,.9)" font-size="8" font-family="Hind" text-anchor="middle">Cathode (−)</text>
    <!-- Cl2 gas left top -->
    <circle cx="99" cy="95" r="5" fill="rgba(255,230,50,.25)" stroke="rgba(255,230,50,.5)" stroke-width="1"/>
    <circle cx="110" cy="80" r="4" fill="rgba(255,230,50,.25)" stroke="rgba(255,230,50,.5)" stroke-width="1"/>
    <circle cx="88" cy="75" r="3" fill="rgba(255,230,50,.25)" stroke="rgba(255,230,50,.5)" stroke-width="1"/>
    <text x="60" y="48" fill="rgba(255,230,50,.9)" font-size="9" font-family="Hind" font-weight="bold" text-anchor="middle">Cl₂ ↑</text>
    <!-- H2 gas right top -->
    <circle cx="241" cy="95" r="5" fill="rgba(88,166,255,.25)" stroke="rgba(88,166,255,.5)" stroke-width="1"/>
    <circle cx="252" cy="80" r="4" fill="rgba(88,166,255,.25)" stroke="rgba(88,166,255,.5)" stroke-width="1"/>
    <circle cx="230" cy="75" r="3" fill="rgba(88,166,255,.25)" stroke="rgba(88,166,255,.5)" stroke-width="1"/>
    <text x="280" y="48" fill="rgba(88,166,255,.9)" font-size="9" font-family="Hind" font-weight="bold" text-anchor="middle">H₂ ↑</text>
    <!-- Ions in solution -->
    <text x="130" y="145" fill="rgba(255,255,255,.6)" font-size="8" font-family="Hind" text-anchor="middle">Cl⁻</text>
    <text x="145" y="160" fill="rgba(255,255,255,.6)" font-size="8" font-family="Hind" text-anchor="middle">OH⁻</text>
    <text x="115" y="168" fill="rgba(255,255,255,.6)" font-size="8" font-family="Hind" text-anchor="middle">Na⁺</text>
    <text x="195" y="145" fill="rgba(255,255,255,.6)" font-size="8" font-family="Hind" text-anchor="middle">H⁺</text>
    <!-- NaOH label -->
    <text x="241" y="175" fill="rgba(63,185,80,.9)" font-size="8.5" font-family="Hind" text-anchor="middle" font-weight="bold">NaOH</text>
    <text x="241" y="185" fill="rgba(63,185,80,.7)" font-size="7" font-family="Hind" text-anchor="middle">solution</text>
    <!-- Brine input -->
    <text x="20" y="150" fill="rgba(255,255,255,.6)" font-size="8" font-family="Hind" text-anchor="middle">Brine</text>
    <line x1="35" y1="148" x2="60" y2="148" stroke="rgba(255,255,255,.4)" stroke-width="1.5" marker-end="url(#arrw)"/>
    <!-- Battery connection (symbolic) -->
    <line x1="99" y1="62" x2="99" y2="38" stroke="rgba(255,107,53,.5)" stroke-width="1.5"/>
    <line x1="241" y1="62" x2="241" y2="38" stroke="rgba(63,185,80,.5)" stroke-width="1.5"/>
    <rect x="140" y="28" width="60" height="20" rx="4" fill="rgba(240,180,41,.15)" stroke="rgba(240,180,41,.4)" stroke-width="1"/>
    <text x="170" y="41" fill="rgba(240,180,41,.9)" font-size="8" font-family="Hind" text-anchor="middle" font-weight="bold">🔋 Electricity</text>
    <line x1="141" y1="38" x2="100" y2="38" stroke="rgba(240,180,41,.4)" stroke-width="1.5"/>
    <line x1="200" y1="38" x2="241" y2="38" stroke="rgba(240,180,41,.4)" stroke-width="1.5"/>
    <!-- Equation at bottom -->
    <rect x="30" y="200" width="280" height="30" rx="6" fill="rgba(255,107,53,.08)" stroke="rgba(255,107,53,.2)" stroke-width="1"/>
    <text x="170" y="219" fill="rgba(255,255,255,.85)" font-size="8" font-family="Hind" text-anchor="middle" font-weight="bold">2NaCl + 2H₂O → 2NaOH + Cl₂↑ + H₂↑</text>
  </svg>
  <div style="display:flex;gap:.5rem;margin-top:.6rem;">
    <div style="flex:1;background:rgba(255,230,50,.08);border:1px solid rgba(255,230,50,.25);border-radius:8px;padding:.5rem;font-size:.75rem;">
      <strong style="color:#FFE632">🟡 Cl₂ (Anode)</strong><br>
      <span style="color:var(--sub)">Disinfectant, PVC, pesticides, bleaching powder banana</span>
    </div>
    <div style="flex:1;background:rgba(88,166,255,.08);border:1px solid rgba(88,166,255,.25);border-radius:8px;padding:.5rem;font-size:.75rem;">
      <strong style="color:var(--blue)">🔵 H₂ (Cathode)</strong><br>
      <span style="color:var(--sub)">Fuels, margarine, ammonia for fertilisers</span>
    </div>
    <div style="flex:1;background:rgba(63,185,80,.08);border:1px solid rgba(63,185,80,.25);border-radius:8px;padding:.5rem;font-size:.75rem;">
      <strong style="color:var(--green)">🟢 NaOH</strong><br>
      <span style="color:var(--sub)">Soaps, detergents, paper, de-greasing</span>
    </div>
  </div>
</div>
<div class="insight">
  <div class="insight-h">🏭 Chlor-Alkali Ka Naam Kyun?</div>
  <strong>Chlor</strong> = Chlorine (Cl₂) &nbsp;|&nbsp; <strong>Alkali</strong> = NaOH (ek strong base/alkali hai!)<br>
  Teen products — teeno kaafi useful! NaCl ek akela substance kitna kaam ka hai! 🧂
</div>`,

// ── Fig 2.1 — Zinc + H₂SO₄ Apparatus ──
'fig-2-1-zinc-acid': (s) => `
<div class="l-badge" style="background:rgba(63,185,80,.12);color:var(--green);">NCERT FIGURE 2.1</div>
<div class="l-h">${s.title}</div>
<div style="font-size:.84rem;color:var(--sub);margin-bottom:.75rem;line-height:1.6;">${s.intro||''}</div>
<div class="vis-card">
  <div class="vis-title">🔩 Zinc + H₂SO₄ → H₂ Gas Test Apparatus <span class="fig-badge">Fig. 2.1</span></div>
  <svg viewBox="0 0 340 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;border-radius:8px;">
    <!-- Background -->
    <rect x="0" y="0" width="340" height="300" fill="rgba(255,255,255,.02)" rx="8"/>
    <!-- Stand base -->
    <rect x="18" y="270" width="80" height="8" rx="3" fill="rgba(255,255,255,.4)"/>
    <rect x="54" y="180" width="8" height="92" rx="3" fill="rgba(255,255,255,.35)"/>
    <!-- Clamp arm -->
    <rect x="54" y="195" width="40" height="6" rx="2" fill="rgba(255,255,255,.3)"/>
    <!-- Test tube (left - reaction vessel) -->
    <path d="M90 100 L90 210 Q90 225 100 225 Q110 225 110 210 L110 100 Z" fill="rgba(88,166,255,.15)" stroke="rgba(88,166,255,.6)" stroke-width="1.5"/>
    <!-- Cork on test tube -->
    <rect x="88" y="90" width="24" height="14" rx="4" fill="rgba(200,150,80,.7)" stroke="rgba(200,150,80,.9)" stroke-width="1"/>
    <text x="100" y="101" fill="rgba(200,150,80,.9)" font-size="7" font-family="Hind" text-anchor="middle">Cork</text>
    <!-- Thistle funnel (tube through cork) -->
    <line x1="100" y1="104" x2="100" y2="65" stroke="rgba(200,220,255,.6)" stroke-width="3"/>
    <ellipse cx="100" cy="58" rx="12" ry="6" fill="rgba(200,220,255,.2)" stroke="rgba(200,220,255,.6)" stroke-width="1.5"/>
    <text x="100" y="48" fill="rgba(200,220,255,.8)" font-size="7" font-family="Hind" text-anchor="middle">Thistle</text>
    <text x="100" y="57" fill="rgba(200,220,255,.8)" font-size="7" font-family="Hind" text-anchor="middle">Funnel</text>
    <!-- H2SO4 label in funnel -->
    <text x="100" y="75" fill="rgba(255,100,100,.8)" font-size="6.5" font-family="Hind" text-anchor="middle">Dilute</text>
    <text x="100" y="84" fill="rgba(255,100,100,.8)" font-size="6.5" font-family="Hind" text-anchor="middle">H₂SO₄</text>
    <!-- Zinc granules at bottom -->
    <ellipse cx="96" cy="215" rx="4" ry="3" fill="rgba(200,200,200,.7)"/>
    <ellipse cx="104" cy="218" rx="3" ry="2" fill="rgba(180,180,180,.7)"/>
    <ellipse cx="100" cy="212" rx="3" ry="2.5" fill="rgba(210,210,210,.7)"/>
    <text x="100" y="235" fill="rgba(200,200,200,.7)" font-size="6.5" font-family="Hind" text-anchor="middle">Zinc</text>
    <text x="100" y="243" fill="rgba(200,200,200,.7)" font-size="6.5" font-family="Hind" text-anchor="middle">granules</text>
    <!-- H2 gas bubbles in tube -->
    <circle cx="100" cy="190" r="3" fill="rgba(150,220,255,.3)" stroke="rgba(150,220,255,.5)" stroke-width=".8"/>
    <circle cx="103" cy="175" r="2.5" fill="rgba(150,220,255,.3)" stroke="rgba(150,220,255,.5)" stroke-width=".8"/>
    <circle cx="97" cy="160" r="2" fill="rgba(150,220,255,.3)" stroke="rgba(150,220,255,.5)" stroke-width=".8"/>
    <text x="116" y="155" fill="rgba(150,220,255,.8)" font-size="7" font-family="Hind">H₂</text>
    <text x="116" y="163" fill="rgba(150,220,255,.8)" font-size="7" font-family="Hind">bubbles</text>
    <!-- Delivery tube -->
    <path d="M110 104 L140 104 L140 120 L200 120" fill="none" stroke="rgba(200,220,255,.6)" stroke-width="2.5"/>
    <text x="155" y="113" fill="rgba(255,255,255,.5)" font-size="7" font-family="Hind" text-anchor="middle">Delivery tube</text>
    <!-- Soap solution beaker (middle) -->
    <path d="M185 155 L185 240 Q185 250 195 250 L235 250 Q245 250 245 240 L245 155 Z" fill="rgba(88,166,255,.1)" stroke="rgba(88,166,255,.5)" stroke-width="1.5"/>
    <!-- Water/soap in beaker -->
    <path d="M186 210 L186 239 Q186 248 195 248 L235 248 Q244 248 244 239 L244 210 Z" fill="rgba(88,166,255,.2)"/>
    <!-- Soap bubbles -->
    <circle cx="205" cy="195" r="8" fill="rgba(150,220,255,.15)" stroke="rgba(150,220,255,.5)" stroke-width="1.2"/>
    <circle cx="222" cy="188" r="6" fill="rgba(150,220,255,.15)" stroke="rgba(150,220,255,.5)" stroke-width="1.2"/>
    <circle cx="213" cy="175" r="5" fill="rgba(150,220,255,.15)" stroke="rgba(150,220,255,.5)" stroke-width="1.2"/>
    <text x="215" y="257" fill="rgba(88,166,255,.8)" font-size="7" font-family="Hind" text-anchor="middle">Soap solution</text>
    <text x="205" y="196" fill="rgba(255,255,255,.7)" font-size="6.5" font-family="Hind" text-anchor="middle">H₂</text>
    <text x="222" y="190" fill="rgba(255,255,255,.7)" font-size="6.5" font-family="Hind" text-anchor="middle">H₂</text>
    <!-- Delivery tube to soap -->
    <line x1="200" y1="120" x2="200" y2="210" stroke="rgba(200,220,255,.6)" stroke-width="2"/>
    <!-- Candle (right) -->
    <rect x="280" y="210" width="14" height="55" rx="3" fill="rgba(240,180,41,.3)" stroke="rgba(240,180,41,.5)" stroke-width="1"/>
    <!-- Candle flame -->
    <ellipse cx="287" cy="205" rx="5" ry="8" fill="rgba(255,150,0,.6)"/>
    <ellipse cx="287" cy="206" rx="3" ry="5" fill="rgba(255,220,50,.7)"/>
    <!-- Explosion/pop near soap bubble -->
    <text x="260" y="170" fill="#FFD700" font-size="16" font-family="Hind" text-anchor="middle">💥</text>
    <text x="260" y="185" fill="rgba(255,215,0,.9)" font-size="7.5" font-family="Hind" text-anchor="middle" font-weight="bold">'Pop' sound!</text>
    <text x="260" y="195" fill="rgba(255,215,0,.7)" font-size="7" font-family="Hind" text-anchor="middle">H₂ confirmed!</text>
    <!-- Labels -->
    <text x="58" y="260" fill="rgba(255,255,255,.5)" font-size="7" font-family="Hind" text-anchor="middle">Stand</text>
    <text x="287" y="273" fill="rgba(240,180,41,.7)" font-size="7" font-family="Hind" text-anchor="middle">Candle</text>
  </svg>
  <div class="point-info" style="font-size:.81rem;margin-top:.5rem;">
    <strong style="color:var(--green)">Reaction:</strong> Zn(s) + H₂SO₄(aq) → ZnSO₄(aq) + H₂(g)↑<br>
    <strong style="color:var(--gold)">Gas Test:</strong> H₂ gas soap bubbles mein → burning candle ke paas → <strong>'Pop' sound</strong> = Hydrogen confirmed! ✅<br>
    <span style="color:var(--sub)">Yahi test HCl, HNO₃, CH₃COOH ke saath bhi karo — sab mein H₂ gas niklegi</span>
  </div>
</div>
<div class="insight">
  <div class="insight-h">📝 Exam Tip — Diagram Banana Seekho!</div>
  Stand → Test tube (zinc granules + H₂SO₄) → Cork → Delivery tube → Soap solution beaker → Burning candle<br>
  <strong>Labels zaroori hain:</strong> Zinc granules, Dilute H₂SO₄, Delivery tube, Soap solution, H₂ gas bubbles, Pop sound
</div>`,

// ── Fig 2.2 — CO₂ through Lime Water ──
'fig-2-2-co2-limewater': (s) => `
<div class="l-badge" style="background:rgba(240,180,41,.12);color:var(--gold);">NCERT FIGURE 2.2</div>
<div class="l-h">${s.title}</div>
<div style="font-size:.84rem;color:var(--sub);margin-bottom:.75rem;line-height:1.6;">${s.intro||''}</div>
<div class="vis-card">
  <div class="vis-title">🪨 CO₂ Gas — Lime Water Milky! <span class="fig-badge">Fig. 2.2</span></div>
  <svg viewBox="0 0 340 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;border-radius:8px;">
    <rect x="0" y="0" width="340" height="280" fill="rgba(255,255,255,.02)" rx="8"/>
    <!-- Stand -->
    <rect x="15" y="250" width="70" height="7" rx="3" fill="rgba(255,255,255,.35)"/>
    <rect x="46" y="165" width="7" height="87" rx="3" fill="rgba(255,255,255,.3)"/>
    <rect x="46" y="175" width="35" height="5" rx="2" fill="rgba(255,255,255,.25)"/>
    <!-- Test tube A (left) — Na₂CO₃ + HCl -->
    <path d="M78 100 L78 190 Q78 205 88 205 Q98 205 98 190 L98 100 Z" fill="rgba(255,100,100,.1)" stroke="rgba(255,100,100,.5)" stroke-width="1.5"/>
    <rect x="76" y="90" width="24" height="12" rx="3" fill="rgba(200,150,80,.7)"/>
    <text x="88" y="100" fill="rgba(200,150,80,.9)" font-size="6.5" font-family="Hind" text-anchor="middle">Cork</text>
    <!-- Na₂CO₃ solid at bottom -->
    <rect x="80" y="190" width="16" height="12" rx="2" fill="rgba(240,240,240,.3)"/>
    <text x="88" y="220" fill="rgba(255,255,255,.6)" font-size="6" font-family="Hind" text-anchor="middle">Na₂CO₃</text>
    <text x="88" y="228" fill="rgba(255,150,150,.7)" font-size="6" font-family="Hind" text-anchor="middle">+HCl</text>
    <!-- Acid dropper (thistle funnel) -->
    <line x1="88" y1="102" x2="88" y2="68" stroke="rgba(255,100,100,.5)" stroke-width="2.5"/>
    <ellipse cx="88" cy="62" rx="10" ry="5" fill="rgba(255,100,100,.15)" stroke="rgba(255,100,100,.5)" stroke-width="1"/>
    <text x="88" y="52" fill="rgba(255,100,100,.8)" font-size="6" font-family="Hind" text-anchor="middle">Dilute HCl</text>
    <!-- CO₂ bubbles in test tube -->
    <circle cx="88" cy="175" r="3" fill="rgba(200,255,200,.25)" stroke="rgba(200,255,200,.4)" stroke-width=".8"/>
    <circle cx="85" cy="160" r="2.5" fill="rgba(200,255,200,.25)" stroke="rgba(200,255,200,.4)" stroke-width=".8"/>
    <circle cx="91" cy="148" r="2" fill="rgba(200,255,200,.25)" stroke="rgba(200,255,200,.4)" stroke-width=".8"/>
    <!-- Delivery tube (curved) -->
    <path d="M98 92 Q130 92 130 130 L130 160 Q130 170 140 170 L195 170" fill="none" stroke="rgba(200,220,255,.6)" stroke-width="2.5"/>
    <text x="135" y="142" fill="rgba(255,255,255,.45)" font-size="6.5" font-family="Hind" text-anchor="middle">Delivery</text>
    <text x="135" y="150" fill="rgba(255,255,255,.45)" font-size="6.5" font-family="Hind" text-anchor="middle">tube</text>
    <!-- Lime water flask (right) -->
    <!-- Round bottom flask shape -->
    <path d="M195 130 L215 130 L225 170 Q235 215 215 225 Q195 235 175 225 Q155 215 165 170 L175 130 Z" fill="rgba(88,166,255,.12)" stroke="rgba(88,166,255,.5)" stroke-width="1.5"/>
    <!-- Milky white precipitate forming -->
    <ellipse cx="195" cy="205" rx="25" ry="12" fill="rgba(255,255,255,.25)" stroke="rgba(255,255,255,.3)" stroke-width="1"/>
    <text x="195" y="208" fill="rgba(255,255,255,.8)" font-size="6.5" font-family="Hind" text-anchor="middle" font-weight="bold">Milky!</text>
    <!-- Lime water label -->
    <text x="195" y="250" fill="rgba(88,166,255,.8)" font-size="7" font-family="Hind" text-anchor="middle">Lime water</text>
    <text x="195" y="258" fill="rgba(88,166,255,.6)" font-size="6.5" font-family="Hind" text-anchor="middle">Ca(OH)₂</text>
    <!-- CO₂ gas entering flask -->
    <circle cx="198" cy="165" r="4" fill="rgba(200,255,200,.2)" stroke="rgba(200,255,200,.4)" stroke-width=".8"/>
    <circle cx="190" cy="175" r="3" fill="rgba(200,255,200,.2)" stroke="rgba(200,255,200,.4)" stroke-width=".8"/>
    <text x="215" y="158" fill="rgba(200,255,200,.8)" font-size="7" font-family="Hind">CO₂</text>
    <!-- Label A -->
    <text x="88" y="85" fill="rgba(255,255,255,.7)" font-size="9" font-family="Hind" text-anchor="middle" font-weight="bold">A</text>
    <!-- Arrow showing process -->
    <text x="155" y="125" fill="rgba(240,180,41,.8)" font-size="8" font-family="Hind" text-anchor="middle">→ CO₂ →</text>
    <!-- Reaction text -->
    <rect x="10" y="265" width="320" height="12" rx="4" fill="rgba(63,185,80,.08)"/>
    <text x="170" y="274" fill="rgba(255,255,255,.7)" font-size="7.5" font-family="Hind" text-anchor="middle">CO₂ + Ca(OH)₂ → CaCO₃↓ (white precipitate) + H₂O</text>
  </svg>
  <div class="point-info" style="font-size:.81rem;margin-top:.5rem;">
    <strong style="color:var(--gold)">Test Tube A:</strong> Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂↑<br>
    <strong style="color:var(--gold)">Test Tube B:</strong> NaHCO₃ + HCl → NaCl + H₂O + CO₂↑<br>
    <strong style="color:var(--green)">Lime Water Test:</strong> CO₂ → Ca(OH)₂ milky ho jaata hai (CaCO₃ white precipitate) ✅<br>
    <span style="color:var(--sub)">Excess CO₂ daalo → CaCO₃ + CO₂ + H₂O → Ca(HCO₃)₂ (soluble) — milkiness khatam!</span>
  </div>
</div>
<div class="insight">
  <div class="insight-h">📝 Exam Tip — Fig 2.2 Diagram</div>
  Stand → Test tube (Na₂CO₃ + HCl) → Cork → Delivery tube → Round-bottom flask (lime water)<br>
  <strong>Key label:</strong> Lime water milky = CO₂ gas confirm! CaCO₃ (white precipitate) banta hai.
</div>`,

// ── Fig 2.3 — Bulb Circuit ──
'fig-2-3-bulb-circuit': (s) => `
<div class="l-badge" style="background:rgba(240,180,41,.12);color:var(--gold);">NCERT FIGURE 2.3</div>
<div class="l-h">${s.title}</div>
<div style="font-size:.84rem;color:var(--sub);margin-bottom:.75rem;line-height:1.6;">${s.intro||''}</div>
<div class="vis-card">
  <div class="vis-title">💡 Conductivity Test — Bulb Jala? <span class="fig-badge">Fig. 2.3</span></div>
  <div class="case-grid" style="grid-template-columns:1fr 1fr;gap:.5rem;margin-bottom:.7rem;">
    <div class="case-card sel" id="bulb-btn-1" onclick="bulbShow(1)" style="padding:.5rem;">
      <div style="font-size:.75rem;font-weight:700;color:var(--green)">💡 Acid Solution</div>
      <div style="font-size:.68rem;color:var(--sub)">HCl / H₂SO₄</div>
    </div>
    <div class="case-card" id="bulb-btn-2" onclick="bulbShow(2)" style="padding:.5rem;">
      <div style="font-size:.75rem;font-weight:700;color:var(--red)">💡 Glucose/Alcohol</div>
      <div style="font-size:.68rem;color:var(--sub)">No ions!</div>
    </div>
  </div>
  <svg viewBox="0 0 340 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;border-radius:8px;" id="bulb-svg">
    <rect x="0" y="0" width="340" height="240" fill="rgba(255,255,255,.02)" rx="8"/>
    <!-- Battery (top left) -->
    <rect x="20" y="20" width="60" height="28" rx="5" fill="rgba(240,180,41,.15)" stroke="rgba(240,180,41,.5)" stroke-width="1.5"/>
    <text x="50" y="31" fill="rgba(240,180,41,.9)" font-size="7.5" font-family="Hind" text-anchor="middle" font-weight="bold">🔋 6V Battery</text>
    <text x="50" y="42" fill="rgba(240,180,41,.7)" font-size="6.5" font-family="Hind" text-anchor="middle">+ / −</text>
    <!-- Switch -->
    <circle cx="155" cy="28" r="12" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.3)" stroke-width="1.5"/>
    <text x="155" y="26" fill="rgba(255,255,255,.7)" font-size="7" font-family="Hind" text-anchor="middle">Switch</text>
    <line x1="148" y1="32" x2="162" y2="24" stroke="rgba(255,255,255,.6)" stroke-width="1.5" id="switch-line"/>
    <!-- Bulb -->
    <circle cx="255" cy="35" r="18" fill="rgba(240,180,41,.08)" stroke="rgba(240,180,41,.5)" stroke-width="1.5" id="bulb-circle"/>
    <text x="255" y="31" fill="rgba(240,180,41,.8)" font-size="11" font-family="Hind" text-anchor="middle" id="bulb-emoji">💡</text>
    <text x="255" y="43" fill="rgba(255,255,255,.5)" font-size="7" font-family="Hind" text-anchor="middle">Bulb</text>
    <!-- Wires -->
    <!-- Battery + to switch -->
    <line x1="80" y1="28" x2="143" y2="28" stroke="rgba(255,255,255,.4)" stroke-width="1.5"/>
    <!-- Switch to bulb -->
    <line x1="167" y1="28" x2="237" y2="28" stroke="rgba(255,255,255,.4)" stroke-width="1.5"/>
    <!-- Bulb to nail right -->
    <line x1="273" y1="28" x2="310" y2="28" stroke="rgba(255,255,255,.4)" stroke-width="1.5"/>
    <line x1="310" y1="28" x2="310" y2="130" stroke="rgba(255,255,255,.4)" stroke-width="1.5"/>
    <!-- Battery - to nail left -->
    <line x1="20" y1="34" x2="20" y2="130" stroke="rgba(255,255,255,.4)" stroke-width="1.5"/>
    <!-- Beaker -->
    <path d="M60 130 L60 215 Q60 225 75 225 L285 225 Q300 225 300 215 L300 130 Z" fill="rgba(88,166,255,.08)" stroke="rgba(88,166,255,.4)" stroke-width="1.5"/>
    <!-- Solution in beaker -->
    <path d="M61 175 L61 214 Q61 223 75 223 L285 223 Q299 223 299 214 L299 175 Z" fill="rgba(88,166,255,.15)" id="solution-fill"/>
    <!-- Nails as electrodes -->
    <rect x="17" y="125" width="6" height="80" rx="2" fill="rgba(200,200,200,.7)" id="nail-left"/>
    <rect x="307" y="125" width="6" height="80" rx="2" fill="rgba(200,200,200,.7)" id="nail-right"/>
    <text x="20" y="120" fill="rgba(200,200,200,.7)" font-size="6.5" font-family="Hind" text-anchor="middle">Nail</text>
    <text x="310" y="120" fill="rgba(200,200,200,.7)" font-size="6.5" font-family="Hind" text-anchor="middle">Nail</text>
    <!-- Rubber cork -->
    <rect x="50" y="126" width="30" height="10" rx="3" fill="rgba(180,140,70,.6)"/>
    <text x="65" y="134" fill="rgba(200,160,80,.8)" font-size="6" font-family="Hind" text-anchor="middle">Cork</text>
    <!-- Solution label -->
    <text x="180" y="200" fill="rgba(255,255,255,.7)" font-size="8.5" font-family="Hind" text-anchor="middle" font-weight="bold" id="solution-label">Dilute HCl</text>
    <!-- Ions in solution (for acid) -->
    <text x="130" y="188" fill="rgba(255,100,100,.7)" font-size="9" font-family="Hind" text-anchor="middle" id="ion1">H⁺</text>
    <text x="180" y="192" fill="rgba(100,100,255,.7)" font-size="9" font-family="Hind" text-anchor="middle" id="ion2">Cl⁻</text>
    <text x="230" y="186" fill="rgba(255,100,100,.7)" font-size="9" font-family="Hind" text-anchor="middle" id="ion3">H⁺</text>
    <!-- Result label -->
    <text x="180" y="238" fill="rgba(255,255,255,.6)" font-size="7.5" font-family="Hind" text-anchor="middle" id="bulb-result">✅ Bulb jala! → Ions hain → Current flow hua!</text>
  </svg>
  <div class="insight" id="bulb-insight">
    <div class="insight-h">💡 Bulb Kab Jalta Hai?</div>
    Jab solution mein <strong>ions</strong> hon (H⁺ ya OH⁻ ya koi bhi charged particle) → current flow hota hai → bulb jalta hai!<br>
    <strong>HCl, H₂SO₄</strong> → ions dete hain → bulb jalta hai ✅<br>
    <strong>Glucose, Alcohol</strong> → ions nahi dete → bulb nahi jalta ❌
  </div>
</div>`,

// ── Fig 2.4 — HCl Gas Preparation ──
'fig-2-4-hcl-gas': (s) => `
<div class="l-badge" style="background:rgba(88,166,255,.12);color:var(--blue);">NCERT FIGURE 2.4</div>
<div class="l-h">${s.title}</div>
<div style="font-size:.84rem;color:var(--sub);margin-bottom:.75rem;line-height:1.6;">${s.intro||''}</div>
<div class="vis-card">
  <div class="vis-title">🧪 HCl Gas Preparation — Dry vs Wet Test <span class="fig-badge">Fig. 2.4</span></div>
  <svg viewBox="0 0 340 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;border-radius:8px;">
    <rect x="0" y="0" width="340" height="280" fill="rgba(255,255,255,.02)" rx="8"/>
    <!-- Tongs holding test tube (left) -->
    <text x="30" y="100" fill="rgba(255,255,255,.5)" font-size="7" font-family="Hind" text-anchor="middle">Tongs</text>
    <!-- Tong arms -->
    <line x1="20" y1="105" x2="50" y2="125" stroke="rgba(200,200,200,.5)" stroke-width="2.5"/>
    <line x1="40" y1="105" x2="50" y2="125" stroke="rgba(200,200,200,.5)" stroke-width="2.5"/>
    <!-- Test tube with NaCl + H₂SO₄ -->
    <path d="M42 115 L42 200 Q42 215 52 215 Q62 215 62 200 L62 115 Z" fill="rgba(255,200,50,.1)" stroke="rgba(255,200,50,.5)" stroke-width="1.5"/>
    <!-- Dropper on top for H₂SO₄ -->
    <rect x="40" y="100" width="24" height="16" rx="3" fill="rgba(200,150,80,.6)"/>
    <text x="52" y="110" fill="rgba(200,150,80,.9)" font-size="6" font-family="Hind" text-anchor="middle">Cork</text>
    <!-- NaCl solid -->
    <rect x="44" y="200" width="16" height="12" rx="2" fill="rgba(240,240,240,.3)"/>
    <text x="52" y="228" fill="rgba(255,255,255,.6)" font-size="6.5" font-family="Hind" text-anchor="middle">Sodium</text>
    <text x="52" y="236" fill="rgba(255,255,255,.6)" font-size="6.5" font-family="Hind" text-anchor="middle">Chloride</text>
    <!-- H₂SO₄ Dropper -->
    <rect x="38" y="65" width="28" height="36" rx="4" fill="rgba(255,150,50,.1)" stroke="rgba(255,150,50,.4)" stroke-width="1"/>
    <line x1="52" y1="101" x2="52" y2="116" stroke="rgba(255,150,50,.5)" stroke-width="2"/>
    <text x="52" y="80" fill="rgba(255,150,50,.8)" font-size="6.5" font-family="Hind" text-anchor="middle">Conc.</text>
    <text x="52" y="89" fill="rgba(255,150,50,.8)" font-size="6.5" font-family="Hind" text-anchor="middle">H₂SO₄</text>
    <text x="22" y="72" fill="rgba(255,255,255,.5)" font-size="6.5" font-family="Hind" text-anchor="middle">Dropper</text>
    <!-- HCl gas bubbles -->
    <circle cx="52" cy="175" r="3.5" fill="rgba(255,255,150,.2)" stroke="rgba(255,255,150,.4)" stroke-width=".8"/>
    <circle cx="55" cy="158" r="3" fill="rgba(255,255,150,.2)" stroke="rgba(255,255,150,.4)" stroke-width=".8"/>
    <!-- Delivery tube -->
    <path d="M62 108 Q90 108 90 90 L90 70 Q90 60 100 60 L145 60" fill="none" stroke="rgba(200,220,255,.6)" stroke-width="2.5"/>
    <text x="95" y="50" fill="rgba(200,220,255,.6)" font-size="7" font-family="Hind" text-anchor="middle">HCl gas →</text>
    <!-- Guard tube (drying tube with CaCl₂) -->
    <rect x="145" y="50" width="50" height="22" rx="6" fill="rgba(200,150,100,.15)" stroke="rgba(200,150,100,.4)" stroke-width="1.2"/>
    <text x="170" y="60" fill="rgba(200,150,100,.8)" font-size="6.5" font-family="Hind" text-anchor="middle">Guard tube</text>
    <text x="170" y="68" fill="rgba(200,150,100,.6)" font-size="6" font-family="Hind" text-anchor="middle">(CaCl₂)</text>
    <!-- Tube after drying -->
    <line x1="195" y1="61" x2="230" y2="61" stroke="rgba(200,220,255,.6)" stroke-width="2.5"/>
    <!-- DRY Litmus paper (right top) -->
    <rect x="230" y="40" width="35" height="22" rx="3" fill="rgba(150,150,255,.2)" stroke="rgba(150,150,255,.5)" stroke-width="1.2"/>
    <text x="247" y="52" fill="rgba(150,150,255,.9)" font-size="7" font-family="Hind" text-anchor="middle" font-weight="bold">DRY</text>
    <text x="247" y="60" fill="rgba(150,150,255,.7)" font-size="6.5" font-family="Hind" text-anchor="middle">Litmus</text>
    <text x="247" y="30" fill="rgba(255,100,100,.8)" font-size="7" font-family="Hind" text-anchor="middle">No change ❌</text>
    <!-- Wet Litmus paper (right bottom) -->
    <rect x="230" y="95" width="35" height="22" rx="3" fill="rgba(100,200,100,.2)" stroke="rgba(100,200,100,.5)" stroke-width="1.2"/>
    <text x="247" y="107" fill="rgba(100,200,100,.9)" font-size="7" font-family="Hind" text-anchor="middle" font-weight="bold">WET</text>
    <text x="247" y="115" fill="rgba(100,200,100,.7)" font-size="6.5" font-family="Hind" text-anchor="middle">Litmus</text>
    <text x="247" y="85" fill="rgba(63,185,80,.9)" font-size="7" font-family="Hind" text-anchor="middle">Red! ✅</text>
    <!-- Arrow to wet litmus -->
    <line x1="230" y1="61" x2="230" y2="95" stroke="rgba(200,220,255,.5)" stroke-width="1.5"/>
    <!-- Moist litmus paper (top right separate) -->
    <rect x="290" y="40" width="40" height="18" rx="3" fill="rgba(100,200,100,.25)" stroke="rgba(100,200,100,.5)" stroke-width="1.2"/>
    <text x="310" y="52" fill="rgba(100,200,100,.9)" font-size="7" font-family="Hind" text-anchor="middle">Moist litmus</text>
    <text x="310" y="30" fill="rgba(63,185,80,.9)" font-size="7" font-family="Hind" text-anchor="middle" font-weight="bold">Red! ✅</text>
    <!-- Labels -->
    <rect x="10" y="252" width="320" height="24" rx="5" fill="rgba(88,166,255,.08)" stroke="rgba(88,166,255,.2)" stroke-width="1"/>
    <text x="170" y="262" fill="rgba(255,255,255,.8)" font-size="7.5" font-family="Hind" text-anchor="middle" font-weight="bold">NaCl(s) + H₂SO₄(conc.) → NaHSO₄ + HCl(g)↑</text>
    <text x="170" y="272" fill="rgba(255,255,255,.6)" font-size="7" font-family="Hind" text-anchor="middle">Dry HCl → No colour change | Wet/Moist HCl → Blue litmus turns RED ✅</text>
  </svg>
  <div class="point-info" style="font-size:.81rem;margin-top:.5rem;">
    <strong style="color:var(--blue)">Key Discovery (Activity 2.9):</strong><br>
    Dry HCl gas → dry litmus paper → <strong style="color:var(--red)">No change ❌</strong> (paani nahi = H⁺ ions nahi)<br>
    Wet/Moist litmus paper → HCl gas touch kare → <strong style="color:var(--green)">Red ho jaata hai ✅</strong><br>
    <span style="color:var(--sub)">H⁺ ions SIRF paani mein bante hain: HCl + H₂O → H₃O⁺ + Cl⁻</span>
  </div>
</div>
<div class="insight">
  <div class="insight-h">📝 Exam Tip — Fig 2.4</div>
  Dropper (H₂SO₄) → Test tube (NaCl) → Cork → Delivery tube → Guard tube (CaCl₂ drying) → Dry litmus / Wet litmus<br>
  <strong>Conclusion:</strong> Acids acidic behaviour SIRF paani ki presence mein dikhate hain!
</div>`,

// ── Fig 2.5 — Warning Sign ──
'fig-2-5-warning': (s) => `
<div class="l-badge" style="background:rgba(255,100,100,.12);color:var(--red);">NCERT FIGURE 2.5</div>
<div class="l-h">${s.title}</div>
<div style="font-size:.84rem;color:var(--sub);margin-bottom:.75rem;line-height:1.6;">${s.intro||''}</div>
<div class="vis-card">
  <div class="vis-title">⚠️ Safety Warning — Acid aur Base Containers <span class="fig-badge">Fig. 2.5</span></div>
  <div style="display:flex;gap:1rem;align-items:center;padding:.8rem 0;">
    <div style="flex:0 0 100px;text-align:center;">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="width:90px;height:90px;">
        <polygon points="50,5 95,90 5,90" fill="rgba(255,200,0,.15)" stroke="#FFD700" stroke-width="3"/>
        <text x="50" y="55" font-size="36" font-family="Arial" text-anchor="middle">⚠️</text>
        <text x="50" y="78" fill="#FFD700" font-size="10" font-family="Hind" text-anchor="middle" font-weight="bold">DANGER</text>
      </svg>
      <div style="font-size:.72rem;color:var(--sub);margin-top:.3rem;">NCERT Fig 2.5<br>Corrosive symbol</div>
    </div>
    <div style="flex:1;font-size:.82rem;line-height:1.7;">
      <div style="background:rgba(255,100,100,.1);border:1px solid rgba(255,100,100,.3);border-radius:8px;padding:.6rem;margin-bottom:.5rem;">
        <strong style="color:var(--red)">⚠️ SAFETY RULE (NCERT):</strong><br>
        Acid ko hamesha <strong>paani mein daalo</strong><br>
        <strong style="color:var(--red)">Kabhi paani ko acid mein mat daalo!</strong>
      </div>
      <div style="font-size:.78rem;color:var(--sub);line-height:1.6;">
        <strong>Kyun?</strong> Acid + Paani = Exothermic reaction<br>
        • Concentrated acid mein paani daalne se → ek jagah BAHUT zyada heat<br>
        • Mixture SPLASH kar sakta hai → <strong>Burn injury!</strong><br>
        • Glass container TUT sakta hai → excessive local heating se!<br><br>
        <strong>Sahi tarika:</strong> Paani pehle lo → acid dheere-dheere daalo (stirring ke saath)
      </div>
    </div>
  </div>
  <div style="display:flex;gap:.5rem;margin-top:.3rem;">
    <div style="flex:1;background:rgba(255,100,100,.08);border:1px solid rgba(255,100,100,.25);border-radius:8px;padding:.6rem;font-size:.75rem;">
      <strong style="color:var(--red)">❌ Galat Tarika</strong><br>
      <span style="color:var(--sub)">Paani ko concentrated H₂SO₄ mein daalna</span><br>
      <span style="color:var(--red)">→ Splash → Burns → Container break!</span>
    </div>
    <div style="flex:1;background:rgba(63,185,80,.08);border:1px solid rgba(63,185,80,.25);border-radius:8px;padding:.6rem;font-size:.75rem;">
      <strong style="color:var(--green)">✅ Sahi Tarika</strong><br>
      <span style="color:var(--sub)">Concentrated acid ko paani mein dheere daalna</span><br>
      <span style="color:var(--green)">→ Safe dilution → Heat distribute ho jaati hai!</span>
    </div>
  </div>
</div>
<div class="insight">
  <div class="insight-h">🔑 Golden Safety Rule — Yaad Karo!</div>
  <strong>"A to W"</strong> = <strong>A</strong>cid to <strong>W</strong>ater (hamesha acid PAANI mein daalo)<br>
  <strong>"W to A" = WRONG!</strong> = Water to Acid (KABHI NAHI!)
</div>`,

// ── Fig 2.6 — pH Variation ──
'fig-2-6-ph-variation': (s) => `
<div class="l-badge" style="background:rgba(88,166,255,.12);color:var(--blue);">NCERT FIGURE 2.6</div>
<div class="l-h">${s.title}</div>
<div style="font-size:.84rem;color:var(--sub);margin-bottom:.75rem;line-height:1.6;">${s.intro||''}</div>
<div class="vis-card">
  <div class="vis-title">📉 H⁺ aur OH⁻ Concentration vs pH <span class="fig-badge">Fig. 2.6</span></div>
  <svg viewBox="0 0 340 180" xmlns="http://www.w3.org/2000/svg" style="width:100%;border-radius:8px;">
    <rect x="0" y="0" width="340" height="180" fill="rgba(255,255,255,.02)" rx="8"/>
    <!-- pH scale bar -->
    <defs>
      <linearGradient id="phGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style="stop-color:#FF0000"/>
        <stop offset="50%" style="stop-color:#00FF7F"/>
        <stop offset="100%" style="stop-color:#7B00D4"/>
      </linearGradient>
    </defs>
    <rect x="20" y="60" width="300" height="25" rx="4" fill="url(#phGrad2)"/>
    <!-- pH numbers -->
    <text x="20" y="55" fill="rgba(255,255,255,.7)" font-size="8" font-family="Hind" text-anchor="middle">0</text>
    <text x="170" y="55" fill="white" font-size="8" font-family="Hind" text-anchor="middle" font-weight="bold">7</text>
    <text x="320" y="55" fill="rgba(255,255,255,.7)" font-size="8" font-family="Hind" text-anchor="middle">14</text>
    <!-- Labels on scale -->
    <text x="85" y="77" fill="white" font-size="7.5" font-family="Hind" text-anchor="middle" font-weight="bold">ACIDIC</text>
    <text x="170" y="77" fill="white" font-size="7.5" font-family="Hind" text-anchor="middle" font-weight="bold">NEUTRAL</text>
    <text x="255" y="77" fill="white" font-size="7.5" font-family="Hind" text-anchor="middle" font-weight="bold">BASIC</text>
    <!-- H+ arrow (left to right = decreasing) -->
    <rect x="20" y="100" width="300" height="14" rx="3" fill="rgba(255,100,100,.15)" stroke="rgba(255,100,100,.3)" stroke-width="1"/>
    <polygon points="20,107 50,100 50,114" fill="rgba(255,100,100,.6)"/>
    <text x="155" y="111" fill="rgba(255,150,150,.9)" font-size="8" font-family="Hind" text-anchor="middle">H⁺ ion concentration ← increasing</text>
    <!-- OH- arrow (right to left = increasing from right) -->
    <rect x="20" y="122" width="300" height="14" rx="3" fill="rgba(88,166,255,.15)" stroke="rgba(88,166,255,.3)" stroke-width="1"/>
    <polygon points="320,129 290,122 290,136" fill="rgba(88,166,255,.6)"/>
    <text x="155" y="133" fill="rgba(150,200,255,.9)" font-size="8" font-family="Hind" text-anchor="middle">OH⁻ ion concentration → increasing</text>
    <!-- Neutral marker -->
    <line x1="170" y1="58" x2="170" y2="138" stroke="white" stroke-width="1" stroke-dasharray="3,2"/>
    <!-- Bottom labels -->
    <text x="85" y="155" fill="rgba(255,150,150,.8)" font-size="8" font-family="Hind" text-anchor="middle">Zyada H⁺ → Zyada Acidic</text>
    <text x="85" y="165" fill="rgba(255,150,150,.7)" font-size="7.5" font-family="Hind" text-anchor="middle">Low pH (0 ke paas)</text>
    <text x="255" y="155" fill="rgba(150,200,255,.8)" font-size="8" font-family="Hind" text-anchor="middle">Zyada OH⁻ → Zyada Basic</text>
    <text x="255" y="165" fill="rgba(150,200,255,.7)" font-size="7.5" font-family="Hind" text-anchor="middle">High pH (14 ke paas)</text>
    <text x="170" y="155" fill="rgba(255,255,255,.7)" font-size="8" font-family="Hind" text-anchor="middle" font-weight="bold">pH = 7</text>
    <text x="170" y="165" fill="rgba(255,255,255,.55)" font-size="7.5" font-family="Hind" text-anchor="middle">H⁺ = OH⁻</text>
    <!-- Acidic nature label -->
    <text x="20" y="32" fill="rgba(255,100,100,.8)" font-size="8" font-family="Hind">← Acidic nature increasing</text>
    <text x="180" y="32" fill="rgba(150,200,255,.8)" font-size="8" font-family="Hind">Basic nature increasing →</text>
  </svg>
  <div class="point-info" style="font-size:.82rem;margin-top:.5rem;">
    <strong style="color:var(--red)">H⁺ concentration ↑ → pH ↓</strong> (Zyada acid = kam pH number)<br>
    <strong style="color:var(--blue)">OH⁻ concentration ↑ → pH ↑</strong> (Zyada base = zyada pH number)<br>
    <strong style="color:var(--green)">pH 7 = Neutral</strong> → H⁺ aur OH⁻ ions ki concentration equal hoti hai
  </div>
</div>
<div class="insight">
  <div class="insight-h">🔑 Inverse Relation Yaad Karo!</div>
  pH aur H⁺ concentration mein <strong>ULTA (inverse) relation</strong> hai!<br>
  H⁺ BADHTA hai → pH GHATTA hai (not badhta!)<br>
  Gastric juice mein bahut H⁺ → pH = 1.2 (bahut kam number!)
</div>`,

// ── Fig 2.9 — CuSO₄ Heating ──
'fig-2-9-cuso4-heating': (s) => `
<div class="l-badge" style="background:rgba(88,166,255,.12);color:var(--blue);">NCERT FIGURE 2.9</div>
<div class="l-h">${s.title}</div>
<div style="font-size:.84rem;color:var(--sub);margin-bottom:.75rem;line-height:1.6;">${s.intro||''}</div>
<div class="vis-card">
  <div class="vis-title">🔵→⬜ Water of Crystallisation — CuSO₄ Activity <span class="fig-badge">Fig. 2.9</span></div>
  <div class="case-grid" style="grid-template-columns:1fr 1fr;gap:.5rem;margin-bottom:.7rem;">
    <div class="case-card sel" id="cu-btn-1" onclick="cuShow(1)" style="padding:.5rem;">
      <div style="font-size:.75rem;font-weight:700;color:var(--blue)">🔵 Before Heating</div>
      <div style="font-size:.68rem;color:var(--sub)">CuSO₄·5H₂O — Blue</div>
    </div>
    <div class="case-card" id="cu-btn-2" onclick="cuShow(2)" style="padding:.5rem;">
      <div style="font-size:.75rem;font-weight:700;color:var(--sub)">⬜ After Heating</div>
      <div style="font-size:.68rem;color:var(--sub)">CuSO₄ — White</div>
    </div>
  </div>
  <svg viewBox="0 0 340 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;border-radius:8px;" id="cu-svg">
    <rect x="0" y="0" width="340" height="240" fill="rgba(255,255,255,.02)" rx="8"/>
    <!-- Tongs at top -->
    <line x1="125" y1="20" x2="145" y2="55" stroke="rgba(200,200,200,.5)" stroke-width="3" stroke-linecap="round"/>
    <line x1="155" y1="20" x2="145" y2="55" stroke="rgba(200,200,200,.5)" stroke-width="3" stroke-linecap="round"/>
    <text x="140" y="16" fill="rgba(255,255,255,.5)" font-size="7" font-family="Hind" text-anchor="middle">Tongs</text>
    <!-- Boiling tube -->
    <path d="M120 55 L120 180 Q120 198 140 198 Q160 198 160 180 L160 55 Z" fill="rgba(88,166,255,.08)" stroke="rgba(200,220,255,.5)" stroke-width="1.5" id="cu-tube"/>
    <!-- Crystal at bottom -->
    <rect x="125" y="175" width="30" height="18" rx="4" fill="rgba(30,100,255,.4)" id="cu-crystal" stroke="rgba(30,150,255,.6)" stroke-width="1"/>
    <text x="140" y="187" fill="white" font-size="8" font-family="Hind" text-anchor="middle" font-weight="bold" id="cu-crystal-label">CuSO₄·5H₂O</text>
    <!-- Water droplets on walls (hidden initially) -->
    <circle cx="122" cy="120" r="3" fill="rgba(150,220,255,.0)" id="drop1"/>
    <circle cx="122" cy="100" r="2.5" fill="rgba(150,220,255,.0)" id="drop2"/>
    <circle cx="158" cy="115" r="3" fill="rgba(150,220,255,.0)" id="drop3"/>
    <circle cx="158" cy="95" r="2.5" fill="rgba(150,220,255,.0)" id="drop4"/>
    <!-- Burner at bottom -->
    <rect x="100" y="205" width="80" height="15" rx="4" fill="rgba(200,200,200,.2)" stroke="rgba(200,200,200,.3)" stroke-width="1"/>
    <text x="140" y="216" fill="rgba(200,200,200,.6)" font-size="7" font-family="Hind" text-anchor="middle">Burner</text>
    <!-- Flame -->
    <ellipse cx="140" cy="204" rx="15" ry="6" fill="rgba(255,150,0,.3)" id="cu-flame"/>
    <ellipse cx="140" cy="202" rx="10" ry="4" fill="rgba(255,220,50,.4)" id="cu-flame2"/>
    <!-- Result box -->
    <rect x="190" y="80" width="135" height="100" rx="8" fill="rgba(255,255,255,.04)" stroke="rgba(255,255,255,.1)" stroke-width="1"/>
    <text x="257" y="96" fill="rgba(255,255,255,.7)" font-size="8" font-family="Hind" text-anchor="middle" font-weight="bold" id="cu-result-title">Before Heating:</text>
    <text x="257" y="110" fill="rgba(30,150,255,.9)" font-size="8" font-family="Hind" text-anchor="middle" font-weight="bold" id="cu-formula">CuSO₄·5H₂O</text>
    <text x="257" y="124" fill="rgba(255,255,255,.6)" font-size="7.5" font-family="Hind" text-anchor="middle" id="cu-color-label">Colour: Blue 🔵</text>
    <text x="257" y="140" fill="rgba(255,255,255,.55)" font-size="7.5" font-family="Hind" text-anchor="middle" id="cu-water-label">Water molecules: 5</text>
    <text x="257" y="156" fill="rgba(255,255,255,.55)" font-size="7" font-family="Hind" text-anchor="middle" id="cu-state">State: Hydrated</text>
    <text x="257" y="172" fill="rgba(63,185,80,.8)" font-size="7.5" font-family="Hind" text-anchor="middle" id="cu-note"></text>
  </svg>
  <div class="point-info" style="font-size:.81rem;margin-top:.5rem;" id="cu-info">
    <strong style="color:var(--blue)">CuSO₄·5H₂O</strong> = Blue vitriol. 5 paani ke molecules crystal mein bound hain.<br>
    Garam karo → paani nikal jaata hai → <strong>safed anhydrous CuSO₄</strong><br>
    Phir paani daalo → <strong>neela colour wapas!</strong> (hydration phir se hoti hai)
  </div>
</div>
<div class="insight">
  <div class="insight-h">💎 Water of Crystallisation Definition</div>
  <strong>Fixed number of water molecules</strong> jo salt ke ek formula unit mein present hoti hain.<br>
  CuSO₄·<strong>5</strong>H₂O | Na₂CO₃·<strong>10</strong>H₂O | CaSO₄·<strong>2</strong>H₂O (Gypsum) | CaSO₄·<strong>½</strong>H₂O (POP)
</div>`,

// ── Fig 2.10 — Fire Extinguisher ──
'fig-2-10-fire-extinguisher': (s) => `
<div class="l-badge" style="background:rgba(255,107,53,.12);color:var(--p);">NCERT FIGURE 2.10</div>
<div class="l-h">${s.title}</div>
<div style="font-size:.84rem;color:var(--sub);margin-bottom:.75rem;line-height:1.6;">${s.intro||''}</div>
<div class="vis-card">
  <div class="vis-title">🔥 Soda-Acid Fire Extinguisher <span class="fig-badge">Fig. 2.10</span></div>
  <div class="case-grid" style="grid-template-columns:1fr 1fr;gap:.6rem;">
    <!-- Diagram (a) — Setup -->
    <div>
      <div style="text-align:center;font-size:.75rem;color:var(--sub);margin-bottom:.3rem;">(a) — Setup (ready state)</div>
      <svg viewBox="0 0 150 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;border-radius:8px;">
        <rect x="0" y="0" width="150" height="220" fill="rgba(255,255,255,.02)" rx="6"/>
        <!-- Wash bottle body -->
        <path d="M30 60 L30 185 Q30 200 45 200 L105 200 Q120 200 120 185 L120 60 Z" fill="rgba(88,166,255,.1)" stroke="rgba(88,166,255,.4)" stroke-width="1.5"/>
        <!-- Cork/lid -->
        <rect x="28" y="48" width="94" height="16" rx="5" fill="rgba(200,150,80,.6)" stroke="rgba(200,150,80,.8)" stroke-width="1"/>
        <text x="75" y="59" fill="rgba(200,150,80,.9)" font-size="7" font-family="Hind" text-anchor="middle">Cork/Thread</text>
        <!-- Ignition tube (small, inside, with H₂SO₄) -->
        <rect x="55" y="65" width="18" height="55" rx="4" fill="rgba(255,100,50,.15)" stroke="rgba(255,100,50,.4)" stroke-width="1.2"/>
        <text x="64" y="80" fill="rgba(255,150,100,.8)" font-size="5.5" font-family="Hind" text-anchor="middle">Ignition</text>
        <text x="64" y="88" fill="rgba(255,150,100,.8)" font-size="5.5" font-family="Hind" text-anchor="middle">tube</text>
        <text x="64" y="100" fill="rgba(255,150,100,.7)" font-size="5.5" font-family="Hind" text-anchor="middle">H₂SO₄</text>
        <!-- NaHCO₃ solution at bottom -->
        <path d="M31 145 L31 184 Q31 198 45 198 L105 198 Q119 198 119 184 L119 145 Z" fill="rgba(63,185,80,.15)"/>
        <text x="75" y="175" fill="rgba(63,185,80,.8)" font-size="7" font-family="Hind" text-anchor="middle">NaHCO₃</text>
        <text x="75" y="184" fill="rgba(63,185,80,.7)" font-size="7" font-family="Hind" text-anchor="middle">solution</text>
        <!-- Nozzle tube going up and out -->
        <line x1="75" y1="48" x2="75" y2="18" stroke="rgba(200,220,255,.6)" stroke-width="3"/>
        <path d="M75 18 Q75 8 95 8" fill="none" stroke="rgba(200,220,255,.6)" stroke-width="3"/>
        <text x="110" y="11" fill="rgba(200,220,255,.7)" font-size="6.5" font-family="Hind">Nozzle</text>
        <text x="30" y="38" fill="rgba(255,255,255,.5)" font-size="6" font-family="Hind">Wash bottle</text>
      </svg>
    </div>
    <!-- Diagram (b) — In use -->
    <div>
      <div style="text-align:center;font-size:.75rem;color:var(--sub);margin-bottom:.3rem;">(b) — In use (tilt kiya!)</div>
      <svg viewBox="0 0 150 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;border-radius:8px;">
        <rect x="0" y="0" width="150" height="220" fill="rgba(255,255,255,.02)" rx="6"/>
        <!-- Tilted bottle (rotated roughly 30deg) -->
        <g transform="rotate(-25, 75, 120)">
          <path d="M30 60 L30 185 Q30 200 45 200 L105 200 Q120 200 120 185 L120 60 Z" fill="rgba(88,166,255,.1)" stroke="rgba(88,166,255,.4)" stroke-width="1.5"/>
          <rect x="28" y="48" width="94" height="16" rx="5" fill="rgba(200,150,80,.6)" stroke="rgba(200,150,80,.8)" stroke-width="1"/>
          <text x="75" y="59" fill="rgba(200,150,80,.9)" font-size="7" font-family="Hind" text-anchor="middle">Cork</text>
          <!-- Mixed solution now -->
          <path d="M31 120 L31 184 Q31 198 45 198 L105 198 Q119 198 119 184 L119 120 Z" fill="rgba(63,185,80,.2)"/>
          <!-- CO₂ bubbles forming -->
          <circle cx="60" cy="112" r="4" fill="rgba(200,255,200,.2)" stroke="rgba(200,255,200,.4)" stroke-width=".8"/>
          <circle cx="80" cy="100" r="3" fill="rgba(200,255,200,.2)" stroke="rgba(200,255,200,.4)" stroke-width=".8"/>
          <circle cx="95" cy="108" r="3.5" fill="rgba(200,255,200,.2)" stroke="rgba(200,255,200,.4)" stroke-width=".8"/>
          <text x="75" y="145" fill="rgba(200,255,200,.7)" font-size="7" font-family="Hind" text-anchor="middle">CO₂ banta hai!</text>
          <!-- Nozzle tube -->
          <line x1="75" y1="48" x2="75" y2="18" stroke="rgba(200,220,255,.6)" stroke-width="3"/>
        </g>
        <!-- CO₂ discharge from nozzle -->
        <text x="118" y="45" fill="rgba(200,255,200,.9)" font-size="10" font-family="Hind">💨</text>
        <text x="118" y="57" fill="rgba(200,255,200,.8)" font-size="6.5" font-family="Hind" text-anchor="middle">CO₂</text>
        <text x="118" y="65" fill="rgba(200,255,200,.7)" font-size="6.5" font-family="Hind" text-anchor="middle">discharge</text>
        <text x="75" y="210" fill="rgba(255,255,255,.6)" font-size="7" font-family="Hind" text-anchor="middle">Candle bujh jaayegi! 🕯️</text>
      </svg>
    </div>
  </div>
  <div class="point-info" style="font-size:.81rem;margin-top:.6rem;">
    <strong style="color:var(--p)">Reaction:</strong> NaHCO₃ + H₂SO₄ → Na₂SO₄ + H₂O + CO₂↑<br>
    <strong style="color:var(--gold)">Working:</strong> Bottle tilt karo → H₂SO₄ NaHCO₃ se milti hai → CO₂ gas banti hai → pressure se nozzle se baahir nikalti hai → fire bujhaati hai!<br>
    <span style="color:var(--sub)">CO₂ non-combustible hai → oxygen supply band kar deta hai → fire khatam!</span>
  </div>
</div>
<div class="insight">
  <div class="insight-h">📝 Exam Tip — Fig 2.10</div>
  <strong>Components:</strong> Wash bottle + ignition tube (H₂SO₄ inside) + NaHCO₃ solution + nozzle<br>
  <strong>Tilting</strong> causes acid to mix with NaHCO₃ → CO₂ produced → pushes out through nozzle → extinguishes fire!
</div>`

}); // end VISUAL_TEMPLATES


// ════ CH02 VISUAL INIT FUNCTIONS ════

// ── Indicator Colors ──
function indShow(n) {
  [1,2,3,4,5].forEach(i => {
    const b = document.getElementById(`ind-btn-${i}`);
    if(b) b.classList.remove('sel','sel3');
  });
  const btn = document.getElementById(`ind-btn-${n}`);
  if(btn) btn.classList.add('sel');
  indDraw(n);
}

function indDraw(n) {
  const title = document.getElementById('ind-title');
  const acidBox = document.getElementById('ind-acid-box');
  const baseBox = document.getElementById('ind-base-box');
  const acidIcon = document.getElementById('ind-acid-icon');
  const baseIcon = document.getElementById('ind-base-icon');
  const acidVal = document.getElementById('ind-acid-val');
  const baseVal = document.getElementById('ind-base-val');
  const neutralVal = document.getElementById('ind-neutral-val');
  const acidLabel = document.getElementById('ind-acid-label');
  const baseLabel = document.getElementById('ind-base-label');
  const examples = document.getElementById('ind-examples');
  const insight = document.getElementById('ind-insight');
  if(!title) return;

  const data = [
    null,
    { // Litmus
      name: '🔵 Litmus — Sabse Famous Indicator!',
      acidColor: '#FF4444', acidIcon: '🔴', acidVal: 'Red ho jaata hai',
      neutralVal: 'Purple rehta hai',
      baseColor: '#4488FF', baseIcon: '🔵', baseVal: 'Blue ho jaata hai',
      acidLabel: 'Acid mein', baseLabel: 'Base mein',
      examples: '<strong>Acid examples:</strong> HCl, H₂SO₄, HNO₃, CH₃COOH — sab blue litmus ko red karte hain!<br><strong>Base examples:</strong> NaOH, KOH, Ca(OH)₂ — sab red litmus ko blue karte hain!',
      insight: '<div class="insight-h">🔵 Litmus Ka Source</div>Litmus ek purple dye hai jo <strong>Lichen</strong> plant (Thallophyta division) se nikali jaati hai. Neutral mein <strong>purple</strong>, Acid mein <strong>red</strong>, Base mein <strong>blue</strong>!'
    },
    { // Phenolphthalein
      name: '🧪 Phenolphthalein — Pink Magic!',
      acidColor: '#888', acidIcon: '⬜', acidVal: 'Colourless rahta hai',
      neutralVal: 'Colourless',
      baseColor: '#FF69B4', baseIcon: '🌸', baseVal: 'Pink/Red ho jaata hai',
      acidLabel: 'Acid mein', baseLabel: 'Base mein',
      examples: '<strong>Activity 2.6:</strong> NaOH + phenolphthalein = PINK 🌸. HCl daalo → Colourless ❌. Phir NaOH daalo → PINK wapas! 🌸<br><strong>Use:</strong> Base detect karne ke liye — agar pink hua toh base confirm!',
      insight: '<div class="insight-h">🌸 Phenolphthalein Ka Rule</div>Acid mein → <strong>Colourless</strong>, Base mein → <strong>Pink</strong>. Yeh indicator sirf base mein colour deta hai!'
    },
    { // Methyl Orange
      name: '🧪 Methyl Orange — Traffic Light Style!',
      acidColor: '#FF4444', acidIcon: '🔴', acidVal: 'Red ho jaata hai',
      neutralVal: 'Orange (near neutral)',
      baseColor: '#FFD700', baseIcon: '🟡', baseVal: 'Yellow ho jaata hai',
      acidLabel: 'Acid mein', baseLabel: 'Base mein',
      examples: '<strong>Acid mein:</strong> Methyl orange RED ho jaata hai (HCl, H₂SO₄, etc.)<br><strong>Base mein:</strong> Methyl orange YELLOW ho jaata hai (NaOH, KOH, etc.)<br><strong>Neutral ke paas:</strong> Orange colour (between red-yellow)',
      insight: '<div class="insight-h">🟡 Methyl Orange Ka Rule</div>Acid mein → <strong>Red</strong>, Base mein → <strong>Yellow</strong>. Neutral/slightly acidic par orange deta hai!'
    },
    { // Haldi
      name: '🌿 Haldi (Turmeric) — Natural Indicator!',
      acidColor: '#FFD700', acidIcon: '💛', acidVal: 'Yellow rehti hai',
      neutralVal: 'Yellow',
      baseColor: '#B8521A', baseIcon: '🟫', baseVal: 'Reddish-Brown ho jaati hai',
      acidLabel: 'Acid mein', baseLabel: 'Base mein',
      examples: '<strong>Real Life:</strong> White kapde par curry ka daag soap (basic) se reddish-brown ho jaata hai!<br>Phir zyada paani se dhone par yellow wapas aa jaata hai.<br><strong>Haldi = excellent natural indicator!</strong>',
      insight: '<div class="insight-h">🌿 Natural Indicator</div>Haldi, red cabbage, Hydrangea, Petunia, Geranium ke phool — sab natural acid-base indicators hain! Base mein <strong>reddish-brown</strong> change hona haldi ka khaas sign hai!'
    },
    { // Olfactory
      name: '🧅 Olfactory Indicators — Smell Se Pehchaan!',
      acidColor: '#888', acidIcon: '😐', acidVal: 'Smell aati rehti hai',
      neutralVal: 'Smell present',
      baseColor: '#4CAF50', baseIcon: '😶', baseVal: 'Smell chali jaati hai!',
      acidLabel: 'Acid mein', baseLabel: 'Base mein',
      examples: '<strong>Pyaaz (Onion):</strong> Acid mein → smell rehti hai ✅ | Base mein → smell khatam! ❌<br><strong>Vanilla essence:</strong> Acid mein → smell rehti hai ✅ | Base mein → smell khatam! ❌<br><strong>Clove oil:</strong> Base mein smell badal jaati hai<br><em>Activity 2.2 mein yeh test karte hain!</em>',
      insight: '<div class="insight-h">🧅 Olfactory = Smell Wale Indicators</div>Kuch substances ki smell acidic ya basic media mein badal jaati hai. Pyaaz aur vanilla base mein apni smell kho dete hain — isliye yeh <strong>olfactory indicators</strong> hain!'
    }
  ];

  const d = data[n];
  if(!d) return;

  title.textContent = d.name;
  acidBox.style.background = d.acidColor + '22';
  acidBox.style.border = `1px solid ${d.acidColor}55`;
  acidIcon.textContent = d.acidIcon;
  acidVal.textContent = d.acidVal;
  acidLabel.textContent = d.acidLabel;
  baseBox.style.background = d.baseColor + '22';
  baseBox.style.border = `1px solid ${d.baseColor}55`;
  baseIcon.textContent = d.baseIcon;
  baseVal.textContent = d.baseVal;
  baseLabel.textContent = d.baseLabel;
  neutralVal.textContent = d.neutralVal;
  examples.innerHTML = d.examples;
  insight.innerHTML = d.insight;
}

// ── Acid Reactions ──
function rxnClick(n) {
  const det = document.getElementById(`rxn-det-${n}`);
  const arr = document.getElementById(`rxn-arr-${n}`);
  if(!det) return;
  const isOpen = det.style.display === 'block';
  det.style.display = isOpen ? 'none' : 'block';
  if(arr) arr.textContent = isOpen ? '▼' : '▲';
}

// ── pH Scale ──
const _phData = {
  gastric: { label: 'Gastric Juice (Pet ka Acid)', ph: 1.2, color: '#FF2200', desc: 'HCl hota hai stomach mein! pH ≈ 1.2 — bahut strong acid. Yeh food digest karta hai lekin stomach ko harm nahi karta (normally). Zyada bane → Indigestion!', nature: 'Bahut Strong Acid' },
  nimbu: { label: 'Nimbu (Lemon)', ph: 2.2, color: '#FF6600', desc: 'Citric acid hoti hai nimbu mein. pH ≈ 2.2. Isliye nimbu khatta lagta hai! Khane mein khaas taste aata hai.', nature: 'Strong Acid' },
  coffee: { label: 'Coffee', ph: 4.5, color: '#FFA500', desc: 'Coffee slightly acidic hai — pH ≈ 4-5. Isliye bahut zyada coffee peene se acidity ho sakti hai!', nature: 'Weak Acid' },
  paani: { label: 'Pure Paani (Distilled Water)', ph: 7.0, color: '#00FF7F', desc: 'Pure distilled water bilkul NEUTRAL hai! pH = exactly 7. Na acidic na basic. H⁺ aur OH⁻ ions ki concentration equal hoti hai.', nature: 'Neutral' },
  blood: { label: 'Blood (Khoon)', ph: 7.4, color: '#00CED1', desc: 'Hamara blood slightly basic hai — pH ≈ 7.4. Body ko isi range mein rehna zaroori hai. Zyada change hua toh bahut serious health problems!', nature: 'Slightly Basic' },
  magnesia: { label: 'Milk of Magnesia', ph: 10, color: '#1E90FF', desc: 'Mg(OH)₂ — ek mild base. pH ≈ 10. Antacid ke roop mein use hota hai. Stomach ki excess acid neutralize karta hai.', nature: 'Moderate Base / Antacid' }
};

function phShow(key, ph) {
  const data = _phData[key];
  if(!data) return;
  const dot = document.getElementById('ph-dot');
  const info = document.getElementById('ph-info');
  if(dot) {
    const x = 10 + (ph / 14) * 320;
    dot.setAttribute('cx', x.toFixed(1));
    dot.style.filter = `drop-shadow(0 0 6px ${data.color})`;
    dot.setAttribute('fill', data.color);
  }
  if(info) {
    info.innerHTML = `<strong style="color:${data.color}">${data.label}</strong> — pH = ${ph}<br>
    <span style="color:var(--sub)">${data.desc}</span><br>
    <span style="display:inline-block;margin-top:.3rem;background:${data.color}22;border:1px solid ${data.color}44;border-radius:6px;padding:.15rem .5rem;font-size:.75rem;color:${data.color};">${data.nature}</span>`;
  }
}


// ── Bulb Circuit ──
function bulbShow(n) {
  [1,2].forEach(i => { const b=document.getElementById(`bulb-btn-${i}`); if(b) b.classList.remove('sel','sel3'); });
  const btn=document.getElementById(`bulb-btn-${n}`); if(btn) btn.classList.add('sel');
  bulbDraw(n);
}
function bulbDraw(n) {
  const label=document.getElementById('solution-label');
  const result=document.getElementById('bulb-result');
  const ion1=document.getElementById('ion1');
  const ion2=document.getElementById('ion2');
  const ion3=document.getElementById('ion3');
  const bulbEmoji=document.getElementById('bulb-emoji');
  const bulbCircle=document.getElementById('bulb-circle');
  const fill=document.getElementById('solution-fill');
  const insight=document.getElementById('bulb-insight');
  if(!label) return;
  if(n===1) {
    label.textContent='Dilute HCl (Acid Solution)';
    if(ion1){ion1.textContent='H\u207A';ion1.style.opacity='1';}
    if(ion2){ion2.textContent='Cl\u207B';ion2.style.opacity='1';}
    if(ion3){ion3.textContent='H\u207A';ion3.style.opacity='1';}
    if(bulbEmoji) bulbEmoji.textContent='\uD83D\uDCA1';
    if(bulbCircle) bulbCircle.setAttribute('fill','rgba(240,180,41,.3)');
    if(fill) fill.setAttribute('fill','rgba(255,100,100,.2)');
    if(result) result.textContent='\u2705 Bulb jala! \u2192 H\u207A aur Cl\u207B ions hain \u2192 Current flow hua!';
    if(insight) insight.innerHTML='<div class="insight-h">\uD83D\uDCA1 Acid Mein Ions!</div>HCl \u2192 H\u207A(aq) + Cl\u207B(aq) \u2014 yeh ions current carry karte hain \u2192 bulb jalta hai \u2705';
  } else {
    label.textContent='Glucose / Alcohol Solution';
    if(ion1){ion1.textContent='';ion1.style.opacity='0';}
    if(ion2){ion2.textContent='';ion2.style.opacity='0';}
    if(ion3){ion3.textContent='';ion3.style.opacity='0';}
    if(bulbEmoji) bulbEmoji.textContent='\u25CB';
    if(bulbCircle) bulbCircle.setAttribute('fill','rgba(255,255,255,.03)');
    if(fill) fill.setAttribute('fill','rgba(200,200,100,.15)');
    if(result) result.textContent='\u274C Bulb NAHI jala! \u2192 Koi ions nahi \u2192 No current!';
    if(insight) insight.innerHTML='<div class="insight-h">\u274C Glucose/Alcohol Mein Ions Nahi!</div>Glucose aur alcohol mein hydrogen hota hai \u2014 lekin yeh H\u207A ions release nahi karte paani mein \u2192 no current \u2192 no bulb!';
  }
}

// ── CuSO4 Heating ──
function cuShow(n) {
  [1,2].forEach(i => { const b=document.getElementById(`cu-btn-${i}`); if(b) b.classList.remove('sel','sel3'); });
  const btn=document.getElementById(`cu-btn-${n}`); if(btn) btn.classList.add('sel');
  cuDraw(n);
}
function cuDraw(n) {
  const crystal=document.getElementById('cu-crystal');
  const crystallabel=document.getElementById('cu-crystal-label');
  const drops=['drop1','drop2','drop3','drop4'];
  const flame=document.getElementById('cu-flame');
  const flame2=document.getElementById('cu-flame2');
  const rtitle=document.getElementById('cu-result-title');
  const rformula=document.getElementById('cu-formula');
  const rcolor=document.getElementById('cu-color-label');
  const rwater=document.getElementById('cu-water-label');
  const rstate=document.getElementById('cu-state');
  const rnote=document.getElementById('cu-note');
  const info=document.getElementById('cu-info');
  if(!crystal) return;
  if(n===1) {
    crystal.setAttribute('fill','rgba(30,100,255,.4)');
    crystal.setAttribute('stroke','rgba(30,150,255,.6)');
    if(crystallabel) crystallabel.textContent='CuSO4.5H2O';
    drops.forEach(id=>{const el=document.getElementById(id);if(el)el.setAttribute('fill','rgba(150,220,255,.0)');});
    if(flame){flame.setAttribute('fill','rgba(255,150,0,.0)');flame2.setAttribute('fill','rgba(255,220,50,.0)');}
    if(rtitle) rtitle.textContent='Before Heating:';
    if(rformula){rformula.textContent='CuSO4.5H2O';rformula.setAttribute('fill','rgba(30,150,255,.9)');}
    if(rcolor) rcolor.textContent='Colour: Blue';
    if(rwater) rwater.textContent='Water molecules: 5';
    if(rstate) rstate.textContent='State: Hydrated';
    if(rnote){rnote.textContent='Crystal dry lagta hai baahir se!';rnote.setAttribute('fill','rgba(255,215,0,.8)');}
    if(info) info.innerHTML='<strong style="color:var(--blue)">CuSO4.5H2O</strong> = Blue vitriol. 5 paani ke molecules crystal mein bound hain.<br>Garam karo \u2192 paani nikal jaata hai \u2192 <strong>safed anhydrous CuSO4</strong><br>Phir paani daalo \u2192 <strong>neela colour wapas!</strong>';
  } else {
    crystal.setAttribute('fill','rgba(240,240,240,.4)');
    crystal.setAttribute('stroke','rgba(240,240,240,.6)');
    if(crystallabel) crystallabel.textContent='CuSO4 (anhydrous)';
    drops.forEach(id=>{const el=document.getElementById(id);if(el)el.setAttribute('fill','rgba(150,220,255,.5)');});
    if(flame){flame.setAttribute('fill','rgba(255,150,0,.3)');flame2.setAttribute('fill','rgba(255,220,50,.4)');}
    if(rtitle) rtitle.textContent='After Heating:';
    if(rformula){rformula.textContent='CuSO4 (anhydrous)';rformula.setAttribute('fill','rgba(220,220,220,.9)');}
    if(rcolor) rcolor.textContent='Colour: White';
    if(rwater) rwater.textContent='Water molecules: 0 (removed!)';
    if(rstate) rstate.textContent='State: Anhydrous (sukha!)';
    if(rnote){rnote.textContent='Paani ki boondein deewar par!';rnote.setAttribute('fill','rgba(150,220,255,.9)');}
    if(info) info.innerHTML='<strong style="color:rgba(220,220,220,.9)">CuSO4</strong> = Anhydrous (safed). Paani nikal gaya \u2192 crystal ka neela colour gaya.<br>Boiling tube ki deewar par <strong style="color:rgba(150,220,255,.9)">paani ki boondein</strong> dikhti hain!<br>Phir <strong>2-3 drops paani daalo</strong> \u2192 blue colour wapas aata hai \u2705';
  }
}

// ── Register Inits ──
Object.assign(VISUAL_INITS, {
  'indicator-colors':           () => indDraw(1),
  'acid-reactions-summary':     () => {},
  'ph-scale':                   () => phShow('paani', 7),
  'chlor-alkali-process':       () => {},
  'fig-2-1-zinc-acid':          () => {},
  'fig-2-2-co2-limewater':      () => {},
  'fig-2-3-bulb-circuit':       () => bulbDraw(1),
  'fig-2-4-hcl-gas':            () => {},
  'fig-2-5-warning':            () => {},
  'fig-2-6-ph-variation':       () => {},
  'fig-2-9-cuso4-heating':      () => cuDraw(1),
  'fig-2-10-fire-extinguisher': () => {},
});
