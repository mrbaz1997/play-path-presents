import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
              <span className="gradient-text">PlayPath</span>
              <br />
              <span className="text-foreground">Studios</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg">
              Crafting immersive gaming experiences that transport players to extraordinary worlds. 
              We specialize in innovative gameplay mechanics and stunning visual storytelling.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white border-0 px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View Our Games
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-6 text-lg font-semibold transition-all duration-300"
            >
              About Our Team
            </Button>
          </div>
          
          <div className="flex items-center gap-8 pt-4">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">15+</div>
              <div className="text-sm text-muted-foreground">Games Released</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">2M+</div>
              <div className="text-sm text-muted-foreground">Players Worldwide</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">8</div>
              <div className="text-sm text-muted-foreground">Team Members</div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={heroImage} 
              alt="Game Development Studio" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gaming-dark/50 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full opacity-80 blur-xl" />
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full opacity-60 blur-xl" />
        </div>
      </div>
    </section>
  );
};