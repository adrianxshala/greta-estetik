import { useState, useEffect } from "react";
import { Calendar, X } from "lucide-react";

interface StickyCTAProps {
  onBookClick: () => void;
}

const StickyCTA = ({ onBookClick }: StickyCTAProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section (approx 80vh)
      const showAfter = window.innerHeight * 0.8;
      setIsVisible(window.scrollY > showAfter && !isDismissed);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 
                animate-fade-up"
      role="complementary"
      aria-label="Quick booking"
    >
      <div className="bg-primary/95 backdrop-blur-lg rounded-full shadow-2xl shadow-primary/30
                     flex items-center gap-3 pl-6 pr-2 py-2">
        <div className="hidden sm:block">
          <p className="text-primary-foreground text-sm font-medium">Gati për transformimin tuaj?</p>
          <p className="text-primary-foreground/60 text-xs">Konsultimi falas</p>
        </div>
        
        <button
          onClick={onBookClick}
          className="flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-full
                    font-semibold text-sm transition-all duration-300 
                    hover:shadow-lg hover:shadow-accent/30 hover:scale-105"
        >
          <Calendar className="w-4 h-4" />
          Book Now
        </button>

        <button
          onClick={() => setIsDismissed(true)}
          className="p-2 rounded-full hover:bg-primary-foreground/10 transition-colors text-primary-foreground/60"
          aria-label="Dismiss"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default StickyCTA;
