# BSA College — Next.js

Website BSA College Singaraja berdasarkan dokumen **1. Power Point Sosialisasi.pdf**. Dibangun dengan Next.js App Router, TypeScript, React, dan CSS responsif.

## Menjalankan

```bash
npm install
npm run dev
```

Buka http://localhost:3000. Jika port terpakai: `npm run dev -- --port 3001`.

## Verifikasi dan build

```bash
npm run typecheck
npm run build
```

Konfigurasi menggunakan static export; hasil produksi ada di `out/` dan bisa ditempatkan pada hosting statis. Untuk meninjau hasil build: `python3 -m http.server 3000 --directory out`.

## Konten dan interaksi

- Identitas, program, biaya, kontak, dan foto diambil dari brosur; data program ada di `lib/content.ts`.
- Program Reguler dan RPL Online, pilihan program otomatis ke formulir, FAQ, menu seluler, galeri dialog dengan navigasi foto, unduhan PDF.
- Formulir menyiapkan pesan WhatsApp ke nomor di brosur. Tidak menyimpan data ke database dan tidak mengirim otomatis. Pengunjung mengirim pesan sendiri melalui WhatsApp.
- Biaya ditampilkan sesuai brosur dan dilengkapi catatan konfirmasi. Tidak ada periode penerimaan atau janji penempatan kerja yang ditambahkan.
- Foto galeri adalah dokumentasi dari brosur; judul foto adalah teks editorial, bukan testimoni.
- Google Fonts digunakan dengan fallback font sistem. Foto dan logo disimpan lokal di `public/images`.

## File utama

- `components/college-site.tsx`: komponen halaman dan interaksi.
- `app/globals.css`: desain dan tata letak responsif.
- `lib/content.ts`: daftar program, galeri, dan nomor WhatsApp.
- `app/layout.tsx`: metadata dan bahasa halaman.
- `public/brosur-bsa-college.pdf`: brosur sumber untuk diunduh.
