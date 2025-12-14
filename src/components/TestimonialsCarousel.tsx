import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
  },
  {
    id: "2",
    name: "Elira K.",
    treatment: "Dermal Fillers",
    rating: 5,
    text: "Buzët duken shumë natyrale dhe të bukura. Stafi ishte i kujdesshëm dhe më bëri të ndihesha komode gjatë gjithë procedurës.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
  },
  {
    id: "3",
    name: "Mirela H.",
    treatment: "Skin Treatment",
    rating: 5,
    text: "Lëkura ime duket 10 vjet më e re! Hydrafacial ishte një përvojë e shkëlqyer dhe rezultatet janë të dukshme menjëherë.",
    image:
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&h=200&fit=crop",
  },
  {
    id: "4",
    name: "Sara L.",
    treatment: "Eye Rejuvenation",
    rating: 5,
    text: "Zona e syve duket shumë më e freskët. Faleminderit për kujdesin e jashtëzakonshëm dhe rezultatet e mrekullueshme!",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop",
  },
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const goToNext = useCallback(() => {
    setDirection("right");
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const goToPrev = useCallback(() => {
    setDirection("left");
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, goToNext]);

  const current = testimonials[currentIndex];

  const slideVariants = {
    enter: (direction: "left" | "right") => ({
      x: direction === "right" ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: "left" | "right") => ({
      x: direction === "right" ? -300 : 300,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-pink-50 via-white to-purple-50 overflow-hidden">
      {/* Background Blobs - matching Hero section */}
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

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 text-pink-600 font-medium text-sm mb-6 shadow-sm"
          >
            ✨ Dëshmitë
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-wide"
          >
            What Our{" "}
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
              Clients
            </motion.span>{" "}
            Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            Lexoni përvojat e klientëve tanë të kënaqur nga trajtimet tona
            estetike.
          </motion.p>
        </motion.div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Card */}
          <div className="relative overflow-hidden min-h-[400px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                  scale: { duration: 0.2 },
                }}
                className="bg-white/95 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl shadow-pink-500/20 border-2 border-pink-300 transition-all duration-300 ring-2 ring-pink-200/50"
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* Quote Icon */}
                  <motion.div
                    animate={{
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute top-8 right-8 opacity-10"
                  >
                    <Quote className="w-24 h-24 text-pink-500" />
                  </motion.div>

                  {/* Image */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      delay: 0.2,
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex-shrink-0"
                  >
                    <div className="relative group">
                      <motion.div
                        animate={{
                          boxShadow: [
                            "0 10px 30px rgba(236, 72, 153, 0.3)",
                            "0 15px 40px rgba(168, 85, 247, 0.4)",
                            "0 10px 30px rgba(236, 72, 153, 0.3)",
                          ],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 opacity-20 blur-xl"
                      />
                      <img
                        src={current.image}
                        alt={current.name}
                        className="relative w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-lg border-4 border-white z-10"
                        loading="lazy"
                      />
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.4, type: "spring" }}
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 
                                  flex items-center justify-center shadow-lg z-20"
                      >
                        <Star className="w-5 h-5 text-white fill-current" />
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    {/* Stars */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="flex items-center justify-center md:justify-start gap-1 mb-4"
                    >
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{
                            delay: 0.4 + i * 0.1,
                            type: "spring",
                            stiffness: 200,
                          }}
                          whileHover={{ scale: 1.3, rotate: 15 }}
                        >
                          <Star
                            className={`w-5 h-5 transition-colors ${
                              i < current.rating
                                ? "text-pink-500 fill-pink-500"
                                : "text-gray-300"
                            }`}
                          />
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Quote */}
                    <motion.blockquote
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="text-lg md:text-xl text-gray-900 leading-relaxed mb-6 font-medium"
                    >
                      "{current.text}"
                    </motion.blockquote>

                    {/* Author */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      <p className="font-display text-xl text-gray-900 font-bold">
                        {current.name}
                      </p>
                      <p className="text-gray-600">{current.treatment}</p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex items-center justify-center gap-4 mt-8"
          >
            <motion.button
              onClick={goToPrev}
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-white/90 backdrop-blur-sm border border-pink-200 
                        hover:border-pink-500 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 
                        hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl
                        focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ scale: 0 }}
                  animate={{ scale: index === currentIndex ? 1.2 : 1 }}
                  className={`h-3 rounded-full transition-all duration-300
                             ${
                               index === currentIndex
                                 ? "bg-gradient-to-r from-pink-500 to-purple-600 w-8 shadow-lg"
                                 : "bg-pink-200 w-3 hover:bg-pink-400"
                             }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={index === currentIndex ? "true" : "false"}
                />
              ))}
            </div>

            <motion.button
              onClick={goToNext}
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-white/90 backdrop-blur-sm border border-pink-200 
                        hover:border-pink-500 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 
                        hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl
                        focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
