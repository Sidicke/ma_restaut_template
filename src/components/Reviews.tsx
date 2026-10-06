import { Star } from '@phosphor-icons/react';
import { ScrollReveal } from './ScrollReveal';

const reviews = [
  {
    id: 1,
    name: "Sandrine Kouame",
    text: "La bouffe est très bonne, l'endroit est beau et côté propreté j'ai aimé. Surtout le cocktail spécial du chef est a découvert 👌 une merveille.",
  },
  {
    id: 2,
    name: "Morice",
    text: "Les plats sont de très bonne qualité. Le chef a proposé une entrée adaptée au régime particulier de notre père. Celui-ci l'a bien appréciée d'ailleurs. 😄",
  },
  {
    id: 3,
    name: "Bertrand Djeugoue",
    text: "Rien a dire sur la qualité de cuisine, vraiment excellente. Je vous recommande vivement de venir pour goûter ses merveilleux plats, la qualité de service rien a reprocher ils sont professionnels et l'ambiance au top.",
  }
];

export function Reviews() {
  return (
    <section className="py-24 sm:py-32 px-6 sm:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <header className="mb-16 text-center">
            <h2 className="font-display text-4xl sm:text-5xl font-medium mb-6">Ce qu'ils en disent</h2>
            <div className="flex justify-center gap-1 text-[var(--color-brand-accent)]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} weight="fill" />
              ))}
            </div>
          </header>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((review, idx) => (
            <ScrollReveal key={review.id} delay={0.1 * idx} direction="up">
              <div className="flex flex-col items-center text-center">
                <p className="text-lg text-[var(--color-brand-gray)] mb-6 italic leading-relaxed">
                  "{review.text}"
                </p>
                <p className="font-medium text-[var(--color-brand-text)]">
                  {review.name}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
