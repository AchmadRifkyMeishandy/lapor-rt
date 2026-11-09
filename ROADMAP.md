
# LaporRT — Roadmap Pengembangan MVP

Dokumen acuan utama pengembangan LaporRT.

Setiap perubahan tahapan dan keputusan teknis diperbarui di dokumen ini agar pengembangan tetap terarah.

Last Updated: 9 November 2026

---

## 1. Product Overview

LaporRT adalah aplikasi web pengaduan lingkungan RT yang membantu warga menyampaikan laporan serta membantu pengurus RT menerima, mengelola, dan memantau perkembangan pengaduan.

Target penggunaan awal sekitar 200 warga.

### 1.1 Fitur Warga

- Membuka beranda dan membaca cara kerja aplikasi.
- Mengirim pengaduan tanpa membuat akun.
- Mengisi nama, nomor HP opsional, kategori, urgensi, judul, deskripsi, dan lokasi kejadian.
- Menambahkan maksimal 3 foto bukti.
- Ukuran maksimal setiap foto 2 MB.
- Menerima Nomor Laporan dan Kode Rahasia.
- Melacak laporan menggunakan Nomor Laporan dan Kode Rahasia.

### 1.2 Fitur Admin

- Login menggunakan akun admin.
- Melihat statistik dashboard.
- Melihat daftar pengaduan.
- Melihat detail pengaduan dan lampiran.
- Mengubah status pengaduan.
- Memberikan pesan perkembangan kepada warga.
- Melihat riwayat perubahan status.

### 1.3 Admin Roles

- CHAIRPERSON
- SECRETARY

Warga tidak memerlukan akun.

### 1.4 Complaint Status

- OPEN
- IN_PROGRESS
- RESOLVED
- REJECTED

Ketentuan:
- Laporan baru memiliki status OPEN.
- REJECTED wajib disertai alasan untuk warga.
- Perubahan status harus tercatat dalam histori.
- RESOLVED dan REJECTED menjadi status akhir dalam MVP.

---

## 2. Technology Stack

### Frontend

| Area | Technology |
|---|---|
| UI Library | React |
| Build Tool | Vite |
| Language | JavaScript |
| Styling | Tailwind CSS v4 |
| Routing | React Router DOM |

### Backend

| Area | Technology |
|---|---|
| Language | Java 21 |
| Framework | Spring Boot |
| Build Tool | Maven |
| Architecture | Layered Architecture |
| Programming Pattern | MVC |
| ORM | Spring Data JPA / Hibernate |
| Database | PostgreSQL 18 |
| Database Migration | Flyway |
| Validation | Jakarta Bean Validation |
| Security | Spring Security |
| Authentication | JWT |
| Password Hashing | BCrypt |
| Testing | JUnit 5 and Mockito |
| API Style | REST API |
| API Prefix | /api/v1 |

### Infrastructure

Development:
- Windows 10
- Local PostgreSQL 18
- Local private file storage

Production target:
- Ubuntu VPS
- Nginx
- HTTPS
- PostgreSQL
- Private persistent file storage

Docker akan dipelajari setelah fondasi aplikasi berjalan dengan baik.

Tidak menggunakan microservices, Kubernetes, atau teknologi tambahan tanpa kebutuhan nyata.

---

## 3. Repository Structure

Target struktur repository:

```text
lapor-rt/
├── docs/
│   ├── ERD.dbml
│   └── API-CONTRACT.md
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── .gitignore
│   └── README.md
│
├── backend/
│   └── (Spring Boot project)
│
├── .gitignore
├── README.md
└── ROADMAP.md
```

Catatan:
- README.md utama menjelaskan seluruh proyek.
- frontend/README.md menjelaskan frontend.
- docs/ERD.dbml menjadi sumber desain database.
- docs/API-CONTRACT.md menjadi acuan komunikasi frontend dan backend.
- Backend dibuat setelah dokumentasi dan fondasi desain disepakati.

---

## 4. Current Project Status

### 4.1 Frontend

- [x] Repository GitHub dibuat.
- [x] React + Vite berhasil disiapkan.
- [x] Struktur dasar frontend dibuat.
- [x] Halaman HomePage.
- [x] Halaman ComplaintPage.
- [x] Halaman TrackingPage.
- [x] Halaman LoginPage.
- [x] Halaman DashboardPage.
- [x] Halaman ComplaintDetailPage.
- [x] Komponen dan layout dipisahkan.
- [x] ESLint berhasil dijalankan.
- [x] Production build berhasil dijalankan.
- [ ] Final acceptance testing seluruh halaman.
- [ ] Pastikan seluruh interaksi publik dan admin sesuai kebutuhan.
- [ ] Integrasi REST API.

