/**
 * Question type:
 * { id: string, text: string, category?: string }
 */
const fallbackQuestions = [
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

const EVENT_TYPES = new Set(["shuffle_start", "shuffle_done", "hand_dealt", "card_hover", "card_pick", "card_close"]);
const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const CLIENT_ID_KEY = "leadership_prompt_client_id";
const QUESTION_STORE_KEY = "leadership_prompt_questions_v1";
const ADMIN_UNLOCK_KEY = "leadership_admin_unlocked";

const APP_CONFIG = {
  SUPABASE_URL: window.APP_CONFIG?.SUPABASE_URL || "",
  SUPABASE_ANON_KEY: window.APP_CONFIG?.SUPABASE_ANON_KEY || "",
  APP_ENV: window.APP_CONFIG?.APP_ENV || "development",
  APP_VERSION: window.APP_CONFIG?.APP_VERSION || "1.0.0",
  ADMIN_PASSWORD: window.APP_CONFIG?.ADMIN_PASSWORD || ""
};

const supabaseClient =
  APP_CONFIG.SUPABASE_URL &&
  APP_CONFIG.SUPABASE_ANON_KEY &&
  window.supabase?.createClient
    ? window.supabase.createClient(APP_CONFIG.SUPABASE_URL, APP_CONFIG.SUPABASE_ANON_KEY, {
        auth: {
          persistSession: false,
          autoRefreshToken: false,
          detectSessionInUrl: false
        }
      })
    : null;

const fanAngles = [-12, -6, 0, 6, 12];
const randomBtn = document.getElementById("random-btn");
const dealtCards = document.getElementById("dealt-cards");
const dealStatus = document.getElementById("deal-status");
const drawCountEl = document.getElementById("draw-count");
const totalCountEl = document.getElementById("total-count");
const shuffleOverlay = document.getElementById("shuffle-overlay");
const focusOverlay = document.getElementById("focus-overlay");
const soundToggleBtn = document.getElementById("sound-toggle-btn");
const manageQuestionsBtn = document.getElementById("manage-questions-btn");
const adminPasswordModal = document.getElementById("admin-password-modal");
const adminPasswordForm = document.getElementById("admin-password-form");
const adminPasswordInput = document.getElementById("admin-password-input");
const adminPasswordError = document.getElementById("admin-password-error");
const adminPasswordCancel = document.getElementById("admin-password-cancel");
const adminPanel = document.getElementById("admin-panel");
const adminCloseBtn = document.getElementById("admin-close-btn");
const questionForm = document.getElementById("question-form");
const questionIdInput = document.getElementById("question-id-input");
const questionTextInput = document.getElementById("question-text-input");
const questionCategoryInput = document.getElementById("question-category-input");
const questionActiveInput = document.getElementById("question-active-input");
const questionFormStatus = document.getElementById("question-form-status");
const questionSubmitBtn = document.getElementById("question-submit-btn");
const questionResetBtn = document.getElementById("question-reset-btn");
const questionList = document.getElementById("question-list");
const questionListCount = document.getElementById("question-list-count");

let questions = [];
let drawCount = 0;
let isDealing = false;
let pickedCardId = null;
let activeCardEl = null;
let audioCtx = null;
let soundEnabled = true;
let lastHoverSoundAt = 0;
let currentSessionId = null;
let sessionPromise = null;

function getClientId() {
  let clientId = localStorage.getItem(CLIENT_ID_KEY);
  if (clientId) {
    return clientId;
  }

  if (window.crypto?.randomUUID) {
    clientId = window.crypto.randomUUID();
  } else {
    clientId = `client_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
  }

  localStorage.setItem(CLIENT_ID_KEY, clientId);
  return clientId;
}

function sanitizeCategory(value) {
  const normalized = String(value || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .slice(0, 40);

  return normalized || "general";
}

function normalizeQuestion(record, index) {
  if (!record || typeof record !== "object") {
    return null;
  }

  const text = String(record.text || "").trim();
  if (!text) {
    return null;
  }

  let id = String(record.id || "").trim();
  if (!id) {
    id = window.crypto?.randomUUID ? window.crypto.randomUUID() : `local_${Date.now()}_${index}`;
  }

  return {
    id,
    text,
    category: sanitizeCategory(record.category),
    is_active: record.is_active !== false,
    updated_at: String(record.updated_at || new Date().toISOString())
  };
}

function getQuestionStore() {
  const raw = localStorage.getItem(QUESTION_STORE_KEY);
  if (!raw) {
    return [];
  }

  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed
      .map((item, index) => normalizeQuestion(item, index))
      .filter((item) => item !== null);
  } catch (error) {
    console.warn("[QuestionStore] Failed to parse local store, resetting:", error.message);
    return [];
  }
}

function saveQuestionStore(nextQuestions) {
  localStorage.setItem(QUESTION_STORE_KEY, JSON.stringify(nextQuestions));
}

function getActiveQuestions() {
  return questions.filter((question) => question.is_active !== false);
}

function refreshDeckMeta() {
  const activeCount = getActiveQuestions().length;
  totalCountEl.textContent = String(activeCount);

  if (activeCount === 0) {
    randomBtn.disabled = true;
    dealStatus.textContent = "Belum ada question aktif. Tambahkan question dari Manage Questions.";
  } else if (!isDealing) {
    randomBtn.disabled = false;
  }

  if (questionListCount) {
    questionListCount.textContent = `${questions.length} item`;
  }
}

async function loadQuestionsFromDB() {
  if (!supabaseClient) {
    return [...fallbackQuestions];
  }

  const { data, error } = await supabaseClient
    .from("questions")
    .select("id,text,category,is_active,sort_order,created_at,updated_at")
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: true });

  if (error) {
    console.warn("[Supabase] Failed to load questions, fallback to local:", error.message);
    return [...fallbackQuestions];
  }

  if (!data || data.length === 0) {
    console.warn("[Supabase] Questions table empty, fallback to local.");
    return [...fallbackQuestions];
  }

  return data.map((row) => ({
    id: row.id,
    text: row.text,
    category: row.category,
    is_active: row.is_active !== false,
    updated_at: row.updated_at || row.created_at
  }));
}

async function bootstrapQuestionStore() {
  const localQuestions = getQuestionStore();
  if (localQuestions.length > 0) {
    return localQuestions;
  }

  const loaded = await loadQuestionsFromDB();
  const normalized = loaded
    .map((item, index) => normalizeQuestion(item, index))
    .filter((item) => item !== null);

  if (normalized.length > 0) {
    saveQuestionStore(normalized);
    return normalized;
  }

  const fallback = fallbackQuestions
    .map((item, index) => normalizeQuestion(item, index))
    .filter((item) => item !== null);

  saveQuestionStore(fallback);
  return fallback;
}

async function startSession(clientId) {
  if (!supabaseClient) {
    return null;
  }

  const { data, error } = await supabaseClient
    .from("game_sessions")
    .insert({
      client_id: clientId,
      app_version: APP_CONFIG.APP_VERSION
    })
    .select("id")
    .single();

  if (error) {
    throw error;
  }

  return data.id;
}

async function ensureSession() {
  if (currentSessionId) {
    return currentSessionId;
  }

  if (!supabaseClient) {
    return null;
  }

  if (sessionPromise) {
    return sessionPromise;
  }

  sessionPromise = startSession(getClientId())
    .then((sessionId) => {
      currentSessionId = sessionId;
      return sessionId;
    })
    .catch((error) => {
      console.warn("[Supabase] Failed to start session:", error.message);
      return null;
    })
    .finally(() => {
      sessionPromise = null;
    });

  return sessionPromise;
}

function normalizeQuestionId(value) {
  if (!value || !UUID_RE.test(value)) {
    return null;
  }
  return value;
}

async function logEvent(payload) {
  if (!supabaseClient) {
    return;
  }

  const eventType = payload?.event_type;
  if (!EVENT_TYPES.has(eventType)) {
    return;
  }

  const sessionId = await ensureSession();
  if (!sessionId) {
    return;
  }

  const data = {
    session_id: sessionId,
    client_id: getClientId(),
    event_type: eventType,
    question_id: normalizeQuestionId(payload.question_id),
    hand_index: Number.isInteger(payload.hand_index) ? payload.hand_index : null,
    meta_json: payload.meta_json && typeof payload.meta_json === "object" ? payload.meta_json : {}
  };

  const { error } = await supabaseClient.from("card_events").insert(data);
  if (error) {
    throw error;
  }
}

function safeLogEvent(payload) {
  logEvent(payload).catch((error) => {
    console.warn("[Supabase] Failed to log event:", error.message);
  });
}

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
  const activeQuestions = getActiveQuestions();
  if (activeQuestions.length === 0) {
    return [];
  }

  const safeCount = Math.min(count, activeQuestions.length);
  const width = Math.min(window.innerWidth, 920);
  const spacing = width < 760 ? 72 : 112;
  const fanOffsets = [-2 * spacing, -spacing, 0, spacing, 2 * spacing];

  return shuffled(activeQuestions).slice(0, safeCount).map((question, index) => {
    const palette = palettes[Math.floor(Math.random() * palettes.length)];

    return {
      ...question,
      palette,
      angle: fanAngles[index] ?? 0,
      offset: fanOffsets[index] ?? 0,
      handIndex: index
    };
  });
}

function buildCard(question, index) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "deal-card";
  button.dataset.questionId = question.id;
  button.dataset.handIndex = String(question.handIndex ?? index);
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
      safeLogEvent({
        event_type: "card_hover",
        question_id: question.id,
        hand_index: Number(button.dataset.handIndex),
        meta_json: { source: "hover" }
      });
    }
  });
  button.addEventListener("focus", () => {
    if (!pickedCardId) {
      playHoverSound();
      safeLogEvent({
        event_type: "card_hover",
        question_id: question.id,
        hand_index: Number(button.dataset.handIndex),
        meta_json: { source: "focus" }
      });
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

    safeLogEvent({
      event_type: "card_close",
      question_id: question.id,
      hand_index: Number(cardEl.dataset.handIndex),
      meta_json: { action: "toggle_close" }
    });
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

  safeLogEvent({
    event_type: "card_pick",
    question_id: question.id,
    hand_index: Number(cardEl.dataset.handIndex),
    meta_json: { draw_count: drawCount }
  });
}

function closeFocusCardState() {
  pickedCardId = null;
  activeCardEl = null;
  dealtCards.classList.remove("has-picked");
  focusOverlay.classList.remove("show");
  document.body.classList.remove("has-focus-card");
}

async function startDeal() {
  if (isDealing || adminPanel?.classList.contains("show") || adminPasswordModal?.classList.contains("show")) {
    return;
  }

  if (getActiveQuestions().length === 0) {
    dealStatus.textContent = "Belum ada question aktif. Tambahkan question dari Manage Questions.";
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

  void ensureSession();
  safeLogEvent({ event_type: "shuffle_start", meta_json: { env: APP_CONFIG.APP_ENV } });

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
    void dealtCards.offsetWidth;
    dealtCards.classList.add("show");
    playDealRevealSound();
    dealStatus.textContent = "Pilih 1 kartu untuk membukanya.";
    randomBtn.disabled = false;
    isDealing = false;

    safeLogEvent({
      event_type: "shuffle_done",
      meta_json: { hand_size: hand.length }
    });
    safeLogEvent({
      event_type: "hand_dealt",
      meta_json: {
        hand_size: hand.length,
        question_ids: hand.map((q) => q.id)
      }
    });
  }, 1240);
}

function isAdminUnlocked() {
  return sessionStorage.getItem(ADMIN_UNLOCK_KEY) === "1";
}

function setAdminUnlocked(value) {
  if (value) {
    sessionStorage.setItem(ADMIN_UNLOCK_KEY, "1");
  } else {
    sessionStorage.removeItem(ADMIN_UNLOCK_KEY);
  }
}

function verifyAdminPassword(input) {
  const configuredPassword = String(APP_CONFIG.ADMIN_PASSWORD || "");
  if (!configuredPassword) {
    return { ok: false, message: "ADMIN_PASSWORD belum diset di APP_CONFIG." };
  }

  if (String(input || "") !== configuredPassword) {
    return { ok: false, message: "Password salah." };
  }

  return { ok: true, message: "" };
}

function openAdminPasswordModal() {
  if (!adminPasswordModal) {
    return;
  }
  adminPasswordError.textContent = "";
  adminPasswordInput.value = "";
  adminPasswordModal.classList.add("show");
  adminPasswordModal.setAttribute("aria-hidden", "false");
  window.setTimeout(() => {
    adminPasswordInput.focus();
  }, 20);
}

function closeAdminPasswordModal() {
  if (!adminPasswordModal) {
    return;
  }
  adminPasswordModal.classList.remove("show");
  adminPasswordModal.setAttribute("aria-hidden", "true");
}

function setFormModeAdd() {
  questionIdInput.value = "";
  questionTextInput.value = "";
  questionCategoryInput.value = "general";
  questionActiveInput.checked = true;
  questionSubmitBtn.textContent = "Add Question";
}

function setFormModeEdit(question) {
  questionIdInput.value = question.id;
  questionTextInput.value = question.text;
  questionCategoryInput.value = question.category || "general";
  questionActiveInput.checked = question.is_active !== false;
  questionSubmitBtn.textContent = "Update Question";
}

function setQuestionFormStatus(message, isError = false) {
  if (!questionFormStatus) {
    return;
  }
  questionFormStatus.textContent = message;
  questionFormStatus.style.color = isError ? "#b91c1c" : "rgba(17, 24, 39, 0.76)";
}

function isDuplicateText(text, ignoreId = "") {
  const target = text.trim().toLowerCase();
  return questions.some((question) => {
    if (ignoreId && question.id === ignoreId) {
      return false;
    }
    return question.text.trim().toLowerCase() === target;
  });
}

async function createQuestion(payload) {
  if (!isAdminUnlocked()) {
    return { ok: false, message: "Akses ditolak." };
  }

  const text = String(payload.text || "").trim();
  if (text.length < 8) {
    return { ok: false, message: "Question minimal 8 karakter." };
  }

  if (isDuplicateText(text)) {
    return { ok: false, message: "Question yang sama sudah ada." };
  }

  const question = {
    id: window.crypto?.randomUUID ? window.crypto.randomUUID() : `local_${Date.now()}`,
    text,
    category: sanitizeCategory(payload.category),
    is_active: payload.is_active !== false,
    updated_at: new Date().toISOString()
  };

  if (supabaseClient) {
    const { error } = await supabaseClient.from("questions").insert({
      id: question.id,
      text: question.text,
      category: question.category,
      is_active: question.is_active,
      sort_order: 0
    });

    if (error) {
      return { ok: false, message: `Gagal sync ke Supabase: ${error.message}` };
    }
  }

  questions = [question, ...questions];
  saveQuestionStore(questions);
  refreshDeckMeta();
  renderQuestionList();

  if (!supabaseClient) {
    return { ok: true, message: "Question berhasil ditambahkan (lokal, Supabase nonaktif)." };
  }

  return { ok: true, message: "Question berhasil ditambahkan & tersinkron ke Supabase." };
}

async function updateQuestion(id, payload) {
  if (!isAdminUnlocked()) {
    return { ok: false, message: "Akses ditolak." };
  }

  const text = String(payload.text || "").trim();
  if (text.length < 8) {
    return { ok: false, message: "Question minimal 8 karakter." };
  }

  if (isDuplicateText(text, id)) {
    return { ok: false, message: "Question yang sama sudah ada." };
  }

  const index = questions.findIndex((question) => question.id === id);
  if (index < 0) {
    return { ok: false, message: "Question tidak ditemukan." };
  }

  const nextQuestion = {
    ...questions[index],
    text,
    category: sanitizeCategory(payload.category),
    is_active: payload.is_active !== false,
    updated_at: new Date().toISOString()
  };

  if (supabaseClient) {
    const { error } = await supabaseClient
      .from("questions")
      .update({
        text: nextQuestion.text,
        category: nextQuestion.category,
        is_active: nextQuestion.is_active
      })
      .eq("id", id);

    if (error) {
      return { ok: false, message: `Gagal sync ke Supabase: ${error.message}` };
    }
  }

  questions[index] = nextQuestion;

  saveQuestionStore(questions);
  refreshDeckMeta();
  renderQuestionList();

  if (!supabaseClient) {
    return { ok: true, message: "Question berhasil diupdate (lokal, Supabase nonaktif)." };
  }

  return { ok: true, message: "Question berhasil diupdate & tersinkron ke Supabase." };
}

async function deleteQuestion(id) {
  if (!isAdminUnlocked()) {
    return { ok: false, message: "Akses ditolak." };
  }

  const existing = questions.find((question) => question.id === id);
  if (!existing) {
    return { ok: false, message: "Question tidak ditemukan." };
  }

  if (supabaseClient) {
    const { error } = await supabaseClient.from("questions").delete().eq("id", id);
    if (error) {
      return { ok: false, message: `Gagal sync ke Supabase: ${error.message}` };
    }
  }

  questions = questions.filter((question) => question.id !== id);
  saveQuestionStore(questions);
  refreshDeckMeta();
  renderQuestionList();

  if (!supabaseClient) {
    return { ok: true, message: "Question berhasil dihapus (lokal, Supabase nonaktif)." };
  }

  return { ok: true, message: "Question berhasil dihapus & tersinkron ke Supabase." };
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderQuestionList() {
  if (!questionList) {
    return;
  }

  if (questions.length === 0) {
    questionList.innerHTML = '<p class="question-empty">Belum ada question. Tambahkan dari form di atas.</p>';
    questionListCount.textContent = "0 item";
    return;
  }

  questionListCount.textContent = `${questions.length} item`;

  questionList.innerHTML = questions
    .map((question) => {
      const safeText = escapeHtml(question.text);
      const safeCategory = escapeHtml(titleCaseCategory(question.category));
      const stateLabel = question.is_active !== false ? "Active" : "Inactive";

      return `
        <article class="question-item" data-id="${question.id}">
          <div class="question-item-head">
            <div class="question-item-meta">
              <span class="question-item-category">${safeCategory}</span>
              <span class="question-item-state">${stateLabel}</span>
            </div>
            <div class="question-item-actions">
              <button class="mini-btn" type="button" data-action="edit" data-id="${question.id}">Edit</button>
              <button class="mini-btn danger" type="button" data-action="delete" data-id="${question.id}">Delete</button>
            </div>
          </div>
          <p class="question-item-text">${safeText}</p>
        </article>
      `;
    })
    .join("");
}

function openAdminPanel() {
  if (!adminPanel) {
    return;
  }
  adminPanel.classList.add("show");
  adminPanel.setAttribute("aria-hidden", "false");
  setQuestionFormStatus("");
  renderQuestionList();
  setFormModeAdd();
  questionTextInput.focus();
}

function closeAdminPanel() {
  if (!adminPanel) {
    return;
  }
  adminPanel.classList.remove("show");
  adminPanel.setAttribute("aria-hidden", "true");
  setQuestionFormStatus("");
  setFormModeAdd();
}

function openManageQuestions() {
  if (isAdminUnlocked()) {
    openAdminPanel();
    return;
  }

  openAdminPasswordModal();
}

function bindAdminEvents() {
  if (!manageQuestionsBtn) {
    return;
  }

  manageQuestionsBtn.addEventListener("click", openManageQuestions);

  adminPasswordCancel?.addEventListener("click", closeAdminPasswordModal);

  adminPasswordModal?.addEventListener("click", (event) => {
    if (event.target === adminPasswordModal) {
      closeAdminPasswordModal();
    }
  });

  adminPasswordForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const result = verifyAdminPassword(adminPasswordInput.value);

    if (!result.ok) {
      adminPasswordError.textContent = result.message;
      return;
    }

    setAdminUnlocked(true);
    closeAdminPasswordModal();
    openAdminPanel();
  });

  adminCloseBtn?.addEventListener("click", closeAdminPanel);

  adminPanel?.addEventListener("click", (event) => {
    if (event.target === adminPanel) {
      closeAdminPanel();
    }
  });

  questionResetBtn?.addEventListener("click", () => {
    setFormModeAdd();
    setQuestionFormStatus("Form direset.");
  });

  questionForm?.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!isAdminUnlocked()) {
      setQuestionFormStatus("Akses ditolak. Unlock ulang halaman admin.", true);
      return;
    }

    const payload = {
      text: questionTextInput.value,
      category: questionCategoryInput.value,
      is_active: questionActiveInput.checked
    };

    const editingId = questionIdInput.value;
    const result = editingId ? await updateQuestion(editingId, payload) : await createQuestion(payload);
    setQuestionFormStatus(result.message, !result.ok);

    if (result.ok) {
      setFormModeAdd();
      closeFocusCardState();
      dealtCards.innerHTML = "";
      dealtCards.classList.remove("show");
    }
  });

  questionList?.addEventListener("click", async (event) => {
    const target = event.target;
    if (!(target instanceof HTMLButtonElement)) {
      return;
    }

    const action = target.dataset.action;
    const id = target.dataset.id;
    if (!action || !id) {
      return;
    }

    if (!isAdminUnlocked()) {
      setQuestionFormStatus("Akses ditolak. Unlock ulang halaman admin.", true);
      return;
    }

    if (action === "edit") {
      const question = questions.find((item) => item.id === id);
      if (!question) {
        setQuestionFormStatus("Question tidak ditemukan.", true);
        return;
      }

      setFormModeEdit(question);
      setQuestionFormStatus("Mode edit aktif.");
      questionTextInput.focus();
      return;
    }

    if (action === "delete") {
      const ok = window.confirm("Hapus question ini?");
      if (!ok) {
        return;
      }

      const result = await deleteQuestion(id);
      setQuestionFormStatus(result.message, !result.ok);

      if (result.ok) {
        setFormModeAdd();
        closeFocusCardState();
        dealtCards.innerHTML = "";
        dealtCards.classList.remove("show");
      }
    }
  });
}

function isTypingElement(target) {
  return target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target instanceof HTMLSelectElement;
}

async function bootstrapApp() {
  randomBtn.disabled = true;
  dealStatus.textContent = "Memuat pertanyaan...";

  questions = await bootstrapQuestionStore();
  drawCountEl.textContent = String(drawCount);
  refreshDeckMeta();

  if (getActiveQuestions().length > 0) {
    if (!supabaseClient) {
      dealStatus.textContent = "Mode lokal aktif. Tekan tombol untuk shuffle deck.";
    } else {
      dealStatus.textContent = "Tekan tombol untuk shuffle deck.";
    }
  }

  bindAdminEvents();
  randomBtn.disabled = getActiveQuestions().length === 0;
}

randomBtn.addEventListener("click", () => {
  void startDeal();
});

if (soundToggleBtn) {
  soundToggleBtn.addEventListener("click", () => {
    soundEnabled = !soundEnabled;
    soundToggleBtn.setAttribute("aria-pressed", String(soundEnabled));
    soundToggleBtn.textContent = soundEnabled ? "Sound: On" : "Sound: Off";
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (adminPasswordModal?.classList.contains("show")) {
      closeAdminPasswordModal();
      return;
    }

    if (adminPanel?.classList.contains("show")) {
      closeAdminPanel();
      return;
    }
  }

  if (event.code === "Space" && !event.repeat) {
    if (isTypingElement(event.target)) {
      return;
    }

    if (adminPanel?.classList.contains("show") || adminPasswordModal?.classList.contains("show")) {
      return;
    }

    event.preventDefault();
    void startDeal();
  }
});

void bootstrapApp();
