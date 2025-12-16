import { motion } from "framer-motion";
import { Sparkles, Mail, Send, User, MessageSquare, Phone } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Emri është i detyrueshëm";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email është i detyrueshëm";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email i pavlefshëm";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Numri i telefonit është i detyrueshëm";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Mesazhi është i detyrueshëm";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <footer id="contact" className="relative bg-gradient-to-br from-pink-50 via-white to-purple-50 overflow-hidden">
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

      {/* Footer Content - Professional */}
      <div className="relative z-10 py-16 lg:py-20">
        <div className="container mx-auto px-4">
          {/* Section Header - Professional */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
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
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight"
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

          {/* Contact Form - Centered */}
          <div className="max-w-2xl mx-auto mb-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <motion.div
                className="bg-white/95 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-2xl shadow-pink-500/20 border-2 border-pink-200/50 ring-2 ring-pink-200/30"
                whileHover={{ boxShadow: "0 25px 50px -12px rgba(236, 72, 153, 0.3)" }}
                transition={{ duration: 0.3 }}
              >
                {/* Decorative corner elements */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-pink-500/10 to-transparent rounded-bl-full" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-tr-full" />

                <h3 className="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <Mail className="w-6 h-6 text-pink-600" />
                  Dërgoni Mesazh
                </h3>
                <p className="text-gray-600 text-sm mb-6">
                  Plotësoni formularin dhe ne do t'ju kontaktojmë sa më shpejt
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-gradient-to-r from-pink-50 to-purple-50 border-2 border-pink-300 rounded-2xl p-6 text-center"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.5 }}
                      className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <Sparkles className="w-8 h-8 text-white" />
                    </motion.div>
                    <h4 className="font-display text-xl font-bold text-gray-900 mb-2">
                      Mesazhi u dërgua me sukses!
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Do t'ju kontaktojmë së shpejti.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name Field */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                        <User className="w-4 h-4 text-pink-600" />
                        Emri i Plotë *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border-2 bg-white/80 backdrop-blur-sm text-gray-900 placeholder:text-gray-400
                          focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all duration-300
                          ${errors.name ? 'border-red-400 focus:border-red-500' : 'border-pink-200/50 focus:border-pink-400'}`}
                        placeholder="Shkruani emrin tuaj"
                      />
                      {errors.name && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-xs mt-1.5 flex items-center gap-1"
                        >
                          {errors.name}
                        </motion.p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                        <Mail className="w-4 h-4 text-pink-600" />
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border-2 bg-white/80 backdrop-blur-sm text-gray-900 placeholder:text-gray-400
                          focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all duration-300
                          ${errors.email ? 'border-red-400 focus:border-red-500' : 'border-pink-200/50 focus:border-pink-400'}`}
                        placeholder="email@example.com"
                      />
                      {errors.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-xs mt-1.5 flex items-center gap-1"
                        >
                          {errors.email}
                        </motion.p>
                      )}
                    </div>

                    {/* Phone Field */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                        <Phone className="w-4 h-4 text-pink-600" />
                        Telefoni *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border-2 bg-white/80 backdrop-blur-sm text-gray-900 placeholder:text-gray-400
                          focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all duration-300
                          ${errors.phone ? 'border-red-400 focus:border-red-500' : 'border-pink-200/50 focus:border-pink-400'}`}
                        placeholder="+383 XX XXX XXX"
                      />
                      {errors.phone && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-xs mt-1.5 flex items-center gap-1"
                        >
                          {errors.phone}
                        </motion.p>
                      )}
                    </div>

                    {/* Message Field */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                        <MessageSquare className="w-4 h-4 text-pink-600" />
                        Mesazhi *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className={`w-full px-4 py-3 rounded-xl border-2 bg-white/80 backdrop-blur-sm text-gray-900 placeholder:text-gray-400 resize-none
                          focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all duration-300
                          ${errors.message ? 'border-red-400 focus:border-red-500' : 'border-pink-200/50 focus:border-pink-400'}`}
                        placeholder="Shkruani mesazhin tuaj këtu..."
                      />
                      {errors.message && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-xs mt-1.5 flex items-center gap-1"
                        >
                          {errors.message}
                        </motion.p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 rounded-xl font-semibold text-white shadow-lg
                        bg-gradient-to-r from-pink-500 to-purple-600 
                        hover:from-pink-600 hover:to-purple-700 
                        disabled:opacity-50 disabled:cursor-not-allowed
                        transition-all duration-300 flex items-center justify-center gap-2
                        hover:shadow-xl hover:shadow-pink-500/30"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          >
                            <Sparkles className="w-5 h-5" />
                          </motion.div>
                          Po dërgohet...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Dërgo Mesazhin
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </motion.div>
            </motion.div>
          </div>

          {/* Footer Bottom - Professional Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 pt-8 border-t-2 border-pink-200/30"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Copyright */}
              <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 text-center md:text-left">
                <p className="text-gray-600 text-sm font-medium">
                  © {new Date().getFullYear()} GB Aesthetic Medicine. Të gjitha të drejtat e rezervuara.
                </p>
                <div className="hidden md:flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-pink-300"></span>
                  <p className="text-gray-500 text-xs flex items-center gap-1.5">
                    Designed & Developed by{" "}
                    <motion.span 
                      className="font-semibold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent"
                      whileHover={{ scale: 1.1 }}
                    >
                      Adrian
                    </motion.span>
                  </p>
                </div>
                <div className="md:hidden text-gray-500 text-xs">
                  <p>Designed & Developed by{" "}
                    <span className="font-semibold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                      Adrian
                    </span>
                  </p>
                </div>
              </div>

              {/* Additional Info - Professional Buttons */}
              <div className="flex items-center gap-3">
                <motion.a
                  href="#privacy"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 
                    bg-white/60 backdrop-blur-sm border border-pink-200/50
                    hover:bg-white hover:border-pink-300 hover:text-pink-600
                    hover:shadow-md transition-all duration-300"
                >
                  Privacy Policy
                </motion.a>
                <motion.a
                  href="#terms"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 
                    bg-white/60 backdrop-blur-sm border border-pink-200/50
                    hover:bg-white hover:border-pink-300 hover:text-pink-600
                    hover:shadow-md transition-all duration-300"
                >
                  Terms of Service
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
