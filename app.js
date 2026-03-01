/**
 * Question type:
 * { id: string, text: string, category?: string }
 */
const questions = [
  { id: "q1", text: "Apa keputusan paling penting tim kamu minggu ini, dan bagaimana kamu membantu memperjelas prioritasnya?", category: "alignment" },
  { id: "q2", text: "Jika anggota timmu hanya bisa menyelesaikan satu hal pekan ini, apa yang paling berdampak dan kenapa?", category: "focus" },
  { id: "q3", text: "Kapan terakhir kali kamu memberi umpan balik yang spesifik, dan apa dampaknya?", category: "feedback" },
  { id: "q4", text: "Apa hambatan terbesar anggota timmu saat ini yang belum kamu bantu angkat?", category: "blockers" },
  { id: "q5", text: "Bagaimana kamu memastikan ekspektasi kerja terlihat jelas, bukan hanya diasumsikan?", category: "clarity" },
  { id: "q6", text: "Apa sinyal awal burnout yang perlu kamu perhatikan dari timmu minggu ini?", category: "wellbeing" },
  { id: "q7", text: "Percakapan sulit apa yang kamu tunda, dan apa langkah kecil untuk memulainya?", category: "courage" },
  { id: "q8", text: "Apa satu kemenangan kecil anggota tim yang layak dirayakan di One-on-One berikutnya?", category: "recognition" },
  { id: "q9", text: "Di mana kamu terlalu cepat memberi solusi daripada mengajukan pertanyaan coaching?", category: "coaching" },
  { id: "q10", text: "Bagaimana kamu mengecek apakah anggota tim benar-benar paham arah, bukan sekadar bilang 'siap'?", category: "alignment" },
  { id: "q11", text: "Apa risiko tersembunyi dalam proyek saat ini yang belum dibahas terbuka?", category: "risk" },
  { id: "q12", text: "Keterampilan apa yang paling perlu ditumbuhkan anggota tim dalam 30 hari ke depan?", category: "growth" },
  { id: "q13", text: "Seberapa sering kamu mendengar perspektif tim sebelum memutuskan?", category: "decision-making" },
  { id: "q14", text: "Apa bukti bahwa timmu merasa aman untuk berbeda pendapat denganmu?", category: "psychological-safety" },
  { id: "q15", text: "Dukungan seperti apa yang sebenarnya dibutuhkan anggota timmu darimu minggu ini?", category: "support" },
  { id: "q16", text: "Apa trade-off terbesar yang sedang timmu hadapi, dan bagaimana kamu menjelaskannya?", category: "strategy" },
  { id: "q17", text: "Pertanyaan apa yang bisa membuka refleksi lebih dalam daripada status update biasa?", category: "coaching" },
  { id: "q18", text: "Apa komitmen follow-up terakhir yang belum kamu cek progresnya?", category: "accountability" },
  { id: "q19", text: "Bagaimana kamu membantu anggota tim memetakan prioritas jangka pendek vs jangka panjang?", category: "prioritization" },
  { id: "q20", text: "Apa satu kebiasaan kepemimpinanmu yang paling ingin kamu perbaiki bulan ini?", category: "self-leadership" },
  { id: "q21", text: "Dalam percakapan berikutnya, apa yang ingin kamu dengarkan lebih banyak daripada kamu bicarakan?", category: "listening" },
  { id: "q22", text: "Seberapa jelas definisi sukses untuk tugas yang baru kamu delegasikan?", category: "delegation" },
  { id: "q23", text: "Apa kekuatan unik anggota timmu yang belum kamu optimalkan?", category: "strengths" },
  { id: "q24", text: "Di mana kamu perlu lebih tegas agar tim tidak kehilangan arah?", category: "decisiveness" },
  { id: "q25", text: "Apa indikator sederhana yang bisa menunjukkan One-on-One kamu minggu ini benar-benar efektif?", category: "effectiveness" },
  { id: "q26", text: "Bagaimana kamu menyesuaikan gaya kepemimpinan untuk anggota tim yang berbeda tingkat kematangannya?", category: "situational-leadership" },
  { id: "q27", text: "Apa asumsi tentang anggota timmu yang perlu kamu validasi ulang minggu ini?", category: "bias-awareness" },
  { id: "q28", text: "Jika kamu hanya punya 15 menit untuk One-on-One hari ini, topik paling penting apa yang harus dibahas?", category: "focus" },
  { id: "q29", text: "Bagaimana kamu menutup percakapan agar ada action nyata, bukan sekadar insight?", category: "execution" },
  { id: "q30", text: "Apa kebiasaan tim yang perlu dihentikan agar performa naik dalam 2 minggu ke depan?", category: "performance" },
  { id: "q31", text: "Sejauh mana kamu memberi konteks 'mengapa' sebelum memberi arahan 'apa' dan 'bagaimana'?", category: "context" },
  { id: "q32", text: "Apa pertanyaan yang bisa membantu anggota timmu mengatasi kebuntuan sendiri?", category: "coaching" },
  { id: "q33", text: "Bagaimana kamu menilai apakah beban kerja tim sudah adil dan realistis?", category: "workload" },
  { id: "q34", text: "Apa sinyal bahwa kamu perlu melakukan re-prioritization bersama tim minggu ini?", category: "prioritization" },
  { id: "q35", text: "Apa satu hal yang bisa kamu lakukan untuk membuat One-on-One terasa lebih personal dan bermakna?", category: "connection" },
  { id: "q36", text: "Bagaimana kamu memastikan keberhasilan tim terlihat, bukan hanya kesalahan yang disorot?", category: "recognition" },
  { id: "q37", text: "Apa keputusan yang seharusnya kamu delegasikan agar tim lebih berkembang?", category: "delegation" },
  { id: "q38", text: "Bagaimana kamu mengubah feedback abstrak menjadi contoh perilaku yang bisa ditindaklanjuti?", category: "feedback" },
  { id: "q39", text: "Apa tantangan lintas fungsi yang perlu kamu bantu mediasi minggu ini?", category: "collaboration" },
  { id: "q40", text: "Apa langkah pencegahan yang bisa dilakukan sekarang sebelum masalah jadi eskalasi?", category: "risk" },
  { id: "q41", text: "Bagaimana kamu bisa memfasilitasi anggota tim yang pendiam agar suaranya tetap terdengar?", category: "inclusion" },
  { id: "q42", text: "Apa eksperimen kecil yang bisa tim coba minggu ini untuk meningkatkan kualitas output?", category: "improvement" },
  { id: "q43", text: "Apa keputusanmu minggu ini yang paling merefleksikan nilai kepemimpinan yang kamu pegang?", category: "values" },
  { id: "q44", text: "Apa pola masalah berulang yang muncul di One-on-One dan belum terselesaikan akarnya?", category: "root-cause" },
  { id: "q45", text: "Bagaimana kamu menyeimbangkan empati dengan akuntabilitas dalam percakapan performa?", category: "balance" },
  { id: "q46", text: "Apa pertanyaan pembuka yang bisa membuat anggota tim lebih jujur tentang kondisi mereka?", category: "trust" },
  { id: "q47", text: "Di area apa kamu perlu meminta feedback balik dari timmu sebagai leader?", category: "self-awareness" },
  { id: "q48", text: "Apa keputusan cepat yang kamu ambil minggu ini, dan apakah prosesnya sudah melibatkan orang yang tepat?", category: "decision-making" },
  { id: "q49", text: "Bagaimana kamu membantu anggota tim menghubungkan pekerjaannya dengan tujuan yang lebih besar?", category: "purpose" },
  { id: "q50", text: "Jika One-on-One berikutnya berjalan sangat baik, hasil konkretnya akan terlihat seperti apa?", category: "outcomes" }
];

