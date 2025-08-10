export function Hero() {
  return (
    <div className="flex flex-col gap-16 items-center bg-fixed bg-cover bg-[url('https://res.cloudinary.com/dokktqvdq/image/upload/v1741618221/69575652141_1_dwn1or.png')] rounded-xl">
      <div className="flex flex-col gap-16 items-center !text-white rounded-xl bg-gradient-to-b from-black/40 to-black/70 w-full">
        <div className="w-full p-[1px] my-8" />
        <h1 className="sr-only">Supabase and Next.js Starter Template</h1>
        <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center">
          Dukung fesyen berkelanjutan dengan menggunakan{" "}
          <a
            href={"/"}
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            Suwear
          </a>
        </p>
        <div className="w-full p-[1px] my-8" />
      </div>
    </div>
  );
}
