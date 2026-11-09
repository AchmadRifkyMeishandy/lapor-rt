import { Link } from 'react-router-dom'

function PlaceholderPage({ title, description }) {
    return (
        <main className="flex min-h-screen items-center justify-center bg-[#F5F7F2] px-5 py-12">
            <div className="w-full max-w-lg rounded-2xl border border-[#E1E8DF] bg-white p-8 text-center shadow-sm">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-[#174F3B] text-2xl font-bold text-white">
                    L
                </div>

                <h1 className="mt-6 text-2xl font-bold text-[#174F3B]">
                    {title}
                </h1>

                <p className="mt-3 leading-relaxed text-[#64746A]">
                    {description}
                </p>

                <Link
                    to="/"
                    className="mt-7 inline-flex min-h-12 items-center justify-center rounded-lg bg-[#174F3B] px-6 font-semibold text-white transition hover:bg-[#216449]"
                >
                    Kembali ke Beranda
                </Link>
            </div>
        </main>
    )
}

export default PlaceholderPage