Frontend terakhir telah di-push ke branch main.

### 4.2 Backend

- [ ] Spring Boot project.
- [ ] PostgreSQL connection.
- [ ] Database migration.
- [ ] Entity dan Repository.
- [ ] Complaint API.
- [ ] Public tracking.
- [ ] Admin authentication.
- [ ] Admin dashboard.
- [ ] Admin complaint management.
- [ ] Private attachment storage.

### 4.3 Documentation

- [ ] README utama.
- [ ] ROADMAP final.
- [ ] ERD final.
- [ ] API contract.
- [ ] Dokumentasi konfigurasi backend.

---

## 5. Development Roadmap

### Phase 1 — Finalisasi Dokumentasi dan Desain

Tujuan: memastikan frontend, backend, dan database mempunyai kesepakatan desain yang sama.

Tasks:

- [ ] Rapikan README utama dan frontend README.
- [ ] Finalisasi ROADMAP.md.
- [ ] Finalisasi ERD.dbml.
- [ ] Pastikan semua status memiliki definisi konsisten.
- [ ] Tentukan request dan response API.
- [ ] Tentukan format error API.
- [ ] Tentukan validasi input.
- [ ] Tentukan akses lampiran privat.
- [ ] Simpan dokumentasi ke GitHub.

Selesai jika desain database dan API sudah disepakati.

### Phase 2 — Backend Foundation

Tujuan: membangun pondasi aplikasi Spring Boot.

Tasks:

- [ ] Generate proyek melalui Spring Initializr.
- [ ] Gunakan Java 21 dan Maven.
- [ ] Konfigurasi package dan struktur project.
- [ ] Konfigurasi application.properties.
- [ ] Konfigurasi koneksi PostgreSQL lokal.
- [ ] Tambahkan dependency yang diperlukan.
- [ ] Pastikan Spring Boot berhasil berjalan.
- [ ] Pastikan koneksi ke PostgreSQL berhasil.

Testing:
- [ ] Jalankan aplikasi melalui Maven.
- [ ] Periksa koneksi database.
- [ ] Pastikan tidak ada error startup.

Selesai jika aplikasi Spring Boot berjalan dan berhasil terhubung dengan PostgreSQL.

### Phase 3 — Database and Persistence

Tujuan: membuat struktur database dan menghubungkannya dengan Java.

Tasks:

- [ ] Install dan konfigurasi Flyway.
- [ ] Buat migration admins.
- [ ] Buat migration complaints.
- [ ] Buat migration complaint_attachments.
- [ ] Buat migration complaint_status_histories.
- [ ] Tambahkan foreign key dan indexes.
- [ ] Tambahkan CHECK constraints.
- [ ] Buat Java entities.
- [ ] Buat Java enums.
- [ ] Buat repository interfaces.
- [ ] Uji relasi antar entity.

Selesai jika struktur database berhasil dibuat melalui migration dan relasi dapat digunakan oleh JPA.

### Phase 4 — Public Complaint API

Tujuan: memungkinkan warga mengirim pengaduan.

Tasks:

- [ ] Buat request DTO.
- [ ] Buat response DTO.
- [ ] Implementasikan Jakarta Validation.
- [ ] Buat complaint service.
- [ ] Buat complaint controller.
- [ ] Generate Nomor Laporan.
- [ ] Generate Kode Rahasia secara aman.
- [ ] Simpan SHA-256 hash Kode Rahasia.
- [ ] Simpan pengaduan dengan status OPEN.
- [ ] Buat histori status pertama.
- [ ] Implementasikan transaksi database.
- [ ] Uji pembuatan pengaduan.

Endpoint:

POST /api/v1/complaints

Selesai jika pengaduan valid berhasil tersimpan dan sistem memberikan Nomor Laporan serta Kode Rahasia.

### Phase 5 — Public Complaint Tracking

Tujuan: warga dapat melihat perkembangan pengaduan tanpa akun.

Tasks:

- [ ] Buat tracking request DTO.
- [ ] Buat tracking response DTO.
- [ ] Implementasikan pencarian berdasarkan Nomor Laporan.
- [ ] Verifikasi Kode Rahasia menggunakan SHA-256.
- [ ] Tambahkan pembatasan percobaan tracking.
- [ ] Ambil histori status.
- [ ] Batasi informasi pribadi pada response.
- [ ] Uji kode benar dan salah.

Endpoint:

POST /api/v1/public/complaints/track

