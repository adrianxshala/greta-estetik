import { motion } from "framer-motion";
import { MapPin, Phone, Sparkles } from "lucide-react";

const Footer = () => {

  return (
    <footer id="contact" className="relative bg-gradient-to-br from-pink-50 via-white to-purple-50 overflow-hidden">
      {/* Background Blobs */}
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

      {/* Footer Content - Cute & Elegant */}
      <div className="relative z-10 py-12 lg:py-16">
        <div className="container mx-auto px-4">
          {/* Section Header - Small & Cute */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: 0.2,
                type: "spring",
                stiffness: 200
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-pink-100/80 to-purple-100/80 text-pink-600 font-medium text-xs mb-4 shadow-sm border border-pink-200/30 backdrop-blur-sm"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-3 h-3" />
              </motion.div>
              Kontakti
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: 0.3, 
                duration: 0.6,
                type: "spring"
              }}
              className="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-3 tracking-tight"
            >
              Na{" "}
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
                Kontaktoni
              </motion.span>
            </motion.h2>
          </motion.div>

          {/* Contact Info - Small Elegant Cards */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
            {/* Phone */}
            <motion.a
              href="tel:+38349422181"
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: 0.2, 
                duration: 0.5,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{ 
                scale: 1.03, 
                y: -4,
                transition: { duration: 0.2 }
              }}
              className="relative flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-md border border-pink-200/40 hover:border-pink-300 hover:shadow-lg hover:shadow-pink-500/10 transition-all duration-300 group w-full sm:w-auto"
            >
              {/* Tiny decorative dot */}
              <motion.div
                className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-pink-400"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Small Icon */}
              <motion.div
                className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300"
                whileHover={{ 
                  rotate: [0, -3, 3, 0],
                  scale: 1.05
                }}
                transition={{ duration: 0.3 }}
              >
                <Phone className="w-5 h-5 text-white" />
              </motion.div>

              <div>
                <p className="font-medium text-gray-500 text-xs mb-0.5">Telefoni</p>
                <p className="text-base font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent group-hover:from-pink-500 group-hover:to-purple-500 transition-all duration-300">
                  +383 49 422 181
                </p>
              </div>
            </motion.a>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: 0.3, 
                duration: 0.5,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{ 
                scale: 1.03, 
                y: -4,
                transition: { duration: 0.2 }
              }}
              className="relative flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-md border border-pink-200/40 hover:border-pink-300 hover:shadow-lg hover:shadow-pink-500/10 transition-all duration-300 group w-full sm:w-auto"
            >
              {/* Tiny decorative dot */}
              <motion.div
                className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-purple-400"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
              
              {/* Small Icon */}
              <motion.div
                className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300"
                whileHover={{ 
                  rotate: [0, 3, -3, 0],
                  scale: 1.05
                }}
                transition={{ duration: 0.3 }}
              >
                <MapPin className="w-5 h-5 text-white" />
              </motion.div>

              <div>
                <p className="font-medium text-gray-500 text-xs mb-0.5">Lokacioni</p>
                <p className="text-sm font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-300 leading-tight">
                  Suhareke, Stac. Autobusave
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
