import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import ReporterFields from "../components/complaint/ReporterFields";
import ComplaintDetails from "../components/complaint/ComplaintDetails";
import PhotoUpload from "../components/complaint/PhotoUpload";

const MAX_FILES = 3;
const MAX_FILE_SIZE = 2 * 1024 * 1024;

const ALLOWED_FILE_TYPES = ["image/jpeg", "image/png", "image/webp"];

const initialFormData = {
  reporterName: "",
  reporterPhone: "",
  category: "",
  urgency: "NORMAL",
  subject: "",
  description: "",
  incidentLocation: "",
};

function ComplaintPage() {
  const [formData, setFormData] = useState(initialFormData);
  const [attachments, setAttachments] = useState([]);
  const [fileError, setFileError] = useState("");
  const [demoMessage, setDemoMessage] = useState("");

  const previewUrlsRef = useRef(new Set());

  // Membersihkan preview foto ketika halaman ditinggalkan.
  useEffect(() => {
    const previewUrls = previewUrlsRef.current;

    return () => {
      previewUrls.forEach((previewUrl) => {
        URL.revokeObjectURL(previewUrl);
      });
    };
  }, []);

  // Mengelola perubahan input formulir.
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  // Memvalidasi foto yang dipilih warga.
  const handleFilesChange = (event) => {
    const selectedFiles = Array.from(event.target.files || []);

    setFileError("");

    const availableSlots = MAX_FILES - attachments.length;
    const acceptedFiles = [];

    if (availableSlots <= 0) {
      setFileError("Maksimal hanya 3 foto untuk setiap laporan.");
      event.target.value = "";
      return;
    }

    for (const file of selectedFiles) {
      if (acceptedFiles.length >= availableSlots) {
        setFileError("Maksimal hanya 3 foto untuk setiap laporan.");
        break;
      }

      if (!ALLOWED_FILE_TYPES.includes(file.type)) {
        setFileError("Format foto harus JPG, PNG, atau WebP.");
        continue;
      }

      if (file.size > MAX_FILE_SIZE) {
        setFileError("Ukuran setiap foto maksimal 2 MB.");
        continue;
      }

      const previewUrl = URL.createObjectURL(file);

      previewUrlsRef.current.add(previewUrl);

      acceptedFiles.push({
        id: crypto.randomUUID(),
        file,
        previewUrl,
      });
    }

    setAttachments((previousFiles) => [...previousFiles, ...acceptedFiles]);

    // Memungkinkan file yang sama dipilih kembali.
    event.target.value = "";
  };

  // Menghapus foto dari daftar lampiran.
  const handleRemoveFile = (fileId) => {
    const selectedFile = attachments.find(
      (attachment) => attachment.id === fileId,
    );

    if (selectedFile) {
      URL.revokeObjectURL(selectedFile.previewUrl);
      previewUrlsRef.current.delete(selectedFile.previewUrl);
    }

    setAttachments((previousFiles) =>
      previousFiles.filter((attachment) => attachment.id !== fileId),
    );

    setFileError("");
  };

  // Simulasi pengiriman sebelum backend tersedia.
  const handleSubmit = (event) => {
    event.preventDefault();

    setDemoMessage(
      "Formulir berhasil melewati validasi browser. Data belum disimpan ke server karena backend belum terhubung.",
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="mx-auto max-w-3xl px-5 py-10 md:py-14">
      {/* Introduction */}
      <div className="mb-8">
        <Link
          to="/"
          className="text-sm font-medium text-[#64746A] hover:text-[#174F3B]"
        >
          Beranda
        </Link>

        <span className="mx-2 text-[#9AA79D]">/</span>

        <span className="text-sm font-semibold text-[#174F3B]">
          Formulir Pengaduan
        </span>

        <p className="mt-7 text-sm font-bold tracking-[0.15em] text-[#347456]">
          SUARA WARGA, LINGKUNGAN BERSAMA
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#174F3B] md:text-4xl">
          Sampaikan Pengaduan
        </h2>

        <p className="mt-4 max-w-2xl leading-relaxed text-[#64746A]">
          Ceritakan permasalahan yang terjadi di lingkungan tempat tinggalmu.
          Pengurus RT akan meninjau laporan yang masuk.
        </p>
      </div>

      {/* Demo Message */}
      {demoMessage && (
        <div
          role="status"
          className="mb-6 rounded-xl border border-[#D5E4D5] bg-[#EAF0E8] p-4 text-sm leading-relaxed text-[#174F3B]"
        >
          {demoMessage}
        </div>
      )}

      {/* Complaint Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-7 rounded-2xl border border-[#E1E8DF] bg-white p-5 shadow-sm sm:p-8"
      >
        {/* Privacy Notice */}
        <div className="rounded-xl bg-[#F5F7F2] p-4">
          <h3 className="font-semibold text-[#174F3B]">
            Sebelum mengisi formulir
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-[#64746A]">
            Pastikan informasi yang kamu berikan jelas dan sesuai dengan kondisi
            sebenarnya. Nomor HP bersifat opsional. Jangan masukkan informasi
            sensitif seperti NIK atau nomor Kartu Keluarga.
          </p>
        </div>

        <ReporterFields formData={formData} onChange={handleInputChange} />

        <div className="border-t border-[#E8EEE7]" />

        <ComplaintDetails formData={formData} onChange={handleInputChange} />

        <div className="border-t border-[#E8EEE7]" />

        <PhotoUpload
          attachments={attachments}
          fileError={fileError}
          onFilesChange={handleFilesChange}
          onRemoveFile={handleRemoveFile}
          maxFiles={MAX_FILES}
        />

        {/* Submit Actions */}
        <div className="border-t border-[#E8EEE7] pt-6">
          <p className="mb-5 text-xs leading-relaxed text-[#64746A]">
            Tanda <span className="font-bold text-red-600">*</span> menunjukkan
            kolom yang wajib diisi.
          </p>

          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <Link
              to="/"
              className="flex min-h-12 items-center justify-center rounded-lg border border-[#DCE5DB] px-6 font-semibold text-[#174F3B] transition hover:bg-[#F5F7F2]"
            >
              Batal
            </Link>

            <button
              type="submit"
              className="flex min-h-12 items-center justify-center rounded-lg bg-[#174F3B] px-7 font-semibold text-white transition hover:bg-[#216449] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#174F3B]"
            >
              Kirim Pengaduan
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}

export default ComplaintPage;
