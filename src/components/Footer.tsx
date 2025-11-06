import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-sage-light/20 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4 gradient-text">Tranquil Flow Yoga</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
              Awaken your body, calm your mind, and connect your soul through the ancient 
              practice of yoga. Join us on a journey to holistic wellness.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-primary/10 transition-all duration-300 hover:scale-110 group"
              >
                <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-primary/10 transition-all duration-300 hover:scale-110 group"
              >
                <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-primary/10 transition-all duration-300 hover:scale-110 group"
              >
                <Youtube className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Workshops</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Schedule</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-foreground">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <a href="mailto:contact@tranquilflowyoga.com" className="text-muted-foreground hover:text-primary transition-colors">
                  contact@tranquilflowyoga.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-muted-foreground hover:text-primary transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  123 Wellness Street<br />
                  Serenity Plaza, Mumbai
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            © 2025 Tranquil Flow Yoga. All Rights Reserved. Designed by Ameen Khan.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;