import { restaurant } from '../data/restaurant';
import { MapPin, Phone, WhatsappLogo, ArrowUpRight } from '@phosphor-icons/react';

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 sm:px-12 bg-[var(--color-brand-bg)] border-t border-black/5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Main Info */}
        <div className="flex-1">
          <p className="text-[var(--color-brand-primary)] font-medium uppercase tracking-[0.2em] text-sm mb-4">Contact & accès</p>
          <h2 className="font-display text-4xl sm:text-5xl font-medium mb-6 text-[var(--color-brand-text)]">Nous trouver.</h2>
          
          <div className="flex gap-4 mb-10 text-[var(--color-brand-gray)] text-lg max-w-lg">
            <MapPin size={24} className="shrink-0 mt-1 text-[var(--color-brand-primary)]" weight="fill" />
            <p className="leading-relaxed">{restaurant.contact.address}</p>
          </div>

          <div className="space-y-4 max-w-md">
            <a href={`tel:${restaurant.contact.phone.replace(/\s+/g, '')}`} className="flex items-center gap-4 p-4 rounded-sm border border-black/10 hover:border-[var(--color-brand-primary)] transition-colors group">
              <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-[var(--color-brand-primary)] group-hover:text-white transition-colors">
                <Phone size={24} />
              </div>
              <div>
                <strong className="block text-[var(--color-brand-text)] font-medium">Appeler</strong>
                <span className="text-[var(--color-brand-gray)] text-sm">{restaurant.contact.phone}</span>
              </div>
            </a>
            
            <a href={`https://wa.me/${restaurant.contact.whatsapp}?text=Bonjour%20${restaurant.name}%2C%20j'aimerais%20avoir%20des%20informations.`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-sm border border-black/10 hover:border-[#25D366] transition-colors group">
              <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                <WhatsappLogo size={24} />
              </div>
              <div>
                <strong className="block text-[var(--color-brand-text)] font-medium">WhatsApp</strong>
                <span className="text-[var(--color-brand-gray)] text-sm">{restaurant.contact.phone}</span>
              </div>
            </a>

            <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurant.contact.address)}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-sm border border-[var(--color-brand-primary)] bg-[var(--color-brand-primary)] hover:bg-[#1a3223] hover:border-[#1a3223] text-white transition-colors group">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:bg-white/30 transition-colors">
                <MapPin size={24} weight="fill" />
              </div>
              <div className="flex-1">
                <strong className="block font-medium">Voir l'itinéraire</strong>
                <span className="text-sm opacity-80">Ouvrir dans Google Maps</span>
              </div>
              <ArrowUpRight size={20} className="opacity-50 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>

        {/* Hours Card */}
        <div className="lg:w-[400px]">
          <div className="bg-white p-8 sm:p-10 rounded-sm shadow-sm border border-black/5 relative overflow-hidden">
            {/* Decorative top border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--color-brand-primary)]" />

            <h3 className="font-display text-2xl font-medium mb-6 text-[var(--color-brand-text)]">Horaires d'ouverture</h3>
            
            <div className="flex items-center gap-2 text-[#25D366] font-medium mb-8 bg-[#25D366]/10 px-4 py-2 rounded-full w-fit text-sm">
              <div className="w-2 h-2 rounded-full bg-current animate-pulse" />
              Ouvert maintenant
            </div>

            <ul className="space-y-4 text-[var(--color-brand-gray)] text-sm">
              <li className="flex justify-between border-b border-black/5 pb-3">
                <span>Lundi</span><span>10:00 – 01:00</span>
              </li>
              <li className="flex justify-between border-b border-black/5 pb-3 font-medium text-[var(--color-brand-text)]">
                <span>Mardi</span><span>10:00 – 01:00</span>
              </li>
              <li className="flex justify-between border-b border-black/5 pb-3">
                <span>Mercredi</span><span>10:00 – 01:00</span>
              </li>
              <li className="flex justify-between border-b border-black/5 pb-3">
                <span>Jeudi</span><span>10:00 – 01:00</span>
              </li>
              <li className="flex justify-between border-b border-black/5 pb-3">
                <span>Vendredi</span><span>10:00 – 01:00</span>
              </li>
              <li className="flex justify-between border-b border-black/5 pb-3">
                <span>Samedi</span><span>10:00 – 01:00</span>
              </li>
              <li className="flex justify-between pt-1">
                <span>Dimanche</span><span>10:00 – 01:00</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
