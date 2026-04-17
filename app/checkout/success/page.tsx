import Link from "next/link";

type CheckoutSuccessSearchParams = Promise<{
  service?: string;
  amount?: string;
  name?: string;
  email?: string;
}>;

export default async function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: CheckoutSuccessSearchParams;
}) {
  const params = await searchParams;

  return (
    <main className="bg-[#5b4636] text-[#f3eee7]">
      <section className="px-5 py-16 sm:px-6 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-4xl border border-[rgba(243,238,231,0.12)] px-6 py-12 sm:px-8 sm:py-14 md:px-12 lg:px-16 lg:py-20">
          <p className="text-sm uppercase tracking-[0.35em] text-[#d8c5b5]">
            Success
          </p>

          <h1 className="mt-6 text-4xl font-light uppercase leading-[1.03] tracking-[0.04em] sm:text-5xl md:text-6xl lg:text-7xl">
            Your request has been received.
          </h1>

          <div className="mt-8 space-y-6 text-base leading-7 text-[#efe7dd] sm:text-lg sm:leading-8">
            <p>
              Thank you{params.name ? `, ${params.name}` : ""}. Your checkout flow
              has been submitted successfully.
            </p>

            <p>
              <strong>Service:</strong> {params.service ?? "Selected Service"}
              <br />
              <strong>Total:</strong> ${params.amount ?? "0"}
              <br />
              <strong>Email:</strong> {params.email ?? "Not provided"}
            </p>

            <p>
              Once the live gateway is connected, this page will confirm your
              actual secure payment result.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-[#f3eee7] px-8 py-4 text-sm font-medium uppercase tracking-[0.22em] text-[#5b4636] transition hover:bg-[#e9dfd4] sm:px-10"
            >
              Return Home
            </Link>

            <Link
              href="/checkout"
              className="inline-flex items-center justify-center border border-[#f3eee7] px-8 py-4 text-sm font-medium uppercase tracking-[0.22em] text-[#f3eee7] transition hover:bg-[#f3eee7] hover:text-[#5b4636] sm:px-10"
            >
              Back to Checkout
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}