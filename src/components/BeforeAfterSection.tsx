import { motion } from "framer-motion";
import BeforeAfterSlider from "./BeforeAfterSlider";

const beforeAfterPairs = [
  {
    id: "1",
    title: "Botox - Reduktim Rrudhash",
    before: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&h=600&fit=crop&q=80",
    after: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&h=600&fit=crop&q=80",
  },
  {
    id: "2",
    title: "Dermal Fillers - Volum Buzësh",
    before: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&h=600&fit=crop&q=80",
    after: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&h=600&fit=crop&q=80",
  },
  // shto sa të duash, unë i lashë 4 për grid të bukur
  {
    id: "3",
    title: "HydraFacial - Shkëlqim Natyral",
    before: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=800&h=600&fit=crop&q=80",
    after: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=800&h=600&fit=crop&q=80",
  },
  {
    id: "4",
    title: "Laser Hair Removal",
    before: "https://images.unsplash.com/photo-1631631483669-9d8458f8c7a9?w=800&h=600&fit=crop&q=80",
    after: "https://images.unsplash.com/photo-1605405742228-97e226423b5b?w=800&h=600&fit=crop&q=80",
  },
];

const BeforeAfterSection = () => {
  return (
    <section id="before-after" className="relative py-20 lg:py-32 bg-gradient-to-br from-pink-50 via-white to-purple-50 overflow-hidden">
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
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 text-pink-600 font-medium text-sm mb-6 shadow-sm"
          >
            ✨ REZULTATET TONA
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-wide"
          >
            Before &{" "}
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
              After
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Transformime magjike që flasin vetë. Rezultate natyrale, të qëndrueshme dhe plot shkëlqim ✨
          </motion.p>
        </motion.div>

        {/* Grid me staggered cards + hover lift */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {beforeAfterPairs.map((pair, index) => (
            <motion.div
              key={pair.id}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
              className="group relative"
            >
              {/* Glow background on hover */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <div className="relative bg-white/90 backdrop-blur-sm border border-pink-200 rounded-3xl p-6 sm:p-8 shadow-lg group-hover:shadow-xl group-hover:border-pink-300 transition-all duration-300">
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.4 }}
                  className="text-center text-xl md:text-2xl font-display font-bold text-gray-900 mb-6"
                >
                  {pair.title}
                </motion.h3>

                {/* Slider me border glow */}
                <div className="relative rounded-2xl overflow-hidden shadow-xl ring-2 ring-pink-200/50 group-hover:ring-pink-400/70 transition-all duration-500">
                  <BeforeAfterSlider beforeImage={pair.before} afterImage={pair.after} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bonus cute disclaimer me sparkle */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-sm text-gray-600 italic">
            *Rezultatet mund të ndryshojnë nga personi në person. Të gjitha fotot janë reale dhe me pëlqimin e klientëve. ✨
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;