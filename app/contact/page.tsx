import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="bg-[#5b4636] text-[#f3eee7]">
      <section className="relative min-h-[78svh] overflow-hidden">
        <Image
          src="/images/workspace.jpg"
          alt="Contact PMP Inc"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(91,70,54,0.42),rgba(91,70,54,0.82))]" />

        <div className="relative z-10 mx-auto flex min-h-[78svh] max-w-7xl items-end px-8 py-20 md:px-12 lg:px-16 lg:py-24">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#d8c5b5]">
              Contact
            </p>

            <h1 className="mt-8 text-5xl font-light uppercase leading-[1.05] tracking-[0.04em] md:text-7xl">
              Start your private inquiry.
            </h1>

            <p className="mt-10 max-w-3xl text-lg leading-8 text-[#efe7dd] md:text-xl">
              Tell us what you are looking for and we will help guide you toward
              the right connection, service, or next step.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f3eee7] px-8 py-24 text-[#5b4636] md:px-12 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#9a7b67]">
              Inquire
            </p>
            <h2 className="mt-8 max-w-xl text-4xl font-light uppercase leading-[1.1] tracking-[0.04em] md:text-6xl">
              A more thoughtful way to begin the conversation.
            </h2>

            <div className="mt-10 space-y-8 text-lg leading-9 text-[#6b5647]">
              <p>
                Whether you are seeking a trusted referral, concierge support,
                design guidance, or a more tailored connection, this is the best
                place to begin.
              </p>

              <p>
                Share as much detail as you like. The more context you provide,
                the more intentional the direction can be.
              </p>
            </div>
          </div>

          <form className="grid gap-px bg-[rgba(91,70,54,0.12)]">
            <input
              type="text"
              placeholder="Full Name"
              className="bg-[#f3eee7] px-6 py-5 text-[#5b4636] outline-none placeholder:text-[#9a7b67]"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="bg-[#f3eee7] px-6 py-5 text-[#5b4636] outline-none placeholder:text-[#9a7b67]"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="bg-[#f3eee7] px-6 py-5 text-[#5b4636] outline-none placeholder:text-[#9a7b67]"
            />
            <input
              type="text"
              placeholder="Service or Inquiry Type"
              className="bg-[#f3eee7] px-6 py-5 text-[#5b4636] outline-none placeholder:text-[#9a7b67]"
            />
            <textarea
              placeholder="Tell us more about what you need..."
              rows={8}
              className="bg-[#f3eee7] px-6 py-5 text-[#5b4636] outline-none placeholder:text-[#9a7b67]"
            />
            <div className="bg-[#f3eee7] px-6 py-6">
              <button
                type="submit"
                className="inline-flex items-center justify-center bg-[#5b4636] px-10 py-4 text-sm font-medium uppercase tracking-[0.22em] text-[#f3eee7] transition hover:bg-[#675140]"
              >
                Submit Inquiry
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="bg-[#5b4636] px-8 py-24 md:px-12 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-7xl border border-[rgba(243,238,231,0.12)] px-8 py-16 md:px-14 lg:px-16 lg:py-20">
          <p className="text-sm uppercase tracking-[0.3em] text-[#d8c5b5]">
            Refined Support
          </p>

          <h2 className="mt-8 max-w-3xl text-4xl font-light uppercase leading-[1.12] tracking-[0.04em] md:text-6xl">
            Every great connection starts with clarity.
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#efe7dd]">
            We believe the right experience begins before the introduction is ever made.
            That is why every inquiry is approached with intention, discretion, and care.
          </p>
        </div>
      </section>
    </main>
  );
}