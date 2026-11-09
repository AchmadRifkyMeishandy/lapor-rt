
function PhotoUpload({
    attachments,
    fileError,
    onFilesChange,
    onRemoveFile,
    maxFiles,
}) {
    return (
        <section className="space-y-5">
            <div>
                <h3 className="text-lg font-bold text-[#174F3B]">
                    Lampiran Foto
                </h3>
                <p className="mt-1 text-sm text-[#64746A]">
                    Tambahkan foto untuk membantu pengurus memahami kondisi yang
                    dilaporkan. Foto bersifat opsional.
                </p>
            </div>

            <div>
                <label
                    htmlFor="attachments"
                    className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-[#DCE5DB] bg-[#F9FAF7] px-5 py-8 text-center transition hover:border-[#347456] hover:bg-[#F5F7F2]"
                >
                    <span className="text-3xl">📷</span>

                    <span className="mt-3 text-sm font-semibold text-[#174F3B]">
                        Klik untuk memilih foto
                    </span>

                    <span className="mt-1 text-xs text-[#64746A]">
                        JPG, PNG, atau WebP · Maksimal 2 MB per foto
                    </span>

                    <input
                        id="attachments"
                        type="file"
                        accept="image/jpeg,image/png,image/webp"
                        multiple
                        onChange={onFilesChange}
                        disabled={attachments.length >= maxFiles}
                        className="sr-only"
                    />
                </label>

                <p className="mt-2 text-xs text-[#64746A]">
                    {attachments.length} dari {maxFiles} foto dipilih.
                </p>

                {fileError && (
                    <p role="alert" className="mt-2 text-sm text-red-600">
                        {fileError}
                    </p>
                )}
            </div>

            {attachments.length > 0 && (
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                    {attachments.map((attachment) => (
                        <div
                            key={attachment.id}
                            className="overflow-hidden rounded-xl border border-[#E1E8DF] bg-white"
                        >
                            <img
                                src={attachment.previewUrl}
                                alt="Pratinjau foto pengaduan"
                                className="h-32 w-full object-cover"
                            />

                            <div className="p-3">
                                <p className="truncate text-xs text-[#64746A]">
                                    {attachment.file.name}
                                </p>

                                <button
                                    type="button"
                                    onClick={() => onRemoveFile(attachment.id)}
                                    className="mt-2 text-xs font-semibold text-red-600 hover:text-red-700"
                                >
                                    Hapus foto
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    )
}

export default PhotoUpload
