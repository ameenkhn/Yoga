import Hero from "@/components/Hero";
import About from "@/components/About";
import Workshop from "@/components/Workshop";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Schedule from "@/components/Schedule";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Workshop />
      <Benefits />
      <Testimonials />
      <Schedule />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;