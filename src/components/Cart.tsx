import { X, Minus, Plus, ShoppingBag, WhatsappLogo } from '@phosphor-icons/react';
import { useCart } from '../context/CartContext';
import { restaurant } from '../data/restaurant';
import { motion, AnimatePresence } from 'motion/react';

export function Cart() {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, totalPrice } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR').format(price) + ' FCFA';
  };

  const generateWhatsAppLink = () => {
    const baseUrl = `https://wa.me/${restaurant.contact.whatsapp}?text=`;
    
    let message = `Bonjour ${restaurant.name}, je souhaite commander :\n\n`;
    
    items.forEach(item => {
      message += `- ${item.quantity}x ${item.name} (${item.price} FCFA)\n`;
    });
    
    message += `\n*Total: ${formatPrice(totalPrice)}*`;
    
    return baseUrl + encodeURIComponent(message);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          />
          
          {/* Cart Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-[100dvh] w-full max-w-md bg-[var(--color-brand-bg)] shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-black/10">
              <h2 className="text-2xl font-display font-medium">Votre Commande</h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 -mr-2 hover:bg-black/5 rounded-full transition-colors"
                aria-label="Fermer le panier"
              >
                <X size={24} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-black/50 space-y-4">
                  <ShoppingBag size={48} weight="thin" />
                  <p>Votre panier est vide</p>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-sm"
                    />
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-medium text-[var(--color-brand-text)] line-clamp-2">
                          {item.name}
                        </h3>
                        <p className="text-black/60 text-sm mt-1">{item.price} FCFA</p>
                      </div>
                      
                      <div className="flex items-center gap-4 mt-2">
                        <div className="flex items-center border border-black/20 rounded-full px-2 py-1">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:text-[var(--color-brand-accent)] transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center text-sm font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:text-[var(--color-brand-accent)] transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 bg-white border-t border-black/10">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-black/60 font-medium">Total</span>
                  <span className="text-2xl font-display font-medium">
                    {formatPrice(totalPrice)}
                  </span>
                </div>
                
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[var(--color-brand-primary)] text-white py-4 px-6 rounded-full font-medium hover:bg-[#1a3223] transition-colors"
                >
                  <WhatsappLogo size={24} weight="fill" />
                  Commander sur WhatsApp
                </a>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
