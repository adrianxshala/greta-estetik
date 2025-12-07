import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface HeroProps {
  onBookClick: () => void;
  onBeforeAfterClick: () => void;
}

const Hero = ({ onBookClick, onBeforeAfterClick }: HeroProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop')`,
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/80" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose/20 rounded-full blur-3xl animate-float delay-500" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-6 py-2 mb-8">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-primary-foreground/90 text-sm font-medium tracking-wide">
              Klinikë Estetike Premium
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight mb-6">
            Rinovimi i Lëkurës me{" "}
            <span className="text-accent">Botox</span>
            <br />
            <span className="text-3xl md:text-5xl lg:text-6xl">Siguri dhe Estetikë</span>
          </h1>

          {/* Subtext */}
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Rezultate natyrale, procedura të sigurta. Konsultimi falas nga ekspertët tanë të certifikuar.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={onBookClick}
              className="group relative bg-accent text-accent-foreground px-10 py-5 rounded-full font-semibold tracking-wide
                         transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-accent/40
                         focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
              aria-label="Book a consultation"
            >
              <span className="relative z-10">Book Consultation</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent to-gold-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button 
              onClick={onBeforeAfterClick}
              className="group bg-transparent border-2 border-primary-foreground/30 text-primary-foreground
                         px-10 py-5 rounded-full font-medium tracking-wide
                         transition-all duration-300 ease-out
                         hover:bg-primary-foreground/10 hover:border-primary-foreground/50
                         focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
              aria-label="View before and after results"
            >
              See Before/After
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <button 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex flex-col items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            aria-label="Scroll to services"
          >
            <span className="text-sm tracking-widest uppercase">Explore</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
