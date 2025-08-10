import { ServiceMap } from "@/components/service-map";

export const metadata = {
  title: "Peta Layanan Reparasi",
  description: "Temukan lokasi layanan reparasi Suwear terdekat",
};

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
          <ServiceMap className="h-[75vh] w-full" />
        </section>
      </div>
    </main>
  );
}
