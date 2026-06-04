// ══════════════════════════════════════════════════════
// ENGINE
// ══════════════════════════════════════════════════════
const TOPICS_LIST = [...new Set(BANK.map(q => q.topic))];
const countD = d => BANK.filter(q => q.diff === d).length;
const countT = t => BANK.filter(q => q.topic === t).length;

let selDiffs = new Set(['easy','medium','hard']);
let selTopics = new Set(TOPICS_LIST);
let selTypes = new Set(['mc','tf','code']);
let questions = [], cur = 0, score = 0, answered = false;
let tfState = {}, tfDone = false, history = [];
let curCorrectPos = 0; // for MC shuffled answer tracking

// ── INIT ──
function init() {
  const countTy = t => BANK.filter(q => q.type === t).length;
  document.getElementById('cnt-easy').textContent   = countD('easy')   + ' questões';
  document.getElementById('cnt-medium').textContent = countD('medium') + ' questões';
  document.getElementById('cnt-hard').textContent   = countD('hard')   + ' questões';
  document.getElementById('cnt-mc').textContent   = countTy('mc')   + ' questões';
  document.getElementById('cnt-tf').textContent   = countTy('tf')   + ' questões';
  document.getElementById('cnt-code').textContent = countTy('code') + ' questões';
  const grid = document.getElementById('topics-grid');
  grid.innerHTML = '';
  TOPICS_LIST.forEach(t => {
    const el = document.createElement('div');
    el.className = 'topic-pill on';
    el.dataset.topic = t;
    const summary = TOPIC_META[t] || '';
    const isReview = t === 'Revisão';
    el.innerHTML = `
      <div class="tp-head">
        <span class="tp-dot"></span>
        <span class="tp-name">${isReview ? '★ ' : ''}${t}</span>
        <span class="tp-count">${countT(t)}</span>
      </div>
      <div class="tp-summary">${summary}</div>`;
    el.onclick = () => toggleTopic(t, el);
    grid.appendChild(el);
  });
}

function toggleDiff(d, card) {
  if (selDiffs.has(d)) { if (selDiffs.size === 1) return; selDiffs.delete(d); card.classList.remove('active'); }
  else { selDiffs.add(d); card.classList.add('active'); }
}

function toggleType(t, card) {
  if (selTypes.has(t)) { if (selTypes.size === 1) return; selTypes.delete(t); card.classList.remove('active'); }
  else { selTypes.add(t); card.classList.add('active'); }
}

function toggleTopic(t, el) {
  if (selTopics.has(t)) { if (selTopics.size === 1) return; selTopics.delete(t); el.classList.remove('on'); }
  else { selTopics.add(t); el.classList.add('on'); }
}

// ── START ──
function startQuiz() {
  const pool = BANK.filter(q => selDiffs.has(q.diff) && selTopics.has(q.topic) && selTypes.has(q.type));
  // Intercala por dificuldade: easy→medium→hard ciclicamente
  const byD = { easy: shuffle(pool.filter(q=>q.diff==='easy')), medium: shuffle(pool.filter(q=>q.diff==='medium')), hard: shuffle(pool.filter(q=>q.diff==='hard')) };
  const order = ['easy','medium','hard'].filter(d => selDiffs.has(d) && byD[d].length);
  const idx = {easy:0,medium:0,hard:0};
  const interleaved = [];
  while (interleaved.length < pool.length) {
    let added = false;
    for (const d of order) { if (idx[d] < byD[d].length) { interleaved.push(byD[d][idx[d]++]); added = true; } }
    if (!added) break;
  }
  const qty = parseInt(document.getElementById('qty-select').value);
  questions = interleaved.slice(0, Math.min(qty, interleaved.length));
  if (!questions.length) return;
  cur = 0; score = 0; history = [];
  document.getElementById('live-score').style.display = 'block';
  show('quiz'); renderQ();
}

