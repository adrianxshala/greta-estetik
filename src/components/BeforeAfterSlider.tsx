import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GripVertical, ChevronLeft, ChevronRight } from "lucide-react";

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
  afterLabel = "Pas",
}: BeforeAfterSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
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

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isDragging) {
        handleMove(e.clientX);
      }
    },
    [isDragging, handleMove]
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (isDragging && e.touches[0]) {
        handleMove(e.touches[0].clientX);
      }
    },
    [isDragging, handleMove]
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === "ArrowRight") {
      setSliderPosition((prev) => Math.min(100, prev + 5));
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleMouseUp);
    };
  }, [handleMouseMove, handleTouchMove]);

  return (
    <motion.div
      ref={containerRef}
      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-ew-resize select-none shadow-2xl group"
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="slider"
      aria-valuenow={Math.round(sliderPosition)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Before and after comparison slider"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3 }}
    >
      {/* After Image (Bottom Layer) */}
      <motion.img
        src={afterImage}
        alt="After treatment"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1 }}
        animate={{ scale: isHovered ? 1.02 : 1 }}
        transition={{
          duration: 0.4,
          ease: "easeOut" as const,
        }}
        loading="lazy"
        decoding="async"
        style={{ willChange: "transform" }}
      />

      {/* Before Image (Top Layer with Clip) */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        style={{
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
          willChange: "clip-path",
        }}
        animate={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        transition={{
          duration: isDragging ? 0 : 0.2,
          ease: "easeOut" as const,
        }}
      >
        <motion.img
          src={beforeImage}
          alt="Before treatment"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1 }}
          animate={{ scale: isHovered ? 1.02 : 1 }}
          transition={{
            duration: 0.4,
            ease: "easeOut" as const,
          }}
          loading="lazy"
          decoding="async"
          style={{ willChange: "transform" }}
        />
      </motion.div>

      {/* Labels - Modern Pink/Purple Theme with Animation */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: -20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.9 }}
            transition={{ duration: 0.3, type: "spring" }}
            className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-gray-900 px-4 py-2 rounded-full text-sm font-semibold shadow-xl border-2 border-pink-300 z-20"
          >
            {beforeLabel}
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            transition={{ duration: 0.3, type: "spring" }}
            className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-purple-600 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold shadow-xl z-20"
          >
            {afterLabel}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Slider Handle - Modern Design with Advanced Animation */}
      <motion.div
        className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-pink-500 via-purple-500 to-pink-600 shadow-2xl z-10"
        style={{ left: `${sliderPosition}%`, x: "-50%" }}
        animate={{
          boxShadow: isDragging
            ? "0 0 40px rgba(236, 72, 153, 0.8), 0 0 60px rgba(168, 85, 247, 0.6)"
            : "0 0 20px rgba(236, 72, 153, 0.4), 0 0 30px rgba(168, 85, 247, 0.3)",
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                w-14 h-14 rounded-full 
                bg-white/95 backdrop-blur-md 
                border-2 border-pink-400
                flex items-center justify-center
                cursor-grab active:cursor-grabbing"
          animate={{
            scale: isDragging ? 1.2 : isHovered ? 1.1 : 1,
            boxShadow: isDragging
              ? "0 0 50px rgba(236, 72, 153, 0.8), 0 0 70px rgba(168, 85, 247, 0.6), inset 0 0 20px rgba(236, 72, 153, 0.2)"
              : isHovered
              ? "0 0 40px rgba(236, 72, 153, 0.6), 0 0 50px rgba(168, 85, 247, 0.4)"
              : "0 0 30px rgba(236, 72, 153, 0.5), 0 0 40px rgba(168, 85, 247, 0.3)",
            borderColor: isDragging
              ? "rgb(244, 114, 182)"
              : "rgb(236, 72, 153)",
          }}
          transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 1.25 }}
        >
          <motion.div
            animate={{ rotate: isDragging ? [0, 360] : 0 }}
            transition={{ duration: 0.5, repeat: isDragging ? Infinity : 0 }}
          >
            <GripVertical className="w-7 h-7 text-pink-600 drop-shadow-lg" />
          </motion.div>
        </motion.div>

        {/* Animated pulse ring */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border-2 border-pink-400/50"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      </motion.div>

      {/* Instruction Overlay - Modern Style with Animation */}
      <AnimatePresence>
        {isHovered && !isDragging && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, type: "spring" }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md 
                      text-gray-700 px-5 py-2.5 rounded-full text-xs font-semibold shadow-xl border-2 border-pink-300/50 z-20
                      flex items-center gap-2"
          >
            <motion.div
              animate={{ x: [-2, 2, -2] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronLeft className="w-4 h-4 text-pink-600" />
            </motion.div>
            <span>Drag to compare</span>
            <motion.div
              animate={{ x: [2, -2, 2] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronRight className="w-4 h-4 text-pink-600" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default BeforeAfterSlider;
