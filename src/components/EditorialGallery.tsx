import { ScrollReveal } from './ScrollReveal';
import { twMerge } from 'tailwind-merge';

interface EditorialGalleryProps {
  title: string;
  description?: string;
  images: string[];
  reverse?: boolean;
}

export function EditorialGallery({ title, description, images, reverse = false }: EditorialGalleryProps) {
  if (!images || images.length === 0) return null;

  return (
    <section className="py-24 px-6 sm:px-12 max-w-7xl mx-auto overflow-hidden">
      <div className={twMerge(
        "flex flex-col gap-12 lg:gap-24",
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      )}>
        {/* Text Area */}
        <ScrollReveal className="lg:w-1/3 flex flex-col justify-center" direction={reverse ? 'right' : 'left'}>
          <h2 className="font-display text-4xl sm:text-5xl font-medium mb-6">{title}</h2>
          {description && (
            <p className="text-[var(--color-brand-gray)] text-lg leading-relaxed max-w-md">
              {description}
            </p>
          )}
        </ScrollReveal>

        {/* Dynamic Image Composition based on asset count */}
        <ScrollReveal className="lg:w-2/3" delay={0.2} direction="up">
          {images.length === 1 && (
            <div className="w-full aspect-[4/3] overflow-hidden rounded-sm bg-black/5">
              <img 
                src={images[0]} 
                alt={title} 
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {images.length === 2 && (
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="w-full sm:w-1/2 aspect-[3/4] overflow-hidden rounded-sm bg-black/5 mt-0 sm:mt-12">
                <img src={images[0]} alt={`${title} 1`} className="w-full h-full object-cover" />
              </div>
              <div className="w-full sm:w-1/2 aspect-[3/4] overflow-hidden rounded-sm bg-black/5 mb-0 sm:mb-12">
                <img src={images[1]} alt={`${title} 2`} className="w-full h-full object-cover" />
              </div>
            </div>
          )}

          {images.length >= 3 && (
            <div className="flex gap-4 sm:gap-6 h-[60dvh] min-h-[500px]">
              <div className="w-2/3 h-full overflow-hidden rounded-sm bg-black/5">
                <img src={images[0]} alt={`${title} 1`} className="w-full h-full object-cover" />
              </div>
              <div className="w-1/3 flex flex-col gap-4 sm:gap-6 h-full">
                <div className="flex-1 overflow-hidden rounded-sm bg-black/5">
                  <img src={images[1]} alt={`${title} 2`} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 overflow-hidden rounded-sm bg-black/5">
                  <img src={images[2]} alt={`${title} 3`} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