const palettes = [
  { start: "#22c55e", end: "#16a34a" },
  { start: "#f97316", end: "#ef4444" },
  { start: "#8b5cf6", end: "#2563eb" },
  { start: "#14b8a6", end: "#0ea5e9" },
  { start: "#ec4899", end: "#8b5cf6" },
  { start: "#f59e0b", end: "#f43f5e" },
  { start: "#10b981", end: "#059669" }
];

const iconByCategory = {
  alignment:
    '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="24" stroke="currentColor" stroke-width="4"/><circle cx="32" cy="32" r="8" fill="currentColor"/><path d="M32 8V18M32 46V56M56 32H46M18 32H8" stroke="currentColor" stroke-width="4" stroke-linecap="round"/></svg>',
  focus:
    '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32 8L40 24L56 32L40 40L32 56L24 40L8 32L24 24L32 8Z" fill="currentColor" fill-opacity="0.9"/></svg>',
  feedback:
    '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="44" height="34" rx="10" stroke="currentColor" stroke-width="4"/><path d="M24 44L24 54L34 44" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  blockers:
    '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="14" width="44" height="36" rx="8" stroke="currentColor" stroke-width="4"/><path d="M18 46L46 18" stroke="currentColor" stroke-width="4" stroke-linecap="round"/></svg>',
  wellbeing:
    '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32 52C32 52 12 40 12 25C12 18 17 12 24 12C28.5 12 31.5 14.5 32 16C32.5 14.5 35.5 12 40 12C47 12 52 18 52 25C52 40 32 52 32 52Z" fill="currentColor" fill-opacity="0.95"/></svg>',
  coaching:
    '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="22" r="10" stroke="currentColor" stroke-width="4"/><path d="M16 52C16 43 23 36 32 36C41 36 48 43 48 52" stroke="currentColor" stroke-width="4" stroke-linecap="round"/></svg>',
  risk:
    '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32 10L54 50H10L32 10Z" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/><path d="M32 24V34" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><circle cx="32" cy="42" r="2.5" fill="currentColor"/></svg>',
  growth:
    '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 46H50" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><path d="M20 40L28 32L36 36L46 20" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  recognition:
    '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32 10L37.8 24.2L53 25.6L41.5 35.2L45 50L32 42L19 50L22.5 35.2L11 25.6L26.2 24.2L32 10Z" fill="currentColor" fill-opacity="0.92"/></svg>',
  delegation:
    '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="22" r="7" stroke="currentColor" stroke-width="4"/><circle cx="44" cy="42" r="7" stroke="currentColor" stroke-width="4"/><path d="M26 28L38 36" stroke="currentColor" stroke-width="4" stroke-linecap="round"/></svg>'
};

