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
      "A refined concierge-style consultation designed to connect you with the right support.",
  },
  {
    id: "curated-referral",
    name: "Curated Referral Access",
    price: 350,
    description:
      "A more personalized service focused on sourcing trusted professionals.",
  },
  {
    id: "design-support",
    name: "Design Support",
    price: 500,
    description:
      "Design-led guidance through Gateway for elevated visual and lifestyle experience.",
  },
];

export default function CheckoutPage() {
  const [selectedServiceId, setSelectedServiceId] = useState(serviceOptions[0].id);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const selectedService = useMemo(
    () => serviceOptions.find((s) => s.id === selectedServiceId)!,
    [selectedServiceId]
  );

  const total = selectedService.price;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

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
      <section className="px-8 py-24">
        <h1 className="text-5xl uppercase">Checkout</h1>
      </section>

      <section className="bg-[#f3eee7] text-[#5b4636] px-8 py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          
          {/* LEFT */}
          <form onSubmit={handleSubmit} className="space-y-8">

            <div>
              <p className="uppercase text-sm tracking-[0.3em]">Select Service</p>

              <div className="mt-6 space-y-4">
                {serviceOptions.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSelectedServiceId(s.id)}
                    className={`border p-6 text-left w-full ${
                      selectedServiceId === s.id
                        ? "bg-[#efe7dd]"
                        : "bg-[#f8f4ee]"
                    }`}
                  >
                    <p className="text-xl">{s.name}</p>
                    <p className="text-sm mt-2">{s.description}</p>
                    <p className="mt-2 font-medium">${s.price}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-2">
              <input
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="p-4 bg-[#f3eee7]"
              />
              <input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-4 bg-[#f3eee7]"
              />
            </div>

            <button className="bg-[#5b4636] text-white px-8 py-4">
              Continue
            </button>

            <Link
              href="/contact"
              className="border px-8 py-4 inline-block text-center"
            >
              Contact Instead
            </Link>
          </form>

          {/* RIGHT */}
          <div className="border p-6 bg-[#f8f4ee]">
            <h2 className="text-2xl">{selectedService.name}</h2>
            <p className="mt-4">${total}</p>
          </div>

        </div>
      </section>
    </main>
  );
}