Selesai jika hanya warga dengan Nomor Laporan dan Kode Rahasia yang benar dapat melihat informasi pengaduannya.

### Phase 6 — Admin Authentication and Authorization

Tujuan: melindungi seluruh fitur administrasi.

Tasks:

- [ ] Buat admin entity dan repository.
- [ ] Implementasikan password verification BCrypt.
- [ ] Buat login request dan response DTO.
- [ ] Implementasikan JWT.
- [ ] Konfigurasi Spring Security.
- [ ] Implementasikan JWT authentication filter.
- [ ] Proteksi endpoint admin.
- [ ] Implementasikan role CHAIRPERSON.
- [ ] Implementasikan role SECRETARY.
- [ ] Batasi login attempts.
- [ ] Uji akses tanpa token dan dengan token.

Endpoint:

POST /api/v1/auth/login

Selesai jika admin dapat login dan endpoint admin tidak dapat diakses tanpa autentikasi yang valid.

### Phase 7 — Admin Complaint Management

Tujuan: memberikan fitur pengelolaan pengaduan kepada admin.

Tasks:

- [ ] Dashboard statistics.
- [ ] Complaint listing.
- [ ] Pagination.
- [ ] Filtering berdasarkan status.
- [ ] Search pengaduan.
- [ ] Complaint detail.
- [ ] Status update.
- [ ] Public message.
- [ ] Status history.
- [ ] Validasi perpindahan status.
- [ ] Database transaction.

Endpoints:

GET /api/v1/admin/dashboard/stats

GET /api/v1/admin/complaints

GET /api/v1/admin/complaints/{id}

PATCH /api/v1/admin/complaints/{id}/status

Selesai jika admin dapat mengelola pengaduan dan setiap perubahan status tercatat.

### Phase 8 — Private Attachment Storage

Tujuan: mengelola foto bukti secara aman.

Tasks:

- [ ] Implementasikan private local storage.
- [ ] Validasi maksimal 3 foto.
- [ ] Validasi maksimal 2 MB per foto.
- [ ] Validasi MIME type dan file signature.
- [ ] Batasi JPEG, PNG, dan WebP.
- [ ] Gunakan nama file UUID.
- [ ] Simpan metadata ke PostgreSQL.
- [ ] Lindungi akses file.
- [ ] Uji upload, akses, dan file invalid.

Catatan:
File fisik tidak disimpan sebagai binary di PostgreSQL.

Database hanya menyimpan metadata dan storage key.

Selesai jika foto tersimpan secara privat dan hanya dapat diakses melalui proses otorisasi yang benar.

### Phase 9 — Frontend and Backend Integration

Tujuan: mengganti mock data dengan REST API.

Tasks:

- [ ] Konfigurasi frontend API service.
- [ ] Hubungkan pengiriman pengaduan.
- [ ] Hubungkan tracking.
- [ ] Hubungkan login admin.
- [ ] Hubungkan dashboard.
- [ ] Hubungkan complaint listing.
- [ ] Hubungkan complaint detail.
- [ ] Hubungkan status update.
- [ ] Hubungkan attachment.
- [ ] Implementasikan loading state.
- [ ] Implementasikan error state.
- [ ] Implementasikan empty state.

Selesai jika seluruh alur utama berjalan menggunakan PostgreSQL dan backend Spring Boot.

### Phase 10 — Testing and Deployment

Tujuan: menyiapkan MVP untuk penggunaan online.

Testing:
- [ ] Input invalid ditolak backend.
- [ ] Complaint valid berhasil tersimpan.
- [ ] Tracking code salah ditolak.
- [ ] Endpoint admin terlindungi.
- [ ] Status tidak valid ditolak.
- [ ] Histori status selalu tercatat.
- [ ] File invalid ditolak.
- [ ] Data pribadi tidak bocor.
- [ ] Uji alur lengkap warga dan admin.
- [ ] Uji performa penggunaan awal.

Deployment:
- [ ] Siapkan Ubuntu VPS.
- [ ] Konfigurasi SSH.
- [ ] Konfigurasi firewall.
- [ ] Install Java dan PostgreSQL.
- [ ] Build backend.
- [ ] Deploy frontend build.
- [ ] Konfigurasi Nginx.
- [ ] Hubungkan domain.
- [ ] Aktifkan HTTPS.
- [ ] Atur persistent private storage.
- [ ] Konfigurasi backup.
- [ ] Konfigurasi monitoring.
- [ ] Uji aplikasi dari internet.

Selesai jika aplikasi dapat diakses secara online dengan HTTPS dan data tetap aman setelah server direstart.

---