const defaultIcon =
  '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="12" y="12" width="40" height="40" rx="12" stroke="currentColor" stroke-width="4"/><path d="M24 32H40" stroke="currentColor" stroke-width="4" stroke-linecap="round"/></svg>';

const fanAngles = [-12, -6, 0, 6, 12];

const randomBtn = document.getElementById("random-btn");
const dealtCards = document.getElementById("dealt-cards");
const dealStatus = document.getElementById("deal-status");
const drawCountEl = document.getElementById("draw-count");
const totalCountEl = document.getElementById("total-count");
const shuffleOverlay = document.getElementById("shuffle-overlay");
const focusOverlay = document.getElementById("focus-overlay");
const soundToggleBtn = document.getElementById("sound-toggle-btn");

let drawCount = 0;
let isDealing = false;
let pickedCardId = null;
let activeCardEl = null;
let audioCtx = null;
let soundEnabled = true;
let lastHoverSoundAt = 0;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) {
      return null;
    }
    audioCtx = new AudioContextClass();
  }

  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }

  return audioCtx;
}

function playTone({ freq = 440, duration = 0.14, type = "sine", volume = 0.03, delay = 0 }) {
  if (!soundEnabled) {
    return;
  }

  const ctx = getAudioContext();
  if (!ctx) {
    return;
  }

  const scheduleTone = () => {
    const startAt = ctx.currentTime + delay;
    const stopAt = startAt + duration;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, startAt);
    gain.gain.setValueAtTime(0.0001, startAt);
    gain.gain.exponentialRampToValueAtTime(volume, startAt + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, stopAt);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(startAt);
    osc.stop(stopAt + 0.01);
  };

  if (ctx.state !== "running") {
    ctx.resume().then(scheduleTone).catch(() => {});
    return;
  }

  scheduleTone();
}

