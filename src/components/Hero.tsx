import { restaurant } from '../data/restaurant';
import { motion } from 'motion/react';

export function Hero() {
  const scrollToMenu = () => {
    const menuEl = document.getElementById('menu-section');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative h-[100dvh] w-full flex items-end pb-24 px-6 sm:px-12 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/restaurant/hero.jpg"
          alt={`${restaurant.name} restaurant ambiance`}
          className="w-full h-full object-cover"
        />
        {/* Gradient overlays for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/40 to-transparent" />
      </div>

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="relative z-10 w-full max-w-4xl mx-auto text-white flex flex-col items-start"
      >
        <p className="uppercase tracking-[0.2em] text-xs font-medium mb-6 text-white/70">
          Restaurant & Expérience
        </p>
        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-medium leading-[0.85] tracking-tight mb-8">
          {restaurant.name}
        </h1>
        <p className="text-xl sm:text-2xl font-light text-white/90 max-w-xl text-balance mb-10 leading-relaxed">
          {restaurant.slogan}
        </p>
        
        <button 
          onClick={scrollToMenu}
          className="bg-[var(--color-brand-primary)] hover:bg-[#1a3223] text-white px-8 py-4 rounded-full font-medium transition-colors duration-300"
        >
          Voir le menu
        </button>
      </motion.div>
    </header>
  );
}
