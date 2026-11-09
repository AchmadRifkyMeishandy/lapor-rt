import { Link } from "react-router-dom";

const reportSteps = [
  {
    number: "01",
    title: "Laporan diterima",
    description: "Pengaduan berhasil dikirim dan tercatat dalam sistem.",
  },
  {
    number: "02",
    title: "Ditinjau pengurus RT",
    description: "Pengurus memeriksa informasi dan kondisi yang dilaporkan.",
  },
  {
    number: "03",
    title: "Tindak lanjut",
    description: "Warga dapat memantau perkembangan penanganan laporan.",
  },
];

function HomePage() {
  return (
    <div className="text-[#25352E]">
      <main>
        {/* Hero Section */}
        <section
          id="beranda"
          className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 md:min-h-[580px] md:grid-cols-[1.05fr_0.95fr] md:gap-10 md:py-20 lg:py-24"
        >
          {/* Hero Content */}
          <div>
            <p className="mb-5 text-sm font-bold tracking-[0.15em] text-[#347456]">
              RUANG ASPIRASI WARGA
            </p>

            <h2 className="text-4xl leading-tight font-bold tracking-tight text-[#174F3B] sm:text-5xl lg:text-6xl">
              Lingkungan nyaman, dimulai dari suara warga.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#64746A]">
              Sampaikan keluhan dan aspirasi mengenai lingkungan tempat tinggal.
              Setiap laporan akan tercatat dan dapat dipantau perkembangannya.
            </p>

            {/* Action Buttons */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/pengaduan"
                className="flex min-h-14 items-center justify-center rounded-xl bg-[#174F3B] px-7 text-base font-semibold text-white transition hover:bg-[#216449] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#174F3B]"
              >
                Sampaikan Pengaduan
              </Link>

              <Link
                to="/lacak"
                className="flex min-h-14 items-center justify-center rounded-xl border border-[#174F3B] px-7 text-base font-semibold text-[#174F3B] transition hover:bg-[#E8EFE7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#174F3B]"
              >
                Lacak Laporan
              </Link>
            </div>
          </div>

          {/* Hero Visual */}
          <aside
            aria-label="Ilustrasi alur penanganan laporan"
            className="relative overflow-hidden rounded-[2rem] border border-[#DCE5DB] bg-[#EAF0E8] p-5 sm:p-7"
          >
            <div
              aria-hidden="true"
              className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#D5E4D5]"
            />

            <div
              aria-hidden="true"
              className="absolute -bottom-16 -left-12 h-48 w-48 rounded-full bg-[#DCE9DC]"
            />

            <div className="relative">
              <div className="mb-5 flex items-center justify-between gap-3">
                <span className="text-xs font-bold tracking-[0.15em] text-[#347456]">
                  ILUSTRASI ALUR LAPORAN
                </span>

                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#174F3B]">
                  LaporRT
                </span>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm sm:p-6">
                <p className="text-sm font-medium text-[#64746A]">
                  Proses penanganan
                </p>

                <h3 className="mt-1 text-2xl font-bold text-[#174F3B]">
                  Pantau laporan dengan mudah
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#64746A]">
                  Warga dapat mengetahui perkembangan laporan tanpa harus datang
                  langsung untuk menanyakan statusnya.
                </p>

                <div className="my-6 border-t border-[#E8EEE7]" />

                <ol className="space-y-5">
                  {reportSteps.map((step, index) => (
                    <li key={step.number} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <span
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                            index === 0
                              ? "bg-[#174F3B] text-white"
                              : "border border-[#C9D9CA] bg-[#F5F7F2] text-[#347456]"
                          }`}
                        >
                          {step.number}
                        </span>

                        {index !== reportSteps.length - 1 && (
                          <span className="mt-2 h-8 w-px bg-[#DCE5DB]" />
                        )}
                      </div>

                      <div className="pt-1">
                        <h4 className="font-bold text-[#174F3B]">
                          {step.title}
                        </h4>

                        <p className="mt-1 text-sm leading-relaxed text-[#64746A]">
                          {step.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>

                <div className="mt-6 rounded-xl bg-[#F5F7F2] p-4">
                  <p className="text-sm font-semibold text-[#174F3B]">
                    Simpan dua informasi penting
                  </p>

                  <p className="mt-1 text-sm leading-relaxed text-[#64746A]">
                    Nomor Laporan dan Kode Rahasia digunakan untuk melihat
                    perkembangan pengaduan.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </section>

        {/* How It Works */}
        <section
          id="alur-pengaduan"
          className="scroll-mt-20 border-t border-[#E1E8DF] bg-white px-5 py-16 md:py-20"
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-sm font-bold tracking-[0.15em] text-[#347456]">
                TIGA LANGKAH MUDAH
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#174F3B] md:text-4xl">
                Bagaimana cara menyampaikan pengaduan?
              </h2>

              <p className="mt-4 text-lg leading-relaxed text-[#64746A]">
                Tidak perlu proses yang rumit. Ikuti tiga langkah berikut untuk
                menyampaikan laporan kepada pengurus RT.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              <article className="rounded-xl border border-[#E1E8DF] p-6 transition hover:-translate-y-1 hover:shadow-sm">
                <span className="text-3xl font-bold text-[#347456]">01</span>

                <h3 className="mt-5 text-xl font-bold text-[#174F3B]">
                  Kirim Laporan
                </h3>

                <p className="mt-3 leading-relaxed text-[#64746A]">
                  Isi formulir dengan menjelaskan masalah yang terjadi di
                  lingkungan tempat tinggalmu.
                </p>
              </article>

              <article className="rounded-xl border border-[#E1E8DF] p-6 transition hover:-translate-y-1 hover:shadow-sm">
                <span className="text-3xl font-bold text-[#347456]">02</span>

                <h3 className="mt-5 text-xl font-bold text-[#174F3B]">
                  Proses Laporan
                </h3>

                <p className="mt-3 leading-relaxed text-[#64746A]">
                  Pengurus RT akan meninjau laporan dan melakukan tindak lanjut
                  sesuai kebutuhan.
                </p>
              </article>

              <article className="rounded-xl border border-[#E1E8DF] p-6 transition hover:-translate-y-1 hover:shadow-sm">
                <span className="text-3xl font-bold text-[#347456]">03</span>

                <h3 className="mt-5 text-xl font-bold text-[#174F3B]">
                  Pantau Hasilnya
                </h3>

                <p className="mt-3 leading-relaxed text-[#64746A]">
                  Simpan nomor laporan dan kode rahasia yang kamu terima setelah
                  mengirim pengaduan. Gunakan keduanya untuk melihat
                  perkembangannya.
                </p>
              </article>
            </div>

            <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl bg-[#F5F7F2] p-6 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-lg font-bold text-[#174F3B]">
                  Sudah memiliki Nomor Laporan?
                </h3>

                <p className="mt-1 text-sm leading-relaxed text-[#64746A]">
                  Periksa perkembangan pengaduan melalui halaman pelacakan.
                </p>
              </div>

              <Link
                to="/lacak"
                className="flex min-h-12 shrink-0 items-center justify-center rounded-lg border border-[#174F3B] px-5 font-semibold text-[#174F3B] transition hover:bg-[#E8EFE7]"
              >
                Lacak Laporan
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
