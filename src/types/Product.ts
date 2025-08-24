export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  category: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  featured?: boolean;
  tags: string[];
}

export interface ProductFilters {
  category: string;
  minPrice: number;
  maxPrice: number;
  inStock: boolean;
  rating: number;
}

export interface SortOption {
  value: string;
  label: string;
}