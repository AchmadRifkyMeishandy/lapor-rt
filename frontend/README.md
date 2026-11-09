# LaporRT - Frontend

Frontend aplikasi LaporRT, portal aspirasi dan pengaduan warga untuk membantu pengurus RT menerima, mencatat, dan memantau laporan lingkungan.

## Technology Stack

- React
- Vite
- JavaScript
- Tailwind CSS v4
- React Router DOM

## Requirements

Pastikan perangkat sudah memiliki:

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

Buka alamat yang ditampilkan oleh Vite di terminal.

## Available Scripts

| Command           | Description                           |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Menjalankan development server        |
| `npm run build`   | Membuat production build              |
| `npm run preview` | Menjalankan preview production build  |
| `npm run lint`    | Memeriksa kualitas kode dengan ESLint |

## Project Structure

```text
src/
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

## Current Development Status

Frontend sudah memiliki halaman dan komponen utama.

Sebagian interaksi masih menggunakan mock data. Integrasi REST API dengan backend Spring Boot akan dilakukan pada tahap pengembangan berikutnya.

## Backend

Backend direncanakan menggunakan:

- Java 21
- Spring Boot
- Maven
- PostgreSQL

## Project Repository

https://github.com/AchmadRifkyMeishandy/lapor-rt
