# Leadership Prompt Deck

Aplikasi web interaktif untuk membantu leader menyiapkan pertanyaan reflektif One-on-One dengan flow:
- Shuffle deck
- Deal 5 kartu tertutup
- Pilih 1 kartu untuk dibuka (popup focus)
- Tutup kartu dan pilih kartu lain

Sekarang aplikasi sudah mendukung **Supabase** untuk:
- Source of truth bank pertanyaan (`questions`)
- Logging interaksi anonymous (`game_sessions`, `card_events`)
- Fallback ke data lokal jika Supabase tidak tersedia
- Kelola question in-app (CRUD lokal + auto sync Supabase) dengan password gate

## PRD Singkat (Sesuai Implementasi)

### Tujuan
- Menyimpan pertanyaan di database agar mudah dikelola.
- Menyimpan histori penggunaan (`shuffle`, `deal`, `hover`, `pick`, `close`).
- Menjaga UX yang sudah ada tetap cepat dan smooth.

### Scope MVP
- Frontend vanilla (`index.html`, `styles.css`, `app.js`)
- Supabase direct dari frontend (`supabase-js`)
- Auth mode anonymous (client id lokal, tanpa login user)
- Raw data table untuk observability (tanpa dashboard admin)

### Out of Scope
- Email/Google login
- CMS admin server-side
- Dashboard analytics internal

## Arsitektur Data

### Tabel
1. `questions`
- Master pertanyaan
- Dipakai untuk render hand 5 kartu

2. `game_sessions`
- Menandai satu sesi bermain user anonymous

3. `card_events`
- Menyimpan event interaksi:
- `shuffle_start`, `shuffle_done`, `hand_dealt`, `card_hover`, `card_pick`, `card_close`

### File SQL
- Migration: [`supabase/migrations/20260301_000001_init_leadership_prompt_deck.sql`](/Users/sanosempati/Documents/Flash Card for leader/supabase/migrations/20260301_000001_init_leadership_prompt_deck.sql)
- Policy update CRUD questions: [`supabase/migrations/20260301_000002_questions_crud_anon.sql`](/Users/sanosempati/Documents/Flash Card for leader/supabase/migrations/20260301_000002_questions_crud_anon.sql)
- Seed: [`supabase/seed/seed_questions.sql`](/Users/sanosempati/Documents/Flash Card for leader/supabase/seed/seed_questions.sql)

## Setup Supabase

### 1. Buat project Supabase
- Ambil:
- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`

### 2. Jalankan migration SQL
Di SQL Editor Supabase, jalankan isi file:
- `supabase/migrations/20260301_000001_init_leadership_prompt_deck.sql`

### 3. Seed bank pertanyaan
Jalankan isi file:
- `supabase/seed/seed_questions.sql`

### 4. Aktifkan policy CRUD question (wajib untuk auto sync admin panel)
Jalankan isi file:
- `supabase/migrations/20260301_000002_questions_crud_anon.sql`

### 5. Konfigurasi frontend
Aplikasi membaca config dari `window.APP_CONFIG`.

Contoh cepat:
1. Copy file contoh:
```bash
cp config.example.js config.js
```
2. Isi nilai `SUPABASE_URL` dan `SUPABASE_ANON_KEY` di `config.js`
3. Load `config.js` sebelum `app.js` di `index.html` (opsional jika tidak ingin edit inline config)

Default saat ini di `index.html`:
- `window.APP_CONFIG` berisi nilai kosong
- Jika kosong, aplikasi otomatis fallback ke data lokal

## Menjalankan Aplikasi
1. Clone repo
2. Buka `index.html` di browser
3. Klik `Shuffle & Deal 5 Cards`

## Kelola Question In-App (Auto Sync Supabase)
- Klik tombol `Manage Questions` di kanan atas.
- Masukkan password admin (`APP_CONFIG.ADMIN_PASSWORD`).
- Di panel admin kamu bisa add, edit, delete, dan toggle status aktif/non-aktif question.

Semua perubahan tetap disimpan ke `localStorage` key `leadership_prompt_questions_v1`.
Jika Supabase aktif, setiap add/edit/delete juga otomatis update tabel `questions`.

Catatan keamanan:
- Password ini adalah proteksi UI internal frontend (bukan auth backend).
- Untuk ganti password, ubah `ADMIN_PASSWORD` di `config.public.js`.
- Karena mode ini memakai `anon` policy write, gunakan hanya untuk internal MVP.

## Event Logging (Yang Dicatat)
Saat Supabase aktif, app akan mencatat:
- Saat shuffle dimulai
- Saat hand 5 kartu selesai ditampilkan
- Saat hover kartu (dengan throttle)
- Saat pick kartu
- Saat close kartu

Catatan:
- Logging bersifat non-blocking agar animasi UI tetap lancar.
- Jika insert gagal, app tetap jalan normal dan hanya menulis warning di console.

## Fallback Behavior
Jika:
- config Supabase tidak diisi,
- koneksi gagal,
- atau tabel `questions` kosong,

maka aplikasi otomatis memakai `fallbackQuestions` di `app.js`.

## Struktur File
- [`index.html`](/Users/sanosempati/Documents/Flash Card for leader/index.html): UI structure + config bootstrap + script load
- [`styles.css`](/Users/sanosempati/Documents/Flash Card for leader/styles.css): styling, animation, responsive layout
- [`app.js`](/Users/sanosempati/Documents/Flash Card for leader/app.js): game flow, audio, Supabase integration, local CRUD manager + password gate
- [`config.example.js`](/Users/sanosempati/Documents/Flash Card for leader/config.example.js): template konfigurasi Supabase

## Validasi Minimum Setelah Setup
- `questions` berhasil terbaca dari Supabase (deck size sesuai data DB)
- Event `shuffle_start` dan `card_pick` muncul di tabel `card_events`
- Saat Supabase dimatikan, app tetap berfungsi (fallback local)
