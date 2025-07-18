import AboutHero from "@/components/about/AboutHero";
import AboutIntro from "@/components/about/AboutIntro";
import AboutTabsSection from "@/components/about/AboutTabsSection";
import AboutTeamSection from "@/components/about/AboutTeam";
import AboutTestimonialsSection from "@/components/about/AboutTestimonialsSection";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      {/* Other sections go here */}
      <AboutIntro/>
      <AboutTabsSection/>
      <AboutTeamSection/>
      <AboutTestimonialsSection/>
    </main>
  );
}