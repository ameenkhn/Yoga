import { Heart, Brain, Sparkles, Users, Smile, Leaf } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Mind-Body Harmony",
    description: "Experience the synergy between movement and breath, creating perfect balance and flow."
  },
  {
    icon: Brain,
    title: "Stress Relief",
    description: "Release mental tension and embrace serenity through guided meditation and mindful practice."
  },
  {
    icon: Sparkles,
    title: "Flexibility & Strength",
    description: "Build resilience in both your body and mind through progressive asana sequences."
  },
  {
    icon: Users,
    title: "Community Connection",
    description: "Join a tribe of mindful individuals uplifting each other on their wellness journey."
  },
  {
    icon: Smile,
    title: "Enhanced Well-being",
    description: "Boost your overall health, energy levels, and emotional balance through regular practice."
  },
  {
    icon: Leaf,
    title: "Natural Healing",
    description: "Tap into your body's innate healing abilities through ancient yogic wisdom."
  }
];

const Benefits = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            What You'll Gain
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto mb-8 rounded-full" />
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Discover the transformative benefits that await you on your yoga journey
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="glass-card p-8 rounded-3xl hover:scale-105 transition-all duration-500 group fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-sage-light flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 glow-effect">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;