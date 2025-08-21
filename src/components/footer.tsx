import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gaming-dark-lighter border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">PP</span>
              </div>
              <span className="text-lg font-bold">
                <span className="gradient-text">PlayPath</span>
                <span className="text-foreground"> Studios</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Creating extraordinary gaming experiences that captivate players worldwide.
            </p>
            <div className="flex space-x-3">
              <div className="p-2 bg-gaming-dark border border-border rounded-lg hover:border-blue-500 hover:text-blue-400 transition-colors cursor-pointer">
                <Github className="w-4 h-4" />
              </div>
              <div className="p-2 bg-gaming-dark border border-border rounded-lg hover:border-blue-500 hover:text-blue-400 transition-colors cursor-pointer">
                <Twitter className="w-4 h-4" />
              </div>
              <div className="p-2 bg-gaming-dark border border-border rounded-lg hover:border-blue-500 hover:text-blue-400 transition-colors cursor-pointer">
                <Linkedin className="w-4 h-4" />
              </div>
              <div className="p-2 bg-gaming-dark border border-border rounded-lg hover:border-blue-500 hover:text-blue-400 transition-colors cursor-pointer">
                <Mail className="w-4 h-4" />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Games</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Mystic Realms</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Stellar Command</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Pixel Quest</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">All Games</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Game Development</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Art & Design</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Consultation</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Team</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 PlayPath Studios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};