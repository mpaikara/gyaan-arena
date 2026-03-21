# Gyaan Arena — GitHub Pages Setup Guide
## Hinglish mein — Step by Step

---

## 📁 FOLDER STRUCTURE (Exactly aisa rakho)

```
gyaan-arena/                    ← Yeh folder GitHub par upload karo
│
├── index.html                  ← Main app (students yahi open karenge)
├── subjects.json               ← Sab subjects aur chapters ki list
│
└── content/                    ← Saara teaching content yahan
    ├── maths/
    │   ├── ch01.json           ← Real Numbers (ready!)
    │   ├── ch02.json           ← Polynomials (banana hai)
    │   └── ...
    ├── science/
    │   ├── ch01.json
    │   └── ...
    ├── social/
    │   └── ...
    └── english/
        └── ...
```

---

## 🚀 GITHUB SETUP — Step by Step

### Step 1: GitHub Account
1. `github.com` par jaao
2. "Sign up" karo — FREE hai
3. Username choose karo (students ka link isme se banega)

### Step 2: New Repository Banao
1. GitHub par login karo
2. Green "New" button dabaao (ya `+` icon top right mein)
3. Repository name: `gyaan-arena` (exactly yahi likho)
4. **Public** select karo (taaki students access kar sakein)
5. "Create repository" click karo

### Step 3: Files Upload Karo
**Option A — GitHub Website se (Easiest):**
1. Repository page par jaao
2. "uploading an existing file" link click karo
3. Saari files drag & drop karo (puri folder structure maintain karo!)
4. "Commit changes" click karo

**Option B — Git se (Recommended for technical users):**
```bash
cd gyaan-arena/
git init
git add .
git commit -m "Initial upload"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/gyaan-arena.git
git push -u origin main
```

### Step 4: GitHub Pages Enable Karo
1. Repository → "Settings" tab
2. Left sidebar mein "Pages" click karo
3. Source: "Deploy from a branch"
4. Branch: "main" select karo, folder: "/ (root)"
5. "Save" click karo

### Step 5: App URL Milega!
2-3 minutes baad:
```
https://YOUR_USERNAME.github.io/gyaan-arena
```
Yeh link students ko share karo!

---

## 📝 NAYI CHAPTER JSON FILE KAISE BANAYEIN

### Step 1: Template Copy Karo
`content/TEMPLATE_NEW_CHAPTER.json` file ko copy karo.

### Step 2: File Rename Karo
Subject aur chapter ke hisaab se:
- Maths Ch6 → `content/maths/ch06.json`
- Science Ch1 → `content/science/ch01.json`
- Social Ch3 → `content/social/ch03.json`

### Step 3: Content Bharo
Template mein in fields ko fill karo:
```json
{
  "subject": "maths",         ← subject ID
  "chapterId": "ch06",        ← chapter ID
  "chapterNum": 6,            ← chapter number
  "name": "Triangles",        ← Chapter ka naam
  "emoji": "△",               ← Chapter ka emoji
  "color": "#FF6B35",         ← Hex color
  "intro": "...",             ← 2-3 line overview
  "topics": [...],            ← Teaching content
  "quizSets": [...]           ← MCQ questions
}
```

### Step 4: subjects.json Update Karo
`subjects.json` mein chapter ka status update karo:
```json
{ "id": "ch06", "name": "Triangles", "topics": 3, "quizSets": 3, "status": "ready" }
```
`"status": "coming"` se `"status": "ready"` kar do.

### Step 5: GitHub Par Upload Karo
Bas nayi JSON file GitHub par upload karo — App automatically update!

---

## 📖 JSON FORMAT — Tips

### Step Types Available:

**1. story** — Engaging intro
```json
{
  "type": "story",
  "title": "Title with emoji",
  "body": "Story text..."
}
```

**2. concept** — Main teaching
```json
{
  "type": "concept",
  "title": "Concept Title",
  "body": "**Bold** text support hai.\nNewline ke liye \\n use karo.\n• Bullet points bhi."
}
```

**3. formula** — Mathematical formulas
```json
{
  "type": "formula",
  "title": "Formula Name",
  "formula": "aₙ = a + (n-1)d",
  "note": "Additional notes..."
}
```

**4. example** — Solved examples
```json
{
  "type": "example",
  "title": "Example Title",
  "question": "Question text",
  "steps": [
    { "num": "1", "text": "Step 1" },
    { "num": "2", "text": "Step 2 ✅" }
  ]
}
```

**5. practice** — Student practice
```json
{
  "type": "practice",
  "title": "Practice!",
  "questions": [
    { "question": "Q1?", "answer": "Answer with explanation" }
  ]
}
```

**6. remember** — Key points
```json
{
  "type": "remember",
  "title": "Yaad Rakhna! 🧠",
  "points": ["Point 1", "Point 2", "Point 3"]
}
```

### Quiz Question Format:
```json
{
  "id": "q1",
  "question": "MCQ question?",
  "options": ["Option A", "Option B", "Option C", "Option D"],
  "correctIndex": 0,
  "hint": "Short hint",
  "explanation": "Detailed explanation"
}
```

---

## 🔧 LOCAL TESTING

GitHub par upload karne se pehle test karna chahte ho?

**Python server (recommended):**
```bash
cd gyaan-arena/
python -m http.server 8000
```
Browser mein jaao: `http://localhost:8000`

**Node.js server:**
```bash
npx serve .
```

---

## ❓ COMMON PROBLEMS & SOLUTIONS

**Problem: App open nahi ho rahi**
Solution: GitHub Pages 2-3 min time leta hai. Wait karo.

**Problem: Chapter load nahi ho raha**
Solution: JSON file ka naam subjects.json se match karta ho. Case sensitive!

**Problem: JSON error aa raha hai**
Solution: JSON validator use karo: `jsonlint.com`
Common mistake: Trailing comma (last item ke baad comma mat daalo!)

**Problem: Content dikha nahi raha**
Solution: subjects.json mein chapter ka status "ready" kar diya?

---

## 📊 CONTENT PRIORITY PLAN

### Phase 1 — Maths (Already started!)
- [x] Ch01: Real Numbers
- [ ] Ch02: Polynomials
- [ ] Ch03: Pair of Linear Equations
- [ ] Ch04: Quadratic Equations
- [ ] Ch05: Arithmetic Progressions
- [ ] Ch06-15: Remaining chapters

### Phase 2 — Science
- [ ] Ch01: Chemical Reactions
- [ ] Ch09: Light (Important for boards!)
- [ ] Ch11: Electricity
- [ ] Remaining chapters

### Phase 3 — Social Science
- [ ] History chapters
- [ ] Geography chapters
- [ ] Political Science chapters

### Phase 4 — English
- [ ] Reading comprehension notes
- [ ] Chapter summaries
- [ ] Grammar sections

---

## 💡 PRO TIPS

1. **Ek baar mein ek chapter** — Quality better hogi
2. **Claude se help lo** — JSON format mein content convert karne mein
3. **NCERT se directly** — Text copy karke JSON mein paste karo, Claude format kar dega
4. **Quiz pehle banao** — Students sabse zyada quiz use karte hain
5. **Test karo pehle locally** — phir GitHub par push karo

---

## 🤝 CLAUDE SE HELP KAISE LO

Koi bhi chapter ka content banana ho toh Claude se yeh bolo:

> "Mujhe NCERT Class 10 Science Chapter 1 'Chemical Reactions' ka content
> gyaan-arena JSON format mein chahiye. Template yeh hai: [template paste karo]
> Hinglish mein stories aur examples likhna."

Claude poori JSON file generate kar dega jo seedha upload kar sako!
