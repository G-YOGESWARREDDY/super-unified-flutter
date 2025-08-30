import { UtensilsCrossed, ShoppingBag, Car, MapPin, Clock, TrendingUp } from "lucide-react";
import HeroSection from "@/components/home/HeroSection";
import ServiceCard from "@/components/home/ServiceCard";

interface HomePageProps {
  onServiceSelect: (service: string) => void;
}

export default function HomePage({ onServiceSelect }: HomePageProps) {
  const services = [
    {
      title: "Food Delivery",
      description: "Order from your favorite restaurants",
      icon: UtensilsCrossed,
      gradient: "bg-gradient-food",
      action: "food"
    },
    {
      title: "Shopping",
      description: "Shop products with great deals",
      icon: ShoppingBag, 
      gradient: "bg-gradient-primary",
      action: "shopping"
    },
    {
      title: "Book Rides",
      description: "Quick & reliable transportation",
      icon: Car,
      gradient: "bg-gradient-secondary", 
      action: "rides"
    }
  ];

  const quickStats = [
    { icon: MapPin, label: "Cities", value: "50+" },
    { icon: Clock, label: "Avg Delivery", value: "25 min" },
    { icon: TrendingUp, label: "Happy Users", value: "1M+" }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="max-w-md mx-auto p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 pt-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">SuperApp</h1>
            <p className="text-sm text-muted-foreground">Your everyday companion</p>
          </div>
          <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
            <span className="text-white font-semibold">SA</span>
          </div>
        </div>

        {/* Hero Section */}
        <HeroSection onServiceSelect={onServiceSelect} />

        {/* Services Grid */}
        <div className="space-y-4 mb-8">
          <h2 className="text-lg font-semibold text-foreground">Our Services</h2>
          <div className="grid gap-4">
            {services.map((service) => (
              <ServiceCard
                key={service.action}
                title={service.title}
                description={service.description}
                icon={service.icon}
                gradient={service.gradient}
                onClick={() => onServiceSelect(service.action)}
              />
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-card rounded-2xl p-6 border border-border">
          <h3 className="font-semibold text-foreground mb-4">Why Choose SuperApp?</h3>
          <div className="grid grid-cols-3 gap-4">
            {quickStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <stat.icon size={20} className="text-primary" />
                </div>
                <p className="text-lg font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}