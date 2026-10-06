import { restaurant } from '../data/restaurant';
import { CheckCircle, WhatsappLogo } from '@phosphor-icons/react';

export function Reservation() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const nom = formData.get('nom');
    const personnes = formData.get('personnes');
    const date = formData.get('date');
    const heure = formData.get('heure');
    const message = formData.get('message');
    
    const text = `Bonjour ${restaurant.name}, je souhaite réserver une table.\n\nNom: ${nom}\nPersonnes: ${personnes}\nDate: ${date}\nHeure: ${heure}\nMessage: ${message}`;
    window.open(`https://wa.me/${restaurant.contact.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="reservation" className="py-24 px-6 sm:px-12 bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        {/* Copy */}
        <div className="flex-1 flex flex-col justify-center w-full">
          <p className="text-[var(--color-brand-primary)] font-medium uppercase tracking-[0.2em] text-sm mb-4">Réservation</p>
          <h2 className="font-display text-4xl sm:text-5xl font-medium mb-6 text-[#f3eada]">Réservez votre table.</h2>
          <p className="text-white/80 text-lg mb-8 max-w-md leading-relaxed">
            Quelques clics suffisent : envoyez votre demande, nous confirmons directement sur WhatsApp.
          </p>
          
          <ul className="space-y-4 mb-10 text-white/90">
            <li className="flex items-center gap-3">
              <CheckCircle size={24} className="text-[var(--color-brand-primary)]" weight="fill" />
              <span>Réponse rapide sur WhatsApp</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle size={24} className="text-[var(--color-brand-primary)]" weight="fill" />
              <span>Tables de 1 à 10 personnes</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle size={24} className="text-[var(--color-brand-primary)]" weight="fill" />
              <span>Occasions spéciales bienvenues</span>
            </li>
          </ul>

          <div className="space-y-2 text-white/70 text-sm">
            <p>
              Vous préférez appeler ? <a href={`tel:${restaurant.contact.phone.replace(/\s+/g, '')}`} className="text-white hover:text-[var(--color-brand-primary)] transition-colors">{restaurant.contact.phone}</a>
            </p>
            <p>
              Plutôt commander qu'une table ? <a href={`https://wa.me/${restaurant.contact.whatsapp}?text=Bonjour%20${restaurant.name}%2C%20je%20souhaite%20passer%20une%20commande.`} target="_blank" rel="noopener noreferrer" className="text-[var(--color-brand-primary)] hover:underline">Commander par WhatsApp</a>
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex-1 w-full bg-black/40 p-6 sm:p-8 rounded-sm border border-white/10">
          <div className="space-y-6">
            <div>
              <label htmlFor="res-nom" className="block text-sm font-medium text-white/80 mb-2">Nom *</label>
              <input id="res-nom" name="nom" required type="text" className="w-full bg-white/5 border border-white/20 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[var(--color-brand-primary)] transition-colors" placeholder="Votre nom" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="res-personnes" className="block text-sm font-medium text-white/80 mb-2">Personnes *</label>
                <select id="res-personnes" name="personnes" required defaultValue="" className="w-full bg-[#1f1f1f] border border-white/20 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[var(--color-brand-primary)] transition-colors">
                  <option value="" disabled>—</option>
                  {[...Array(10)].map((_, i) => (
                    <option key={i} value={i+1}>{i+1} {i === 0 ? 'personne' : 'personnes'}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="res-heure" className="block text-sm font-medium text-white/80 mb-2">Heure *</label>
                <input id="res-heure" name="heure" required type="time" className="w-full bg-white/5 border border-white/20 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[var(--color-brand-primary)] transition-colors [color-scheme:dark]" />
              </div>
            </div>

            <div>
              <label htmlFor="res-date" className="block text-sm font-medium text-white/80 mb-2">Date *</label>
              <input id="res-date" name="date" required type="date" className="w-full bg-white/5 border border-white/20 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[var(--color-brand-primary)] transition-colors [color-scheme:dark]" min={new Date().toISOString().split('T')[0]} />
            </div>

            <div>
              <label htmlFor="res-message" className="block text-sm font-medium text-white/80 mb-2">Message (optionnel)</label>
              <textarea id="res-message" name="message" rows={2} className="w-full bg-white/5 border border-white/20 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[var(--color-brand-primary)] transition-colors" placeholder="Une occasion spéciale ? Des précisions ?"></textarea>
            </div>

            <button type="submit" className="w-full flex items-center justify-center gap-2 bg-[var(--color-brand-primary)] hover:bg-[#1a3223] text-white px-8 py-4 rounded-full font-medium transition-colors duration-300 mt-4">
              Envoyer via WhatsApp
              <WhatsappLogo size={20} />
            </button>
            <p className="text-center text-xs text-white/50 mt-4">
              Votre demande sera envoyée au restaurant via WhatsApp — nous confirmons directement.
            </p>
          </div>
        </form>

      </div>
    </section>
  );
}
