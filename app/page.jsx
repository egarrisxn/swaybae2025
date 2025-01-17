import Hero from "@/components/landing/hero";
import About from "@/components/landing/about";
import Socials from "@/components/landing/socials";
import YouTube from "@/components/landing/youtube";
import Twitter from "@/components/landing/twitter";
import Calendar from "@/components/landing/calendar";
import Merch from "@/components/landing/merch";
import Blog from "@/components/landing/blog";
import Brands from "@/components/landing/brands";
import Contact from "@/components/landing/contact";
import Photos from "@/components/landing/photos";
import Chaos from "@/components/landing/chaos";
// import { PageLines } from "@/components/page-lines";

export const metadata = {
  title: "Sway Bae | Creator of Chaos!",
};

export default function Home() {
  return (
    <>
      {/* <PageLines /> */}
      <div className="grid size-full grid-cols-1">
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="socials">
          <Socials />
        </section>
        <section id="youtube">
          <YouTube />
        </section>
        <section id="twitter">
          <Twitter />
        </section>
        <section id="calendar">
          <Calendar />
        </section>
        <section id="merch">
          <Merch />
        </section>
        <section id="blog">
          <Blog />
        </section>
        <section id="brands">
          <Brands />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section id="photos">
          <Photos />
        </section>
        <section id="chaos">
          <Chaos />
        </section>
      </div>
    </>
  );
}

// ! Test Loader
// function loadingPage() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Loading...");
//     }, 3000);
//   });
// }
// export default async function Home() {
//   const load = await loadingPage();
//   console.log({ load });
//   return <h2>Home Page</h2>;
// }
