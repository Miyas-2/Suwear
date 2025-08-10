import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export function ExploreMoreCard() {
  return (
    <Card className="w-full max-w-sm border-none shadow-none group transition">
      <Link href="/explore">
        {/* Header polos */}
        <div className="h-12" />
        <CardContent className="p-0">
          <div className="relative overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=604"
              alt="Explore More"
              width={400}
              height={300}
              className="w-full h-60 object-cover rounded-t-none blur-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-black/60 rounded-full p-4">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>
        </CardContent>
        {/* Footer polos */}
        <div className="mt-3 px-4 pb-4">
          <div className="font-normal text-base flex items-center gap-2">
            Explore More
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </Link>
    </Card>
  );
}
