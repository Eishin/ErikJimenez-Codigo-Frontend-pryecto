import { useState } from 'react';
import { ShoppingCart, User, LogOut, Menu, X, Package } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';

export const Navbar = ({ navigate, currentPath }) => {
  const { user, logout } = useAuth();
  const { itemCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => navigate('/')}
          >
            <Package className="w-8 h-8 mr-2" />
            <span className="font-bold text-xl">TechStore</span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => navigate('/')} 
              className={`hover:text-purple-200 transition ${
                currentPath === '/' ? 'text-purple-200' : ''
              }`}
            >
              Productos
            </button>
            <button 
              onClick={() => navigate('/cart')} 
              className="relative hover:text-purple-200 transition"
            >
              <ShoppingCart className="w-6 h-6" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm">Hola, {user.name}</span>
                <button 
                  onClick={logout} 
                  className="flex items-center space-x-1 hover:text-purple-200 transition"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Salir</span>
                </button>
              </div>
            ) : (
              <button 
                onClick={() => navigate('/login')} 
                className="flex items-center space-x-1 hover:text-purple-200 transition"
              >
                <User className="w-5 h-5" />
                <span>Login</span>
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <button 
              onClick={() => { navigate('/'); setMobileMenuOpen(false); }} 
              className="block w-full text-left py-2 hover:text-purple-200"
            >
              Productos
            </button>
            <button 
              onClick={() => { navigate('/cart'); setMobileMenuOpen(false); }} 
              className="block w-full text-left py-2 hover:text-purple-200"
            >
              Carrito ({itemCount})
            </button>
            {user ? (
              <>
                <div className="py-2">Hola, {user.name}</div>
                <button 
                  onClick={() => { logout(); setMobileMenuOpen(false); }} 
                  className="block w-full text-left py-2 hover:text-purple-200"
                >
                  Cerrar sesión
                </button>
              </>
            ) : (
              <button 
                onClick={() => { navigate('/login'); setMobileMenuOpen(false); }} 
                className="block w-full text-left py-2 hover:text-purple-200"
              >
                Iniciar sesión
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};