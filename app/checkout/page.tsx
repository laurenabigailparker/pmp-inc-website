"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type ServiceOption = {
  id: string;
  name: string;
  price: number;
  description: string;
};

const serviceOptions: ServiceOption[] = [
  {
    id: "luxury-concierge",
    name: "Luxury Concierge",
    price: 250,
    description:
      "A refined concierge-style consultation designed to connect you with the right support, services, and next steps.",
  },
  {
    id: "curated-referral",
    name: "Curated Referral Access",
    price: 350,
    description:
      "A more personalized service focused on sourcing and aligning trusted professionals to your specific needs.",
  },
  {
    id: "design-support",
    name: "Design Support",
    price: 500,
    description:
      "Design-led guidance through Gateway for clients seeking a more elevated visual and lifestyle experience.",
  },
];

export default function CheckoutPage() {
  const [selectedServiceId, setSelectedServiceId] = useState(serviceOptions[0].id);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  const selectedService = useMemo(
    () => serviceOptions.find((service) => service.id === selectedServiceId)!,
    [selectedServiceId]
  );

  const subtotal = selectedService.price;
  const total = subtotal;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const params = new URLSearchParams({
      service: selectedService.name,
      amount: total.toString(),
      name: fullName,
      email,
    });

    window.location.href = `/checkout/success?${params.toString()}`;
  };

  return (
    <main className="bg-[#5b4636] text-[#f3eee7]">
      <section className="bg-[#5b4636] px-5 py-16 sm:px-6 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#d8c5b5]">
            Checkout
          </p>

          <h1 className="mt-6 max-w-5xl text-4xl font-light uppercase leading-[1.03] tracking-[0.04em] sm:text-5xl md:text-6xl lg:text-7xl">
            Secure your service.
          </h1>

          <p className="mt-8 max-w-3xl text-base leading-7 text-[#efe7dd] sm:text-lg sm:leading-8 md:text-xl">
            Choose the service that best fits your needs and complete your
            inquiry details below. Payment integration can be connected as soon
            as your gateway details are ready.
          </p>
        </div>
      </section>

      <section className="bg-[#f3eee7] px-5 py-16 text-[#5b4636] sm:px-6 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#9a7b67]">
                Select Service
              </p>

              <div className="mt-6 grid gap-4 sm:gap-6">
                {serviceOptions.map((service) => {
                  const isSelected = selectedServiceId === service.id;

                  return (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => setSelectedServiceId(service.id)}
                      className={`border p-5 text-left transition sm:p-6 ${
                        isSelected
                          ? "border-[#5b4636] bg-[#efe7dd]"
                          : "border-[rgba(91,70,54,0.12)] bg-[#f8f4ee] hover:bg-[#efe7dd]"
                      }`}
                    >
                      <div className="flex flex-col gap-4 sm:gap-5">
                        <div className="flex items-start justify-between gap-4">
                          <p className="text-xl font-light uppercase tracking-[0.04em] sm:text-2xl">
                            {service.name}
                          </p>
                          <div className="shrink-0 text-lg font-medium text-[#5b4636]">
                            ${service.price}
                          </div>
                        </div>

                        <p className="leading-7 text-[#6b5647] sm:leading-8">
                          {service.description}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#9a7b67]">
                Your Details
              </p>

              <div className="mt-6 grid gap-px bg-[rgba(91,70,54,0.12)]">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(event) => setFullName(event.target.value)}
                  className="bg-[#f3eee7] px-5 py-4 text-[#5b4636] outline-none placeholder:text-[#9a7b67] sm:px-6 sm:py-5"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="bg-[#f3eee7] px-5 py-4 text-[#5b4636] outline-none placeholder:text-[#9a7b67] sm:px-6 sm:py-5"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  className="bg-[#f3eee7] px-5 py-4 text-[#5b4636] outline-none placeholder:text-[#9a7b67] sm:px-6 sm:py-5"
                />
                <textarea
                  rows={6}
                  placeholder="Tell us anything you want us to know before we begin..."
                  value={notes}
                  onChange={(event) => setNotes(event.target.value)}
                  className="bg-[#f3eee7] px-5 py-4 text-[#5b4636] outline-none placeholder:text-[#9a7b67] sm:px-6 sm:py-5"
                />
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <button
                type="submit"
                className="inline-flex items-center justify-center bg-[#5b4636] px-8 py-4 text-sm font-medium uppercase tracking-[0.22em] text-[#f3eee7] transition hover:bg-[#675140] sm:px-10"
              >
                Continue to Payment
              </button>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-[#5b4636] px-8 py-4 text-sm font-medium uppercase tracking-[0.22em] text-[#5b4636] transition hover:bg-[#5b4636] hover:text-[#f3eee7] sm:px-10"
              >
                Contact Instead
              </Link>
            </div>
          </form>

          <aside className="h-fit border border-[rgba(91,70,54,0.12)] bg-[#f8f4ee] p-6 sm:p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-[#9a7b67]">
              Order Summary
            </p>

            <h2 className="mt-6 text-2xl font-light uppercase leading-[1.08] tracking-[0.04em] sm:text-3xl">
              {selectedService.name}
            </h2>

            <p className="mt-5 leading-7 text-[#6b5647] sm:leading-8">
              {selectedService.description}
            </p>

            <div className="mt-8 space-y-4 border-t border-[rgba(91,70,54,0.12)] pt-6">
              <div className="flex items-center justify-between text-[#6b5647]">
                <span>Service</span>
                <span>${subtotal}</span>
              </div>

              <div className="flex items-center justify-between border-t border-[rgba(91,70,54,0.12)] pt-4 text-lg font-medium text-[#5b4636]">
                <span>Total</span>
                <span>${total}</span>
              </div>
            </div>

            <div className="mt-8 border border-[rgba(91,70,54,0.12)] bg-[#f3eee7] p-5 text-sm leading-7 text-[#6b5647]">
              This is a temporary checkout experience for design and flow.
              Secure payment processing will be connected once your gateway setup
              is available.
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}