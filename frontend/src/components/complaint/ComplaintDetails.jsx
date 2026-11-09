import categories from "../../data/categories";
import { inputClass, labelClass } from "./formStyles";

function ComplaintDetails({ formData, onChange }) {
  return (
    <section className="space-y-6">
      <div>
        <h3 className="text-lg font-bold text-[#174F3B]">Detail Pengaduan</h3>
        <p className="mt-1 text-sm text-[#64746A]">
          Jelaskan permasalahan yang ingin kamu laporkan.
        </p>
      </div>

      <div>
        <label htmlFor="category" className={labelClass}>
          Kategori Pengaduan <span className="text-red-600">*</span>
        </label>

        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={onChange}
          required
          className={inputClass}
        >
          <option value="">Pilih kategori pengaduan</option>

          {categories.map((category) => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="urgency" className={labelClass}>
          Tingkat Urgensi <span className="text-red-600">*</span>
        </label>

        <select
          id="urgency"
          name="urgency"
          value={formData.urgency}
          onChange={onChange}
          required
          className={inputClass}
        >
          <option value="NORMAL">Normal</option>
          <option value="HIGH">Tinggi</option>
          <option value="URGENT">Mendesak</option>
        </select>
      </div>

      <div>
        <label htmlFor="subject" className={labelClass}>
          Judul Pengaduan <span className="text-red-600">*</span>
        </label>

        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={onChange}
          placeholder="Contoh: Lampu jalan mati di depan gang"
          maxLength={150}
          required
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="description" className={labelClass}>
          Deskripsi Permasalahan <span className="text-red-600">*</span>
        </label>

        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={onChange}
          placeholder="Jelaskan permasalahan secara lengkap, termasuk kapan dan bagaimana kejadian tersebut berlangsung."
          rows={5}
          maxLength={2000}
          required
          className={inputClass}
        />

        <p className="mt-1 text-right text-xs text-[#64746A]">
          {formData.description.length}/2000 karakter
        </p>
      </div>

      <div>
        <label htmlFor="incidentLocation" className={labelClass}>
          Lokasi Kejadian <span className="text-red-600">*</span>
        </label>

        <textarea
          id="incidentLocation"
          name="incidentLocation"
          value={formData.incidentLocation}
          onChange={onChange}
          placeholder="Contoh: Jalan Melati, dekat pos ronda RT 05"
          rows={2}
          maxLength={500}
          required
          className={inputClass}
        />
      </div>
    </section>
  );
}

export default ComplaintDetails;
