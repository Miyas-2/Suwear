import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const articles = [
  {
    title: "The Environmental Impact of Fast Fashion",
    date: "2024-01-15",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800",
    href: "/artikel/1",
  },
  {
    title: "Sustainable Materials Revolutionizing Fashion",
    date: "2024-01-14",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=801",
    href: "/artikel/2",
  },
  {
    title: "Circular Fashion: The Future of Clothing",
    date: "2024-01-13",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=802",
    href: "/artikel/3",
  },
  {
    title: "Building a Sustainable Wardrobe",
    date: "2024-01-12",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=803",
    href: "/artikel/4",
  },
];

export function Bento() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Left side: 2 rows */}
      <div className="grid md:grid-rows-2 gap-4">
        {/* Top large card */}
        <Card className="relative rounded-2xl overflow-hidden group transition-transform h-[250px] md:h-[200px] p-0">
          <Link href={articles[0].href} className="block w-full h-full">
            <CardContent className="relative w-full h-full p-0">
              <Image
                src={articles[0].image}
                alt={articles[0].title}
                fill
                className="object-cover group-hover:scale-105 duration-300"
                sizes="100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="absolute top-2 right-2 text-white group-hover:-rotate-45 duration-300"
                height={25}
                width={25}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="48"
                  d="m268 112 144 144-144 144m124-144H100"
                ></path>
              </svg>
              <div className="absolute bottom-0 left-0 p-4 w-full transition-all">
                <p className="text-sm text-gray-300">{articles[0].date}</p>
                <h3 className="text-lg font-semibold text-white">
                  {articles[0].title}
                </h3>
              </div>
            </CardContent>
          </Link>
        </Card>
        {/* Bottom: 2 small cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[articles[1], articles[2]].map((art) => (
            <Card
              key={art.href}
              className="relative rounded-2xl overflow-hidden group transition-transform h-[250px] md:h-[200px] p-0"
            >
              <Link href={art.href} className="block w-full h-full">
                <CardContent className="relative w-full h-full p-0">
                  <Image
                    src={art.image}
                    alt={art.title}
                    fill
                    className="object-cover group-hover:scale-105 duration-300"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="absolute top-2 right-2 text-white group-hover:-rotate-45 duration-300"
                    height={25}
                    width={25}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="48"
                      d="m268 112 144 144-144 144m124-144H100"
                    ></path>
                  </svg>
                  <div className="absolute bottom-0 left-0 p-4 w-full transition-all">
                    <p className="text-sm text-gray-300">{art.date}</p>
                    <h3 className="text-lg font-semibold text-white">
                      {art.title}
                    </h3>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
      {/* Right side: 1 tall card */}
      <Card className="relative rounded-2xl overflow-hidden group transition-transform h-[300px] md:h-full p-0">
        <Link href={articles[3].href} className="block w-full h-full">
          <CardContent className="relative w-full h-full p-0">
            <Image
              src={articles[3].image}
              alt={articles[3].title}
              fill
              className="object-cover group-hover:scale-105 duration-300"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="absolute top-2 right-2 text-white group-hover:-rotate-45 duration-300"
              height={25}
              width={25}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="48"
                d="m268 112 144 144-144 144m124-144H100"
              ></path>
            </svg>
            <div className="absolute bottom-0 left-0 p-4 w-full transition-all">
              <p className="text-sm text-gray-300">{articles[3].date}</p>
              <h3 className="text-lg font-semibold text-white">
                {articles[3].title}
              </h3>
            </div>
          </CardContent>
        </Link>
      </Card>
    </div>
  );
}
