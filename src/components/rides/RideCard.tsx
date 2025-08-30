import { MapPin, Clock, DollarSign, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RideCardProps {
  id: string;
  type: string;
  name: string;
  capacity: number;
  estimatedTime: string;
  price: number;
  description: string;
  icon: string;
  onSelect: () => void;
}

export default function RideCard({
  type,
  name,
  capacity,
  estimatedTime,
  price,
  description,
  icon,
  onSelect
}: RideCardProps) {
  return (
    <div className="bg-card rounded-2xl p-4 border border-border transition-all duration-300 hover:shadow-md hover:scale-105">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
            <span className="text-2xl">{icon}</span>
          </div>
          <div>
            <h3 className="font-semibold text-foreground">{name}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold text-foreground">${price}</p>
          <p className="text-xs text-muted-foreground">per ride</p>
        </div>
      </div>
      
      <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <Users size={14} />
          <span>{capacity} seats</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock size={14} />
          <span>{estimatedTime} min</span>
        </div>
      </div>
      
      <Button 
        onClick={onSelect}
        className="w-full bg-primary hover:bg-primary-dark text-primary-foreground"
      >
        Book {type}
      </Button>
    </div>
  );
}