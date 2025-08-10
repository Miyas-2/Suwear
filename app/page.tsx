import { Hero } from "@/components/hero";
import { ExploreMoreCard } from "@/components/explore-more-card";
import { ProductCard } from "@/components/product-card";
import { Bento } from "@/components/bento";

// Dummy data array
const dummyProducts = [
  {
    owner: {
      name: "Rizky Maulana",
      profilePic: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    postedAt: "10 Agustus 2025",
    productImage:
      "https://cf.shopee.co.id/file/e7e4fc1cd889153622715774b0193f54",
    productName: "Sweater Rajut Premium",
    price: "Rp 150.000",
    status: "Baru",
  },
  {
    owner: {
      name: "Dewi Lestari",
      profilePic: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    postedAt: "9 Agustus 2025",
    productImage:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=601",
    productName: "Jaket Hoodie",
    price: "Rp 200.000",
    status: "Bekas",
  },
  {
    owner: {
      name: "Budi Santoso",
      profilePic: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    postedAt: "8 Agustus 2025",
    productImage:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=602",
    productName: "Kaos Polos",
    price: "Rp 75.000",
    status: "Baru",
  },
  {
    owner: {
      name: "Siti Aminah",
      profilePic: "https://randomuser.me/api/portraits/women/46.jpg",
    },
    postedAt: "7 Agustus 2025",
    productImage:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=603",
    productName: "Celana Jeans",
    price: "Rp 180.000",
    status: "Baru",
  },
  {
    owner: {
      name: "Rizky Maulana",
      profilePic: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    postedAt: "10 Agustus 2025",
    productImage:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600",
    productName: "Sweater Rajut Premium",
    price: "Rp 150.000",
    status: "Baru",
  },
  {
    owner: {
      name: "Dewi Lestari",
      profilePic: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    postedAt: "9 Agustus 2025",
    productImage:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=601",
    productName: "Jaket Hoodie",
    price: "Rp 200.000",
    status: "Bekas",
  },
  {
    owner: {
      name: "Budi Santoso",
      profilePic: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    postedAt: "8 Agustus 2025",
    productImage:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=602",
    productName: "Kaos Polos",
    price: "Rp 75.000",
    status: "Baru",
  },
  {
    owner: {
      name: "Siti Aminah",
      profilePic: "https://randomuser.me/api/portraits/women/46.jpg",
    },
    postedAt: "7 Agustus 2025",
    productImage:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=603",
    productName: "Celana Jeans",
    price: "Rp 180.000",
    status: "Baru",
  },
];

export default function Home() {
  const showExplore = dummyProducts.length > 7;
  const displayedProducts = showExplore
    ? dummyProducts.slice(0, 7)
    : dummyProducts;

  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="flex-1 w-full flex flex-col gap-20 items-center">
        <div className="flex-1 flex flex-col gap-20 p-5 mt-24">
          <Hero />
          <main className="container flex-1 flex flex-col gap-6 px-4">
            <section className="latest-products mb-4 md:mb-8">
              <h2 className="font-medium text-xl  md:text-2xl mb-4">
                Produk Terbaru
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {displayedProducts.map((product, idx) => (
                  <ProductCard key={idx} data={product} />
                ))}
                {showExplore && <ExploreMoreCard />}
              </div>
            </section>
            <section className="latest-articles mb-4 md:mb-8">
              <h2 className="font-medium text-xl  md:text-2xl mb-4">
                Artikel Terbaru
              </h2>
              <Bento />
            </section>
          </main>
        </div>
      </div>
    </main>
  );
}
