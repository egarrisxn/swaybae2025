import { Footer } from "@/components/footer";

export default function PagesLayout({ children }) {
  return (
    <div className="grid min-h-[100dvh] w-full grid-rows-[auto_1fr_auto]">
      <header>xxx</header>

      <main>{children}</main>

      <Footer hasScroll={false} />
    </div>
  );
}
