import { useState } from "react";
import { MapPin, Navigation, Clock, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import RideCard from "@/components/rides/RideCard";
import { mockRideOptions } from "@/data/mockData";

export default function RidesPage() {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [showRideOptions, setShowRideOptions] = useState(false);

  const handleSearchRides = () => {
    if (pickup && destination) {
      setShowRideOptions(true);
    }
  };

  const handleSelectRide = (rideId: string) => {
    // In a real app, this would initiate the booking process
    console.log(`Selected ride: ${rideId}`);
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="p-4 border-b border-border">
          <h1 className="text-xl font-bold text-foreground mb-1">Book a Ride</h1>
          <p className="text-sm text-muted-foreground">Quick & reliable transportation</p>
        </div>

        {/* Location Input */}
        <div className="p-4 space-y-4">
          <div className="bg-card rounded-2xl p-4 border border-border">
            <div className="space-y-4">
              {/* Pickup Location */}
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <div className="w-3 h-3 bg-success rounded-full"></div>
                </div>
                <Input
                  placeholder="Pickup location"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Connection Line */}
              <div className="relative">
                <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-border"></div>
              </div>

              {/* Destination */}
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <div className="w-3 h-3 bg-destructive rounded-full"></div>
                </div>
                <Input
                  placeholder="Where to?"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <Button 
              onClick={handleSearchRides}
              className="w-full mt-4 bg-primary hover:bg-primary-dark text-primary-foreground"
              disabled={!pickup || !destination}
            >
              <Navigation size={16} className="mr-2" />
              Find Rides
            </Button>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="justify-start">
              <MapPin size={16} className="mr-2" />
              Home
            </Button>
            <Button variant="outline" className="justify-start">
              <Plus size={16} className="mr-2" />
              Add Favorite
            </Button>
          </div>
        </div>

        {/* Ride Options */}
        {showRideOptions && (
          <div className="p-4">
            <div className="flex items-center gap-2 mb-4">
              <Clock size={16} className="text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Available rides</span>
            </div>

            <div className="space-y-3">
              {mockRideOptions.map((ride) => (
                <RideCard
                  key={ride.id}
                  {...ride}
                  onSelect={() => handleSelectRide(ride.id)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Recent Rides */}
        <div className="p-4">
          <h3 className="font-semibold text-foreground mb-4">Recent Rides</h3>
          <div className="space-y-3">
            {["Home to Office", "Mall to Restaurant", "Airport Pickup"].map((ride, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-card rounded-xl border border-border">
                <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                  <MapPin size={16} className="text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-foreground">{ride}</p>
                  <p className="text-sm text-muted-foreground">2 days ago</p>
                </div>
                <Button variant="ghost" size="sm">
                  Book Again
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}