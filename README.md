
# LaporRT

LaporRT adalah aplikasi web pengaduan lingkungan RT yang membantu warga menyampaikan laporan dan membantu pengurus RT menerima, mengelola, serta memantau perkembangan pengaduan.

Aplikasi ini dikembangkan sebagai Minimum Viable Product (MVP) untuk mendukung proses pengaduan lingkungan secara lebih terstruktur dan transparan.

## Fitur Utama

### Warga
- Melihat informasi dan cara kerja aplikasi.
- Mengirim pengaduan tanpa membuat akun.
- Menambahkan maksimal 3 foto bukti.
- Mendapatkan Nomor Laporan dan Kode Rahasia.
- Melacak perkembangan pengaduan menggunakan kedua informasi tersebut.

### Admin RT
- Login menggunakan akun admin.
- Melihat statistik dan daftar pengaduan.
- Melihat detail pengaduan dan lampiran.
- Mengubah status pengaduan.
- Memberikan pesan perkembangan kepada warga.
- Melihat riwayat perubahan status.

## Technology Stack

### Frontend
- React
- Vite
- JavaScript
- Tailwind CSS v4
- React Router DOM

### Backend
- Java 21
- Spring Boot
- Maven
- Spring Data JPA
- PostgreSQL 18
- Jakarta Bean Validation
- Spring Security
- JWT
- BCrypt
- Flyway

## Repository Structure

```text
lapor-rt/
├── docs/
├── frontend/
├── backend/
├── .gitignore
├── README.md
└── ROADMAP.md
```

## Getting Started

### 1. Clone Repository

```bash
git clone https://github.com/AchmadRifkyMeishandy/lapor-rt.git
```

### 2. Run Frontend

```bash
cd lapor-rt/frontend
npm install
npm run dev
```

Buka alamat lokal yang ditampilkan oleh Vite di terminal.

### 3. Backend

Backend akan dikembangkan menggunakan Java 21, Spring Boot, Maven, dan PostgreSQL.

Panduan instalasi serta konfigurasi backend akan ditambahkan setelah fondasi backend selesai dibuat.

## Documentation

- `ROADMAP.md` — roadmap dan tahapan pengembangan proyek.
- `docs/ERD.dbml` — desain struktur dan relasi database.
- `docs/API-CONTRACT.md` — kontrak komunikasi REST API (dalam pengembangan).
- `frontend/README.md` — panduan khusus frontend.

## Development Status

- [x] Initial frontend structure.
- [x] Main frontend pages and components.
- [x] Frontend lint and production build.
- [ ] Final frontend acceptance testing.
- [ ] Backend foundation.
- [ ] Database implementation.
- [ ] REST API implementation.
- [ ] Frontend and backend integration.
- [ ] Testing and deployment.

## Security

Keamanan menjadi bagian dari proses pengembangan sejak awal.

Beberapa prinsip yang diterapkan:
- Password admin disimpan menggunakan BCrypt.
- Kode pelacakan disimpan dalam bentuk SHA-256 hash.
- Endpoint admin dilindungi autentikasi dan otorisasi.
- Lampiran pengaduan disimpan secara privat.
- Input dan file divalidasi di backend.

## Project Repository

https://github.com/AchmadRifkyMeishandy/lapor-rt
