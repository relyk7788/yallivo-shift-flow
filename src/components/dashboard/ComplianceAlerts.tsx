
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Clock, FileText, Shield, Eye } from "lucide-react";

export const ComplianceAlerts = () => {
  const alerts = [
    {
      id: 1,
      type: "critical",
      title: "ESI Return Due",
      description: "Monthly ESI return filing due in 2 days",
      deadline: "Dec 21, 2024",
      action: "File Return",
      icon: FileText
    },
    {
      id: 2,
      type: "warning",
      title: "Overtime Violation",
      description: "15 employees exceeded 60-hour weekly limit",
      deadline: "Immediate",
      action: "Review Cases",
      icon: Clock
    },
    {
      id: 3,
      type: "info",
      title: "PF Audit Scheduled",
      description: "Department audit scheduled for next week",
      deadline: "Dec 25, 2024",
      action: "Prepare Docs",
      icon: Shield
    },
    {
      id: 4,
      type: "warning",
      title: "Contract Renewals",
      description: "12 employee contracts expiring this month",
      deadline: "Dec 31, 2024",
      action: "Process Renewals",
      icon: AlertTriangle
    }
  ];

  const getAlertColor = (type: string) => {
    switch (type) {
      case 'critical': return 'border-l-red-500 bg-red-50';
      case 'warning': return 'border-l-yellow-500 bg-yellow-50';
      case 'info': return 'border-l-blue-500 bg-blue-50';
      default: return 'border-l-gray-500 bg-gray-50';
    }
  };

  const getAlertBadge = (type: string) => {
    switch (type) {
      case 'critical': return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Critical</Badge>;
      case 'warning': return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Warning</Badge>;
      case 'info': return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Info</Badge>;
      default: return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <AlertTriangle className="w-5 h-5 mr-2 text-[#FF7A00]" />
          Compliance Alerts
        </CardTitle>
        <CardDescription>
          Active compliance notifications and deadlines
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {alerts.map((alert) => {
            const Icon = alert.icon;
            return (
              <div key={alert.id} className={`border-l-4 p-4 rounded-r-lg ${getAlertColor(alert.type)}`}>
                <div className="flex items-start space-x-3">
                  <Icon className="w-5 h-5 mt-0.5 text-gray-600" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-[#1A1A1A]">{alert.title}</h4>
                      {getAlertBadge(alert.type)}
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{alert.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">Due: {alert.deadline}</span>
                      <Button size="sm" variant="outline" className="text-xs">
                        <Eye className="w-3 h-3 mr-1" />
                        {alert.action}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          
          <div className="pt-2">
            <Button variant="outline" className="w-full text-[#007B7F] border-[#007B7F] hover:bg-[#007B7F] hover:text-white">
              View All Alerts
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
