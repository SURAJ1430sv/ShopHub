import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import { usdToInr, usdToInrNumber } from '../utils/currency';

interface CartItemProps {
  item: {
    id: string;
    name: string;
    price: number;
    images: string[];
    quantity: number;
    inStock: boolean;
  };
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(item.id);
    } else {
      updateQuantity(item.id, newQuantity);
    }
  };

  return (
    <div className="flex items-center space-x-4 py-4 border-b border-gray-200">
      <Link to={`/product/${item.id}`} className="flex-shrink-0">
        <img
          src={item.images[0]}
          alt={item.name}
          className="w-16 h-16 object-cover rounded-lg"
        />
      </Link>

      <div className="flex-1 min-w-0">
        <Link 
          to={`/product/${item.id}`}
          className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors line-clamp-1"
        >
          {item.name}
        </Link>
        <p className="text-sm text-gray-500 mt-1">
          {item.inStock ? 'In Stock' : 'Out of Stock'}
        </p>
      </div>

      <div className="flex items-center space-x-2">
        <button
          onClick={() => handleQuantityChange(item.quantity - 1)}
          className="p-1 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors"
          disabled={item.quantity <= 1}
        >
          <Minus className="h-4 w-4" />
        </button>
        
        <span className="px-3 py-1 bg-gray-100 rounded-lg text-sm font-medium min-w-[3rem] text-center">
          {item.quantity}
        </span>
        
        <button
          onClick={() => handleQuantityChange(item.quantity + 1)}
          className="p-1 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>

      <div className="text-right">
        <div className="text-lg font-semibold text-gray-900">
          {usdToInr(item.price * item.quantity)}
        </div>
        <div className="text-sm text-gray-500">
          {usdToInr(item.price)} each
        </div>
      </div>

      <button
        onClick={() => removeFromCart(item.id)}
        className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
      >
        <Trash2 className="h-4 w-4" />
      </button>
    </div>
  );
};

export default CartItem;