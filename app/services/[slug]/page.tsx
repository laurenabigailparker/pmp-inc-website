import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "../../data/services";

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const imageMap: Record<string, string> = {
    "luxury-concierge": "/images/concierge.jpg",
    "curated-referrals": "/images/referrals.jpg",
    "design-support": "/images/design-support.jpg",
    "private-lifestyle-support": "/images/lifestyle-new.jpg",
  };

  return (
    <main className="bg-[#5b4636] text-[#f3eee7]">
      <section className="relative min-h-[78svh] overflow-hidden">
        <Image
          src={imageMap[service.slug]}
          alt={service.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(91,70,54,0.42),rgba(91,70,54,0.82))]" />

        <div className="relative z-10 mx-auto flex min-h-[78svh] max-w-7xl items-end px-8 py-20 md:px-12 lg:px-16 lg:py-24">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#d8c5b5]">
              {service.eyebrow}
            </p>

            <h1 className="mt-8 text-5xl font-light uppercase leading-[1.05] tracking-[0.04em] md:text-7xl">
              {service.title}
            </h1>

            <p className="mt-10 max-w-3xl text-lg leading-8 text-[#efe7dd] md:text-xl">
              {service.heroText}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f3eee7] px-8 py-24 text-[#5b4636] md:px-12 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#9a7b67]">
              What’s Included
            </p>
            <ul className="mt-8 space-y-5 text-lg leading-8 text-[#6b5647]">
              {service.includes.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#9a7b67]">
              Ideal For
            </p>
            <ul className="mt-8 space-y-5 text-lg leading-8 text-[#6b5647]">
              {service.idealFor.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#5b4636] px-8 py-24 md:px-12 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-7xl border border-[rgba(243,238,231,0.12)] px-8 py-16 md:px-14 lg:px-16 lg:py-20">
          <p className="text-sm uppercase tracking-[0.3em] text-[#d8c5b5]">
            Next Step
          </p>

          <h2 className="mt-8 max-w-3xl text-4xl font-light uppercase leading-[1.12] tracking-[0.04em] md:text-6xl">
            Ready to move forward?
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#efe7dd]">
            When you’re ready, continue to checkout or reach out directly for a
            more tailored conversation.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/checkout"
              className="inline-flex items-center justify-center bg-[#f3eee7] px-10 py-4 text-sm font-medium uppercase tracking-[0.22em] text-[#5b4636] transition hover:bg-[#e9dfd4]"
            >
              Continue to Checkout
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-[#f3eee7] px-10 py-4 text-sm font-medium uppercase tracking-[0.22em] text-[#f3eee7] transition hover:bg-[#f3eee7] hover:text-[#5b4636]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}