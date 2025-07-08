import { Folder, ExternalLink, Github, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Projects = () => {
  // Future project structure for when projects are added
  const futureProjects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "Personal portfolio built from scratch with React and TypeScript",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      status: "In Progress",
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "Task Manager App",
      description: "Simple task manager using React and Firebase",
      technologies: ["React", "Firebase", "CSS"],
      status: "In Progress",
      link: "#",
      github: "#"
    },
    {
      id: 3,
      title: "Web Scraper Tool",
      description: "Python-based web scraper for automating data collection",
      technologies: ["Python", "BeautifulSoup", "Pandas"],
      status: "Planning",
      link: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Featured <span className="text-gradient-primary">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          {/* Coming Soon Message */}
          <div className="text-center animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
            <Card className="max-w-2xl mx-auto bg-gradient-card border-border/50 hover-lift">
              <CardContent className="p-12">
                <div className="space-y-6">
                  <div className="flex justify-center">
                    <div className="relative">
                      <Folder className="w-20 h-20 text-muted-foreground" />
                      <Wrench className="w-8 h-8 text-primary absolute -top-2 -right-2 animate-bounce" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-foreground">
                    I've not added them yet 🤷♂️
                  </h3>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    I'm currently working on some awesome projects that I'll be showcasing here soon. 
                    Stay tuned for updates!
                  </p>

                  {/* Preview of upcoming projects */}
                  <div className="mt-8">
                    <p className="text-sm text-muted-foreground mb-4">What's coming soon:</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {futureProjects.map((project) => (
                        <Badge key={project.id} variant="outline" className="text-xs">
                          {project.title}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Future Projects Grid (Hidden but ready for content) */}
          <div className="hidden mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {futureProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="bg-gradient-card border-border/50 hover-lift group animate-fade-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <Badge variant={project.status === "In Progress" ? "default" : "secondary"}>
                        {project.status}
                      </Badge>
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-2 pt-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;