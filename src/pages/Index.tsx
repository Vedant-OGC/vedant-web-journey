import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Expertise from "@/components/Expertise";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <Expertise />
        <Experience />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
