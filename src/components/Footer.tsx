import { restaurant } from '../data/restaurant';
import { InstagramLogo, FacebookLogo, TwitterLogo } from '@phosphor-icons/react';

export function Footer() {
  return (
    <footer id="footer-section" className="bg-[var(--color-brand-primary)] text-white py-24 px-6 sm:px-12 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
        <div>
          <h2 className="font-display text-3xl font-medium mb-6">{restaurant.name}</h2>
          <p className="text-white/60 mb-8 max-w-sm">
            {restaurant.slogan}
          </p>
        </div>
        
        <div>
          <h3 className="text-sm font-medium uppercase tracking-wider mb-6 text-white/40">Contact & Accès</h3>
          <ul className="space-y-4 text-white/80">
            <li>{restaurant.contact.address}</li>
            <li>
              <a href={`tel:${restaurant.contact.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">
                {restaurant.contact.phone}
              </a>
            </li>
            <li className="pt-4 flex items-center gap-4">
              <a href={`https://instagram.com/${restaurant.contact.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors" aria-label="Instagram">
                <InstagramLogo size={24} weight="regular" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="Facebook">
                <FacebookLogo size={24} weight="regular" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="Twitter">
                <TwitterLogo size={24} weight="regular" />
              </a>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-sm font-medium uppercase tracking-wider mb-6 text-white/40">Horaires</h3>
          <ul className="space-y-4 text-white/80">
            <li className="flex justify-between border-b border-white/10 pb-2">
              <span>Lundi - Jeudi</span>
              <span>11:00 - 23:00</span>
            </li>
            <li className="flex justify-between border-b border-white/10 pb-2">
              <span>Vendredi - Samedi</span>
              <span>11:00 - 01:00</span>
            </li>
            <li className="flex justify-between border-b border-white/10 pb-2">
              <span>Dimanche</span>
              <span>12:00 - 22:00</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/40">
        <p>© {new Date().getFullYear()} {restaurant.name}. Tous droits réservés.</p>
        <p>Template Premium Restaurant</p>
      </div>
    </footer>
  );
}
