import { restaurant } from '../data/restaurant';
import { useCart } from '../context/CartContext';

export function DishMarquee() {
  const { addToCart } = useCart();
  
  // Extract a flat list of featured or random dishes with images
  const allDishes = restaurant.categories.flatMap(c => c.items).filter(i => i.image);
  
  // Pick about 8-10 dishes for the marquee
  const marqueeDishes = allDishes.slice(0, 10);
  
  // Duplicate for seamless infinite scroll (CSS translates to -50% which corresponds to one full set)
  const infiniteDishes = [...marqueeDishes, ...marqueeDishes];

  if (marqueeDishes.length === 0) return null;

  return (
    <section className="py-12 bg-[var(--color-brand-primary)] overflow-hidden">
      <div className="w-full relative">
        <div className="animate-marquee gap-8 px-4">
          {infiniteDishes.map((dish, idx) => (
            <div 
              key={`${dish.id}-${idx}`} 
              className="relative w-64 h-80 shrink-0 group cursor-pointer overflow-hidden rounded-sm"
              onClick={() => addToCart(dish)}
            >
              <img 
                src={dish.image} 
                alt={dish.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-white font-display text-lg font-medium leading-tight mb-2">
                  {dish.name}
                </p>
                <p className="text-[var(--color-brand-accent)] font-medium">
                  {dish.price} FCFA
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
