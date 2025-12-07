import { useState, useRef, useCallback, useEffect } from "react";
import { GripVertical } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

const BeforeAfterSlider = ({ 
  beforeImage, 
  afterImage, 
  beforeLabel = "Para", 
  afterLabel = "Pas" 
}: BeforeAfterSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  }, [isDragging, handleMove]);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (isDragging && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  }, [isDragging, handleMove]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      setSliderPosition(prev => Math.max(0, prev - 5));
    } else if (e.key === 'ArrowRight') {
      setSliderPosition(prev => Math.min(100, prev + 5));
    }
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, [handleMouseMove, handleTouchMove]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-ew-resize select-none shadow-2xl"
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
      role="slider"
      aria-valuenow={Math.round(sliderPosition)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Before and after comparison slider"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {/* After Image (Bottom Layer) */}
      <img 
        src={afterImage}
        alt="After treatment"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />

      {/* Before Image (Top Layer with Clip) */}
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img 
          src={beforeImage}
          alt="Before treatment"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-primary/80 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
        {beforeLabel}
      </div>
      <div className="absolute top-4 right-4 bg-accent/90 backdrop-blur-sm text-accent-foreground px-4 py-2 rounded-full text-sm font-medium">
        {afterLabel}
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white/90 shadow-lg z-10 transition-shadow"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                        w-14 h-14 rounded-full bg-white shadow-xl
                        flex items-center justify-center
                        border-4 border-accent transition-transform duration-200
                        hover:scale-110">
          <GripVertical className="w-6 h-6 text-primary" />
        </div>
      </div>

      {/* Instruction Overlay */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-primary/60 backdrop-blur-sm 
                      text-primary-foreground px-4 py-2 rounded-full text-sm opacity-60">
        ← Drag to compare →
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
