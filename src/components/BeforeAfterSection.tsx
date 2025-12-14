import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Sparkles } from "lucide-react";
import BeforeAfterSlider from "./BeforeAfterSlider";

const beforeAfterPairs = [
  {
    id: "1",
    title: "Botox - Reduktim Rrudhash",
    before:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&h=600&fit=crop&q=80",
    after:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&h=600&fit=crop&q=80",
  },
  {
    id: "2",
    title: "Dermal Fillers - Volum Buzësh",
    before:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&h=600&fit=crop&q=80",
    after:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&h=600&fit=crop&q=80",
  },
  // shto sa të duash, unë i lashë 4 për grid të bukur
  {
    id: "3",
    title: "HydraFacial - Shkëlqim Natyral",
    before:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=800&h=600&fit=crop&q=80",
    after:
      "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=800&h=600&fit=crop&q=80",
  },
];

const BeforeAfterSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0]);

  return (
    <section
      ref={sectionRef}
      id="before-after"
      className="relative py-20 lg:py-32 bg-gradient-to-br from-pink-50 via-white to-purple-50 overflow-hidden"
    >
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
        {/* Header me glow & stagger animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 200,
              damping: 20,
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-pink-100 via-purple-100 to-pink-100 text-pink-600 font-semibold text-sm mb-6 shadow-lg border border-pink-200/50 backdrop-blur-sm"
          >
            <motion.div
              animate={{ rotate: [0, 180, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4" />
            </motion.div>
            REZULTATET TONA
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.4,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
            }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-wide"
          >
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Before
            </motion.span>{" "}
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600 bg-[length:200%_auto] inline-block relative"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, type: "spring" }}
              >
                After
              </motion.span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6 }}
              />
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Transformime magjike që flasin vetë. Rezultate natyrale, të
            qëndrueshme dhe plot shkëlqim ✨
          </motion.p>
        </motion.div>

        {/* Grid me staggered cards + hover lift */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {beforeAfterPairs.map((pair, index) => (
            <motion.div
              key={pair.id}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: "easeOut" as const,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: {
                  duration: 0.3,
                  ease: "easeOut" as const,
                },
              }}
              className="group relative"
              style={{ willChange: "transform" }}
            >
              {/* Animated Glow background */}
              <motion.div
                className="absolute -inset-6 bg-gradient-to-br from-pink-500/30 via-purple-500/30 to-pink-500/30 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ willChange: "opacity" }}
              />

              {/* Shimmer effect - removed complex animation to prevent glitches */}

              <motion.div
                className="relative bg-white/95 backdrop-blur-md border-2 border-pink-200/50 rounded-3xl p-6 sm:p-8 shadow-2xl group-hover:shadow-[0_25px_50px_-12px_rgba(236,72,153,0.3)] group-hover:border-pink-400 transition-all duration-500 overflow-hidden"
                whileHover={{
                  boxShadow:
                    "0 25px 50px -12px rgba(236, 72, 153, 0.4), 0 0 60px rgba(168, 85, 247, 0.2)",
                }}
              >
                {/* Decorative corner elements */}
                <motion.div
                  className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-pink-500/10 to-transparent rounded-bl-full"
                  initial={{ scale: 0, rotate: -90 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.5, type: "spring" }}
                />
                <motion.div
                  className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-tr-full"
                  initial={{ scale: 0, rotate: 90 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.6, type: "spring" }}
                />

                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.2 + 0.7,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center text-xl md:text-2xl font-display font-bold text-gray-900 mb-6 relative z-10"
                >
                  <motion.span
                    className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{ backgroundSize: "200% auto" }}
                  >
                    {pair.title}
                  </motion.span>
                </motion.h3>

                {/* Slider with enhanced border glow */}
                <motion.div
                  className="relative rounded-2xl overflow-hidden shadow-2xl ring-2 ring-pink-200/50 group-hover:ring-pink-400/80 transition-all duration-500"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.2 + 0.8,
                    type: "spring",
                    stiffness: 150,
                  }}
                  whileHover={{
                    boxShadow:
                      "0 20px 40px -10px rgba(236, 72, 153, 0.4), 0 0 30px rgba(168, 85, 247, 0.3)",
                  }}
                >
                  <BeforeAfterSlider
                    beforeImage={pair.before}
                    afterImage={pair.after}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
