import { Instagram, Github, Twitter, MessageCircle, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Footer = () => {
  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/codednewton/",
      color: "from-pink-500 to-purple-600",
      hoverColor: "hover:shadow-pink-500/40"
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Vedant-OGC",
      color: "from-gray-400 to-gray-600",
      hoverColor: "hover:shadow-gray-500/40"
    },
    {
      name: "X (Twitter)",
      icon: Twitter,
      url: "https://x.com/ironcladissick",
      color: "from-blue-400 to-blue-600",
      hoverColor: "hover:shadow-blue-500/40"
    },
    {
      name: "Discord",
      icon: MessageCircle,
      url: "https://discord.com/users/1383806388953682040",
      color: "from-indigo-500 to-purple-600",
      hoverColor: "hover:shadow-indigo-500/40"
    }
  ];

  return (
    <footer id="contact" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
      <div className="absolute top-10 left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Contact Header */}
          <div className="mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Let's <span className="text-gradient-primary">Connect</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Got a project in mind or just want to chat about tech? I'm always open to new opportunities and interesting conversations.
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Email Card */}
            <Card className="bg-gradient-card border-border/50 hover-lift group animate-slide-in-left">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Email Me</h3>
                  <p className="text-muted-foreground mb-4">
                    Drop me a line and I'll get back to you soon
                  </p>
                  <Button 
                    variant="outline" 
                    className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                    onClick={() => window.open('mailto:manasmishra1275@gmail.com', '_blank')}
                  >
                    Send Email
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Social Card */}
            <Card className="bg-gradient-card border-border/50 hover-lift group animate-slide-in-right">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Follow Me</h3>
                  <p className="text-muted-foreground mb-4">
                    Stay updated with my latest projects and thoughts
                  </p>
                  <div className="flex justify-center gap-3">
                    {socialLinks.slice(0, 2).map((social) => (
                      <Button
                        key={social.name}
                        size="sm"
                        variant="outline"
                        className="border-accent/30 hover:bg-accent/10 hover:border-accent/50"
                        onClick={() => window.open(social.url, '_blank')}
                      >
                        <social.icon className="w-4 h-4" />
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Social Links */}
          <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-xl font-semibold mb-8 text-foreground">Find me on</h3>
            <div className="flex justify-center gap-6 flex-wrap">
              {socialLinks.map((social, index) => (
                <div
                  key={social.name}
                  className="group animate-bounce-in"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <button
                    onClick={() => window.open(social.url, '_blank')}
                    className={`
                      relative p-4 rounded-2xl bg-gradient-to-br ${social.color} 
                      hover:scale-110 hover:-translate-y-2 transition-all duration-300 
                      shadow-lg ${social.hoverColor} hover:shadow-2xl
                      group-hover:animate-none
                    `}
                    aria-label={`Visit ${social.name} profile`}
                  >
                    <social.icon className="w-6 h-6 text-white" />
                    
                    {/* Glow effect */}
                    <div className={`
                      absolute inset-0 rounded-2xl bg-gradient-to-br ${social.color} 
                      opacity-0 group-hover:opacity-30 transition-opacity duration-300 
                      blur-xl scale-110
                    `} />
                    
                    {/* Tooltip */}
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-background border border-border rounded-lg px-3 py-1 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                      {social.name}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-border" />
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-border/50 pt-8 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-muted-foreground text-sm">
                © {new Date().getFullYear()} Vedant. All rights reserved
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>by Vedant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
