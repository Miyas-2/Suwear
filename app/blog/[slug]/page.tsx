import Image from "next/image";
import { notFound } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  cover: string;
  date: string;
  author: { name: string; avatar: string };
  content: string[];
};

const posts: BlogPost[] = [
  {
    slug: "panduan-memilih-bahan-sweater",
    title: "Panduan Memilih Bahan Sweater yang Nyaman dan Tahan Lama",
    excerpt:
      "Kenali perbedaan katun, wool, dan fleece agar tidak salah beli saat memilih sweater.",
    cover:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=1600&q=80&auto=format&fit=crop",
    date: "6 Agustus 2025",
    author: {
      name: "Rizky Maulana",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    content: [
      "Memilih sweater tidak hanya soal warna dan model. Bahan sangat menentukan kenyamanan dan ketahanan.",
      "Katun cenderung ringan dan menyerap keringat, cocok untuk iklim tropis. Wool hangat dan elastis, ideal untuk daerah dingin. Fleece lembut dan cepat kering, enak dipakai harian.",
      "Tips singkat: cek kerapatan rajutan, perhatikan instruksi perawatan, dan pilih ukuran yang pas agar tidak cepat melar.",
    ],
  },
  {
    slug: "merawat-pakaian-berkelanjutan",
    title: "Merawat Pakaian Secara Berkelanjutan",
    excerpt:
      "Dengan perawatan tepat, pakaian favorit bisa awet sekaligus mengurangi jejak lingkungan.",
    cover:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=1200&q=80&auto=format&fit=crop",
    date: "4 Agustus 2025",
    author: {
      name: "Dewi Lestari",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    content: [
      "Mulailah dari hal sederhana: cuci dengan air dingin, gunakan deterjen ramah lingkungan, dan jemur di tempat teduh.",
      "Simpan pakaian berdasarkan bahan. Hindari penggunaan pengering berlebihan karena bisa merusak serat dan menghabiskan energi.",
    ],
  },
  {
    slug: "mix-and-match-basic-wardrobe",
    title: "Mix and Match: Maksimalkan Basic Wardrobe",
    excerpt:
      "Strategi sederhana memadukan kaos polos, jeans, dan outer agar tetap stylish setiap hari.",
    cover:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&q=80&auto=format&fit=crop",
    date: "1 Agustus 2025",
    author: {
      name: "Budi Santoso",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    content: [
      "Kunci mix and match adalah proporsi dan warna. Gunakan palet netral sebagai dasar, lalu tambahkan aksen warna.",
      "Aksesori seperti topi, jam, atau tas bisa mengubah tampilan tanpa perlu beli baju baru.",
    ],
  },
];

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.cover }],
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return notFound();

  const comments = [
    {
      id: 1,
      author: "Andi Pratama",
      avatar: "https://randomuser.me/api/portraits/men/11.jpg",
      date: "10 Agustus 2025",
      text: "Artikelnya bermanfaat banget. Tips perawatannya simpel tapi ngena!",
    },
    {
      id: 2,
      author: "Nadia Putri",
      avatar: "https://randomuser.me/api/portraits/women/21.jpg",
      date: "9 Agustus 2025",
      text: "Setuju, pakai air dingin bikin warna lebih awet.",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="flex-1 w-full flex flex-col gap-20 items-center">
        <article className="container px-4 p-5 mt-32 max-w-3xl">
          <h1 className="text-2xl md:text-3xl font-semibold mb-3">
            {post.title}
          </h1>
          <p className="text-muted-foreground mb-4">{post.excerpt}</p>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={28}
              height={28}
              className="rounded-full"
            />
            <span>{post.author.name}</span>
            <span>•</span>
            <span>{post.date}</span>
          </div>

          <div className="relative w-full aspect-[16/9] mb-6 overflow-hidden rounded-lg">
            <Image
              src={post.cover}
              alt={post.title}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            {post.content.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <hr className="my-10" />

          {/* Section Komentar */}
          <section aria-labelledby="comments-title">
            <h2
              id="comments-title"
              className="text-lg md:text-xl font-semibold mb-4"
            >
              Komentar
            </h2>

            {/* Form komentar (dummy) */}
            <Card className="p-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="relative h-10 w-10 shrink-0">
                  <Image
                    src="https://randomuser.me/api/portraits/men/1.jpg"
                    alt="Avatar"
                    fill
                    className="rounded-full object-cover"
                    sizes="40px"
                  />
                </div>
                <div className="flex-1">
                  <textarea
                    className="w-full min-h-24 rounded-md border bg-background p-3 text-sm outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Tulis komentar (demo, belum tersimpan)..."
                    disabled
                  />
                  <div className="flex justify-end mt-2">
                    <Button disabled>Kirim</Button>
                  </div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Demo saja. Penyimpanan komentar belum diaktifkan.
              </p>
            </Card>

            {/* Daftar komentar (dummy) */}
            <div className="space-y-4">
              {comments.map((c) => (
                <Card key={c.id} className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="relative h-10 w-10 shrink-0">
                      <Image
                        src={c.avatar}
                        alt={c.author}
                        fill
                        className="rounded-full object-cover"
                        sizes="40px"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{c.author}</span>
                        <span className="text-xs text-muted-foreground">
                          {c.date}
                        </span>
                      </div>
                      <p className="text-sm mt-1">{c.text}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
