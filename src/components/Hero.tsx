import { MapPin, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/vedant-hero.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8 animate-bounce-in">
            <div className="relative inline-block">
              <img
                src={heroImage}
                alt="Vedant - Developer"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover border-4 border-primary/20 shadow-2xl hover-lift"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 animate-glow-pulse" />
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              Hi, I'm{" "}
              <span className="text-gradient-primary">Vedant</span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm 17, into{" "}
              <span className="text-secondary font-semibold">codes</span>,{" "}
              <span className="text-accent font-semibold">books</span> and building{" "}
              <span className="text-primary font-semibold">cool stuff</span>
            </p>
            
            <div className="flex items-center justify-center gap-2 text-muted-foreground animate-slide-in-left" style={{ animationDelay: "0.4s" }}>
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-lg">Visakhapatnam, India</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-12 animate-slide-in-right" style={{ animationDelay: "0.6s" }}>
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-gradient-primary hover:scale-105 transition-all duration-300 text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-2xl group"
            >
              Explore My Work
              <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-muted rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;