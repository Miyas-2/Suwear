import dynamic from "next/dynamic";

const ServiceMap = dynamic(() => import("@/components/service-map"), {
  ssr: false,
});

export default function MapPage() {
  return (
    <div className="container mx-auto py-8">
      <ServiceMap />
    </div>
  );
}