function playShuffleStartSound() {
  playTone({ freq: 220, duration: 0.1, type: "triangle", volume: 0.028, delay: 0 });
  playTone({ freq: 330, duration: 0.1, type: "triangle", volume: 0.024, delay: 0.06 });
  playTone({ freq: 440, duration: 0.12, type: "triangle", volume: 0.022, delay: 0.12 });
}

function playShufflePulseSound() {
  playTone({ freq: 170, duration: 0.08, type: "square", volume: 0.015, delay: 0 });
  playTone({ freq: 190, duration: 0.08, type: "square", volume: 0.015, delay: 0.14 });
  playTone({ freq: 210, duration: 0.08, type: "square", volume: 0.015, delay: 0.28 });
}

function playDealRevealSound() {
  playTone({ freq: 392, duration: 0.11, type: "sine", volume: 0.024, delay: 0 });
  playTone({ freq: 494, duration: 0.11, type: "sine", volume: 0.024, delay: 0.07 });
  playTone({ freq: 587, duration: 0.14, type: "sine", volume: 0.026, delay: 0.14 });
}

function playPickSound() {
  // Stronger "card selected" cue.
  playTone({ freq: 320, duration: 0.08, type: "square", volume: 0.026, delay: 0 });
  playTone({ freq: 523.25, duration: 0.12, type: "triangle", volume: 0.032, delay: 0.05 });
  playTone({ freq: 659.25, duration: 0.16, type: "triangle", volume: 0.03, delay: 0.12 });
}

function playHoverSound() {
  const now = Date.now();
  if (now - lastHoverSoundAt < 120) {
    return;
  }
  lastHoverSoundAt = now;

  playTone({ freq: 480, duration: 0.05, type: "triangle", volume: 0.02, delay: 0 });
  playTone({ freq: 620, duration: 0.06, type: "triangle", volume: 0.018, delay: 0.03 });
}

function titleCaseCategory(category) {
  if (!category) {
    return "Leadership Prompt";
  }

  return category
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function shuffled(array) {
  const clone = [...array];
  for (let i = clone.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [clone[i], clone[j]] = [clone[j], clone[i]];
  }
  return clone;
}

function pickHand(count = 5) {
  const width = Math.min(window.innerWidth, 920);
  const spacing = width < 760 ? 72 : 112;
  const fanOffsets = [-2 * spacing, -spacing, 0, spacing, 2 * spacing];

  return shuffled(questions).slice(0, count).map((question, index) => {
    const palette = palettes[Math.floor(Math.random() * palettes.length)];

    return {
      ...question,
      palette,
      angle: fanAngles[index],
      offset: fanOffsets[index]
    };
  });
}

function buildCard(question, index) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "deal-card";
  button.dataset.questionId = question.id;
  button.style.setProperty("--angle", `${question.angle}deg`);
  button.style.setProperty("--offset", `${question.offset}px`);
  button.style.setProperty("--start", question.palette.start);
  button.style.setProperty("--end", question.palette.end);

  button.innerHTML = `
    <div class="deal-card-inner">
      <div class="deal-card-face deal-card-back">
        <span>LEADERSHIP CARD</span>
      </div>
      <div class="deal-card-face deal-card-front">
        <div class="front-top">
          <span>${String(index + 1).padStart(2, "0")}</span>
          <div class="front-icon">${iconByCategory[question.category] || defaultIcon}</div>
        </div>
        <span class="front-category">${titleCaseCategory(question.category)}</span>
        <p class="front-question">${question.text}</p>
      </div>
    </div>
  `;

  button.addEventListener("click", () => pickCard(button, question));
  button.addEventListener("mouseenter", () => {
    if (!pickedCardId) {
      playHoverSound();
    }
  });
  button.addEventListener("focus", () => {
    if (!pickedCardId) {
      playHoverSound();
    }
  });
  return button;
}

