# Leadership Prompt Deck

PRD ringkas untuk aplikasi web interaktif flashcard leadership yang dipakai sebelum sesi One-on-One.

## 1. Ringkasan Produk
Aplikasi ini membantu leader mendapatkan pertanyaan reflektif leadership secara cepat melalui mekanisme:
- `Shuffle` deck
- `Deal` 5 kartu tertutup
- Pilih 1 kartu untuk dibuka (pop-up fokus)
- Tutup kartu dan pilih kartu lain dalam hand yang sama

Produk berfokus pada pengalaman ringan, cepat, dan engaging (visual + audio feedback).

## 2. Tujuan
- Membantu leader memulai percakapan One-on-One dengan pertanyaan berkualitas.
- Mengurangi kebuntuan saat mencari topik diskusi.
- Memberikan pengalaman yang menyenangkan agar penggunaan berulang lebih tinggi.

## 3. Scope MVP
### In Scope
- Single-page web app (tanpa backend).
- Bank pertanyaan statis (hardcoded).
- Flow interaktif: shuffle -> popup animasi -> fade out -> tampil 5 kartu.
- User dapat:
  - memilih 1 kartu untuk membuka,
  - menutup kartu yang terbuka,
  - memilih kartu lain tanpa shuffle ulang.
- Audio trigger:
  - shuffle start,
  - shuffle pulse,
  - reveal hand,
  - hover kartu,
  - pick kartu.
- Toggle suara `Sound: On/Off`.

### Out of Scope
- Login/user account.
- Penyimpanan histori/favorit.
- Integrasi calendar/HRIS.
- AI generation real-time.
- Analytics backend.

## 4. Persona Utama
- People manager / team leader yang rutin menjalankan One-on-One.
- Membutuhkan prompt cepat untuk membuka diskusi bermakna.

## 5. User Flow
1. User membuka halaman aplikasi.
2. User klik `Shuffle & Deal 5 Cards`.
3. Muncul popup animasi shuffle.
4. Popup fade out.
5. Muncul 5 kartu tertutup dalam layout fan.
6. User klik 1 kartu:
   - kartu naik ke tengah dan terbuka,
   - kartu lain diredupkan.
7. User klik kartu yang sama untuk menutup, lalu bisa pilih kartu lain.
8. User bisa shuffle ulang untuk round berikutnya.

## 6. Requirement Fungsional
- Menampilkan total deck size.
- Menampilkan `cards picked` counter.
- Deal selalu menghasilkan 5 kartu dari kumpulan pertanyaan.
- Kartu terpilih menjadi fokus (popup center) dan readable.
- State management:
  - belum ada kartu dipilih,
  - kartu aktif terbuka,
  - kartu ditutup kembali.
- Sound toggle mengontrol semua efek audio.

## 7. Requirement Non-Fungsional
- Responsive desktop + mobile.
- Interaksi terasa smooth (animasi transisi, fade, flip, pop-up).
- Tidak bergantung API eksternal.
- Performa ringan (HTML/CSS/JS vanilla).

## 8. Acceptance Criteria
- Sebelum shuffle, 5 kartu belum tampil.
- Saat shuffle, popup animasi muncul lalu menghilang.
- Setelah popup hilang, 5 kartu tampil dengan fade-in.
- User bisa membuka 1 kartu, menutupnya, lalu memilih kartu lain.
- Tombol suara berfungsi (On/Off).
- Tampilan tetap rapi di desktop dan mobile.

## 9. Struktur Teknis
- `index.html`: struktur UI, action controls, overlay shuffle.
- `styles.css`: layout, animasi, popup, fan cards, responsive styling.
- `app.js`: data pertanyaan, state interaksi, audio engine (Web Audio API), event handling.

## 10. Cara Menjalankan
1. Clone repository.
2. Buka file `index.html` di browser.
3. Klik `Shuffle & Deal 5 Cards` untuk mulai.

---

Dokumen ini mengikuti kondisi implementasi terkini pada repository.
