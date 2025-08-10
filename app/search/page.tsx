import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

// Dummy data, ganti dengan fetch dari API jika sudah ada
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
];

const categories = ["Semua", "Sweater", "Jaket", "Kaos", "Celana"];
const statuses = ["Semua", "Baru", "Bekas"];
const sortOptions = [
  { label: "Terbaru", value: "terbaru" },
  { label: "Termurah", value: "termurah" },
  { label: "Termahal", value: "termahal" },
];

export default function SearchPage() {
  // Dummy state, ganti dengan state management/filter logic sesuai kebutuhan
  return (
    <div className="container mx-auto py-8">
      <div className="flex gap-8 mt-24">
        {/* Sidebar Filter */}
        <aside className="w-64 hidden md:block">
          <div className="bg-background border rounded-xl p-6 sticky top-32">
            <h3 className="font-bold mb-4">Filter</h3>
            <div className="mb-6">
              <p className="font-medium mb-2">Kategori</p>
              <ul className="flex flex-col gap-2">
                {categories.map((cat) => (
                  <li key={cat}>
                    <Button variant="ghost" className="w-full justify-start">
                      {cat}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-medium mb-2">Status</p>
              <ul className="flex flex-col gap-2">
                {statuses.map((stat) => (
                  <li key={stat}>
                    <Button variant="ghost" className="w-full justify-start">
                      {stat}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
        {/* Main Content */}
        <section className="flex-1">
          {/* Top Filter */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div className="flex gap-2">
              {/* Sort Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    Urutkan <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {sortOptions.map((opt) => (
                    <DropdownMenuItem key={opt.value}>
                      {opt.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              {/* Category Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    Kategori <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {categories.map((cat) => (
                    <DropdownMenuItem key={cat}>{cat}</DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              {/* Status Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    Status <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {statuses.map((stat) => (
                    <DropdownMenuItem key={stat}>{stat}</DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          {/* Product List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {dummyProducts.map((product, idx) => (
              <ProductCard key={idx} data={product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
