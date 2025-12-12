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
    <section id="before-after" className="py-20 lg:py-32 bg-gradient-to-b from-background to-secondary/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header me glow & stagger animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm tracking-widest mb-6 border border-accent/20"
          >
            REZULTATET TONA
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70"
          >
            Before & After
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Transformime magjike që flasin vetë. Rezultate natyrale, të qëndrueshme dhe plot shkëlqim ✨
          </motion.p>
        </motion.div>

        {/* Grid me staggered cards + hover lift */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {beforeAfterPairs.map((pair, index) => (
            <motion.div
              key={pair.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
              className="group relative"
            >
              {/* Glow background on hover */}
              <div className="absolute -inset-4 bg-accent/10 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-3xl p-8 shadow-2xl">
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.4 }}
                  className="text-center text-2xl md:text-3xl font-display text-foreground mb-8 bg-gradient-to-r from-accent to-pink-600 bg-clip-text text-transparent"
                >
                  {pair.title}
                </motion.h3>

                {/* Slider me border glow */}
                <div className="relative rounded-2xl overflow-hidden shadow-xl ring-2 ring-accent/20 group-hover:ring-accent/50 transition-all duration-500">
                  <BeforeAfterSlider beforeImage={pair.before} afterImage={pair.after} />
                  
                  {/* Cute labels */}
                  <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold text-foreground shadow-lg">
                    Before
                  </div>
                  <div className="absolute top-4 right-4 bg-accent/90 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold text-white shadow-lg">
                    After
                  </div>
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
          className="text-center mt-20"
        >
          <p className="text-sm text-muted-foreground italic">
            *Rezultatet mund të ndryshojnë nga personi në person. Të gjitha fotot janë reale dhe me pëlqimin e klientëve. ✨
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;