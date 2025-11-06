import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-yoga.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />
      </div>
      
      {/* Floating orbs for futuristic effect */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-sage/20 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blush/20 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto fade-in-up">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-foreground leading-tight">
          Tranquil Flow Yoga
        </h1>
        <p className="text-2xl md:text-3xl mb-4 text-foreground/90 font-light">
          Awaken Your Body. Calm Your Mind.
        </p>
        <p className="text-xl md:text-2xl mb-12 gradient-text font-semibold">
          Connect Your Soul.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="text-lg px-10 py-7 rounded-full bg-primary hover:bg-sage-dark transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-105 glow-effect"
          >
            Join Saturday Workshop
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="text-lg px-10 py-7 rounded-full glass-card border-2 hover:bg-primary/10 transition-all duration-500"
          >
            Learn More
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;