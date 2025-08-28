import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Twitter } from "lucide-react";

const teamMembers = [
  {
    name: "Alex Chen",
    role: "Creative Director",
    expertise: "Game Design & Narrative",
    bio: "10+ years crafting compelling game experiences and leading creative vision."
  },
  {
    name: "Sarah Johnson",
    role: "Lead Developer",
    expertise: "Unity & Unreal Engine",
    bio: "Technical expert specializing in gameplay programming and engine optimization."
  },
  {
    name: "Marcus Rodriguez",
    role: "Art Director",
    expertise: "3D Modeling & Animation",
    bio: "Award-winning artist bringing characters and worlds to life with stunning visuals."
  },
  {
    name: "Emily Zhang",
    role: "UI/UX Designer",
    expertise: "Interface Design",
    bio: "Creating intuitive and beautiful user experiences that enhance gameplay."
  }
];

export const TeamSection = () => {
  return (
    <section className="py-24 px-6 bg-gaming-dark-lighter/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Meet Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate developers, artists, and designers working together to create extraordinary gaming experiences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="game-card text-center group">
              <CardContent className="p-6">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                  {member.name}
                </h3>
                
                <p className="text-blue-400 font-medium mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-4">{member.expertise}</p>
                <p className="text-sm text-muted-foreground mb-6">{member.bio}</p>
                
                <div className="flex justify-center space-x-3">
                  <div className="p-2 bg-gaming-dark-lighter border border-border rounded-lg hover:border-blue-500 hover:text-blue-400 transition-colors cursor-pointer">
                    <Github className="w-4 h-4" />
                  </div>
                  <div className="p-2 bg-gaming-dark-lighter border border-border rounded-lg hover:border-blue-500 hover:text-blue-400 transition-colors cursor-pointer">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div className="p-2 bg-gaming-dark-lighter border border-border rounded-lg hover:border-blue-500 hover:text-blue-400 transition-colors cursor-pointer">
                    <Twitter className="w-4 h-4" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};