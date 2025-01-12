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

export default function Home() {
  return (
    <div className="flex size-full flex-col">
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
  );
}
