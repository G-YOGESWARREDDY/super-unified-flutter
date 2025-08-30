import { Star, Clock, Truck } from "lucide-react";
import { cn } from "@/lib/utils";

interface RestaurantCardProps {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: number;
  image: string;
  onClick: () => void;
}

export default function RestaurantCard({
  name,
  cuisine,
  rating,
  deliveryTime,
  deliveryFee,
  image,
  onClick
}: RestaurantCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-card rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-md border border-border"
    >
      <div className="relative h-48 bg-muted">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1">
          <Star size={14} className="text-yellow-500 fill-current" />
          <span className="text-sm font-medium">{rating}</span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-foreground mb-1">{name}</h3>
        <p className="text-sm text-muted-foreground mb-3">{cuisine}</p>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1 text-muted-foreground">
            <Clock size={14} />
            <span>{deliveryTime}</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Truck size={14} />
            <span>${deliveryFee}</span>
          </div>
        </div>
      </div>
    </div>
  );
}