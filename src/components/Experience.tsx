import { GraduationCap, Code, Users, Calendar, MapPin, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      category: "Learning Journey",
      icon: GraduationCap,
      color: "from-blue-500 to-blue-600",
      glowColor: "shadow-blue-500/20",
      items: [
        {
          title: "CS50x - Harvard University",
          provider: "edX",
          period: "2024",
          description: "Computer Science fundamentals, algorithms, data structures, and problem-solving",
          link: "https://cs50.harvard.edu/x/"
        },
        {
          title: "Python Programming",
          provider: "University of Michigan (Coursera)",
          period: "2024",
          description: "Comprehensive Python programming course covering fundamentals to advanced concepts",
          link: "https://coursera.org"
        },
        {
          title: "Self-Learning",
          provider: "YouTube, freeCodeCamp, Coursera",
          period: "Ongoing",
          description: "Continuously exploring AI/ML, web development, and algorithms through various online platforms"
        }
      ]
    },
    {
      id: 2,
      category: "Personal Projects",
      icon: Code,
      color: "from-green-500 to-green-600",
      glowColor: "shadow-green-500/20",
      items: [
        {
          title: "Portfolio Website",
          provider: "Personal Project",
          period: "2024 - In Progress",
          description: "Designing and building a responsive portfolio website from scratch using React and TypeScript"
        },
        {
          title: "Task Manager App",
          provider: "Personal Project",
          period: "2024 - In Progress",
          description: "Building a simple task management application using React and Firebase for real-time data"
        },
        {
          title: "Web Scraper & Automation",
          provider: "Personal Project",
          period: "2024 - In Progress",
          description: "Developing Python-based web scraper and automation tools for data collection and task automation"
        }
      ]
    },
    {
      id: 3,
      category: "Contributions",
      icon: Users,
      color: "from-purple-500 to-purple-600",
      glowColor: "shadow-purple-500/20",
      items: [
        {
          title: "Digital Marketing & Developer Intern",
          provider: "Indie Kit",
          period: "July 2025 - Ongoing",
          location: "Remote",
          description: "Working on digital marketing strategies and development projects, gaining experience in both marketing and technical domains"
        },
        {
          title: "Web Dev Intern",
          provider: "PixelCore Technologies",
          period: "Aug 2024",
          location: "Remote",
          description: "Gained hands-on experience in web development, working on real projects and learning industry practices"
        },
        {
          title: "Community Contributor",
          provider: "Stack Overflow, Reddit, Discord",
          period: "Ongoing",
          description: "Actively contributing to developer communities by helping solve problems and sharing knowledge"
        }
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "2s" }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              My <span className="text-gradient-secondary">Experiences</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A journey of continuous learning, building, and contributing to the developer community
            </p>
            <div className="w-24 h-1 bg-gradient-secondary mx-auto rounded-full mt-6" />
          </div>

          {/* Experience Categories */}
          <div className="space-y-12">
            {experiences.map((category, categoryIndex) => (
              <div 
                key={category.id} 
                className="animate-slide-in-left"
                style={{ animationDelay: `${0.2 * categoryIndex}s` }}
              >
                <Card className={`bg-gradient-card border-border/50 hover-lift shadow-lg hover:${category.glowColor}`}>
                  <CardHeader className="pb-6">
                    <div className="flex items-center gap-4">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${category.color} shadow-lg`}>
                        <category.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">
                        {category.category}
                      </h3>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    {category.items.map((item, itemIndex) => (
                      <div 
                        key={itemIndex}
                        className="relative pl-8 pb-6 last:pb-0 animate-fade-in"
                        style={{ animationDelay: `${0.3 + (0.1 * itemIndex)}s` }}
                      >
                        {/* Timeline line */}
                        {itemIndex < category.items.length - 1 && (
                          <div className="absolute left-2 top-8 w-px h-full bg-border" />
                        )}
                        
                        {/* Timeline dot */}
                        <div className="absolute left-0 top-2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg" />
                        
                        <div className="space-y-3">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <h4 className="text-lg font-semibold text-foreground">
                              {item.title}
                            </h4>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Calendar className="w-4 h-4" />
                              {item.period}
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap items-center gap-3">
                            <Badge variant="outline" className="text-primary border-primary/30">
                              {item.provider}
                            </Badge>
                            {item.location && (
                              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <MapPin className="w-4 h-4" />
                                {item.location}
                              </div>
                            )}
                            {item.link && (
                              <a 
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-sm text-primary hover:text-primary-glow transition-colors"
                              >
                                <ExternalLink className="w-4 h-4" />
                                View
                              </a>
                            )}
                          </div>
                          
                          <p className="text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;