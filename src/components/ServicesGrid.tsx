"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Syringe,
  Heart,
  Zap,
  Eye,
  Droplets,
  X,
  Droplet,
  Clock,
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import botoxImage from "../assets/botox.png";
import fillerImage from "../assets/filler.jpeg";
import skinImage from "../assets/skin.jpg";
import faceImage from "../assets/face.jpg";

interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  shortDesc: string;
  fullDesc: string;
  duration: string;
  price: string;
  image: string | typeof botoxImage;
  treatmentAreas?: string;
}

const services: Service[] = [
  {
    id: "botox",
    icon: <Syringe className="w-8 h-8" />,
    title: "Botox",
    shortDesc: "",
    treatmentAreas: "Zona Ballit • Zona mes vetullave • Zona anash syrit",
    fullDesc:
      "Trajtimi me Botox redukton linjat e shprehjes në ballë, mes vetullave dhe rreth syve. Rezultatet shfaqen brenda 3-7 ditësh dhe zgjasin 3-4 muaj.",
    duration: "30 min",
    price: "€150 - €350",
    image: botoxImage,
  },
  {
    id: "fillers",
    icon: <Heart className="w-8 h-8  " />,
    title: "Dermal Fillers",
    shortDesc: "",
    treatmentAreas:
      "Mollza, Jawline, Hunda, Linjat Nasolabiale, dhe buzet 0.5 ml, 0.7 ml dhe 1 ml",
    fullDesc:
      "Fillers me acid hialuronik për buzët, faqet, dhe zonën e nofullës. Rezultate të menjëhershme që zgjasin 12-18 muaj.",
    duration: "45 min",
    price: "€250 - €500",
    image: fillerImage,
  },
  {
    id: "sunekos",
    icon: <Droplet className="w-8 h-8" />,
    title: "Sunekos Skinbooster",
    shortDesc: "",
    treatmentAreas:
      "Komplet ftyra, zona e faqeve, zona e mjekrres, zona e dekoltes dhe zona e qafes",
    fullDesc:
      "Sunekos Skinbooster - hidratim i thellë dhe rinovim i lëkurës për komplet ftyra, zona e faqeve, zona e mjekrres, zona e dekoltes dhe zona e qafes.",
    duration: "60 min",
    price: "€200 - €400",
    image: skinImage,
  },
  {
    id: "coming-soon",
    icon: <Clock className="w-8 h-8" />,
    title: "Se shpejti dhe me sherbime të reja",
    shortDesc: "",
    treatmentAreas: "Për pastrim të thellë të fytyres!",
    fullDesc:
      "Shërbime të reja për pastrim të thellë të fytyres - vijnë së shpejti!",
    duration: "TBA",
    price: "TBA",
    image: faceImage,
  },
];

interface ServiceCardProps {
  service: Service;
  onLearnMore: (service: Service) => void;
}

const ServiceCard = ({ service, onLearnMore }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative bg-white/95 backdrop-blur-md rounded-3xl overflow-hidden border-2 border-pink-200
                 shadow-2xl shadow-pink-500/20 ring-2 ring-pink-200/50
                 transition-all duration-500 cursor-pointer
                 hover:border-pink-300 hover:shadow-2xl hover:shadow-pink-500/30"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow Layer */}
      <motion.div
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 rounded-3xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 blur-xl"
      />

      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
          animate={{
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut" as const,
          }}
          style={{ willChange: "transform" }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-pink-500/40 via-transparent to-transparent" />

        {/* Icon Badge */}
        <motion.div
          animate={{
            scale: isHovered ? 1.1 : 1,
            rotate: isHovered ? 5 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="absolute top-4 right-4 inline-flex items-center justify-center w-14 h-14 rounded-2xl
                      bg-gradient-to-br from-pink-500 to-purple-600 text-white shadow-xl z-10"
        >
          {service.icon}
        </motion.div>

        {/* Decorative Sparkle */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute top-4 left-4 w-8 h-8"
        >
          <Sparkles className="w-full h-full text-white/80" />
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="font-display text-2xl text-gray-900 mb-2 tracking-wide">
          {service.title}
        </h3>

        {/* Treatment Areas Badge */}
        {service.treatmentAreas && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-3"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-pink-100 to-purple-100 border border-pink-200/50">
              <Sparkles className="w-3.5 h-3.5 text-pink-600" />
              <span className="text-xs font-medium text-gray-700">
                {service.treatmentAreas}
              </span>
            </div>
          </motion.div>
        )}

        {service.shortDesc && (
          <p className="text-gray-600 mb-5 leading-relaxed text-sm min-h-[3rem]">
            {service.shortDesc}
          </p>
        )}

        <div className="flex items-center gap-4 text-sm text-gray-600 mb-6 pb-6 border-b border-pink-100">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
            {service.duration}
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            {service.price}
          </span>
        </div>

        <motion.button
          onClick={() => onLearnMore(service)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-3 rounded-xl font-medium transition-all duration-300
                      bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg
                      hover:from-pink-600 hover:to-purple-700 hover:shadow-xl"
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  );
};

interface ServiceModalProps {
  service: Service;
  onClose: () => void;
}

const ServiceModal = ({ service, onClose }: ServiceModalProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm"
        onClick={onClose}
      />

      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative bg-white rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl"
      >
        {/* Image Header */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition shadow-lg"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 text-white shadow-lg">
              {service.icon}
            </div>
            <div>
              <h2 className="font-display text-3xl text-gray-900">
                {service.title}
              </h2>
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed mb-8 text-lg">
            {service.fullDesc}
          </p>

          <div className="flex items-center justify-between p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl mb-6 border border-pink-200">
            <div>
              <span className="text-sm text-gray-600 block mb-1">Duration</span>
              <p className="font-semibold text-gray-900 text-lg">
                {service.duration}
              </p>
            </div>
            <div className="text-right">
              <span className="text-sm text-gray-600 block mb-1">
                Starting From
              </span>
              <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 text-lg">
                {service.price}
              </p>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium hover:from-pink-600 hover:to-purple-700 shadow-lg transition-all duration-300 text-lg"
          >
            Book This Treatment
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ServicesGrid = () => {
  const [selected, setSelected] = useState<Service | null>(null);
  const isMobile = useIsMobile();

  // All services are displayed (only 4 services now)
  const displayedServices = services;

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-pink-50 via-white to-purple-50 overflow-hidden">
      {/* Background Blobs - Optimized */}
      <motion.div
        className="absolute top-20 -right-20 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          x: [0, 30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut" as const,
        }}
        style={{ willChange: "transform" }}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -30, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut" as const,
          delay: 1,
        }}
        style={{ willChange: "transform" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 text-pink-600 font-medium text-sm mb-6 shadow-sm"
          >
            <Sparkles className="w-4 h-4" />
            Shërbimet Tona
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-wide"
          >
            Trajtimet{" "}
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600 bg-[length:200%_auto] inline-block"
            >
              Tona
            </motion.span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            Zgjidh trajtimin që të përshtatet – kombinim i estetikës moderne me
            rezultate natyrale.
          </motion.p>
        </motion.div>

        {/* GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {displayedServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <ServiceCard service={service} onLearnMore={setSelected} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <ServiceModal service={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServicesGrid;
