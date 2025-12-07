import { useState } from "react";
import { Check, Sparkles } from "lucide-react";

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  popular?: boolean;
  cta: string;
}

const plans: PricingPlan[] = [
  {
    id: "essential",
    name: "Essential",
    description: "Perfekt për kujdesin bazë të lëkurës",
    monthlyPrice: 99,
    yearlyPrice: 79,
    features: [
      "1 trajtim mujor i lëkurës",
      "Konsultim i plotë",
      "Produkte me zbritje 10%",
      "Planifikim prioritar"
    ],
    cta: "Filloni Sot"
  },
  {
    id: "premium",
    name: "Premium",
    description: "Paketa jonë më e popullarizuar",
    monthlyPrice: 249,
    yearlyPrice: 199,
    features: [
      "2 trajtime mujore",
      "Botox ose Filler me zbritje 20%",
      "Konsultim VIP i pakufizuar",
      "Produkte me zbritje 25%",
      "Planifikim prioritar 24/7",
      "Kontrolle falas pas trajtimit"
    ],
    popular: true,
    cta: "Merr Premium"
  },
  {
    id: "elite",
    name: "Elite",
    description: "Përvoja ultimative estetike",
    monthlyPrice: 449,
    yearlyPrice: 349,
    features: [
      "Trajtime të pakufizuara",
      "Të gjitha shërbimet me zbritje 35%",
      "Mjek personal i dedikuar",
      "Produkte premium falas",
      "Akses ekskluziv në trajtime të reja",
      "Dhomë private VIP"
    ],
    cta: "Kontaktoni Ne"
  }
];

interface AnimatedPriceProps {
  price: number;
  isYearly: boolean;
}

const AnimatedPrice = ({ price, isYearly }: AnimatedPriceProps) => {
  return (
    <div className="relative overflow-hidden h-16">
      <div 
        className={`absolute inset-0 transition-all duration-500 ease-out
                   ${isYearly ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}
      >
        <span className="font-display text-5xl text-foreground">€{price}</span>
      </div>
      <div 
        className={`absolute inset-0 transition-all duration-500 ease-out
                   ${isYearly ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
      >
        <span className="font-display text-5xl text-foreground">€{Math.round(price * 0.8)}</span>
      </div>
    </div>
  );
};

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-medium tracking-widest uppercase text-sm mb-4">
            Planet Tona
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Membership Pricing
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-10">
            Zgjidhni planin perfekt për rrugëtimin tuaj estetik. Kurseni deri në 20% me pagesën vjetore.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-4 p-2 bg-secondary rounded-full">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300
                         ${!isYearly 
                           ? 'bg-accent text-accent-foreground shadow-lg' 
                           : 'text-muted-foreground hover:text-foreground'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2
                         ${isYearly 
                           ? 'bg-accent text-accent-foreground shadow-lg' 
                           : 'text-muted-foreground hover:text-foreground'}`}
            >
              Yearly
              <span className="text-xs bg-rose px-2 py-0.5 rounded-full text-rose-foreground">
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={plan.id}
              className={`relative bg-card rounded-3xl p-8 border-2 transition-all duration-500
                         hover:-translate-y-2 hover:shadow-2xl
                         ${plan.popular 
                           ? 'border-accent shadow-glow' 
                           : 'border-border hover:border-accent/50'}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                    <Sparkles className="w-4 h-4" />
                    Më Popullarizuar
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="font-display text-2xl text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <AnimatedPrice 
                  price={isYearly ? plan.yearlyPrice : plan.monthlyPrice} 
                  isYearly={isYearly}
                />
                <span className="text-muted-foreground">/muaj</span>
                {isYearly && (
                  <p className="text-sm text-accent mt-2 animate-fade-in">
                    Kurseni €{(plan.monthlyPrice - plan.yearlyPrice) * 12}/vit
                  </p>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center
                                   ${plan.popular ? 'bg-accent' : 'bg-secondary'}`}>
                      <Check className={`w-3 h-3 ${plan.popular ? 'text-accent-foreground' : 'text-foreground'}`} />
                    </div>
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button 
                className={`w-full py-4 rounded-xl font-semibold transition-all duration-300
                           ${plan.popular 
                             ? 'bg-accent text-accent-foreground hover:bg-gold-dark hover:shadow-lg' 
                             : 'bg-secondary text-foreground hover:bg-accent hover:text-accent-foreground'}`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-muted-foreground text-sm mt-12">
          Të gjitha planet përfshijnë konsultim fillestar falas. Anulimi i mundshëm në çdo kohë.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