function renderHand(hand) {
  dealtCards.innerHTML = "";
  hand.forEach((question, index) => {
    dealtCards.appendChild(buildCard(question, index));
  });
}

function pickCard(cardEl, question) {
  const allCards = Array.from(document.querySelectorAll(".deal-card"));

  if (activeCardEl === cardEl) {
    cardEl.classList.remove("is-revealed", "is-picked");
    allCards.forEach((card) => card.classList.remove("is-dim"));
    dealtCards.classList.remove("has-picked");
    focusOverlay.classList.remove("show");
    document.body.classList.remove("has-focus-card");
    activeCardEl = null;
    pickedCardId = null;
    dealStatus.textContent = "Kartu ditutup. Pilih kartu lain untuk membuka.";
    return;
  }

  if (activeCardEl) {
    activeCardEl.classList.remove("is-revealed", "is-picked");
  }

  pickedCardId = question.id;
  activeCardEl = cardEl;
  drawCount += 1;
  drawCountEl.textContent = String(drawCount);
  dealtCards.classList.add("has-picked");
  focusOverlay.classList.add("show");
  document.body.classList.add("has-focus-card");
  playPickSound();

  allCards.forEach((card) => {
    if (card === cardEl) {
      card.classList.add("is-revealed", "is-picked");
      card.classList.remove("is-dim");
    } else {
      card.classList.add("is-dim");
      card.classList.remove("is-revealed", "is-picked");
    }
  });

  dealStatus.textContent = `Kartu terpilih: ${titleCaseCategory(question.category)}. Klik kartu lagi untuk menutup, lalu pilih kartu lain.`;
}

function startDeal() {
  if (isDealing) {
    return;
  }

  isDealing = true;
  pickedCardId = null;
  activeCardEl = null;
  randomBtn.disabled = true;
  dealStatus.textContent = "Sedang shuffle card...";
  dealtCards.classList.remove("show");
  dealtCards.classList.remove("has-picked");
  dealtCards.innerHTML = "";
  focusOverlay.classList.remove("show");
  document.body.classList.remove("has-focus-card");
  playShuffleStartSound();

  shuffleOverlay.classList.remove("fade-out");
  shuffleOverlay.classList.add("show");

  const hand = pickHand(5);
  const pulseTimer = window.setInterval(playShufflePulseSound, 320);

  window.setTimeout(() => {
    shuffleOverlay.classList.add("fade-out");
  }, 920);

  window.setTimeout(() => {
    window.clearInterval(pulseTimer);
    shuffleOverlay.classList.remove("show", "fade-out");
    renderHand(hand);
    // Force reflow before fade-in class for smooth transition.
    void dealtCards.offsetWidth;
    dealtCards.classList.add("show");
    playDealRevealSound();
    dealStatus.textContent = "Pilih 1 kartu untuk membukanya.";
    randomBtn.disabled = false;
    isDealing = false;
  }, 1240);
}

if (totalCountEl) {
  totalCountEl.textContent = String(questions.length);
}

randomBtn.addEventListener("click", startDeal);

if (soundToggleBtn) {
  soundToggleBtn.addEventListener("click", () => {
    soundEnabled = !soundEnabled;
    soundToggleBtn.setAttribute("aria-pressed", String(soundEnabled));
    soundToggleBtn.textContent = soundEnabled ? "Sound: On" : "Sound: Off";
  });
}

document.addEventListener("keydown", (event) => {
  if (event.code === "Space" && !event.repeat) {
    event.preventDefault();
    startDeal();
  }
});
