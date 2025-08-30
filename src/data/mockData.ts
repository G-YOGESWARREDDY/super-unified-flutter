// Mock data for the super app

export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: number;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
}

export interface RideOption {
  id: string;
  type: string;
  name: string;
  capacity: number;
  estimatedTime: string;
  price: number;
  description: string;
  icon: string;
}

export const mockRestaurants: Restaurant[] = [
  {
    id: "1",
    name: "Mario's Italian Kitchen",
    cuisine: "Italian, Pizza, Pasta",
    rating: 4.5,
    deliveryTime: "25-35",
    deliveryFee: 2.99,
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop"
  },
  {
    id: "2", 
    name: "Spice Garden",
    cuisine: "Indian, Curry, Biryani",
    rating: 4.3,
    deliveryTime: "30-40",
    deliveryFee: 1.99,
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop"
  },
  {
    id: "3",
    name: "Dragon Palace",
    cuisine: "Chinese, Asian, Noodles",
    rating: 4.6,
    deliveryTime: "20-30",
    deliveryFee: 2.49,
    image: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=400&h=300&fit=crop"
  }
];

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Wireless Bluetooth Headphones",
    price: 79.99,
    originalPrice: 99.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
    rating: 4.5,
    reviews: 128,
    category: "Electronics"
  },
  {
    id: "2",
    name: "Organic Cotton T-Shirt",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop",
    rating: 4.2,
    reviews: 85,
    category: "Fashion"
  },
  {
    id: "3",
    name: "Smart Water Bottle",
    price: 45.00,
    originalPrice: 60.00,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=300&h=300&fit=crop",
    rating: 4.7,
    reviews: 92,
    category: "Health"
  }
];

export const mockRideOptions: RideOption[] = [
  {
    id: "1",
    type: "Bike",
    name: "Quick Bike",
    capacity: 1,
    estimatedTime: "8",
    price: 3.50,
    description: "Fast and eco-friendly",
    icon: "🏍️"
  },
  {
    id: "2",
    type: "Auto",
    name: "Auto Rickshaw", 
    capacity: 3,
    estimatedTime: "12",
    price: 5.25,
    description: "Convenient for short trips",
    icon: "🛺"
  },
  {
    id: "3",
    type: "Car",
    name: "Economy Car",
    capacity: 4,
    estimatedTime: "15",
    price: 8.75,
    description: "Comfortable & affordable",
    icon: "🚗"
  },
  {
    id: "4",
    type: "Premium",
    name: "Premium Sedan",
    capacity: 4,
    estimatedTime: "10",
    price: 15.00,
    description: "Luxury experience",
    icon: "🚘"
  }
];