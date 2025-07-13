
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  UserPlus, 
  Clock, 
  DollarSign, 
  FileText, 
  Download, 
  Settings,
  Calendar,
  AlertTriangle
} from "lucide-react";

export const QuickActions = () => {
  const actions = [
    {
      title: "Add Employee",
      description: "Quick employee onboarding",
      icon: UserPlus,
      color: "bg-[#007B7F] hover:bg-[#006266]",
      textColor: "text-white"
    },
    {
      title: "Mark Attendance",
      description: "Manual attendance entry",
      icon: Clock,
      color: "bg-[#FF7A00] hover:bg-[#e66a00]",
      textColor: "text-white"
    },
    {
      title: "Process Payroll",
      description: "Run monthly payroll",
      icon: DollarSign,
      color: "bg-green-600 hover:bg-green-700",
      textColor: "text-white"
    },
    {
      title: "Generate Report",
      description: "Compliance & audit reports",
      icon: FileText,
      color: "bg-blue-600 hover:bg-blue-700",
      textColor: "text-white"
    },
    {
      title: "Export Data",
      description: "Download attendance logs",
      icon: Download,
      color: "bg-purple-600 hover:bg-purple-700",
      textColor: "text-white"
    },
    {
      title: "Schedule Shifts",
      description: "Plan workforce shifts",
      icon: Calendar,
      color: "bg-indigo-600 hover:bg-indigo-700",
      textColor: "text-white"
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Settings className="w-5 h-5 mr-2 text-[#007B7F]" />
          Quick Actions
        </CardTitle>
        <CardDescription>
          Frequently used HR operations
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-3">
          {actions.map((action, index) => {
            const Icon = action.icon;
            return (
              <Button
                key={index}
                className={`${action.color} ${action.textColor} justify-start h-auto p-4 transition-all duration-200 hover:scale-105`}
                onClick={() => console.log(`Clicked: ${action.title}`)}
              >
                <div className="flex items-center space-x-3">
                  <Icon className="w-5 h-5" />
                  <div className="text-left">
                    <p className="font-medium">{action.title}</p>
                    <p className="text-xs opacity-90">{action.description}</p>
                  </div>
                </div>
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
