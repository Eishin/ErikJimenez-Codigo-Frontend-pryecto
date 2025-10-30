import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { CartItem } from '../components/cart/CartItem';
import { CartSummary } from '../components/cart/CartSummary';

export const CartPage = ({ navigate }) => {
  const { cart, removeFromCart, updateQuantity, clearCart, total } = useCart();
  const { user } = useAuth();

  const handleCheckout = () => {
    if (!user) {
      navigate('/login');
      return;
    }
    alert('¡Compra realizada con éxito! Total: $' + total.toFixed(2));
    clearCart();
    navigate('/');
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <ShoppingCart className="w-24 h-24 mx-auto text-gray-300 mb-4" />
        <h2 className="text-3xl font-bold text-gray-700 mb-4">
          Tu carrito está vacío
        </h2>
        <button
          onClick={() => navigate('/')}
          className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition"
        >
          Ver productos
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        Carrito de Compras
      </h1>
      
      <div className="space-y-4 mb-8">
        {cart.map(item => (
          <CartItem 
            key={item.id}
            item={item}
            onUpdateQuantity={updateQuantity}
            onRemove={removeFromCart}
          />
        ))}
      </div>

      <CartSummary 
        total={total}
        onCheckout={handleCheckout}
        user={user}
      />
    </div>
  );
};