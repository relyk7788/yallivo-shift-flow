
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, Clock, User, AlertTriangle, CheckCircle, XCircle } from "lucide-react";

export const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      type: "attendance",
      icon: CheckCircle,
      title: "Bulk attendance marked",
      description: "Morning shift - Factory A",
      timestamp: "2 minutes ago",
      status: "success",
      details: "987 employees marked present"
    },
    {
      id: 2,
      type: "payroll",
      icon: Clock,
      title: "Payroll processing initiated",
      description: "Monthly payroll for November 2024",
      timestamp: "15 minutes ago",
      status: "processing",
      details: "Processing 2,847 employees"
    },
    {
      id: 3,
      type: "compliance",
      icon: AlertTriangle,
      title: "Compliance alert triggered",
      description: "Overtime limit exceeded - Dept. Assembly",
      timestamp: "32 minutes ago",
      status: "warning",
      details: "15 employees over 60-hour limit"
    },
    {
      id: 4,
      type: "employee",
      icon: User,
      title: "New employee onboarded",
      description: "Rajesh Kumar - Machine Operator",
      timestamp: "1 hour ago",
      status: "success",
      details: "ID: EMP2848, Dept: Production"
    },
    {
      id: 5,
      type: "system",
      icon: XCircle,
      title: "Biometric sync failed",
      description: "Device B2-Floor3 connectivity issue",
      timestamp: "2 hours ago",
      status: "error",
      details: "Manual intervention required"
    }
  ];

  const getIconColor = (status: string) => {
    switch (status) {
      case 'success': return 'text-green-600';
      case 'warning': return 'text-yellow-600';
      case 'error': return 'text-red-600';
      case 'processing': return 'text-[#007B7F]';
      default: return 'text-gray-600';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'success': return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Success</Badge>;
      case 'warning': return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Warning</Badge>;
      case 'error': return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Error</Badge>;
      case 'processing': return <Badge className="bg-[#007B7F]/10 text-[#007B7F] hover:bg-[#007B7F]/10">Processing</Badge>;
      default: return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Activity className="w-5 h-5 mr-2 text-[#007B7F]" />
          Recent Activity
        </CardTitle>
        <CardDescription>
          Latest system activities and notifications
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => {
            const Icon = activity.icon;
            return (
              <div key={activity.id} className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className={`p-2 rounded-full bg-gray-100`}>
                  <Icon className={`w-4 h-4 ${getIconColor(activity.status)}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-medium text-[#1A1A1A] truncate">{activity.title}</p>
                    {getStatusBadge(activity.status)}
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{activity.description}</p>
                  <p className="text-xs text-gray-500">{activity.details}</p>
                  <p className="text-xs text-gray-400 mt-1">{activity.timestamp}</p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
