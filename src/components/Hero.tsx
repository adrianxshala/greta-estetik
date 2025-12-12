import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Sparkles, Award, Users } from "lucide-react";
import heroImage from "../../public/greta png.png";

interface HeroProps {
  onBookClick: () => void;
  onBeforeAfterClick: () => void;
}

const Hero = ({ onBookClick, onBeforeAfterClick }: HeroProps) => {
  useEffect(() => {}, []);

  return (
    <section className="relative min-h-[95vh] overflow-hidden bg-gradient-to-br from-rose-50 via-white to-pink-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* TEXT CONTENT - Mobile first: always on top */}
          <div className="relative z-10 space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-block animate-float">
              <span className="text-sm font-semibold text-rose-600 bg-gradient-to-r from-rose-100 to-pink-100 px-5 py-2 rounded-full shadow-md backdrop-blur-sm border border-rose-200">
                ✨ Mirësevini te
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-rose-500 bg-clip-text text-transparent animate-gradient">
                GB Aesthetic Medicine
              </span>
            </h1>
            
            <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Zbuloni bukurinë tuaj natyrore me trajtime estetike të avancuara, 
              të realizuara me kujdes dhe profesionalizëm.
            </p>

            {/* CTA BUTTONS - Interactive & modern */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
              <Button 
                onClick={onBookClick}
                size="lg"
                className="group relative bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white shadow-xl hover:shadow-2xl transition-all duration-500 text-base sm:text-lg px-10 py-7 rounded-full overflow-hidden transform hover:scale-105"
              >
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-500"></span>
                <Phone className="mr-2 h-5 w-5 animate-pulse" />
                <span className="relative">Rezervo Termin</span>
              </Button>
              
              <Button 
                onClick={onBeforeAfterClick}
                variant="outline"
                size="lg"
                className="group border-2 border-rose-400 text-rose-600 hover:bg-gradient-to-r hover:from-rose-50 hover:to-pink-50 shadow-lg hover:shadow-xl transition-all duration-500 text-base sm:text-lg px-10 py-7 rounded-full transform hover:scale-105"
              >
                <Sparkles className="mr-2 h-5 w-5 group-hover:animate-spin" />
                Shiko Shërbimet
              </Button>
            </div>

            {/* Stats - Modern card grid */}
           
          </div>

          {/* IMAGE AREA - Redesigned with overlay text */}
          <div className="relative lg:h-[700px] h-[400px] mt-8 order-1 lg:order-2 border">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-rose-300/50 via-pink-300/50 to-purple-300/50 rounded-[3rem] blur-3xl animate-pulse-slow"></div>
            
            {/* Main image container */}
            <div className="relative h-full rounded-[3rem] overflow-hidden shadow-2xl group">
              <img 
                src={heroImage} 
                alt="Dr. Greta Berisha"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Overlay gradient for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              
              {/* Text overlay INSIDE photo */}
              <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10 text-white z-10">
                <div className="inline-block mb-3">
                  <span className="text-xs sm:text-sm font-bold text-rose-300 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30">
                    ⭐ Eksperte e Certifikuar
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-2 drop-shadow-lg">
                  Dr. Greta Berisha
                </h2>
                <p className="text-sm sm:text-base text-rose-100 font-medium drop-shadow-md">
                  Stomatologe dhe Estetiste e Certifikuar
                </p>
                
                {/* Decorative line */}
                <div className="mt-4 w-20 h-1 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full"></div>
              </div>

              {/* Decorative corner elements */}
              <div className="absolute top-6 right-6 w-16 h-16 border-t-4 border-r-4 border-white/30 rounded-tr-3xl"></div>
              <div className="absolute bottom-6 left-6 w-16 h-16 border-b-4 border-l-4 border-white/30 rounded-bl-3xl"></div>
            </div>

            {/* FLOATING BADGES - Redesigned */}
            {/* <div className="absolute -top-6 -right-6 bg-gradient-to-br from-white to-rose-50 rounded-2xl shadow-2xl p-5 animate-float border-2 border-rose-200 hover:scale-110 transition-transform duration-300 cursor-pointer">
              <div className="text-3xl mb-1">✨</div>
              <div className="text-sm font-bold text-gray-800">Trajtime Premium</div>
              <div className="text-xs text-rose-600 font-semibold">Cilësi e lartë</div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-white to-pink-50 rounded-2xl shadow-2xl p-5 animate-float-delayed border-2 border-pink-200 hover:scale-110 transition-transform duration-300 cursor-pointer">
              <div className="text-3xl mb-1">💎</div>
              <div className="text-sm font-bold text-gray-800">Rezultate Natyrore</div>
              <div className="text-xs text-pink-600 font-semibold">Bukuri e vërtetë</div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Enhanced BG Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.3; }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 3s ease-in-out infinite;
          animation-delay: 1s;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;