import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { ProductCard } from '../components/products/ProductCard';
import { ProductFilter } from '../components/products/ProductFilter';
import { PRODUCTS } from '../data/products';

export const ProductsPage = () => {
  const { addToCart } = useCart();
  const [filter, setFilter] = useState('Todos');

  const categories = ['Todos', ...new Set(PRODUCTS.map(p => p.category))];
  const filteredProducts = filter === 'Todos' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        Nuestros Productos
      </h1>
      
      <ProductFilter 
        categories={categories}
        selected={filter}
        onSelect={setFilter}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <ProductCard 
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};