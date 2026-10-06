import { useState, useEffect } from 'react';
import { ShoppingBag, Phone } from '@phosphor-icons/react';
import { useCart } from '../context/CartContext';
import { restaurant } from '../data/restaurant';
import { twMerge } from 'tailwind-merge';

export function Navigation() {
  const { totalItems, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={twMerge(
      "fixed top-0 left-0 w-full z-30 px-6 py-4 flex items-center justify-between transition-all duration-300",
      isScrolled ? "bg-[var(--color-brand-primary)] text-white shadow-md" : "bg-transparent text-white"
    )}>
      {/* Logo */}
      <div 
        className="font-display font-medium text-2xl tracking-wide cursor-pointer flex-shrink-0"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        {restaurant.name}
      </div>

      {/* Desktop Links */}
      <div className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide flex-1 justify-center">
        <a href="#menu-section" className="hover:opacity-70 transition-opacity">Menu</a>
        <a href="#ambiance-section" className="hover:opacity-70 transition-opacity">Galerie</a>
        <a href="#reservation" className="hover:opacity-70 transition-opacity">Réservation</a>
        <a href="#contact" className="hover:opacity-70 transition-opacity">Contact</a>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4 sm:gap-6 flex-shrink-0">
        <div className="hidden md:flex items-center gap-2 text-sm font-medium tracking-wide">
          <Phone size={18} weight="fill" />
          <a href={`tel:${restaurant.contact.phone.replace(/\s+/g, '')}`} className="hover:opacity-70 transition-opacity">
            {restaurant.contact.phone}
          </a>
        </div>
        
        <a 
          href="#reservation" 
          className={twMerge(
            "hidden sm:flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-medium transition-colors",
            isScrolled 
              ? "bg-[var(--color-brand-accent)] text-white hover:opacity-90 shadow-sm" 
              : "bg-white text-[var(--color-brand-primary)] hover:bg-white/90"
          )}
        >
          Réserver
        </a>

        {/* Cart */}
        <button
          onClick={() => setIsCartOpen(true)}
          className={twMerge(
            "relative flex items-center justify-center p-2 rounded-full transition-colors",
            isScrolled ? "hover:bg-black/5" : "hover:bg-white/10"
          )}
          aria-label="Ouvrir le panier"
        >
          <ShoppingBag size={26} weight="regular" />
          {totalItems > 0 && (
             <span className="absolute top-1 right-1 w-4 h-4 bg-[var(--color-brand-accent)] text-white text-[10px] font-bold flex items-center justify-center rounded-full shadow-sm">
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
}
