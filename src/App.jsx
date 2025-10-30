import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { Router } from './router/Router';
import { Navbar } from './components/layout/Navbar';
import { ProductsPage } from './pages/ProductsPage';
import { CartPage } from './pages/CartPage';
import { LoginPage } from './pages/LoginPage';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          {({ currentPath, navigate }) => (
            <div className="min-h-screen bg-gray-50">
              <Navbar navigate={navigate} currentPath={currentPath} />
              
              {currentPath === '/' && <ProductsPage />}
              {currentPath === '/cart' && <CartPage navigate={navigate} />}
              {currentPath === '/login' && <LoginPage navigate={navigate} />}
            </div>
          )}
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;