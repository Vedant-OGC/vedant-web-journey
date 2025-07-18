import { ExternalLink, Eye, ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollAnimation, StaggerContainer, InteractiveCard } from "@/components/ScrollAnimations";

// Import project images
import portfolioImg from "@/assets/project-portfolio.jpg";
import tagvaultImg from "@/assets/project-tagvault.jpg";
import specialMessageImg from "@/assets/project-special-message.jpg";
import chatscoreImg from "@/assets/project-chatscore.jpg";
import webosImg from "@/assets/project-webos.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website built with Framer and advanced animations",
      technologies: ["Framer", "CSS", "JavaScript", "Animation"],
      status: "Live",
      link: "https://ogc-vedant.framer.website/",
      github: "#",
      image: portfolioImg,
      gradient: "from-purple-500 to-blue-500"
    },
    {
      id: 2,
      title: "TagVault",
      description: "Advanced tag management system with intuitive organization and search capabilities",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
      status: "Live",
      link: "https://tagvault.vercel.app/",
      github: "https://github.com/Vedant-OGC/tagvault",
      image: tagvaultImg,
      gradient: "from-cyan-500 to-orange-500"
    },
    {
      id: 3,
      title: "Special Message",
      description: "Beautiful romantic messaging application with elegant animations and design",
      technologies: ["HTML", "CSS", "JavaScript", "Animation"],
      status: "Live",
      link: "https://vedant-ogc.github.io/for-special-one/",
      github: "https://github.com/Vedant-OGC/for-special-one",
      image: specialMessageImg,
      gradient: "from-pink-500 to-red-500"
    },
    {
      id: 4,
      title: "ChatScore",
      description: "AI-powered chat scoring platform with analytics and performance metrics",
      technologies: ["React", "Node.js", "AI/ML", "Vercel"],
      status: "Live",
      link: "https://chatscore.vercel.app/",
      github: "https://github.com/Vedant-OGC/chatscore",
      image: chatscoreImg,
      gradient: "from-blue-500 to-green-500"
    },
    {
      id: 5,
      title: "WebOS Beta",
      description: "Experimental web-based operating system with desktop environment and applications",
      technologies: ["HTML", "CSS", "JavaScript", "Web APIs"],
      status: "Beta",
      link: "https://vedant-ogc.github.io/webOS-beta/",
      github: "https://github.com/Vedant-OGC/webOS-beta",
      image: webosImg,
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <ScrollAnimation className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Featured <span className="text-gradient-primary">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Explore my latest work and creative solutions
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </ScrollAnimation>

          {/* Projects Grid */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <InteractiveCard key={project.id}>
                <Card 
                  className="group relative bg-gradient-card border-border/50 overflow-hidden hover-lift transition-all duration-500"
                  style={{ 
                    transform: 'perspective(1000px) rotateX(0deg)'
                  }}
                >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-300`} />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge 
                      variant={project.status === "Live" ? "default" : "secondary"}
                      className="backdrop-blur-sm bg-background/80"
                    >
                      {project.status}
                    </Badge>
                  </div>

                  {/* Quick Actions Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/20 backdrop-blur-sm">
                     <div className="flex gap-3">
                      <Button 
                        size="sm" 
                        variant="secondary"
                        className="backdrop-blur-sm bg-background/80 hover:bg-background/90"
                        onClick={() => window.open(project.link, '_blank')}
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View Live
                      </Button>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                        {project.title}
                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs hover:bg-primary/10 transition-colors">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-2 pt-2">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="w-full group/btn"
                        onClick={() => window.open(project.link, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-45 transition-transform" />
                        View Project
                      </Button>
                    </div>
                  </div>
                </CardContent>

                {/* 3D Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20 blur-xl scale-110`} />
                </div>
              </Card>
              </InteractiveCard>
            ))}
          </StaggerContainer>

          {/* Call to Action */}
          <ScrollAnimation delay={0.6} className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              Ready to bring your ideas to life?
            </p>
            <Button 
              variant="outline" 
              size="lg"
              className="group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <ExternalLink className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Get In Touch
              <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Projects;