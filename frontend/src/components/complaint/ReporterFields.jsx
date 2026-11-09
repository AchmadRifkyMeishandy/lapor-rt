
import { inputClass, labelClass } from './formStyles'

function ReporterFields({ formData, onChange }) {
    return (
        <section className="space-y-6">
            <div>
                <h3 className="text-lg font-bold text-[#174F3B]">
                    Data Pelapor
                </h3>
                <p className="mt-1 text-sm text-[#64746A]">
                    Isi informasi dasar agar pengurus RT dapat memahami dan
                    menindaklanjuti laporan.
                </p>
            </div>

            {/* Reporter Name */}
            <div>
                <label htmlFor="reporterName" className={labelClass}>
                    Nama Pelapor <span className="text-red-600">*</span>
                </label>

                <input
                    type="text"
                    id="reporterName"
                    name="reporterName"
                    value={formData.reporterName}
                    onChange={onChange}
                    placeholder="Masukkan nama lengkap"
                    maxLength={100}
                    autoComplete="name"
                    required
                    className={inputClass}
                />
            </div>

            {/* Reporter Phone */}
            <div>
                <label htmlFor="reporterPhone" className={labelClass}>
                    Nomor HP
                    <span className="ml-2 text-xs font-normal text-[#64746A]">
                        (Opsional)
                    </span>
                </label>

                <input
                    type="tel"
                    id="reporterPhone"
                    name="reporterPhone"
                    value={formData.reporterPhone}
                    onChange={onChange}
                    placeholder="Contoh: 081234567890"
                    maxLength={20}
                    autoComplete="tel"
                    className={inputClass}
                />
            </div>
        </section>
    )
}

export default ReporterFields
