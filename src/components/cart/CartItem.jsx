import { Minus, Plus, Trash2 } from 'lucide-react';

export const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4">
      <img 
        src={item.image} 
        alt={item.name} 
        className="w-20 h-20 object-cover rounded" 
      />
      <div className="flex-1">
        <h3 className="font-semibold text-lg">{item.name}</h3>
        <p className="text-gray-600">S./{item.price}</p>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
          className="bg-gray-200 p-2 rounded hover:bg-gray-300 transition"
        >
          <Minus className="w-4 h-4" />
        </button>
        <span className="w-8 text-center font-semibold">{item.quantity}</span>
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          className="bg-gray-200 p-2 rounded hover:bg-gray-300 transition"
          disabled={item.quantity >= item.stock}
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
      <div className="text-right">
        <p className="font-bold text-lg">
          S./{(item.price * item.quantity).toFixed(2)}
        </p>
      </div>
      <button
        onClick={() => onRemove(item.id)}
        className="text-red-500 hover:text-red-700 transition"
      >
        <Trash2 className="w-5 h-5" />
      </button>
    </div>
  );
};