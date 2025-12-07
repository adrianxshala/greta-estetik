import { useState } from "react";
import { Sparkles, Syringe, Heart, Zap, Eye, Droplets, X } from "lucide-react";

interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  shortDesc: string;
  fullDesc: string;
  duration: string;
  price: string;
}

const services: Service[] = [
  {
    id: "botox",
    icon: <Syringe className="w-8 h-8" />,
    title: "Botox",
    shortDesc: "Reduktim i rrudhave dhe linjave të shprehjes",
    fullDesc: "Trajtimi me Botox redukton linjat e shprehjes në ballë, mes vetullave dhe rreth syve. Rezultatet shfaqen brenda 3-7 ditësh dhe zgjasin 3-4 muaj.",
    duration: "30 min",
    price: "€150 - €350"
  },
  {
    id: "fillers",
    icon: <Heart className="w-8 h-8" />,
    title: "Dermal Fillers",
    shortDesc: "Volum dhe konturim i fytyrës",
    fullDesc: "Fillers me acid hialuronik për buzët, faqet, dhe zonën e nofullës. Rezultate të menjëhershme që zgjasin 12-18 muaj.",
    duration: "45 min",
    price: "€250 - €500"
  },
  {
    id: "skincare",
    icon: <Sparkles className="w-8 h-8" />,
    title: "Skin Treatments",
    shortDesc: "Rinovim i thellë i lëkurës",
    fullDesc: "Peeling kimik, microneedling, dhe trajtim me PRP për rinovimin e teksturës së lëkurës dhe reduktimin e njollave.",
    duration: "60 min",
    price: "€100 - €300"
  },
  {
    id: "laser",
    icon: <Zap className="w-8 h-8" />,
    title: "Laser Therapy",
    shortDesc: "Trajtim me teknologji laser",
    fullDesc: "Largim i njollave, rinovim i lëkurës dhe trajtim i aknës me teknologjinë më të fundit laser.",
    duration: "45 min",
    price: "€200 - €450"
  },
  {
    id: "eyes",
    icon: <Eye className="w-8 h-8" />,
    title: "Eye Rejuvenation",
    shortDesc: "Zona e syve më e freskët",
    fullDesc: "Trajtim i veçantë për zonën rreth syve: reduktim i thasëve, rrathëve të errët dhe rrudhave të buta.",
    duration: "30 min",
    price: "€180 - €280"
  },
  {
    id: "hydra",
    icon: <Droplets className="w-8 h-8" />,
    title: "Hydrafacial",
    shortDesc: "Hidratim i thellë dhe shkëlqim",
    fullDesc: "Pastrim i thellë, eksfoliim dhe hidratim intensiv për lëkurë të shkëlqyer dhe të shëndetshme.",
    duration: "60 min",
    price: "€120 - €180"
  }
];

interface ServiceCardProps {
  service: Service;
  onLearnMore: (service: Service) => void;
}

const ServiceCard = ({ service, onLearnMore }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative bg-card rounded-2xl p-8 shadow-soft border border-border/50
                 transition-all duration-500 ease-out cursor-pointer
                 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-2 hover:border-accent/30"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="article"
      aria-label={service.title}
    >
      {/* Icon */}
      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6
                       transition-all duration-300
                       ${isHovered ? 'bg-accent text-accent-foreground' : 'bg-secondary text-primary'}`}>
        {service.icon}
      </div>

      {/* Title */}
      <h3 className="font-display text-2xl text-foreground mb-3">{service.title}</h3>

      {/* Short Description */}
      <p className="text-muted-foreground mb-4 leading-relaxed">{service.shortDesc}</p>

      {/* Meta Info */}
      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          {service.duration}
        </span>
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-rose" />
          {service.price}
        </span>
      </div>

      {/* Learn More Button */}
      <button
        onClick={() => onLearnMore(service)}
        className={`w-full py-3 rounded-xl font-medium transition-all duration-300
                   ${isHovered 
                     ? 'bg-accent text-accent-foreground' 
                     : 'bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground'}`}
        aria-label={`Learn more about ${service.title}`}
      >
        Learn More
      </button>

      {/* Decorative Corner */}
      <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent/20 to-transparent 
                       rounded-tr-2xl transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
    </div>
  );
};

interface ServiceModalProps {
  service: Service;
  onClose: () => void;
}

const ServiceModal = ({ service, onClose }: ServiceModalProps) => {
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-primary/80 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-card rounded-3xl p-8 md:p-12 max-w-lg w-full shadow-2xl animate-scale-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-secondary transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6 text-muted-foreground" />
        </button>

        {/* Icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-accent text-accent-foreground mb-6">
          {service.icon}
        </div>

        {/* Title */}
        <h2 id="service-modal-title" className="font-display text-3xl text-foreground mb-4">{service.title}</h2>

        {/* Full Description */}
        <p className="text-muted-foreground leading-relaxed mb-8">{service.fullDesc}</p>

        {/* Meta */}
        <div className="flex items-center justify-between p-4 bg-secondary rounded-xl mb-6">
          <div>
            <span className="text-sm text-muted-foreground">Duration</span>
            <p className="font-semibold text-foreground">{service.duration}</p>
          </div>
          <div className="text-right">
            <span className="text-sm text-muted-foreground">Starting From</span>
            <p className="font-semibold text-accent">{service.price}</p>
          </div>
        </div>

        {/* CTA */}
        <button 
          onClick={onClose}
          className="w-full btn-accent"
        >
          Book This Treatment
        </button>
      </div>
    </div>
  );
};

const ServicesGrid = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="services" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-medium tracking-widest uppercase text-sm mb-4">
            Trajtimet Tona
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Premium Aesthetic Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Procedura të sigurta dhe efektive nga mjekët tanë të specializuar me përvojë ndërkombëtare.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ServiceCard 
                service={service} 
                onLearnMore={setSelectedService}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <ServiceModal 
          service={selectedService} 
          onClose={() => setSelectedService(null)}
        />
      )}
    </section>
  );
};

export default ServicesGrid;
