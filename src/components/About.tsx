import aboutImage from "@/assets/about-yoga.jpg";

const About = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Why Choose Tranquil Flow?
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto mb-8 rounded-full" />
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            At Tranquil Flow Yoga, we offer more than just poses — we guide you toward holistic 
            well-being through mindful movement and self-awareness. Whether you are a beginner or 
            experienced yogi, our sessions are designed to bring peace, energy, and balance to your life.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
          <div className="space-y-6 fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="glass-card p-8 rounded-3xl hover:scale-105 transition-all duration-500">
              <h3 className="text-2xl font-semibold mb-4 text-sage-dark">🧘‍♀️ Holistic Approach</h3>
              <p className="text-muted-foreground leading-relaxed">
                We believe in nurturing the complete self - mind, body, and spirit. Our practice 
                integrates traditional yoga wisdom with modern wellness techniques.
              </p>
            </div>
            
            <div className="glass-card p-8 rounded-3xl hover:scale-105 transition-all duration-500">
              <h3 className="text-2xl font-semibold mb-4 text-sage-dark">🌿 Expert Guidance</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our certified instructors bring years of experience and genuine passion, ensuring 
                every session is transformative and safe for all levels.
              </p>
            </div>
            
            <div className="glass-card p-8 rounded-3xl hover:scale-105 transition-all duration-500">
              <h3 className="text-2xl font-semibold mb-4 text-sage-dark">✨ Mindful Community</h3>
              <p className="text-muted-foreground leading-relaxed">
                Join a welcoming tribe of like-minded individuals committed to growth, wellness, 
                and supporting each other's journey.
              </p>
            </div>
          </div>
          
          <div className="fade-in-up" style={{ animationDelay: '0.4s' }}>
            <img 
              src={aboutImage} 
              alt="Peaceful yoga practice outdoors" 
              className="rounded-3xl shadow-2xl w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;