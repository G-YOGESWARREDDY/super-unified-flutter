import { useState } from "react";
import BottomNavigation from "@/components/layout/BottomNavigation";
import HomePage from "@/pages/HomePage";
import FoodPage from "@/pages/FoodPage";
import ShoppingPage from "@/pages/ShoppingPage";
import RidesPage from "@/pages/RidesPage";
import ProfilePage from "@/pages/ProfilePage";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");

  const handleServiceSelect = (service: string) => {
    setActiveTab(service);
  };

  const renderActivePage = () => {
    switch (activeTab) {
      case "home":
        return <HomePage onServiceSelect={handleServiceSelect} />;
      case "food":
        return <FoodPage />;
      case "shopping":
        return <ShoppingPage />;
      case "rides":
        return <RidesPage />;
      case "profile":
        return <ProfilePage />;
      default:
        return <HomePage onServiceSelect={handleServiceSelect} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {renderActivePage()}
      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;
