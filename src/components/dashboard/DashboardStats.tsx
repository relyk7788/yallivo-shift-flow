
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Clock, DollarSign, AlertTriangle, TrendingUp, UserCheck } from "lucide-react";

export const DashboardStats = () => {
  const stats = [
    {
      title: "Total Employees",
      value: "2,847",
      change: "+12%",
      trend: "up",
      icon: Users,
      color: "text-[#007B7F]",
      bgColor: "bg-[#007B7F]/10"
    },
    {
      title: "Present Today",
      value: "2,654",
      change: "93.2%",
      trend: "stable",
      icon: UserCheck,
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      title: "Overtime Hours",
      value: "1,247",
      change: "-8.5%",
      trend: "down",
      icon: Clock,
      color: "text-[#FF7A00]",
      bgColor: "bg-[#FF7A00]/10"
    },
    {
      title: "Monthly Payroll",
      value: "₹4.2Cr",
      change: "+5.2%",
      trend: "up",
      icon: DollarSign,
      color: "text-[#007B7F]",
      bgColor: "bg-[#007B7F]/10"
    },
    {
      title: "Compliance Score",
      value: "98.5%",
      change: "+2.1%",
      trend: "up",
      icon: TrendingUp,
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      title: "Pending Actions",
      value: "23",
      change: "-15%",
      trend: "down",
      icon: AlertTriangle,
      color: "text-yellow-600",
      bgColor: "bg-yellow-100"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                  <Icon className={`w-4 h-4 ${stat.color}`} />
                </div>
                <Badge 
                  variant={stat.trend === 'up' ? 'default' : stat.trend === 'down' ? 'destructive' : 'secondary'}
                  className="text-xs"
                >
                  {stat.change}
                </Badge>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#1A1A1A] mb-1">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.title}</p>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
