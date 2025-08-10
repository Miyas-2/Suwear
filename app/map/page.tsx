"use client";

import dynamic from "next/dynamic";

const ServiceMap = dynamic(() => import("@/components/service-map"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-[75vh]">
      Loading map...
    </div>
  ),
});

export default function PetaLayananPage() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="flex-1 w-full flex flex-col gap-20 items-center">
        <section className="container px-4 p-5 mt-32 w-full max-w-7xl">
          <div className="flex items-center justify-between mb-4">
            <h1 className="font-medium text-xl md:text-2xl">
              Peta Layanan Reparasi
            </h1>
          </div>
          <ServiceMap />
        </section>
      </div>
    </main>
  );
}
