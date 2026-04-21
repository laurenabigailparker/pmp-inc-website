import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#76290B] px-6 py-24 text-[#F8EDC3]">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-center rounded-[2rem] border border-white/10 bg-white/5 px-8 py-16 text-center shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-sm sm:px-12 sm:py-20">
        <p className="text-sm uppercase tracking-[0.35em] text-[#F8EDC3]/70">
          Inquiry Received
        </p>

        <h1 className="mt-6 text-4xl font-light uppercase leading-tight tracking-[0.05em] sm:text-5xl md:text-6xl">
          Thank you for reaching out.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-[#F8EDC3]/85 sm:text-lg">
          Your inquiry has been received. We appreciate your time and will follow
          up with care, clarity, and the next best step as soon as possible.
        </p>

        <div className="mt-10 h-px w-24 bg-[#F8EDC3]/30" />

        <p className="mt-10 max-w-xl text-sm leading-7 text-[#F8EDC3]/70">
          We value thoughtful connections and intentional service. Thank you for
          trusting PMP Inc with your inquiry.
        </p>

        <Link
          href="/"
          className="mt-10 inline-flex items-center justify-center rounded-full bg-[#F8EDC3] px-8 py-4 text-sm uppercase tracking-[0.2em] text-[#1E3226] transition duration-300 hover:-translate-y-0.5 hover:bg-[#CCB363]"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}