// ── RENDER QUESTION ──
function renderQ() {
  const q = questions[cur];
  answered = false; tfState = {}; tfDone = false;
  document.getElementById('q-counter').textContent = `Questão ${cur+1} / ${questions.length}`;
  document.getElementById('q-tag-topic').textContent = q.topic;
  const dtag = document.getElementById('q-tag-diff');
  dtag.textContent = {easy:'Fácil',medium:'Médio',hard:'Difícil'}[q.diff];
  dtag.className = `tag tag-${q.diff}`;
  const codeTag = document.getElementById('q-tag-code');
  codeTag.style.display = q.type === 'code' ? 'inline-block' : 'none';
  const badge = document.getElementById('q-type-badge');
  badge.style.display = q.type === 'code' ? 'inline-block' : 'none';
  const stripe = document.getElementById('q-stripe');
  stripe.className = q.type === 'code' ? 'q-stripe code' : `q-stripe ${q.diff}`;
  document.getElementById('prog-fill').style.width = `${(cur/questions.length)*100}%`;
  document.getElementById('q-text').textContent = q.text;
  const codeEl = document.getElementById('q-code');
  if (q.code) { codeEl.textContent = q.code; codeEl.style.display = 'block'; }
  else codeEl.style.display = 'none';
  document.getElementById('feedback').className = 'feedback';
  document.getElementById('btn-next').className = 'btn-next';
  // Hide all input areas
  document.getElementById('options-list').style.display = 'none';
  document.getElementById('options-list').innerHTML = '';
  document.getElementById('tf-list').style.display = 'none';
  document.getElementById('tf-progress').style.display = 'none';
  document.getElementById('code-input-area').style.display = 'none';

  if (q.type === 'mc') renderMC(q);
  else if (q.type === 'tf') renderTF(q);
  else renderCode(q);
}

// ── MC ──
function renderMC(q) {
  // Embaralha alternativas mas mantém rastreio da correta
  const indices = shuffle(q.options.map((_,i) => i));
  curCorrectPos = indices.indexOf(q.answer);
  const ul = document.getElementById('options-list');
  ul.style.display = 'flex'; ul.innerHTML = '';
  const letters = ['A','B','C','D','E'];
  indices.forEach((origIdx, pos) => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.className = 'opt';
    btn.innerHTML = `<span class="opt-ltr">${letters[pos]}</span><span>${q.options[origIdx]}</span>`;
    btn.onclick = () => chooseMC(pos, q);
    li.appendChild(btn); ul.appendChild(li);
  });
}

function chooseMC(pos, q) {
  if (answered) return;
  answered = true;
  const btns = document.querySelectorAll('.opt');
  btns.forEach(b => b.disabled = true);
  const ok = pos === curCorrectPos;
  btns[pos].classList.add(ok ? 'correct' : 'wrong');
  if (!ok) btns[curCorrectPos].classList.add('reveal');
  if (ok) score++;
  history.push({q, correct: ok, type:'mc'});
  showFB(ok, q.exp);
}

// ── TF ──
function renderTF(q) {
  const list = document.getElementById('tf-list');
  const prog = document.getElementById('tf-progress');
  list.style.display = 'flex'; list.innerHTML = '';
  prog.style.display = 'block';
  prog.textContent = `0 / ${q.statements.length} respondidas`;
  // Embaralha a ordem das afirmações
  const order = shuffle(q.statements.map((_,i) => i));
  order.forEach((origIdx, pos) => {
    const stmt = q.statements[origIdx];
    const div = document.createElement('div');
    div.className = 'tf-item'; div.id = `tfi-${pos}`; div.dataset.origIdx = origIdx;
    div.innerHTML = `<span class="tf-stmt">${stmt.text}</span>
      <div class="tf-btns">
        <button class="tf-btn" id="tfV${pos}" onclick="pickTF(${pos},true,event)">V</button>
        <button class="tf-btn" id="tfF${pos}" onclick="pickTF(${pos},false,event)">F</button>
      </div>`;
    list.appendChild(div);
  });
}

function pickTF(pos, val, e) {
  e.stopPropagation();
  if (answered) return;
  const q = questions[cur];
  const vB = document.getElementById(`tfV${pos}`), fB = document.getElementById(`tfF${pos}`);
  vB.classList.remove('sel-v'); fB.classList.remove('sel-f');
  (val ? vB : fB).classList.add(val ? 'sel-v' : 'sel-f');
  tfState[pos] = val;
  const cnt = Object.keys(tfState).length;
  document.getElementById('tf-progress').textContent = `${cnt} / ${q.statements.length} respondidas`;
  if (cnt === q.statements.length && !tfDone) {
    tfDone = true; answered = true;
    let allOk = true;
    document.querySelectorAll('.tf-item').forEach(item => {
      const p = parseInt(item.id.replace('tfi-',''));
      const origIdx = parseInt(item.dataset.origIdx);
      const correctAns = q.statements[origIdx].answer;
      const userAns = tfState[p];
      const vBtn = document.getElementById(`tfV${p}`), fBtn = document.getElementById(`tfF${p}`);
      vBtn.disabled = fBtn.disabled = true;
      if (userAns === correctAns) {
        (correctAns ? vBtn : fBtn).classList.add('right');
        item.classList.add('resolved-ok');
      } else {
        allOk = false;
        (correctAns ? fBtn : vBtn).classList.add('wrong-ans');
        (correctAns ? vBtn : fBtn).classList.add('right');
        item.classList.add('resolved-err');
      }
    });
    if (allOk) score++;
    history.push({q, correct: allOk, type:'tf'});
    showFB(allOk, q.exp);
  }
}

