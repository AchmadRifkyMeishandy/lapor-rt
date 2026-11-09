
# LaporRT Frontend

Frontend aplikasi LaporRT, portal aspirasi dan pengaduan warga untuk membantu pengurus RT menerima, mencatat, dan memantau laporan lingkungan.

## Technology Stack

- React
- Vite
- JavaScript
- Tailwind CSS v4
- React Router DOM

## Requirements

Pastikan perangkat telah memiliki:

- Node.js
- npm

Periksa instalasi:

```bash
node -v
npm -v
```

## Installation

Clone repository:

```bash
git clone https://github.com/AchmadRifkyMeishandy/lapor-rt.git
```

Masuk ke folder frontend:

```bash
cd lapor-rt/frontend
```

Install dependencies:

```bash
npm install
```

## Development

Jalankan development server:

```bash
npm run dev
```

Buka alamat lokal yang ditampilkan oleh Vite di terminal.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Menjalankan development server |
| `npm run build` | Membuat production build |
| `npm run preview` | Menjalankan preview production build |
| `npm run lint` | Memeriksa kualitas kode dengan ESLint |

## Project Structure

```text
src/
├── assets/
├── components/
│   ├── admin/
│   ├── common/
│   └── complaint/
├── data/
├── layouts/
├── pages/
├── services/
├── App.jsx
├── index.css
└── main.jsx
```

## Application Pages

### Public Pages

- Beranda
- Formulir Pengaduan
- Pelacakan Pengaduan

### Admin Pages

- Login Admin
- Dashboard Pengurus RT
- Detail Pengaduan

## Development Status

Halaman dan komponen utama frontend telah dibuat.

Beberapa interaksi masih menggunakan mock data. Integrasi dengan REST API Spring Boot akan dilakukan pada tahap pengembangan berikutnya.

## Backend Integration

Backend direncanakan menggunakan:

- Java 21
- Spring Boot
- Maven
- PostgreSQL

API menggunakan prefix `/api/v1`.

## Repository

https://github.com/AchmadRifkyMeishandy/lapor-rt
