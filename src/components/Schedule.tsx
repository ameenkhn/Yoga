const scheduleItems = [
  {
    day: "Monday",
    sessions: [
      { time: "6:00 AM - 7:00 AM", class: "Morning Flow", level: "All Levels" },
      { time: "6:00 PM - 7:30 PM", class: "Evening Vinyasa", level: "Intermediate" }
    ]
  },
  {
    day: "Wednesday",
    sessions: [
      { time: "6:00 AM - 7:00 AM", class: "Sunrise Meditation", level: "All Levels" },
      { time: "7:00 PM - 8:30 PM", class: "Restorative Yoga", level: "Beginner" }
    ]
  },
  {
    day: "Friday",
    sessions: [
      { time: "6:30 AM - 7:30 AM", class: "Power Yoga", level: "Advanced" },
      { time: "6:00 PM - 7:00 PM", class: "Gentle Flow", level: "All Levels" }
    ]
  },
  {
    day: "Saturday",
    sessions: [
      { time: "9:00 AM - 11:00 AM", class: "Awareness Workshop", level: "All Levels", featured: true }
    ]
  }
];

const Schedule = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Weekly Schedule
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto mb-8 rounded-full" />
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect time for your practice
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {scheduleItems.map((item, index) => (
            <div 
              key={index}
              className="glass-card p-8 rounded-3xl fade-in-up hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-3xl font-bold mb-6 text-primary">{item.day}</h3>
              <div className="space-y-4">
                {item.sessions.map((session, idx) => (
                  <div 
                    key={idx}
                    className={`p-5 rounded-2xl border-2 ${
                      session.featured 
                        ? 'border-primary bg-primary/5 glow-effect' 
                        : 'border-border bg-card/50'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <p className="font-semibold text-lg text-foreground">{session.class}</p>
                      {session.featured && (
                        <span className="px-3 py-1 bg-primary text-white text-xs rounded-full font-semibold">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground mb-1">{session.time}</p>
                    <p className="text-sm text-primary font-medium">{session.level}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;