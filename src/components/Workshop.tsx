import { Button } from "@/components/ui/button";
import workshopImage from "@/assets/workshop-class.jpg";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

const Workshop = () => {
  return (
    <section className="py-24 px-6 relative">
      {/* Background decoration */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, hsl(var(--blush) / 0.1), transparent, hsl(var(--sage-light) / 0.1))' }} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Saturday Awareness Workshops
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto mb-8 rounded-full" />
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Join us every Saturday to explore the transformative benefits of yoga. Each session is 
            focused on cultivating mindfulness, improving posture, and enhancing inner harmony.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
            <img 
              src={workshopImage} 
              alt="Saturday yoga workshop session" 
              className="rounded-3xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
          
          <div className="space-y-6 fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-3xl font-semibold mb-6 text-foreground">What You'll Experience</h3>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Together, we'll learn breathing techniques, meditation practices, and gentle asanas 
              designed for overall health and well-being. Our workshops are carefully structured to 
              provide maximum benefit while honoring your individual journey.
            </p>
            
            <div className="grid gap-4">
              <div className="glass-card p-6 rounded-2xl flex items-start gap-4 hover:bg-primary/5 transition-all duration-300">
                <Calendar className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg mb-1">Every Saturday</h4>
                  <p className="text-muted-foreground">Weekly workshops for consistent growth</p>
                </div>
              </div>
              
              <div className="glass-card p-6 rounded-2xl flex items-start gap-4 hover:bg-primary/5 transition-all duration-300">
                <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg mb-1">9:00 AM - 11:00 AM</h4>
                  <p className="text-muted-foreground">Perfect morning energy alignment</p>
                </div>
              </div>
              
              <div className="glass-card p-6 rounded-2xl flex items-start gap-4 hover:bg-primary/5 transition-all duration-300">
                <Users className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg mb-1">All Levels Welcome</h4>
                  <p className="text-muted-foreground">Beginners to advanced practitioners</p>
                </div>
              </div>
              
              <div className="glass-card p-6 rounded-2xl flex items-start gap-4 hover:bg-primary/5 transition-all duration-300">
                <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg mb-1">Serene Studio Location</h4>
                  <p className="text-muted-foreground">Peaceful environment for deep practice</p>
                </div>
              </div>
            </div>
            
            <Button 
              size="lg"
              className="w-full mt-8 text-lg py-7 rounded-full bg-primary hover:bg-sage-dark transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-105 glow-effect"
            >
              Reserve Your Spot for This Saturday
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workshop;