"use client";

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
    fullDesc:
      "Trajtimi me Botox redukton linjat e shprehjes në ballë, mes vetullave dhe rreth syve. Rezultatet shfaqen brenda 3-7 ditësh dhe zgjasin 3-4 muaj.",
    duration: "30 min",
    price: "€150 - €350",
  },
  {
    id: "fillers",
    icon: <Heart className="w-8 h-8  " />,
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
      className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-pink-100
                 shadow-lg
                 transition-all duration-500 cursor-pointer
                 hover:-translate-y-3 hover:shadow-xl hover:border-pink-300 hover:bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow Layer */}
      <div
        className={`absolute inset-0 rounded-3xl bg-gradient-to-br from-pink-500/10 to-purple-500/10 
                    opacity-0 group-hover:opacity-100 transition duration-500`}
      />

      {/* Icon */}
      <div
        className={`relative inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl
                    shadow-lg transition-all duration-300
                    ${
                      isHovered
                        ? "bg-gradient-to-br from-pink-500 to-purple-600 text-white scale-110 shadow-pink-500/40"
                        : "bg-pink-100 text-pink-600"
                    }`}
      >
        {service.icon}
      </div>

      <h3 className="font-display text-2xl text-gray-900 mb-3 tracking-wide">
        {service.title}
      </h3>

      <p className="text-gray-600 mb-5 leading-relaxed text-sm">
        {service.shortDesc}
      </p>

      <div className="flex items-center gap-4 text-sm text-gray-600 mb-8">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-pink-500" />
          {service.duration}
        </span>
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-purple-500" />
          {service.price}
        </span>
      </div>

      <button
        onClick={() => onLearnMore(service)}
        className={`w-full py-3 rounded-xl font-medium transition-all duration-300
                    ${
                      isHovered
                        ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg"
                        : "bg-pink-50 text-pink-600 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:text-white"
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
        className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-3xl p-8 md:p-12 max-w-lg w-full shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-pink-50 transition"
        >
          <X className="w-6 h-6 text-gray-600" />
        </button>

        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 text-white mb-6 shadow-lg">
          {service.icon}
        </div>

        <h2 className="font-display text-3xl text-gray-900 mb-4">
          {service.title}
        </h2>

        <p className="text-gray-600 leading-relaxed mb-8">{service.fullDesc}</p>

        <div className="flex items-center justify-between p-4 bg-pink-50 rounded-xl mb-6">
          <div>
            <span className="text-sm text-gray-600">Duration</span>
            <p className="font-semibold text-gray-900">{service.duration}</p>
          </div>
          <div className="text-right">
            <span className="text-sm text-gray-600">Starting From</span>
            <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
              {service.price}
            </p>
          </div>
        </div>

        <button className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium hover:from-pink-600 hover:to-purple-700 shadow-lg transition-all duration-300">
          Book This Treatment
        </button>
      </div>
    </div>
  );
};

const ServicesGrid = () => {
  const [selected, setSelected] = useState<Service | null>(null);

  return (
    <section className="relative py-20 bg-gradient-to-br from-pink-50 via-white to-purple-50 overflow-hidden">
      {/* Background Blobs - matching Hero section */}
      <div className="absolute top-20 -right-20 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="mb-14 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 tracking-wide drop-shadow-sm">
            Our Treatments
          </h2>
          <p className="text-gray-600 mt-3 max-w-xl mx-auto text-lg">
            Zgjidh trajtimin që të përshtatet – kombinim i estetikës moderne me
            rezultate natyrale.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onLearnMore={setSelected}
            />
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selected && (
        <ServiceModal service={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
};

export default ServicesGrid;
