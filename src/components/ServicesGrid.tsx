"use client";

import { useState } from "react";
import {
  Sparkles,
  Syringe,
  Heart,
  Zap,
  Eye,
  Droplets,
  X,
} from "lucide-react";

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
    fullDesc:
      "Trajtimi me Botox redukton linjat e shprehjes në ballë, mes vetullave dhe rreth syve. Rezultatet shfaqen brenda 3-7 ditësh dhe zgjasin 3-4 muaj.",
    duration: "30 min",
    price: "€150 - €350",
  },
  {
    id: "fillers",
    icon: <Heart className="w-8 h-8" />,
    title: "Dermal Fillers",
    shortDesc: "Volum dhe konturim i fytyrës",
    fullDesc:
      "Fillers me acid hialuronik për buzët, faqet, dhe zonën e nofullës. Rezultate të menjëhershme që zgjasin 12-18 muaj.",
    duration: "45 min",
    price: "€250 - €500",
  },
  {
    id: "skincare",
    icon: <Sparkles className="w-8 h-8" />,
    title: "Skin Treatments",
    shortDesc: "Rinovim i thellë i lëkurës",
    fullDesc:
      "Peeling kimik, microneedling dhe trajtim me PRP për rinovimin e teksturës së lëkurës dhe reduktimin e njollave.",
    duration: "60 min",
    price: "€100 - €300",
  },
  {
    id: "laser",
    icon: <Zap className="w-8 h-8" />,
    title: "Laser Therapy",
    shortDesc: "Trajtim me teknologji laser",
    fullDesc:
      "Largim i njollave, rinovim i lëkurës dhe trajtim i aknës me teknologji laser.",
    duration: "45 min",
    price: "€200 - €450",
  },
  {
    id: "eyes",
    icon: <Eye className="w-8 h-8" />,
    title: "Eye Rejuvenation",
    shortDesc: "Zona e syve më e freskët",
    fullDesc:
      "Trajtim për zonën rreth syve: reduktim i thasëve, rrathëve të errët dhe rrudhave të imta.",
    duration: "30 min",
    price: "€180 - €280",
  },
  {
    id: "hydra",
    icon: <Droplets className="w-8 h-8" />,
    title: "Hydrafacial",
    shortDesc: "Hidratim i thellë dhe shkëlqim",
    fullDesc:
      "Pastrim i thellë, eksfolim dhe hidratim intensiv për lëkurë të shkëlqyer.",
    duration: "60 min",
    price: "€120 - €180",
  },
];

interface ServiceCardProps {
  service: Service;
  onLearnMore: (service: Service) => void;
}

const ServiceCard = ({ service, onLearnMore }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-gradient-to-br from-card to-card/60 
                 backdrop-blur-xl rounded-3xl p-8 border border-white/10 
                 shadow-[0_8px_30px_rgb(0,0,0,0.08)]
                 transition-all duration-500 cursor-pointer
                 hover:-translate-y-3 hover:shadow-accent/20 hover:border-accent/30"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow Layer */}
      <div
        className={`absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/10 to-transparent 
                    opacity-0 group-hover:opacity-100 transition duration-500`}
      />

      {/* Icon */}
      <div
        className={`relative inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl
                    shadow-lg transition-all duration-300
                    ${
                      isHovered
                        ? "bg-accent text-accent-foreground scale-110 shadow-accent/40"
                        : "bg-secondary text-primary"
                    }`}
      >
        {service.icon}
      </div>

      <h3 className="font-display text-2xl text-foreground mb-3 tracking-wide">
        {service.title}
      </h3>

      <p className="text-muted-foreground mb-5 leading-relaxed text-sm">
        {service.shortDesc}
      </p>

      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent" />
          {service.duration}
        </span>
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-pink-400" />
          {service.price}
        </span>
      </div>

      <button
        onClick={() => onLearnMore(service)}
        className={`w-full py-3 rounded-xl font-medium transition-all duration-300
                    ${
                      isHovered
                        ? "bg-accent text-accent-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground"
                    }`}
      >
        Learn More
      </button>
    </div>
  );
};

interface ServiceModalProps {
  service: Service;
  onClose: () => void;
}

const ServiceModal = ({ service, onClose }: ServiceModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-primary/80 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-card rounded-3xl p-8 md:p-12 max-w-lg w-full shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-secondary transition"
        >
          <X className="w-6 h-6 text-muted-foreground" />
        </button>

        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-accent text-accent-foreground mb-6">
          {service.icon}
        </div>

        <h2 className="font-display text-3xl text-foreground mb-4">
          {service.title}
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-8">
          {service.fullDesc}
        </p>

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

        <button className="w-full py-3 rounded-xl bg-accent text-accent-foreground font-medium">
          Book This Treatment
        </button>
      </div>
    </div>
  );
};

const ServicesGrid = () => {
  const [selected, setSelected] = useState<Service | null>(null);

  return (
    <div className="relative py-20">
      {/* Animated Gradient Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl opacity-40">
        
      </div>

      {/* Section Title */}
      <div className="relative mb-14 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground tracking-wide drop-shadow-sm">
          Our Treatments
        </h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          Zgjidh trajtimin që të përshtatet – kombinim i estetikës moderne me rezultate natyrale.
        </p>
      </div>

      {/* GRID */}
      <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            onLearnMore={setSelected}
          />
        ))}
      </div>

      {/* MODAL */}
      {selected && (
        <ServiceModal service={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
};

export default ServicesGrid;
