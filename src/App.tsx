import { CartProvider } from './context/CartContext';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Signatures } from './components/Signatures';
import { Menu } from './components/Menu';
import { Cart } from './components/Cart';
import { Footer } from './components/Footer';
import { DishMarquee } from './components/DishMarquee';
import { EditorialGallery } from './components/EditorialGallery';
import { Reviews } from './components/Reviews';
import { Reservation } from './components/Reservation';
import { Contact } from './components/Contact';
import { restaurant } from './data/restaurant';

function App() {
  return (
    <CartProvider>
      <div className="min-h-[100dvh] flex flex-col bg-[var(--color-brand-bg)] selection:bg-[var(--color-brand-primary)] selection:text-white">
        <Navigation />
        <Cart />
        
        <main className="flex-1">
          <Hero />
          
          <DishMarquee />

          <Signatures />

          <Menu />
          
          <div id="ambiance-section">
            <EditorialGallery 
              title="Pensé pour se retrouver" 
              description="Une salle baignée de lumière le midi, plus tamisée le soir. Des tables espacées, des banquettes confortables et une musique qui accompagne les discussions sans jamais les couvrir."
              images={restaurant.gallery.ambiance}
            />
          </div>

          <EditorialGallery 
            title="À Table" 
            description="Des assiettes généreuses que l'on fait passer de main en main, du vin servi à la bonne température et un service présent juste quand il le faut. L'essentiel est là."
            images={restaurant.gallery.experience}
            reverse={true}
          />

          <EditorialGallery 
            title="Ce qui se passe en cuisine" 
            description="Dès les premières lueurs du jour, les bouillons commencent à réduire et les viandes sont mises à mariner. Pas de raccourcis, juste le temps nécessaire pour que chaque plat ait le goût qu'il mérite."
            images={restaurant.gallery.savoirFaire}
          />

          <Reviews />
          <Reservation />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
