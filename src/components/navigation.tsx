import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Games", href: "#games" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gaming-dark/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-gaming-orange to-red-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">PP</span>
            </div>
            <span className="text-xl font-bold">
              <span className="gradient-text">PlayPath</span>
              <span className="text-foreground"> Studios</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-gaming-orange transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline"
              className="border-gaming-orange text-gaming-orange hover:bg-gaming-orange hover:text-white"
            >
              Portfolio
            </Button>
            <Button className="bg-gradient-to-r from-gaming-orange to-red-500 hover:from-gaming-orange-light hover:to-red-400 text-white border-0">
              Hire Us
            </Button>
          </div>
          
          <button 
            className="md:hidden p-2 text-foreground hover:text-gaming-orange transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a 
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-gaming-orange transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 space-y-2">
                <Button 
                  variant="outline"
                  className="w-full border-gaming-orange text-gaming-orange hover:bg-gaming-orange hover:text-white"
                >
                  Portfolio
                </Button>
                <Button className="w-full bg-gradient-to-r from-gaming-orange to-red-500 hover:from-gaming-orange-light hover:to-red-400 text-white border-0">
                  Hire Us
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};