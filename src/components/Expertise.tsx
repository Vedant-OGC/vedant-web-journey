import { Shield, Database, Globe, Code2, Network, Lock, FileCode, Palette } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Expertise = () => {
  const skills = [
    {
      id: 1,
      title: "Networking and Cybersecurity",
      description: "Understanding network protocols, security principles, and best practices for secure system design.",
      icon: Shield,
      gradient: "from-red-500 to-red-600",
      glowColor: "shadow-red-500/20"
    },
    {
      id: 2,
      title: "Python & SQL",
      description: "Backend development, data analysis, automation scripts, and database management with SQL.",
      icon: Database,
      gradient: "from-blue-500 to-blue-600",
      glowColor: "shadow-blue-500/20"
    },
    {
      id: 3,
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces with HTML, CSS, and JavaScript.",
      icon: Code2,
      gradient: "from-green-500 to-green-600",
      glowColor: "shadow-green-500/20"
    },
    {
      id: 4,
      title: "Web Development",
      description: "Full-stack web development using modern frameworks and technologies for complete web solutions.",
      icon: Globe,
      gradient: "from-purple-500 to-purple-600",
      glowColor: "shadow-purple-500/20"
    }
  ];

  const additionalSkills = [
    { name: "React", icon: Code2 },
    { name: "TypeScript", icon: FileCode },
    { name: "Tailwind CSS", icon: Palette },
    { name: "Firebase", icon: Database },
    { name: "Git", icon: Code2 },
    { name: "Network Security", icon: Lock },
    { name: "System Administration", icon: Network },
    { name: "Problem Solving", icon: Code2 }
  ];

  return (
    <section id="expertise" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      <div className="absolute top-1/2 left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              My <span className="text-gradient-accent">Expertise</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Building solutions with a focus on security, performance, and user experience
            </p>
            <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full mt-6" />
          </div>

          {/* Main Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {skills.map((skill, index) => (
              <Card 
                key={skill.id} 
                className={`bg-gradient-card border-border/50 hover-lift group animate-slide-in-left shadow-lg hover:${skill.glowColor}`}
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${skill.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <skill.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {skill.title}
                      </h3>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="animate-slide-in-right" style={{ animationDelay: "0.6s" }}>
            <Card className="bg-gradient-card border-border/50">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-center mb-8">
                  Technologies & Tools
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {additionalSkills.map((skill, index) => (
                    <div 
                      key={skill.name}
                      className="flex items-center gap-3 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all duration-300 hover:scale-105 group animate-bounce-in"
                      style={{ animationDelay: `${0.1 * index}s` }}
                    >
                      <skill.icon className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
                      <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;