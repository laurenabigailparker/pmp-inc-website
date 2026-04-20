import Image from "next/image";
import Link from "next/link";
import { getMessages } from "@/lib/getMessages";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getMessages(locale as "en" | "es" | "ru" | "ja");

  return (
    <main className="bg-[#1E3226] text-[#F8EDC3]">
      <section className="relative min-h-[80vh] overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="Luxury concierge"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(111,125,123,0.2),rgba(30,50,38,0.9))]" />

        <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-7xl items-end px-6 py-20 lg:px-16">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#F8EDC3]/80">
              {t.hero.brand}
            </p>

            <h1 className="mt-6 text-4xl font-light uppercase leading-[1.05] tracking-[0.04em] md:text-6xl lg:text-7xl">
              {t.hero.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-[#F8EDC3]/85">
              {t.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#1E3226] px-6 py-20 md:px-12 lg:px-16">
        <div className="mx-auto max-w-7xl space-y-16">
          {[t.steps.one, t.steps.two, t.steps.three].map((step, i) => (
            <div
              key={i}
              className="grid grid-cols-1 gap-8 border-t border-[rgba(248,237,195,0.15)] pt-10 md:grid-cols-[120px_1fr]"
            >
              <div className="text-3xl font-light text-[#CCB363]">
                {String(i + 1).padStart(2, "0")}
              </div>

              <div className="max-w-xl">
                <h3 className="text-xl font-light uppercase tracking-[0.18em] sm:text-2xl md:text-3xl">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm text-[#F8EDC3]/85 sm:text-base">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F8EDC3] px-6 py-20 text-center text-[#1E3226]">
        <p className="text-sm uppercase tracking-[0.3em] text-[#C27E35]">
          {t.services.label}
        </p>

        <h2 className="mt-6 text-3xl font-light uppercase md:text-5xl">
          {t.services.heading}
        </h2>

        <div className="mt-12">
          <Link
            href={`/${locale}/services`}
            className="bg-[#CCB363] px-10 py-4 text-sm uppercase tracking-[0.2em] text-[#1E3226]"
          >
            {t.services.button}
          </Link>
        </div>
      </section>

      <section className="bg-[#76290B] px-6 py-20 text-center text-[#F8EDC3]">
        <p className="text-sm uppercase tracking-[0.3em] text-[#F8EDC3]/80">
          {t.cta.label}
        </p>

        <h2 className="mt-6 text-3xl font-light uppercase md:text-5xl">
          {t.cta.heading}
        </h2>

        <div className="mt-10">
          <Link
            href={`/${locale}/contact`}
            className="bg-[#CCB363] px-10 py-4 text-sm uppercase tracking-[0.2em] text-[#1E3226]"
          >
            {t.cta.button}
          </Link>
        </div>
      </section>
    </main>
  );
}