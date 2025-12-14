import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

interface NavbarProps {
  onBookClick: () => void;
}

const navLinks = [
  { label: "Shërbimet", href: "#services" },
  { label: "Para/Pas", href: "#before-after" },
  { label: "Çmimet", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakti", href: "#contact" },
];

const Navbar = ({ onBookClick }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // Handle scroll animations - only for styling changes
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // Navbar variants - always visible
  const navbarVariants = {
    initial: { y: -100, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  // Logo variants
  const logoVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.2,
      },
    },
    hover: {
      scale: 1.1,
      rotate: 360,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  // Nav link variants
  const navLinkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    hover: {
      y: -2,
      transition: {
        duration: 0.2,
      },
    },
  };

  // Mobile menu variants
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const mobileMenuItemVariants = {
    closed: {
      opacity: 0,
      x: -50,
      transition: {
        duration: 0.3,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <motion.nav
        variants={navbarVariants}
        initial="initial"
        animate="animate"
        className={`
          fixed top-0 left-0 right-0 z-50
          backdrop-blur-xl
          border
          py-2 transition-all duration-500
          m-2
          rounded-3xl
          ${
            isScrolled
              ? "bg-white/20 border-pink-300/50 shadow-2xl shadow-pink-500/20"
              : "bg-white/10 border-pink-200/50 shadow-lg shadow-pink-100/30"
          }
        `}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="group flex items-center gap-4"
            variants={logoVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            <motion.div
              className="relative w-12 h-12 rounded-full flex items-center justify-center
             shadow-lg overflow-hidden"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Animated spinning gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-pink-600"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-tl from-purple-500 via-pink-500 to-rose-500 opacity-50"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <span className="relative z-10 font-display text-white font-semibold text-[10px] leading-tight text-center drop-shadow-lg">
                GB
                <br />
                Aesthetic
              </span>
            </motion.div>

            <motion.span
              className="font-display text-3xl sm:block hidden tracking-wide font-light"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              whileHover={{ letterSpacing: "0.1em" }}
            >
              Aesthetica
            </motion.span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                custom={index}
                variants={navLinkVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className={`text-sm font-medium relative
                           ${
                             isScrolled
                               ? "text-gray-900"
                               : "text-gray-700"
                           }`}
              >
                {link.label}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div
            className="hidden lg:flex items-center gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <motion.a
              href="tel:+35569123456"
              className={`flex items-center gap-2 text-sm font-medium
                         ${
                           isScrolled
                             ? "text-gray-900"
                             : "text-gray-700"
                         }`}
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">+355 69 123 4567</span>
            </motion.a>
            <motion.button
              onClick={onBookClick}
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold
                        shadow-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(236, 72, 153, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 4px 15px rgba(236, 72, 153, 0.3)",
                  "0 8px 25px rgba(168, 85, 247, 0.4)",
                  "0 4px 15px rgba(236, 72, 153, 0.3)",
                ],
              }}
              transition={{
                boxShadow: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              Book Now
            </motion.button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-full
                       ${
                         isScrolled
                           ? "text-gray-900 hover:bg-pink-50"
                           : "text-gray-700 hover:bg-pink-50"
                       }`}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6 text-pink-600" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-pink-900/95 via-purple-900/95 to-pink-900/95 backdrop-blur-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              className="relative h-full flex flex-col items-center justify-center gap-8 p-6"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  variants={mobileMenuItemVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="text-white text-3xl font-display hover:text-pink-300 transition-colors relative"
                  whileHover={{ scale: 1.1, x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.label}
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-pink-400 to-purple-400"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}

              <motion.div
                className="flex flex-col items-center gap-4 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <motion.a
                  href="tel:+35569123456"
                  className="flex items-center gap-2 text-white/80 hover:text-pink-300 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="w-5 h-5" />
                  +355 69 123 4567
                </motion.a>
                <motion.button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onBookClick();
                  }}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold
                            shadow-lg"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(236, 72, 153, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Consultation
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