// ── CODE INPUT ──
function renderCode(q) {
  const area = document.getElementById('code-input-area');
  area.style.display = 'block';
  const ta = document.getElementById('code-textarea');
  ta.value = '';
  ta.className = 'code-input';
  document.getElementById('diff-tokens').className = 'diff-tokens';
  document.getElementById('diff-tokens').innerHTML = '';
  document.getElementById('btn-check').disabled = false;
  ta.focus();
  // Tab key support
  ta.onkeydown = function(e) {
    if (e.key === 'Tab') {
      e.preventDefault();
      const s = ta.selectionStart, end = ta.selectionEnd;
      ta.value = ta.value.substring(0,s) + '  ' + ta.value.substring(end);
      ta.selectionStart = ta.selectionEnd = s + 2;
    }
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') checkCode();
  };
}

function normalizeCode(s) {
  return s.replace(/\s+/g,' ').replace(/\s*([{}();,])\s*/g,'$1').trim().toLowerCase();
}

function checkCode() {
  if (answered) return;
  const q = questions[cur];
  const userRaw = document.getElementById('code-textarea').value.trim();
  if (!userRaw) return;
  const ta = document.getElementById('code-textarea');

  // Check: all required keywords present (case-insensitive)
  const missing = (q.keywords || []).filter(kw => !userRaw.includes(kw));
  const ok = missing.length === 0;

  answered = true;
  ta.className = 'code-input ' + (ok ? 'ok' : 'err');
  document.getElementById('btn-check').disabled = true;

  // Show diff — token-level comparison
  const diffEl = document.getElementById('diff-tokens');
  diffEl.className = 'diff-tokens show';
  if (!ok) {
    diffEl.innerHTML = '<div class="diff-line" style="color:var(--muted);margin-bottom:6px">Elementos obrigatórios não encontrados:</div>'
      + missing.map(k => `<div class="diff-line diff-rem">✗ ${k}</div>`).join('');
  } else {
    diffEl.innerHTML = '<div class="diff-line diff-add">✓ Todos os elementos necessários presentes</div>';
  }

  if (ok) score++;
  history.push({q, correct: ok, type:'code', userCode: userRaw});
  showFB(ok, q.exp, q.answer);
}

// ── FEEDBACK ──
function showFB(ok, exp, canonicalCode) {
  const fb = document.getElementById('feedback');
  document.getElementById('fb-head').textContent = ok ? '✓ Correto!' : '✗ Incorreto';
  let bodyHtml = `<span>${exp}</span>`;
  if (canonicalCode) {
    bodyHtml += `<div style="margin-top:10px;font-size:11px;color:var(--muted);font-family:'IBM Plex Mono',monospace;letter-spacing:.06em;text-transform:uppercase;margin-bottom:6px">Resposta de referência:</div>
      <pre style="background:var(--code-bg);border:1px solid var(--border);border-radius:4px;padding:12px;font-family:'IBM Plex Mono',monospace;font-size:11.5px;line-height:1.7;color:#b8c4e8;overflow-x:auto;white-space:pre">${canonicalCode}</pre>`;
  }
  document.getElementById('fb-body').innerHTML = bodyHtml;
  fb.className = `feedback show ${ok ? 'ok' : 'err'}`;
  document.getElementById('btn-next').className = 'btn-next show';
  updateLive();
}

function nextQ() { cur++; if (cur >= questions.length) showResults(); else renderQ(); }
function updateLive() { document.getElementById('ls-val').textContent = `${score}/${questions.length}`; }

