import Test from "@/components/test";

export const metadata = {
  title: "Test Page",
};

export default function TestPage() {
  return (
    <section className="min-h-screen w-full py-12">
      <div>
        <Test />
      </div>
    </section>
  );
}
