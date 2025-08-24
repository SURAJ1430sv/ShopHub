import { Product } from '../types/Product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299.99,
    description: 'High-quality wireless headphones with active noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.',
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'Electronics',
    rating: 4.8,
    reviewCount: 124,
    inStock: true,
    featured: true,
    tags: ['wireless', 'premium', 'noise-cancellation']
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    price: 199.99,
    description: 'Advanced fitness tracker with heart rate monitoring, GPS, and 7-day battery life. Track your health and stay connected.',
    images: [
      'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'Electronics',
    rating: 4.6,
    reviewCount: 89,
    inStock: true,
    featured: true,
    tags: ['fitness', 'smartwatch', 'health']
  },
  {
    id: '3',
    name: 'Minimalist Desk Lamp',
    price: 89.99,
    description: 'Elegant LED desk lamp with adjustable brightness and color temperature. Perfect for your modern workspace.',
    images: [
      'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1129019/pexels-photo-1129019.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'Home & Living',
    rating: 4.5,
    reviewCount: 67,
    inStock: true,
    featured: false,
    tags: ['lighting', 'minimalist', 'workspace']
  },
  {
    id: '4',
    name: 'Organic Cotton T-Shirt',
    price: 29.99,
    description: 'Comfortable, sustainable t-shirt made from 100% organic cotton. Available in multiple colors and sizes.',
    images: [
      'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'Fashion',
    rating: 4.4,
    reviewCount: 156,
    inStock: true,
    featured: false,
    tags: ['organic', 'cotton', 'sustainable']
  },
  {
    id: '5',
    name: 'Professional Coffee Maker',
    price: 249.99,
    description: 'Brew barista-quality coffee at home with this professional-grade coffee maker. Features programmable settings and thermal carafe.',
    images: [
      'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/373639/pexels-photo-373639.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'Kitchen',
    rating: 4.7,
    reviewCount: 203,
    inStock: true,
    featured: true,
    tags: ['coffee', 'kitchen', 'professional']
  },
  {
    id: '6',
    name: 'Ergonomic Office Chair',
    price: 399.99,
    description: 'Premium ergonomic office chair with lumbar support, adjustable height, and breathable mesh back. Perfect for long work sessions.',
    images: [
      'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'Furniture',
    rating: 4.6,
    reviewCount: 94,
    inStock: true,
    featured: false,
    tags: ['ergonomic', 'office', 'furniture']
  },
  {
    id: '7',
    name: 'Wireless Bluetooth Speaker',
    price: 79.99,
    description: 'Portable Bluetooth speaker with 360-degree sound, waterproof design, and 12-hour battery life.',
    images: [
      'https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'Electronics',
    rating: 4.3,
    reviewCount: 78,
    inStock: true,
    featured: false,
    tags: ['bluetooth', 'portable', 'waterproof']
  },
  {
    id: '8',
    name: 'Premium Yoga Mat',
    price: 59.99,
    description: 'Non-slip yoga mat made from natural rubber. Provides excellent grip and cushioning for all yoga practices.',
    images: [
      'https://images.pexels.com/photos/317155/pexels-photo-317155.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/396133/pexels-photo-396133.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'Sports & Fitness',
    rating: 4.5,
    reviewCount: 112,
    inStock: false,
    featured: false,
    tags: ['yoga', 'fitness', 'natural-rubber']
  },
  {
    id: '9',
    name: 'Stainless Steel Water Bottle',
    price: 24.99,
    description: 'Insulated stainless steel water bottle that keeps drinks cold for 24 hours or hot for 12 hours. BPA-free and eco-friendly.',
    images: [
      'https://images.pexels.com/photos/1000084/pexels-photo-1000084.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'Sports & Fitness',
    rating: 4.4,
    reviewCount: 85,
    inStock: true,
    featured: false,
    tags: ['water-bottle', 'insulated', 'eco-friendly']
  },
  {
    id: '10',
    name: 'Ceramic Plant Pot Set',
    price: 39.99,
    description: 'Beautiful set of three ceramic plant pots with drainage holes and saucers. Perfect for indoor plants and herbs.',
    images: [
      'https://images.pexels.com/photos/1084199/pexels-photo-1084199.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'Home & Living',
    rating: 4.6,
    reviewCount: 143,
    inStock: true,
    featured: false,
    tags: ['ceramic', 'plants', 'home-decor']
  },
  {
    id: '11',
    name: 'Leather Laptop Bag',
    price: 129.99,
    description: 'Handcrafted leather laptop bag with padded compartments and adjustable shoulder strap. Fits laptops up to 15 inches.',
    images: [
      'https://images.pexels.com/photos/1068638/pexels-photo-1068638.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'Fashion',
    rating: 4.7,
    reviewCount: 67,
    inStock: true,
    featured: false,
    tags: ['leather', 'laptop', 'handcrafted']
  },
  {
    id: '12',
    name: 'Smart Home Security Camera',
    price: 149.99,
    description: 'HD security camera with night vision, motion detection, and smartphone alerts. Keep your home safe and secure.',
    images: [
      'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/3244/pexels-photo-3244.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'Electronics',
    rating: 4.5,
    reviewCount: 98,
    inStock: true,
    featured: true,
    tags: ['security', 'smart-home', 'hd-camera']
  }
];

export const categories = [
  'All',
  'Electronics',
  'Fashion',
  'Home & Living',
  'Kitchen',
  'Furniture',
  'Sports & Fitness'
];

export const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'newest', label: 'Newest First' }
];