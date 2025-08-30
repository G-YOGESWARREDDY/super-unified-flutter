import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  onClick: () => void;
}

export default function ServiceCard({ 
  title, 
  description, 
  icon: Icon, 
  gradient, 
  onClick 
}: ServiceCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "relative p-6 rounded-2xl cursor-pointer transition-all duration-300",
        "hover:scale-105 hover:shadow-lg",
        "bg-card border border-border"
      )}
    >
      <div className={cn(
        "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
        gradient
      )}>
        <Icon size={24} className="text-white" />
      </div>
      
      <h3 className="font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
      
      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}