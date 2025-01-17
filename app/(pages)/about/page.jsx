import AboutMeSwap from "@/components/about/about-me-swap";
import ProfessionalInfo from "@/components/about/professional-info";
import WhyCards from "@/components/about/why-cards";
import AccomplishmentGrid from "@/components/about/accomplishment-grid";
import AboutTimeline from "@/components/about/about-timeline";
import ParallexBox from "@/components/about/parallex-box";
import AnimatedBrandRow from "@/components/about/animated-brand-row";
import PersonalInfo from "@/components/about/personal-info";
import SwayBaeScrollText from "@/components/about/swaybae-scroll-text";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="grid size-full grid-cols-1">
      {/* WHO ARE YOU? */}
      <AboutMeSwap />

      {/* WHAT IT IS YOU DO */}
      <ProfessionalInfo />

      {/* WHY YOU DO THIS & FOR WHOM? */}
      <WhyCards />

      {/* BRANDS YOU HAVE WORKED WITH */}
      <AnimatedBrandRow />

      {/* WHAT YOU HAVE ACHIEVED */}
      <AccomplishmentGrid />

      {/* YOUR WORK TIMELINE */}
      <AboutTimeline />

      {/* QUOTE OR STATEMENT CARD */}
      <ParallexBox />

      {/* LIFE OUTSIDE OF WORK */}
      <PersonalInfo />

      {/* SCROLLING 'SWAYBAE' TEXT */}
      <SwayBaeScrollText />
    </div>
  );
}
