
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, AlertCircle, CheckCircle } from "lucide-react";

export const AttendanceOverview = () => {
  const shiftData = [
    {
      shift: "Morning Shift",
      time: "06:00 - 14:00",
      present: 987,
      total: 1050,
      percentage: 94.0,
      status: "optimal",
      lateArrivals: 12,
      earlyDepartures: 3
    },
    {
      shift: "Afternoon Shift",
      time: "14:00 - 22:00",
      present: 854,
      total: 900,
      percentage: 94.9,
      status: "optimal",
      lateArrivals: 8,
      earlyDepartures: 2
    },
    {
      shift: "Night Shift",
      time: "22:00 - 06:00",
      present: 735,
      total: 800,
      percentage: 91.9,
      status: "attention",
      lateArrivals: 15,
      earlyDepartures: 7
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'optimal': return 'bg-green-500';
      case 'attention': return 'bg-yellow-500';
      case 'critical': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'optimal': return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Optimal</Badge>;
      case 'attention': return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Needs Attention</Badge>;
      case 'critical': return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Critical</Badge>;
      default: return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Clock className="w-5 h-5 mr-2 text-[#007B7F]" />
          Real-Time Attendance Overview
        </CardTitle>
        <CardDescription>
          Live attendance tracking across all shifts and locations
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {shiftData.map((shift, index) => (
            <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${getStatusColor(shift.status)}`}></div>
                  <div>
                    <h4 className="font-semibold text-[#1A1A1A]">{shift.shift}</h4>
                    <p className="text-sm text-gray-600">{shift.time}</p>
                  </div>
                </div>
                {getStatusBadge(shift.status)}
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-1" />
                    <span className="text-2xl font-bold text-green-600">{shift.present}</span>
                  </div>
                  <p className="text-xs text-gray-600">Present</p>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Users className="w-4 h-4 text-gray-600 mr-1" />
                    <span className="text-2xl font-bold text-[#1A1A1A]">{shift.total}</span>
                  </div>
                  <p className="text-xs text-gray-600">Total</p>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <AlertCircle className="w-4 h-4 text-[#FF7A00] mr-1" />
                    <span className="text-2xl font-bold text-[#FF7A00]">{shift.lateArrivals}</span>
                  </div>
                  <p className="text-xs text-gray-600">Late Arrivals</p>
                </div>
                
                <div className="text-center">
                  <div className="mb-1">
                    <span className="text-2xl font-bold text-[#007B7F]">{shift.percentage}%</span>
                  </div>
                  <p className="text-xs text-gray-600">Attendance</p>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="mt-3">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${getStatusColor(shift.status)}`}
                    style={{ width: `${shift.percentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
