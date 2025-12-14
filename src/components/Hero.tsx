"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Sparkles } from "lucide-react";
import { useState } from "react";
import heroImage from "../../public/greta png.png";

interface HeroProps {
  onBookClick: () => void;
  onBeforeAfterClick: () => void;
}

/* =======================
   Framer Motion Variants
   ======================= */
const containerStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const fadeBlurUp = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(12px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const imageReveal = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    rotateY: -20,
    rotateX: 10,
    filter: "blur(20px)",
    y: 50,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    rotateX: 0,
    filter: "blur(0px)",
    y: 0,
    transition: {
      duration: 1.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
      delay: 0.3,
    },
  },
};

const floating = {
  animate: {
    y: [0, -15, 0],
    rotate: [0, 2, -2, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

const sparkleAnimation = {
  animate: {
    rotate: [0, 360],
    scale: [1, 1.2, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

const gradientText = {
  animate: {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "linear" as const,
    },
  },
};

const Hero = ({ onBookClick, onBeforeAfterClick }: HeroProps) => {
  const [imageHovered, setImageHovered] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Animated Background Blobs */}
      <motion.div
        className="absolute top-20 -right-20 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-300/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* TEXT CONTENT */}
          <motion.div
            variants={containerStagger}
            initial="hidden"
            animate="visible"
            className="space-y-6 text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              variants={fadeBlurUp}
              whileHover={{ scale: 1.05, y: -2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 rounded-full text-pink-600 font-medium cursor-default shadow-sm hover:shadow-md transition-shadow"
            >
              <motion.div variants={sparkleAnimation} animate="animate">
                <Sparkles className="w-4 h-4" />
              </motion.div>
              ✨ Mirësevini te GB Aesthetic Medicine
            </motion.div>

            <motion.h1
              variants={fadeBlurUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Zbuloni{" "}
              <motion.span
                variants={gradientText}
                animate="animate"
                className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600 bg-[length:200%_auto] inline-block"
              >
                bukurinë
              </motion.span>{" "}
              natyrore
            </motion.h1>

            <motion.p
              variants={fadeBlurUp}
              className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0"
            >
              Me trajtime estetike të avancuara, të realizuara me kujdes dhe
              profesionalizëm.
            </motion.p>

            <motion.div
              variants={fadeBlurUp}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  onClick={() => {
                    const phoneNumber = "355691234567"; // WhatsApp number without + and spaces
                    const message = encodeURIComponent(
                      "Përshëndetje! Dëshiroj të rezervoj një termin."
                    );
                    window.open(
                      `https://wa.me/${phoneNumber}?text=${message}`,
                      "_blank"
                    );
                  }}
                  aria-label="Rezervo termin me Dr. Greta Berisha në WhatsApp"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white shadow-lg hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 w-full sm:w-auto"
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  >
                    <Phone className="mr-2 h-5 w-5 inline" />
                  </motion.div>
                  Rezervo Termin
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  onClick={onBeforeAfterClick}
                  aria-label="Shiko fotot para dhe pas trajtimeve"
                  className="border-2 border-pink-500 text-pink-600 hover:bg-pink-50 hover:border-pink-600 hover:shadow-lg transition-all duration-300 w-full sm:w-auto"
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Sparkles className="mr-2 h-5 w-5 inline" />
                  </motion.div>
                  Shiko Shërbimet
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* IMAGE AREA */}
          <motion.div
            variants={imageReveal}
            initial="hidden"
            animate="visible"
            className="relative order-1 lg:order-2 flex justify-center"
          >
            <motion.div
              variants={floating}
              animate="animate"
              onHoverStart={() => setImageHovered(true)}
              onHoverEnd={() => setImageHovered(false)}
              className="relative aspect-[3/4] max-w-[200px] sm:max-w-[240px] md:max-w-[280px] lg:max-w-[320px] mx-auto rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl cursor-pointer group"
            >
              {/* Animated Border Glow */}
              <motion.div
                className="absolute -inset-1 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 blur-sm"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              />

              {/* Shimmer Effect on Load */}
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "200%" }}
                transition={{
                  duration: 2,
                  delay: 1.5,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 z-20"
              />

              <motion.div
                animate={{
                  scale: imageHovered ? 1.05 : 1,
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative w-full h-full z-10"
              >
                <img
                  src={heroImage}
                  alt="Dr. Greta Berisha - Stomatologe dhe Estetiste e Certifikuar"
                  className="w-full h-full object-cover"
                  loading="eager"
                />

                {/* Gradient Overlay on Hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: imageHovered ? 0.1 : 0 }}
                  className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-600"
                  transition={{ duration: 0.3 }}
                />

                {/* Animated Particles Effect */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-pink-400 rounded-full"
                    initial={{
                      x: "50%",
                      y: "50%",
                      opacity: 0,
                      scale: 0,
                    }}
                    animate={{
                      x: `${50 + (Math.random() - 0.5) * 100}%`,
                      y: `${50 + (Math.random() - 0.5) * 100}%`,
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      delay: 1.8 + i * 0.2,
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                  />
                ))}
              </motion.div>

              {/* Glow Effect */}
              <motion.div
                animate={{
                  boxShadow: imageHovered
                    ? "0 25px 50px -12px rgba(236, 72, 153, 0.5), 0 0 60px rgba(168, 85, 247, 0.3)"
                    : "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 0 40px rgba(236, 72, 153, 0.2)",
                }}
                className="absolute inset-0 pointer-events-none z-10 rounded-2xl sm:rounded-3xl"
              />

              {/* BOTTOM INFO CARD */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: imageHovered ? -5 : 0,
                }}
                transition={{
                  opacity: { delay: 1.8, duration: 0.5 },
                  y: { duration: 0.3 },
                }}
                className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-lg z-20 border border-pink-100"
              >
                <p className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">
                  Dr. Greta Berisha
                </p>
                <p className="text-xs sm:text-sm text-gray-600">
                  Stomatologe dhe Estetiste e Certifikuar
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
