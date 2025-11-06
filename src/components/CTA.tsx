import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const CTA = () => {
  const [email, setEmail] = useState("");
  
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Gradient background */}
      <div 
        className="absolute inset-0" 
        style={{ background: 'linear-gradient(135deg, hsl(var(--primary) / 0.1), hsl(var(--accent) / 0.15), hsl(var(--beige) / 0.1))' }}
      />
      
      {/* Floating orbs */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-sage/20 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blush/20 rounded-full blur-3xl float-animation" style={{ animationDelay: '1s' }} />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="glass-card p-12 md:p-16 rounded-[3rem] text-center fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Begin Your Journey Today
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto mb-8 rounded-full" />
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 leading-relaxed">
            Ready to embrace peace and vitality?
          </p>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join our next Saturday awareness workshop and start your transformation now. 
            Sign up below to receive updates and exclusive wellness tips.
          </p>
          
          <div className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input 
                type="email" 
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-14 rounded-full glass-card border-2 text-base px-6"
              />
              <Button 
                size="lg"
                className="h-14 px-8 rounded-full bg-primary hover:bg-sage-dark transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-105 glow-effect whitespace-nowrap"
              >
                Get Started
              </Button>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button 
              size="lg"
              className="text-lg px-10 py-7 rounded-full bg-primary hover:bg-sage-dark transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Reserve Your Place
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="text-lg px-10 py-7 rounded-full glass-card border-2 hover:bg-primary/10 transition-all duration-500"
            >
              Download Schedule
            </Button>
          </div>
          
          <div className="mt-12 grid sm:grid-cols-3 gap-8 pt-8 border-t border-border">
            <div>
              <p className="text-4xl font-bold text-primary mb-2">500+</p>
              <p className="text-muted-foreground">Happy Members</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">200+</p>
              <p className="text-muted-foreground">Workshops Conducted</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">5★</p>
              <p className="text-muted-foreground">Average Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;