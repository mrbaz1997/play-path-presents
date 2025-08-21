import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { GamesSection } from "@/components/games-section";
import { TeamSection } from "@/components/team-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { FloatingShapes } from "@/components/ui/floating-shapes";

const Index = () => {
  return (
    <div className="min-h-screen">
      <FloatingShapes />
      <Navigation />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <section id="games">
          <GamesSection />
        </section>
        <section id="team">
          <TeamSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
