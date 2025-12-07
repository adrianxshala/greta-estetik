import BeforeAfterSlider from "./BeforeAfterSlider";

const beforeAfterPairs = [
  {
    id: "1",
    title: "Botox - Reduktim Rrudhash",
    before: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&h=600&fit=crop&q=80",
    after: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&h=600&fit=crop&q=80"
  },
  {
    id: "2", 
    title: "Dermal Fillers - Volum Buzësh",
    before: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&h=600&fit=crop&q=80",
    after: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&h=600&fit=crop&q=80"
  }
];

const BeforeAfterSection = () => {
  return (
    <section id="before-after" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-medium tracking-widest uppercase text-sm mb-4">
            Rezultatet Tona
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Before & After
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Shikoni transformimet e jashtëzakonshme të klientëve tanë. Rezultate natyrale dhe të qëndrueshme.
          </p>
        </div>

        {/* Sliders Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {beforeAfterPairs.map((pair) => (
            <div key={pair.id} className="space-y-4">
              <h3 className="font-display text-xl text-foreground text-center">{pair.title}</h3>
              <BeforeAfterSlider 
                beforeImage={pair.before}
                afterImage={pair.after}
              />
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-muted-foreground text-sm mt-12 max-w-2xl mx-auto">
          *Rezultatet mund të ndryshojnë. Imazhet janë ilustruese dhe përfaqësojnë rezultate tipike të trajtimeve tona.
        </p>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
