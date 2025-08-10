import { HeaderBlog } from "@/components/header";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderBlog />
      <main>{children}</main>
    </>
  );
}
