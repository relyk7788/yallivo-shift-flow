import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Users, Clock, Calendar, BarChart3 } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { path: "/", label: "Dashboard", icon: Home },
  { path: "/employees", label: "Employees", icon: Users },
  { path: "/attendance", label: "Attendance", icon: Clock },
  { path: "/shifts", label: "Shifts", icon: Calendar },
  { path: "/reports", label: "Reports", icon: BarChart3 },
];

export const QuickNav = () => {
  const location = useLocation();

  return (
    <Card className="mb-6">
      <CardContent className="p-4">
        <div className="flex flex-wrap gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Button
                key={item.path}
                asChild
                variant={isActive ? "default" : "outline"}
                size="sm"
                className="flex items-center gap-2"
              >
                <Link to={item.path}>
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};