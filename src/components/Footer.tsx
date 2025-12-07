import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook, ArrowRight } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate subscription
    await new Promise(resolve => setTimeout(resolve, 500));
    setEmail("");
  };

  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      {/* Contact Section */}
      <div className="section-padding border-b border-primary-foreground/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <span className="inline-block text-accent font-medium tracking-widest uppercase text-sm mb-4">
                Na Kontaktoni
              </span>
              <h2 className="font-display text-4xl md:text-5xl mb-6">
                Get In Touch
              </h2>
              <p className="text-primary-foreground/70 text-lg mb-10 max-w-md">
                Jemi këtu për t'ju ndihmuar në rrugëtimin tuaj estetik. Kontaktoni për konsultim falas.
              </p>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Adresa</p>
                    <p className="text-primary-foreground/70">Rruga e Durrësit Nr. 123, Tiranë, Shqipëri</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Telefoni</p>
                    <a href="tel:+35569123456" className="text-primary-foreground/70 hover:text-accent transition-colors">
                      +355 69 123 4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <a href="mailto:info@aesthetica.al" className="text-primary-foreground/70 hover:text-accent transition-colors">
                      info@aesthetica.al
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Orari</p>
                    <p className="text-primary-foreground/70">E Hënë - E Shtunë: 09:00 - 19:00</p>
                    <p className="text-primary-foreground/70">E Diel: Mbyllur</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 mt-10">
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center
                            hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center
                            hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-primary-foreground/5 rounded-3xl p-8 md:p-10">
              <h3 className="font-display text-2xl mb-6">Dërgoni Mesazh</h3>
              
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-4">
                    <Send className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <p className="text-xl font-semibold">Faleminderit!</p>
                  <p className="text-primary-foreground/70">Do t'ju kontaktojmë së shpejti.</p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Emri i Plotë</label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20
                                text-primary-foreground placeholder:text-primary-foreground/40
                                focus:outline-none focus:border-accent transition-colors"
                      placeholder="Emri juaj"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20
                                text-primary-foreground placeholder:text-primary-foreground/40
                                focus:outline-none focus:border-accent transition-colors"
                      placeholder="email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Mesazhi</label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20
                                text-primary-foreground placeholder:text-primary-foreground/40
                                focus:outline-none focus:border-accent transition-colors resize-none"
                      placeholder="Si mund t'ju ndihmojmë?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent text-accent-foreground py-4 rounded-xl font-semibold
                              transition-all duration-300 hover:shadow-lg hover:shadow-accent/30
                              disabled:opacity-50 disabled:cursor-not-allowed
                              flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                        Duke dërguar...
                      </>
                    ) : (
                      <>
                        Dërgo Mesazhin
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="h-64 bg-primary-foreground/5 flex items-center justify-center">
        <div className="text-center">
          <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
          <p className="text-primary-foreground/70">Harta Interaktive</p>
          <p className="text-sm text-primary-foreground/50">Rruga e Durrësit Nr. 123, Tiranë</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-8 px-6 border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
              <span className="font-display text-accent-foreground font-bold">A</span>
            </div>
            <span className="font-display text-xl">Aesthetica</span>
          </div>

          {/* Newsletter */}
          <form onSubmit={handleNewsletterSubmit} className="flex items-center gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email për lajme dhe oferta"
              className="px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20
                        text-primary-foreground placeholder:text-primary-foreground/40 text-sm
                        focus:outline-none focus:border-accent transition-colors w-64"
            />
            <button
              type="submit"
              className="p-2 rounded-full bg-accent text-accent-foreground hover:bg-gold-dark transition-colors"
              aria-label="Subscribe to newsletter"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          {/* Copyright */}
          <p className="text-primary-foreground/50 text-sm">
            © 2024 Aesthetica. Të gjitha të drejtat e rezervuara.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
