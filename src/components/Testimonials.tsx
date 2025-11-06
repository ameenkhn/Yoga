import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Aisha R.",
    role: "Regular Practitioner",
    content: "Tranquil Flow has completely transformed my weekends. I feel calm and recharged after every session. The instructors are incredibly knowledgeable and create such a welcoming atmosphere.",
    rating: 5
  },
  {
    name: "Rahul M.",
    role: "Workshop Member",
    content: "The Saturday workshops are the highlight of my week. A perfect balance of movement and mindfulness. I've noticed significant improvements in my flexibility and stress levels.",
    rating: 5
  },
  {
    name: "Priya S.",
    role: "Yoga Enthusiast",
    content: "I've tried many yoga studios, but Tranquil Flow stands out. The community is supportive, the space is beautiful, and every session leaves me feeling centered and energized.",
    rating: 5
  },
  {
    name: "David L.",
    role: "Beginner Yogi",
    content: "As someone new to yoga, I was nervous at first. But the instructors made me feel comfortable from day one. The progress I've made in just a few months is incredible!",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 px-6 relative">
      <div 
        className="absolute inset-0" 
        style={{ background: 'linear-gradient(135deg, hsl(var(--sage-light) / 0.2), hsl(var(--blush) / 0.2))' }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            What Our Members Say
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto mb-8 rounded-full" />
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Real stories from our vibrant community
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="glass-card p-8 rounded-3xl hover:scale-105 transition-all duration-500 fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-lg text-muted-foreground italic mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground text-lg">{testimonial.name}</p>
                <p className="text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;