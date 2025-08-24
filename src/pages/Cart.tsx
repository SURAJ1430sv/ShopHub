import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart as ShoppingCartIcon, ArrowLeft } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import CartItem from '../component/CartItem';
import { usdToInr, usdToInrNumber, FREE_SHIPPING_THRESHOLD_INR } from '../utils/currency';

const Cart: React.FC = () => {
  const { items, totalPrice, totalItems, clearCart } = useCart();
  const { user } = useAuth();

  const shippingCost = totalPrice > (FREE_SHIPPING_THRESHOLD_INR / 83) ? 0 : 9.99;
  const tax = totalPrice * 0.08; // 8% tax
  const finalTotal = totalPrice + shippingCost + tax;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <ShoppingCartIcon className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors transform hover:scale-105"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
          <Link
            to="/shop"
            className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Continue Shopping
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  Cart Items ({totalItems})
                </h2>
                <button
                  onClick={clearCart}
                  className="text-red-600 hover:text-red-700 text-sm transition-colors"
                >
                  Clear Cart
                </button>
              </div>
              
              <div className="space-y-4">
                {items.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">{usdToInr(totalPrice)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold">
                    {shippingCost === 0 ? 'Free' : usdToInr(shippingCost)}
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-semibold">{usdToInr(tax)}</span>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>{usdToInr(finalTotal)}</span>
                  </div>
                </div>

                {totalPrice < (FREE_SHIPPING_THRESHOLD_INR / 83) && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <p className="text-blue-800 text-sm">
                      Add {usdToInr((FREE_SHIPPING_THRESHOLD_INR / 83) - totalPrice)} more for free shipping!
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-6 space-y-3">
                {user ? (
                  <Link
                    to="/checkout"
                    className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors transform hover:scale-105"
                  >
                    Proceed to Checkout
                  </Link>
                ) : (
                  <>
                    <Link
                      to="/login?redirect=checkout"
                      className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors transform hover:scale-105"
                    >
                      Login to Checkout
                    </Link>
                    <Link
                      to="/checkout"
                      className="block w-full bg-gray-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
                    >
                      Guest Checkout
                    </Link>
                  </>
                )}
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  Secure checkout powered by SSL encryption
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;