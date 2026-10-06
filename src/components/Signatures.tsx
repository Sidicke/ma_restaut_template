import { restaurant } from '../data/restaurant';
import type { MenuItem } from '../data/restaurant';
import { useCart } from '../context/CartContext';
import { Plus } from '@phosphor-icons/react';
import { twMerge } from 'tailwind-merge';
import { ScrollReveal } from './ScrollReveal';

export function Signatures() {
  const { addToCart } = useCart();
  
  const signatures: MenuItem[] = [];
  restaurant.categories.forEach(category => {
    category.items.forEach(item => {
      if (item.featured) {
        signatures.push(item);
      }
    });
  });

  if (signatures.length === 0) return null;

  return (
    <section className="py-24 px-6 sm:px-12 max-w-7xl mx-auto overflow-hidden">
      <ScrollReveal>
        <header className="mb-24 text-center flex flex-col items-center">
          <h2 className="font-display text-4xl sm:text-5xl font-medium mb-6">Nos Signatures</h2>
          <p className="text-[var(--color-brand-gray)] max-w-lg text-lg leading-relaxed">
            Quelques plats qui résument notre cuisine. Des portions généreuses, des jus réduits et des cuissons justes.
          </p>
        </header>
      </ScrollReveal>

      <div className="flex flex-col gap-24 sm:gap-32">
        {signatures.map((item, idx) => {
          // Alternate left/right layout for editorial feel
          const isEven = idx % 2 === 0;

          return (
            <article 
              key={item.id} 
              className={twMerge(
                "flex flex-col gap-8 sm:gap-16 items-center",
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              )}
            >
              {/* Image */}
              <ScrollReveal className="w-full md:w-1/2" direction={isEven ? 'right' : 'left'}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-black/5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </ScrollReveal>
              
              {/* Text */}
              <ScrollReveal className="w-full md:w-1/2 flex flex-col justify-center" delay={0.2} direction="up">
                <p className="text-sm font-medium uppercase tracking-widest text-[var(--color-brand-gray)] mb-4">
                  Signature N°{idx + 1}
                </p>
                <h3 className="font-display text-3xl sm:text-4xl font-medium mb-6 text-[var(--color-brand-text)]">
                  {item.name}
                </h3>
                <p className="text-lg text-[var(--color-brand-gray)] mb-8 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex items-center gap-8 mt-4">
                  <span className="font-medium text-xl">
                    {item.price} FCFA
                  </span>
                  <button
                    onClick={() => addToCart(item)}
                    className="flex items-center gap-2 border border-[var(--color-brand-primary)] text-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary)] hover:text-white px-6 py-3 rounded-full transition-colors font-medium"
                  >
                    <Plus size={20} />
                    Ajouter
                  </button>
                </div>
              </ScrollReveal>
            </article>
          );
        })}
      </div>
    </section>
  );
}
