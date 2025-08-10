import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";

type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  cover: string;
  date: string;
  author: { name: string; avatar: string };
};

// Dummy data blog (sementara di file ini)
const posts: BlogPost[] = [
  {
    slug: "panduan-memilih-bahan-sweater",
    title: "Panduan Memilih Bahan Sweater yang Nyaman dan Tahan Lama",
    excerpt:
      "Kenali perbedaan katun, wool, dan fleece agar tidak salah beli saat memilih sweater.",
    cover:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=1200&q=80",
    date: "6 Agustus 2025",
    author: {
      name: "Rizky Maulana",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
  },
  {
    slug: "merawat-pakaian-berkelanjutan",
    title: "Merawat Pakaian Secara Berkelanjutan",
    excerpt:
      "Dengan perawatan tepat, pakaian favorit bisa awet sekaligus mengurangi jejak lingkungan.",
    cover:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=1200&q=80",
    date: "4 Agustus 2025",
    author: {
      name: "Dewi Lestari",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
  },
  {
    slug: "mix-and-match-basic-wardrobe",
    title: "Mix and Match: Maksimalkan Basic Wardrobe",
    excerpt:
      "Strategi sederhana memadukan kaos polos, jeans, dan outer agar tetap stylish setiap hari.",
    cover:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80",
    date: "1 Agustus 2025",
    author: {
      name: "Budi Santoso",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    },
  },
  {
    slug: "tips-mencuci-agar-tidak-melorot",
    title: "Tips Mencuci Pakaian Rajut Agar Tidak Melorot",
    excerpt:
      "Pelajari teknik mencuci dan mengeringkan yang aman untuk pakaian rajut favoritmu.",
    cover:
      "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?w=1200&q=80",
    date: "30 Juli 2025",
    author: {
      name: "Siti Aminah",
      avatar: "https://randomuser.me/api/portraits/women/46.jpg",
    },
  },
  {
    slug: "panduan-ukuran-untuk-belanja-online",
    title: "Panduan Ukuran Saat Belanja Pakaian Online",
    excerpt:
      "Cara membaca tabel ukuran dan mengukur badan agar pesanan pas di badan.",
    cover:
      "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?w=1200&q=80",
    date: "28 Juli 2025",
    author: {
      name: "Rizky Maulana",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
  },
  {
    slug: "warna-netral-untuk-setiap-hari",
    title: "Warna Netral untuk Tampilan Setiap Hari",
    excerpt:
      "Palet warna netral memudahkan mix and match tanpa ribet. Ini panduan singkatnya.",
    cover:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80",
    date: "25 Juli 2025",
    author: {
      name: "Budi Santoso",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    },
  },
];

// Kartu blog dengan gaya yang selaras dengan kartu produk
function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative aspect-[16/9]">
          <Image
            src={post.cover}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={false}
          />
        </div>
        <div className="p-4">
          <h3 className="text-base md:text-lg font-semibold mb-1">
            {post.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {post.excerpt}
          </p>
          <div className="mt-4 flex items-center gap-2">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={28}
              height={28}
              className="rounded-full"
            />
            <span className="text-sm">{post.author.name}</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-sm text-muted-foreground">{post.date}</span>
          </div>
        </div>
      </Link>
    </Card>
  );
}

export const metadata = {
  title: "Blog",
  description: "Artikel terbaru dari Suwear",
};

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="flex-1 w-full flex flex-col gap-20 items-center">
        <Header />
        <div className="flex-1 flex flex-col gap-20 p-5 mt-32">
          <section className="container flex-1 flex flex-col gap-6 px-4">
            <div className="flex items-center justify-between mb-4">
              <h1 className="font-medium text-xl md:text-2xl">Blog</h1>
              <span className="text-sm text-muted-foreground">
                {posts.length} artikel
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {posts.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </main>
  );
}
