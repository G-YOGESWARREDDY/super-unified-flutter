import { ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  onAddToCart: () => void;
  onToggleWishlist?: () => void;
  isWishlisted?: boolean;
}

export default function ProductCard({
  name,
  price,
  originalPrice,
  image,
  rating,
  reviews,
  onAddToCart,
  onToggleWishlist,
  isWishlisted = false
}: ProductCardProps) {
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <div className="bg-card rounded-2xl overflow-hidden border border-border transition-all duration-300 hover:shadow-md">
      <div className="relative">
        <div className="h-48 bg-muted">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        
        {discount > 0 && (
          <div className="absolute top-3 left-3 bg-destructive text-destructive-foreground px-2 py-1 rounded-lg text-xs font-medium">
            -{discount}%
          </div>
        )}
        
        <button
          onClick={onToggleWishlist}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center transition-colors hover:bg-white"
        >
          <Heart 
            size={16} 
            className={cn(
              "transition-colors",
              isWishlisted ? "text-destructive fill-current" : "text-muted-foreground"
            )} 
          />
        </button>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{name}</h3>
        
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            <span className="text-xs text-yellow-500">★</span>
            <span className="text-sm font-medium">{rating}</span>
          </div>
          <span className="text-xs text-muted-foreground">({reviews})</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-foreground">${price}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">${originalPrice}</span>
            )}
          </div>
          
          <Button
            onClick={onAddToCart}
            size="sm"
            className="bg-primary hover:bg-primary-dark text-primary-foreground"
          >
            <ShoppingCart size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
}