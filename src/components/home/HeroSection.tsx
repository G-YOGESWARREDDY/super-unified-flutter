import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onServiceSelect: (service: string) => void;
}

export default function HeroSection({ onServiceSelect }: HeroSectionProps) {
  return (
    <div className="relative bg-gradient-hero text-white rounded-2xl p-6 mb-6 overflow-hidden">
      <div className="relative z-10">
        <h1 className="text-2xl font-bold mb-2">Everything you need,</h1>
        <h2 className="text-xl font-semibold mb-4 text-white/90">all in one app</h2>
        <p className="text-white/80 mb-6 text-sm">
          Order food, shop products, book rides - your super app for daily needs
        </p>
        
        <div className="grid grid-cols-2 gap-3">
          <Button
            onClick={() => onServiceSelect("food")}
            variant="secondary"
            className="bg-white/20 text-white border-white/30 hover:bg-white/30 backdrop-blur-sm"
          >
            Order Food
            <ArrowRight size={16} className="ml-1" />
          </Button>
          <Button
            onClick={() => onServiceSelect("shopping")}
            variant="secondary" 
            className="bg-white/20 text-white border-white/30 hover:bg-white/30 backdrop-blur-sm"
          >
            Shop Now
            <ArrowRight size={16} className="ml-1" />
          </Button>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-8 -translate-x-8" />
    </div>
  );
}