// ── RESULTS ──
function showResults() {
  show('results');
  document.getElementById('prog-fill').style.width = '100%';
  const pct = Math.round((score/questions.length)*100);
  document.getElementById('res-pct').textContent = pct+'%';
  document.getElementById('res-frac').textContent = `${score} / ${questions.length}`;
  const arc = document.getElementById('ring-arc');
  const C = 2*Math.PI*63;
  const color = pct>=80?'#3ddc84':pct>=60?'#f5c842':'#ff4f6a';
  arc.setAttribute('stroke',color);
  arc.setAttribute('stroke-dasharray',C);
  arc.setAttribute('stroke-dashoffset',C);
  setTimeout(()=>arc.setAttribute('stroke-dashoffset',C*(1-pct/100)),100);
  document.getElementById('res-pct').style.color = color;
  const msg = pct>=90?['Excelente!','Domínio completo. Você está pronto.']:
              pct>=70?['Muito bom!','Revise os pontos com erro e reforce.']:
              pct>=50?['Regular','Revise o material e tente de novo.']:
                      ['Continue estudando','Releia os slides com calma.'];
  document.getElementById('res-title').textContent = msg[0];
  document.getElementById('res-msg').textContent = msg[1];
  const dbEl = document.getElementById('diff-breakdown');
  dbEl.innerHTML = '';
  ['easy','medium','hard'].forEach(d => {
    const total = history.filter(h=>h.q.diff===d).length;
    if (!total) return;
    const correct = history.filter(h=>h.q.diff===d&&h.correct).length;
    const p = Math.round(correct/total*100);
    const lbl = {easy:'Fácil',medium:'Médio',hard:'Difícil'}[d];
    dbEl.innerHTML += `<div class="db-card ${d}"><div class="db-label">${lbl}</div><div class="db-score">${correct}/${total}</div><div class="db-pct">${p}%</div></div>`;
  });
  const codeQ = history.filter(h=>h.q.type==='code');
  const wrong = questions.length - score;
  document.getElementById('res-table').innerHTML = `
    <div class="rt-row"><span class="rt-label">Acertos</span><span class="rt-val g">${score}</span></div>
    <div class="rt-row"><span class="rt-label">Erros</span><span class="rt-val r">${wrong}</span></div>
    <div class="rt-row"><span class="rt-label">Questões de código</span><span class="rt-val" style="color:var(--purple)">${codeQ.length}</span></div>
    <div class="rt-row"><span class="rt-label">Aproveitamento</span><span class="rt-val ${pct>=70?'g':pct>=50?'y':'r'}">${pct}%</span></div>`;
  buildReview();
}

function buildReview() {
  const el = document.getElementById('review-list'); el.innerHTML = '';
  history.forEach((h, i) => {
    const div = document.createElement('div');
    div.className = `rev-item ${h.correct?'ok':'err'}`;
    const dlbl = {easy:'🟢 Fácil',medium:'🟡 Médio',hard:'🔴 Difícil'}[h.q.diff];
    const typelbl = h.q.type==='code'?'<span class="tag tag-code" style="font-size:9px">✎ Código</span>':'';
    let extra = '';
    if (h.q.type==='code' && !h.correct && h.userCode)
      extra = `<div class="rev-code">Sua resposta:\n${h.userCode}</div>`;
    if (h.q.type==='code')
      extra += `<div class="rev-code">Referência:\n${h.q.answer}</div>`;
    div.innerHTML = `<div class="rev-q">${i+1}. ${h.q.text}</div>
      <div class="rev-meta"><span class="tag tag-topic">${h.q.topic}</span><span class="tag tag-${h.q.diff}">${dlbl}</span>${typelbl}
        <span style="font-family:monospace;font-size:10px;color:${h.correct?'var(--green)':'var(--red)'}">${h.correct?'✓ Correto':'✗ Incorreto'}</span>
      </div>
      <div class="rev-exp">${h.q.exp}</div>${extra}`;
    el.appendChild(div);
  });
}

function toggleReview() {
  const el = document.getElementById('review-list');
  const btn = document.querySelector('.review-toggle');
  const open = el.style.display === 'block';
  el.style.display = open ? 'none' : 'block';
  btn.textContent = open ? 'Ver revisão ▾' : 'Ocultar revisão ▴';
}

function show(id) { ['home','quiz','results'].forEach(s=>document.getElementById(s).style.display=s===id?'block':'none'); }
function goHome() { document.getElementById('live-score').style.display='none'; show('home'); }
function retryQuiz() { cur=0;score=0;history=[];questions=shuffle(questions);show('quiz');renderQ();updateLive(); }
function shuffle(arr) {
  const a=[...arr];
  for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}
  return a;
}
init();