## 6. Database Design Rules

Tabel inti:

1. admins
2. complaints
3. complaint_attachments
4. complaint_status_histories

Relasi:
- Satu complaint memiliki banyak attachments.
- Satu complaint memiliki banyak status histories.
- Satu admin dapat memiliki banyak status histories.

Ketentuan:
- Primary key menggunakan BIGINT.
- Foreign key menjaga integritas relasi.
- Nomor laporan harus unik.
- Hash kode pelacakan tidak boleh disimpan dalam plaintext.
- Password admin menggunakan BCrypt.
- File foto disimpan secara privat.
- Histori status tidak boleh hilang saat status berubah.
- Akun admin dinonaktifkan melalui is_active.

Database migrations menjadi sumber perubahan struktur database.

---

## 7. API Contract

Prefix:

/api/v1

Endpoint utama:

| Method | Endpoint | Access |
|---|---|---|
| POST | /complaints | Public |
| POST | /public/complaints/track | Public |
| POST | /auth/login | Public |
| GET | /admin/dashboard/stats | Admin |
| GET | /admin/complaints | Admin |
| GET | /admin/complaints/{id} | Admin |
| PATCH | /admin/complaints/{id}/status | Admin |

Ketentuan:
- Public endpoints tidak memerlukan login warga.
- Admin endpoints membutuhkan autentikasi JWT.
- Daftar pengaduan menggunakan pagination.
- Response menggunakan JSON secara konsisten.
- File upload menggunakan multipart/form-data.
- Pesan alasan wajib diberikan ketika status menjadi REJECTED.

Request dan response final dicatat di docs/API-CONTRACT.md.

---

## 8. Security Principles

- Validasi di frontend dan backend.
- Jangan mempercayai input dari browser.
- Password menggunakan BCrypt.
- Tracking code menggunakan sumber random yang aman.
- Simpan tracking code dalam SHA-256 hash.
- Terapkan rate limiting untuk login dan tracking.
- Jangan menyimpan token atau credential dalam log.
- Validasi konten dan ukuran file.
- Simpan lampiran secara privat.
- Lindungi endpoint admin dengan Spring Security.
- Gunakan HTTPS di production.
- Jangan membuka akses PostgreSQL ke internet publik.
- Siapkan backup database dan file.
- Lakukan pengujian keamanan sebelum penggunaan nyata.

---

## 9. MVP Scope

Tidak termasuk MVP:

- Akun warga.
- Chat.
- Pembayaran.
- Notifikasi WhatsApp otomatis.
- Aplikasi mobile native.
- Microservices.
- Kubernetes.

Teknologi baru hanya ditambahkan jika ada kebutuhan nyata.

---

## 10. Git Workflow

Gunakan branch main untuk milestone yang sudah diuji.

Sebelum commit:

```bash
git status
git diff
```

Periksa perubahan sebelum staging.

Setelah siap:

```bash
git add .
git diff --cached --check
git commit -m "descriptive commit message"
git push origin main
```

Contoh commit:

- docs: update project documentation
- docs: finalize ERD and API contract
- feat(backend): initialize Spring Boot project
- feat(backend): configure PostgreSQL connection
- feat(backend): implement complaint creation
- feat(backend): implement public tracking
- feat(auth): implement admin authentication
- feat(backend): implement complaint management
- feat(integration): connect frontend to backend
- test: verify complaint workflow
- chore(deploy): prepare VPS deployment

Commit setelah milestone dapat dijalankan dan diuji.

---

## 11. Collaboration Rules

1. Gunakan roadmap ini sebagai acuan utama.
2. Jangan mengulang pekerjaan yang sudah selesai.
3. Kerjakan backend secara bertahap.
4. Berikan kode lengkap untuk setiap file yang dibuat atau diubah.
5. Jelaskan fungsi class, method, dan bagian kode.
6. Jalankan dan uji setiap tahap sebelum melanjutkan.
7. Jangan membuat abstraksi tanpa kebutuhan.
8. Prioritaskan clean code, keamanan, dan maintainability.
9. Gunakan bahasa Inggris untuk nama kode.
10. Gunakan Bahasa Indonesia untuk penjelasan pembelajaran.
11. Jika terjadi error, selesaikan sebelum menambah fitur.
12. Jangan mengubah keputusan arsitektur tanpa alasan teknis yang jelas.

---

**Prinsip utama: Build the foundation first, then build the features.**

MVP yang selesai secara fungsional belum otomatis siap untuk produksi. Penggunaan nyata membutuhkan pengujian, backup, monitoring, keamanan, dan penyimpanan file persisten.
