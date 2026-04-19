import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="bg-[#1E3226] text-[#F8EDC3]">
      <section className="relative min-h-[70svh] overflow-hidden sm:min-h-[78svh]">
        <Image
          src="/images/workspace.jpg"
          alt="Contact PMP Inc"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(111,125,123,0.2),rgba(30,50,38,0.9))]" />

        <div className="relative z-10 mx-auto flex min-h-[70svh] max-w-7xl items-end px-5 py-16 sm:min-h-[78svh] sm:px-6 md:px-10 lg:px-16 lg:py-24">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#F8EDC3]/85">
              Contact
            </p>

            <h1 className="mt-6 text-4xl font-light uppercase leading-[1.03] tracking-[0.04em] sm:text-5xl md:text-6xl lg:text-7xl">
              Start your private inquiry.
            </h1>

            <p className="mt-8 max-w-3xl text-base leading-7 text-[#F8EDC3]/92 sm:text-lg sm:leading-8 md:text-xl">
              Tell us what you are looking for and we will help guide you toward
              the right connection, service, or next step.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F8EDC3] px-5 py-16 text-[#1E3226] sm:px-6 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#C27E35]">
              Inquire
            </p>
            <h2 className="mt-6 max-w-xl text-3xl font-light uppercase leading-[1.08] tracking-[0.04em] sm:text-4xl md:text-5xl lg:text-6xl">
              A more thoughtful way to begin the conversation.
            </h2>

            <div className="mt-8 space-y-6 text-base leading-7 text-[#1E3226]/82 sm:text-lg sm:leading-9">
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

          <form className="grid gap-px bg-[rgba(194,126,53,0.18)]">
            <input
              type="text"
              placeholder="Full Name"
              className="bg-[#fff7dd] px-5 py-4 text-[#1E3226] outline-none placeholder:text-[#6F7D7B] sm:px-6 sm:py-5"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="bg-[#fff7dd] px-5 py-4 text-[#1E3226] outline-none placeholder:text-[#6F7D7B] sm:px-6 sm:py-5"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="bg-[#fff7dd] px-5 py-4 text-[#1E3226] outline-none placeholder:text-[#6F7D7B] sm:px-6 sm:py-5"
            />
            <input
              type="text"
              placeholder="Service or Inquiry Type"
              className="bg-[#fff7dd] px-5 py-4 text-[#1E3226] outline-none placeholder:text-[#6F7D7B] sm:px-6 sm:py-5"
            />
            <textarea
              placeholder="Tell us more about what you need..."
              rows={7}
              className="bg-[#fff7dd] px-5 py-4 text-[#1E3226] outline-none placeholder:text-[#6F7D7B] sm:px-6 sm:py-5"
            />
            <div className="bg-[#fff7dd] px-5 py-5 sm:px-6 sm:py-6">
              <button
                type="submit"
                className="inline-flex items-center justify-center bg-[#CCB363] px-8 py-4 text-sm font-medium uppercase tracking-[0.22em] text-[#1E3226] transition hover:bg-[#C27E35] hover:text-[#F8EDC3] sm:px-10"
              >
                Submit Inquiry
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="bg-[#76290B] px-5 py-16 text-[#F8EDC3] sm:px-6 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl border border-[rgba(248,237,195,0.16)] px-6 py-12 sm:px-8 sm:py-14 md:px-12 lg:px-16 lg:py-20">
          <p className="text-sm uppercase tracking-[0.3em] text-[#F8EDC3]/82">
            Refined Support
          </p>

          <h2 className="mt-6 max-w-3xl text-3xl font-light uppercase leading-[1.08] tracking-[0.04em] sm:text-4xl md:text-5xl lg:text-6xl">
            Every great connection starts with clarity.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[#F8EDC3]/92 sm:text-lg sm:leading-8">
            We believe the right experience begins before the introduction is ever made.
            That is why every inquiry is approached with intention, discretion, and care.
          </p>
        </div>
      </section>
    </main>
  );
}