import { useState } from "react";
import { X, Check, ChevronLeft, ChevronRight, Calendar as CalendarIcon, User, Clock, Mail, Phone } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const services = [
  { id: "botox", name: "Botox", price: "€150+" },
  { id: "fillers", name: "Dermal Fillers", price: "€250+" },
  { id: "skincare", name: "Skin Treatments", price: "€100+" },
  { id: "laser", name: "Laser Therapy", price: "€200+" },
  { id: "eyes", name: "Eye Rejuvenation", price: "€180+" },
  { id: "hydra", name: "Hydrafacial", price: "€120+" },
];

const providers = [
  { id: "dr-maria", name: "Dr. Maria Kola", specialty: "Dermatologji Estetike", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop" },
  { id: "dr-elena", name: "Dr. Elena Hoxha", specialty: "Kirurgji Plastike", image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&h=200&fit=crop" },
  { id: "dr-arben", name: "Dr. Arben Leka", specialty: "Mjekësi Estetike", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop" },
];

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30"
];

const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedProvider, setSelectedProvider] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const totalSteps = 4;

  const validateStep = () => {
    const newErrors: Record<string, string> = {};

    if (step === 1 && !selectedService) {
      newErrors.service = "Ju lutem zgjidhni një shërbim";
    }
    if (step === 2 && !selectedProvider) {
      newErrors.provider = "Ju lutem zgjidhni një mjek";
    }
    if (step === 3 && (!selectedDate || !selectedTime)) {
      if (!selectedDate) newErrors.date = "Ju lutem zgjidhni një datë";
      if (!selectedTime) newErrors.time = "Ju lutem zgjidhni një orë";
    }
    if (step === 4) {
      if (!formData.name.trim()) newErrors.name = "Emri është i detyrueshëm";
      if (!formData.email.trim()) newErrors.email = "Email është i detyrueshëm";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Email i pavlefshëm";
      if (!formData.phone.trim()) newErrors.phone = "Numri i telefonit është i detyrueshëm";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      if (step < totalSteps) {
        setStep(step + 1);
      } else {
        // Simulate submission
        setIsSubmitted(true);
      }
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleClose = () => {
    setStep(1);
    setSelectedService(null);
    setSelectedProvider(null);
    setSelectedDate(null);
    setSelectedTime(null);
    setFormData({ name: "", email: "", phone: "", notes: "" });
    setErrors({});
    setIsSubmitted(false);
    onClose();
  };

  const generateCalendarDays = () => {
    const today = new Date();
    const days = [];
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      if (date.getDay() !== 0) { // Skip Sundays
        days.push(date);
      }
    }
    return days;
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('sq-AL', { weekday: 'short', day: 'numeric', month: 'short' });
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-primary/80 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative bg-card rounded-3xl w-full max-w-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="font-display text-2xl text-foreground">Book Consultation</h2>
            <p className="text-muted-foreground text-sm">Hapi {step} nga {totalSteps}</p>
          </div>
          <button
            onClick={handleClose}
            className="p-2 rounded-full hover:bg-secondary transition-colors"
            aria-label="Close booking modal"
          >
            <X className="w-6 h-6 text-muted-foreground" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="h-1 bg-secondary">
          <div 
            className="h-full bg-accent transition-all duration-500"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          />
        </div>

        {/* Content */}
        <div className="p-6 min-h-[400px]">
          {isSubmitted ? (
            // Success State
            <div className="flex flex-col items-center justify-center h-full py-12 text-center animate-scale-in">
              <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center mb-6">
                <Check className="w-10 h-10 text-accent-foreground" />
              </div>
              <h3 className="font-display text-3xl text-foreground mb-4">Rezervimi u Konfirmua!</h3>
              <p className="text-muted-foreground mb-8 max-w-md">
                Faleminderit për rezervimin tuaj. Do të merrni një email konfirmimi së shpejti.
              </p>
              <button onClick={handleClose} className="btn-accent">
                Mbylleni
              </button>
            </div>
          ) : (
            <>
              {/* Step 1: Select Service */}
              {step === 1 && (
                <div className="space-y-4">
                  <h3 className="font-display text-xl text-foreground mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-accent" />
                    Zgjidhni Shërbimin
                  </h3>
                  {errors.service && (
                    <p className="text-destructive text-sm">{errors.service}</p>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {services.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => setSelectedService(service.id)}
                        className={`p-4 rounded-xl border-2 text-left transition-all duration-300
                                   ${selectedService === service.id 
                                     ? 'border-accent bg-accent/10' 
                                     : 'border-border hover:border-accent/50'}`}
                      >
                        <p className="font-semibold text-foreground">{service.name}</p>
                        <p className="text-sm text-accent">{service.price}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Select Provider */}
              {step === 2 && (
                <div className="space-y-4">
                  <h3 className="font-display text-xl text-foreground mb-4 flex items-center gap-2">
                    <User className="w-5 h-5 text-accent" />
                    Zgjidhni Mjekun
                  </h3>
                  {errors.provider && (
                    <p className="text-destructive text-sm">{errors.provider}</p>
                  )}
                  <div className="space-y-3">
                    {providers.map((provider) => (
                      <button
                        key={provider.id}
                        onClick={() => setSelectedProvider(provider.id)}
                        className={`w-full p-4 rounded-xl border-2 flex items-center gap-4 transition-all duration-300
                                   ${selectedProvider === provider.id 
                                     ? 'border-accent bg-accent/10' 
                                     : 'border-border hover:border-accent/50'}`}
                      >
                        <img 
                          src={provider.image} 
                          alt={provider.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div className="text-left">
                          <p className="font-semibold text-foreground">{provider.name}</p>
                          <p className="text-sm text-muted-foreground">{provider.specialty}</p>
                        </div>
                        {selectedProvider === provider.id && (
                          <Check className="w-5 h-5 text-accent ml-auto" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Select Date & Time */}
              {step === 3 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-display text-xl text-foreground mb-4 flex items-center gap-2">
                      <CalendarIcon className="w-5 h-5 text-accent" />
                      Zgjidhni Datën
                    </h3>
                    {errors.date && (
                      <p className="text-destructive text-sm mb-2">{errors.date}</p>
                    )}
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                      {generateCalendarDays().map((date) => (
                        <button
                          key={date.toISOString()}
                          onClick={() => setSelectedDate(date)}
                          className={`flex-shrink-0 px-4 py-3 rounded-xl border-2 text-center transition-all duration-300
                                     ${selectedDate?.toDateString() === date.toDateString()
                                       ? 'border-accent bg-accent/10'
                                       : 'border-border hover:border-accent/50'}`}
                        >
                          <p className="text-xs text-muted-foreground">{date.toLocaleDateString('sq-AL', { weekday: 'short' })}</p>
                          <p className="font-semibold text-foreground">{date.getDate()}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-display text-xl text-foreground mb-4 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-accent" />
                      Zgjidhni Orën
                    </h3>
                    {errors.time && (
                      <p className="text-destructive text-sm mb-2">{errors.time}</p>
                    )}
                    <div className="grid grid-cols-4 gap-2">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`px-4 py-3 rounded-xl border-2 text-center transition-all duration-300
                                     ${selectedTime === time
                                       ? 'border-accent bg-accent/10 text-foreground'
                                       : 'border-border hover:border-accent/50 text-muted-foreground'}`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Contact Info */}
              {step === 4 && (
                <div className="space-y-4">
                  <h3 className="font-display text-xl text-foreground mb-4 flex items-center gap-2">
                    <Mail className="w-5 h-5 text-accent" />
                    Informacioni Juaj
                  </h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Emri i Plotë *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border-2 bg-background text-foreground
                                 focus:outline-none focus:border-accent transition-colors
                                 ${errors.name ? 'border-destructive' : 'border-border'}`}
                      placeholder="Shkruani emrin tuaj"
                    />
                    {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border-2 bg-background text-foreground
                                 focus:outline-none focus:border-accent transition-colors
                                 ${errors.email ? 'border-destructive' : 'border-border'}`}
                      placeholder="email@example.com"
                    />
                    {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Telefoni *</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border-2 bg-background text-foreground
                                 focus:outline-none focus:border-accent transition-colors
                                 ${errors.phone ? 'border-destructive' : 'border-border'}`}
                      placeholder="+355 69 XXX XXXX"
                    />
                    {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Shënime (Opsionale)</label>
                    <textarea
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground
                                focus:outline-none focus:border-accent transition-colors resize-none"
                      rows={3}
                      placeholder="Shënime shtesë..."
                    />
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer Navigation */}
        {!isSubmitted && (
          <div className="flex items-center justify-between p-6 border-t border-border">
            <button
              onClick={handleBack}
              disabled={step === 1}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all
                         ${step === 1 
                           ? 'text-muted-foreground cursor-not-allowed' 
                           : 'text-foreground hover:bg-secondary'}`}
            >
              <ChevronLeft className="w-5 h-5" />
              Back
            </button>
            <button
              onClick={handleNext}
              className="flex items-center gap-2 btn-accent"
            >
              {step === totalSteps ? 'Konfirmo' : 'Vazhdo'}
              {step < totalSteps && <ChevronRight className="w-5 h-5" />}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// Helper icon component
const Sparkles = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 3L14.5 8.5L20 11L14.5 13.5L12 19L9.5 13.5L4 11L9.5 8.5L12 3Z" />
  </svg>
);

export default BookingModal;
