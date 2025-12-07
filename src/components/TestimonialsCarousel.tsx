import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  treatment: string;
  rating: number;
  text: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Anita M.",
    treatment: "Botox Treatment",
    rating: 5,
    text: "Rezultate të mahnitshme! Mjekët ishin shumë profesionalë dhe procedura ishte pa dhimbje. Do ta rekomandoja pa dyshim.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop"
  },
  {
    id: "2",
    name: "Elira K.",
    treatment: "Dermal Fillers",
    rating: 5,
    text: "Buzët duken shumë natyrale dhe të bukura. Stafi ishte i kujdesshëm dhe më bëri të ndihesha komode gjatë gjithë procedurës.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop"
  },
  {
    id: "3",
    name: "Mirela H.",
    treatment: "Skin Treatment",
    rating: 5,
    text: "Lëkura ime duket 10 vjet më e re! Hydrafacial ishte një përvojë e shkëlqyer dhe rezultatet janë të dukshme menjëherë.",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&h=200&fit=crop"
  },
  {
    id: "4",
    name: "Sara L.",
    treatment: "Eye Rejuvenation",
    rating: 5,
    text: "Zona e syve duket shumë më e freskët. Faleminderit për kujdesin e jashtëzakonshëm dhe rezultatet e mrekullueshme!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop"
  }
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const goToNext = useCallback(() => {
    setDirection('right');
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const goToPrev = useCallback(() => {
    setDirection('left');
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 'right' : 'left');
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, goToNext]);

  const current = testimonials[currentIndex];

  return (
    <section className="section-padding bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-medium tracking-widest uppercase text-sm mb-4">
            Dëshmitë
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Lexoni përvojat e klientëve tanë të kënaqur nga trajtimet tona estetike.
          </p>
        </div>

        {/* Carousel */}
        <div 
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Card */}
          <div className="relative overflow-hidden">
            <div 
              className={`bg-card rounded-3xl p-8 md:p-12 shadow-soft border border-border/50
                         ${direction === 'right' ? 'animate-slide-left' : 'animate-slide-right'}`}
              key={current.id}
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Quote Icon */}
                <div className="absolute top-8 right-8 opacity-10">
                  <Quote className="w-24 h-24 text-accent" />
                </div>

                {/* Image */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <img 
                      src={current.image}
                      alt={current.name}
                      className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-lg"
                      loading="lazy"
                    />
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-accent 
                                  flex items-center justify-center shadow-lg">
                      <Star className="w-5 h-5 text-accent-foreground fill-current" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Stars */}
                  <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        className={`w-5 h-5 ${i < current.rating ? 'text-accent fill-current' : 'text-border'}`}
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                    "{current.text}"
                  </blockquote>

                  {/* Author */}
                  <div>
                    <p className="font-display text-xl text-foreground">{current.name}</p>
                    <p className="text-muted-foreground">{current.treatment}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={goToPrev}
              className="p-3 rounded-full bg-card border border-border hover:border-accent 
                        hover:bg-accent hover:text-accent-foreground transition-all duration-300
                        focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300
                             ${index === currentIndex 
                               ? 'bg-accent w-8' 
                               : 'bg-border hover:bg-accent/50'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={index === currentIndex ? 'true' : 'false'}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="p-3 rounded-full bg-card border border-border hover:border-accent 
                        hover:bg-accent hover:text-accent-foreground transition-all duration-300
                        focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
