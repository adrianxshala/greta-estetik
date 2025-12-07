import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: "1",
    question: "A është Botox i sigurt?",
    answer: "Po, Botox është shumë i sigurt kur administrohet nga mjekë të certifikuar. Është aprovuar nga FDA dhe përdoret me sukses për dekada. Mjekët tanë kanë përvojë të gjerë dhe përdorin vetëm produkte të certifikuara."
  },
  {
    id: "2",
    question: "Sa zgjat procedura e Botox?",
    answer: "Procedura e Botox zakonisht zgjat vetëm 15-30 minuta, varësisht nga zonat e trajtimit. Quhet shpesh 'procedura e drekës' sepse mund të ktheheni menjëherë në aktivitetet tuaja normale."
  },
  {
    id: "3",
    question: "Kur shfaqen rezultatet dhe sa zgjasin?",
    answer: "Rezultatet fillestare shfaqen brenda 3-5 ditësh, me rezultate të plota brenda 2 javësh. Efekti zgjat zakonisht 3-4 muaj, pastaj mund të përsërisni trajtimin për rezultate të vazhdueshme."
  },
  {
    id: "4",
    question: "A është procedura e dhimbshme?",
    answer: "Procedura është minimalisht e pakëndshme. Shumica e klientëve përshkruajnë një ndjesi të lehtë pickimi. Përdorim gjilpëra shumë të holla dhe mund të aplikojmë krem anestezik lokal për komoditet maksimal."
  },
  {
    id: "5",
    question: "Cilat janë efektet anësore të mundshme?",
    answer: "Efektet anësore janë të rralla dhe zakonisht të lehta: skuqje ose ënjtje e përkohshme në vendin e injektimit, dhimbje e lehtë koke. Këto zhduken zakonisht brenda 24-48 orëve."
  },
  {
    id: "6",
    question: "A mund ta kombinoj Botox me trajtime të tjera?",
    answer: "Po, Botox mund të kombinohet me sukses me Dermal Fillers, Hydrafacial, dhe trajtime të tjera të lëkurës. Mjekët tanë do të krijojnë një plan trajtimi personal për rezultate optimale."
  },
  {
    id: "7",
    question: "Çfarë duhet të shmang pas trajtimit?",
    answer: "Për 24 orë pas trajtimit, shmangni ushtrimet intensive, saunën, ekspozimin direkt ndaj diellit, dhe masazhimin e zonës së trajtuar. Mund të vazhdoni aktivitetet normale ditore menjëherë."
  }
];

const FAQAccordion = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="section-padding bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-medium tracking-widest uppercase text-sm mb-4">
            Pyetje të Shpeshta
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            FAQ
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Gjeni përgjigjet për pyetjet më të zakonshme rreth trajtimeve tona estetike.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4" role="region" aria-label="Frequently Asked Questions">
          {faqs.map((faq, index) => {
            const isOpen = openItems.includes(faq.id);
            
            return (
              <div 
                key={faq.id}
                className="bg-card rounded-2xl border border-border overflow-hidden
                          transition-all duration-300 hover:shadow-soft"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left
                            focus:outline-none focus:ring-2 focus:ring-accent focus:ring-inset"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center
                                   transition-colors duration-300
                                   ${isOpen ? 'bg-accent text-accent-foreground' : 'bg-secondary text-muted-foreground'}`}>
                      <HelpCircle className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-foreground text-lg pr-4">{faq.question}</span>
                  </div>
                  <ChevronDown 
                    className={`w-6 h-6 text-muted-foreground flex-shrink-0 transition-transform duration-300
                               ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                
                <div 
                  id={`faq-answer-${faq.id}`}
                  className={`overflow-hidden transition-all duration-300 ease-out
                             ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                  role="region"
                  aria-labelledby={`faq-question-${faq.id}`}
                >
                  <div className="px-6 pb-6 pl-20">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Keni pyetje të tjera?</p>
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
          >
            Kontaktoni ekipin tonë
            <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
