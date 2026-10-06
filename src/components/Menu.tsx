import { useState } from 'react';
import { restaurant } from '../data/restaurant';
import { useCart } from '../context/CartContext';
import { Plus } from '@phosphor-icons/react';
import { twMerge } from 'tailwind-merge';
import { motion, AnimatePresence } from 'motion/react';
import { ScrollReveal } from './ScrollReveal';

export function Menu() {
  const { addToCart } = useCart();
  const [activeCategoryId, setActiveCategoryId] = useState(restaurant.categories[0]?.id);
  const [direction, setDirection] = useState(0);

  const handleCategoryChange = (newCategoryId: string) => {
    if (newCategoryId === activeCategoryId) return;
    const currentIndex = restaurant.categories.findIndex(c => c.id === activeCategoryId);
    const newIndex = restaurant.categories.findIndex(c => c.id === newCategoryId);
    setDirection(newIndex > currentIndex ? 1 : -1);
    setActiveCategoryId(newCategoryId);
  };

  const activeCategory = restaurant.categories.find(c => c.id === activeCategoryId) || restaurant.categories[0];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 40 : -40,
      y: 10,
      opacity: 0,
      rotateY: direction > 0 ? 4 : -4,
      scale: 0.98,
    }),
    center: {
      x: 0,
      y: 0,
      opacity: 1,
      rotateY: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 40 : -40,
      y: -10,
      opacity: 0,
      rotateY: direction < 0 ? 4 : -4,
      scale: 0.98,
      transition: {
        duration: 0.4,
        ease: "easeIn",
      }
    })
  };

  return (
    <section id="menu-section" className="py-24 px-6 sm:px-12 max-w-5xl mx-auto my-12 overflow-hidden">
      <ScrollReveal>
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-medium text-[var(--color-brand-primary)]">La Carte</h2>
          <p className="mt-4 text-[var(--color-brand-gray)] max-w-xl mx-auto">
            Découvrez nos spécialités préparées avec passion, mariant authenticité et raffinement.
          </p>
        </div>
      </ScrollReveal>

      {/* Interactive Category Navigation */}
      <nav className="relative mb-16 flex justify-center w-full">
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 p-2 bg-black/5 rounded-2xl w-full max-w-4xl">
          {restaurant.categories.map((category) => {
            const isActive = activeCategoryId === category.id;
            return (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={twMerge(
                  'relative px-5 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base font-medium rounded-xl transition-colors duration-300',
                  isActive ? 'text-white' : 'text-black/60 hover:text-black hover:bg-black/5'
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-[var(--color-brand-primary)] rounded-xl shadow-md"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{category.name}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Menu Content with Animations */}
      <div className="relative min-h-[600px]" style={{ perspective: '1000px' }}>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeCategoryId}
            custom={direction}
            variants={variants as any}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full transform-gpu"
          >
            <div className="mb-12">
              <h3 className="font-display text-3xl font-medium mb-4 text-[var(--color-brand-primary)]">
                {activeCategory.name}
              </h3>
              {activeCategory.description && (
                <p className="text-[var(--color-brand-gray)] text-lg pb-6 border-b border-black/10 max-w-2xl">
                  {activeCategory.description}
                </p>
              )}
              {!activeCategory.description && (
                <div className="pb-6 border-b border-black/10" />
              )}
            </div>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
              {activeCategory.items.map((item) => (
                <motion.li 
                  key={item.id} 
                  className="flex gap-4 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <h4 className="font-medium text-lg text-gray-900 group-hover:text-[var(--color-brand-primary)] transition-colors">{item.name}</h4>
                      <span className="font-medium whitespace-nowrap text-[var(--color-brand-accent)]">{item.price} FCFA</span>
                    </div>
                    <p className="text-black/60 text-sm mb-4 leading-relaxed flex-grow">{item.description}</p>
                    
                    <button
                      onClick={() => addToCart(item)}
                      className="mt-auto self-start flex items-center gap-2 border border-black/10 text-black/70 hover:bg-[var(--color-brand-primary)] hover:text-white hover:border-[var(--color-brand-primary)] px-5 py-2 rounded-full transition-all text-sm font-medium hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <Plus size={14} weight="bold" />
                      Ajouter
                    </button>
                  </div>
                  
                  {item.image && (
                    <div className="w-28 h-28 sm:w-36 sm:h-36 shrink-0 overflow-hidden rounded-xl bg-black/5 shadow-sm">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
