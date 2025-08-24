import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle, Download, Mail, ShoppingBag } from 'lucide-react';
import { usdToInr } from '../utils/currency';

const OrderSuccess: React.FC = () => {
  const location = useLocation();
  const { orderTotal, orderNumber, email } = location.state || {};

  if (!orderTotal) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Order not found</h2>
          <Link to="/" className="text-blue-600 hover:text-blue-700">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="mb-6">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Order Confirmed!
              </h1>
              <p className="text-gray-600">
                Thank you for your purchase. Your order has been successfully placed.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Order Details</h3>
                  <p className="text-sm text-gray-600 mb-1">
                    Order Number: <span className="font-medium text-gray-900">{orderNumber}</span>
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    Total: <span className="font-medium text-gray-900">{usdToInr(orderTotal)}</span>
                  </p>
                  <p className="text-sm text-gray-600">
                    Date: <span className="font-medium text-gray-900">{new Date().toLocaleDateString()}</span>
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Delivery Information</h3>
                  <p className="text-sm text-gray-600 mb-1">
                    Email: <span className="font-medium text-gray-900">{email}</span>
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    Estimated Delivery: <span className="font-medium text-gray-900">5-7 business days</span>
                  </p>
                  <p className="text-sm text-gray-600">
                    Tracking info will be sent to your email
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center justify-center space-x-2 p-4 bg-blue-50 rounded-lg">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium text-blue-800">
                    Confirmation email sent
                  </span>
                </div>
                <div className="flex items-center justify-center space-x-2 p-4 bg-green-50 rounded-lg">
                  <Download className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium text-green-800">
                    Receipt available
                  </span>
                </div>
                <div className="flex items-center justify-center space-x-2 p-4 bg-purple-50 rounded-lg">
                  <ShoppingBag className="h-5 w-5 text-purple-600" />
                  <span className="text-sm font-medium text-purple-800">
                    Order processing
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">What's Next?</h3>
                <div className="text-left space-y-2 text-sm text-gray-600">
                  <p>• You'll receive a confirmation email shortly with your order details</p>
                  <p>• We'll send you tracking information once your order ships</p>
                  <p>• Your order will be delivered within 5-7 business days</p>
                  <p>• You can track your order status in your account</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link
                  to="/orders"
                  className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors transform hover:scale-105"
                >
                  View Order Status
                </Link>
                <Link
                  to="/shop"
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  Questions about your order?{' '}
                  <Link to="/contact" className="text-blue-600 hover:text-blue-700">
                    Contact our support team
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;