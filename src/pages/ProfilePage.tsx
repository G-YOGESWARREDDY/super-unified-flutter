import { User, Wallet, ShoppingBag, Car, Settings, Bell, HelpCircle, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProfilePage() {
  const profileMenuItems = [
    { icon: Wallet, label: "Wallet", value: "$45.20", action: () => {} },
    { icon: ShoppingBag, label: "Order History", value: "12 orders", action: () => {} },
    { icon: Car, label: "Ride History", value: "8 rides", action: () => {} },
    { icon: Bell, label: "Notifications", value: "", action: () => {} },
    { icon: HelpCircle, label: "Help & Support", value: "", action: () => {} },
    { icon: Settings, label: "Settings", value: "", action: () => {} },
  ];

  const quickStats = [
    { label: "Orders", value: "12", color: "text-success" },
    { label: "Rides", value: "8", color: "text-accent" },
    { label: "Saved", value: "$127", color: "text-secondary" },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="max-w-md mx-auto">
        {/* Profile Header */}
        <div className="bg-gradient-primary text-white p-6 rounded-b-2xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <User size={32} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold">John Doe</h1>
              <p className="text-white/80">john.doe@email.com</p>
              <p className="text-sm text-white/70">+1 234 567 8900</p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            {quickStats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 space-y-6">
          {/* Wallet Card */}
          <div className="bg-gradient-secondary rounded-2xl p-6 text-white">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold">SuperApp Wallet</h3>
              <Wallet size={20} />
            </div>
            <p className="text-2xl font-bold mb-4">$45.20</p>
            <div className="flex gap-2">
              <Button variant="secondary" size="sm" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                Add Money
              </Button>
              <Button variant="secondary" size="sm" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                Send Money
              </Button>
            </div>
          </div>

          {/* Menu Items */}
          <div className="space-y-2">
            {profileMenuItems.map((item, index) => (
              <button
                key={index}
                onClick={item.action}
                className="w-full flex items-center justify-between p-4 bg-card rounded-xl border border-border hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <item.icon size={20} className="text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{item.label}</span>
                </div>
                {item.value && (
                  <span className="text-sm text-muted-foreground">{item.value}</span>
                )}
              </button>
            ))}
          </div>

          {/* Recent Activity */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Recent Activity</h3>
            <div className="space-y-3">
              {[
                { type: "Order", desc: "Pizza from Mario's Kitchen", amount: "-$24.99", time: "2h ago" },
                { type: "Ride", desc: "Trip to Downtown", amount: "-$8.75", time: "1d ago" },
                { type: "Refund", desc: "Order cancellation", amount: "+$15.50", time: "3d ago" },
              ].map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-card rounded-xl border border-border">
                  <div>
                    <p className="font-medium text-foreground">{activity.type}</p>
                    <p className="text-sm text-muted-foreground">{activity.desc}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                  <span className={`font-semibold ${activity.amount.startsWith('+') ? 'text-success' : 'text-foreground'}`}>
                    {activity.amount}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Logout */}
          <Button variant="destructive" className="w-full">
            <LogOut size={16} className="mr-2" />
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}