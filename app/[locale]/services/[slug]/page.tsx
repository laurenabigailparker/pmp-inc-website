import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "../../../data/services";
import { getMessages } from "../../../../lib/getMessages";
import type { Locale } from "../../../../lib/i18n";

export function generateStaticParams() {
  const locales = ["en", "es", "ru", "ja"];

  return locales.flatMap((locale) =>
    services.map((service) => ({
      locale,
      slug: service.slug,
    }))
  );
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const t = await getMessages(locale as Locale);
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const imageMap: Record<string, string> = {
    "luxury-concierge": "/images/concierge.jpg",
    "curated-referrals": "/images/referrals.jpg",
    "design-support": "/images/design-support.jpg",
    "private-lifestyle-support": "/images/lifestyle-new.jpg",
    "digital-presence": "/images/web-design.jpg",
  };

  return (
    <main className="bg-[#5b4636] pt-24 text-[#f3eee7]">
      <section className="relative min-h-[70svh] overflow-hidden sm:min-h-[78svh]">
        <Image
          src={imageMap[service.slug] ?? "/images/services-hero.jpg"}
          alt={service.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(91,70,54,0.42),rgba(91,70,54,0.82))]" />

        <div className="relative z-10 mx-auto flex min-h-[70svh] max-w-7xl items-end px-5 py-16 sm:min-h-[78svh] sm:px-6 md:px-10 lg:px-16 lg:py-24">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#d8c5b5]">
              {service.eyebrow}
            </p>

            <h1 className="mt-6 text-4xl font-light uppercase leading-[1.03] tracking-[0.04em] sm:text-5xl md:text-6xl lg:text-7xl">
              {service.title}
            </h1>

            <p className="mt-8 max-w-3xl text-base leading-7 text-[#efe7dd] sm:text-lg sm:leading-8 md:text-xl">
              {service.heroText}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f3eee7] px-5 py-16 text-[#5b4636] sm:px-6 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#9a7b67]">
              {t.serviceDetail.included}
            </p>
            <ul className="mt-8 space-y-4 text-base leading-7 text-[#6b5647] sm:text-lg sm:leading-8">
              {service.includes.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#9a7b67]">
              {t.serviceDetail.idealFor}
            </p>
            <ul className="mt-8 space-y-4 text-base leading-7 text-[#6b5647] sm:text-lg sm:leading-8">
              {service.idealFor.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#5b4636] px-5 py-16 sm:px-6 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl border border-[rgba(243,238,231,0.12)] px-6 py-12 sm:px-8 sm:py-14 md:px-12 lg:px-16 lg:py-20">
          <p className="text-sm uppercase tracking-[0.3em] text-[#d8c5b5]">
            {t.serviceDetail.nextStep}
          </p>

          <h2 className="mt-6 max-w-3xl text-3xl font-light uppercase leading-[1.08] tracking-[0.04em] sm:text-4xl md:text-5xl lg:text-6xl">
            {t.serviceDetail.ready}
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[#efe7dd] sm:text-lg sm:leading-8">
            {t.serviceDetail.body}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href={`/${locale}/checkout`}
              className="inline-flex items-center justify-center bg-[#f3eee7] px-8 py-4 text-sm font-medium uppercase tracking-[0.22em] text-[#5b4636] transition hover:bg-[#e9dfd4] sm:px-10"
            >
              {t.serviceDetail.checkout}
            </Link>

            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center border border-[#f3eee7] px-8 py-4 text-sm font-medium uppercase tracking-[0.22em] text-[#f3eee7] transition hover:bg-[#f3eee7] hover:text-[#5b4636] sm:px-10"
            >
              {t.serviceDetail.contact}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}