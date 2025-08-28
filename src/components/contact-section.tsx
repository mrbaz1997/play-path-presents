import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your game idea to life? We'd love to hear from you and discuss potential collaborations.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gaming-orange/20 rounded-lg">
                    <Mail className="w-5 h-5 text-gaming-orange" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">hello@playpathstudios.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gaming-blue/20 rounded-lg">
                    <Phone className="w-5 h-5 text-gaming-blue" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gaming-purple/20 rounded-lg">
                    <MapPin className="w-5 h-5 text-gaming-purple" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">What we can help with:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gaming-orange rounded-full mr-3" />
                  Custom game development
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gaming-orange rounded-full mr-3" />
                  Game design consultation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gaming-orange rounded-full mr-3" />
                  Art & animation services
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gaming-orange rounded-full mr-3" />
                  Technical support & optimization
                </li>
              </ul>
            </div>
          </div>
          
          <Card className="game-card">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-6">Start a Project</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full p-3 bg-gaming-dark-lighter border border-border rounded-lg focus:border-gaming-orange focus:outline-none transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full p-3 bg-gaming-dark-lighter border border-border rounded-lg focus:border-gaming-orange focus:outline-none transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full p-3 bg-gaming-dark-lighter border border-border rounded-lg focus:border-gaming-orange focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Project Type</label>
                  <select className="w-full p-3 bg-gaming-dark-lighter border border-border rounded-lg focus:border-gaming-orange focus:outline-none transition-colors">
                    <option>Mobile Game</option>
                    <option>PC Game</option>
                    <option>Web Game</option>
                    <option>Console Game</option>
                    <option>VR Experience</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full p-3 bg-gaming-dark-lighter border border-border rounded-lg focus:border-gaming-orange focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project idea..."
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-gaming-orange to-red-500 hover:from-gaming-orange-light hover:to-red-400 text-white border-0 py-3 font-semibold"
                >
                  Send Message
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};