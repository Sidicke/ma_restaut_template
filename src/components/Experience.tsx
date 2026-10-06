import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { restaurant } from '../data/restaurant';

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax effect: image moves slightly up/down as user scrolls past
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={containerRef} className="relative h-[60vh] min-h-[500px] w-full overflow-hidden bg-[#14100b] my-24 flex items-center justify-center">
      {/* Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0 z-0 scale-125 origin-center">
        <img
          src={restaurant.gallery.experience[0]}
          alt="L'expérience à table"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#14100b] via-[#14100b]/20 to-[#14100b]" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="flex items-center justify-center gap-3 uppercase tracking-[0.26em] text-xs font-medium mb-6 text-[#c49a3a]">
          <span className="w-8 h-px bg-[#c49a3a]/70 block" />
          À Table
          <span className="w-8 h-px bg-[#c49a3a]/70 block" />
        </p>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium text-[#f3eada] mb-6 leading-tight">
          L'essentiel est là
        </h2>
        <p className="text-lg text-[#f3eada]/80 leading-relaxed text-balance mx-auto max-w-xl">
          Des assiettes généreuses que l'on fait passer de main en main, du vin servi à la bonne température et un service présent juste quand il le faut.
        </p>
      </div>
    </section>
  );
}
