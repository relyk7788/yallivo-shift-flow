
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Clock, DollarSign, FileCheck, AlertTriangle, TrendingUp, Calendar, MapPin } from "lucide-react";
import { DashboardStats } from "@/components/dashboard/DashboardStats";
import { AttendanceOverview } from "@/components/dashboard/AttendanceOverview";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { ComplianceAlerts } from "@/components/dashboard/ComplianceAlerts";

const Index = () => {
  const [selectedLocation, setSelectedLocation] = useState("All Locations");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-[#007B7F] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">Y</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[#1A1A1A]">Yallivo HRMS</h1>
              <p className="text-sm text-gray-600">Precision Workforce. Factory-Ready HR.</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <select 
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007B7F] focus:border-transparent"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            >
              <option>All Locations</option>
              <option>Factory A - Mumbai</option>
              <option>Factory B - Pune</option>
              <option>Factory C - Chennai</option>
            </select>
            <Badge variant="outline" className="bg-[#FF7A00] text-white border-[#FF7A00]">
              <MapPin className="w-3 h-3 mr-1" />
              3 Active Sites
            </Badge>
          </div>
        </div>
      </header>

      <div className="p-6 space-y-6">
        {/* Dashboard Stats */}
        <DashboardStats />

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Attendance & Activity */}
          <div className="lg:col-span-2 space-y-6">
            <AttendanceOverview />
            <RecentActivity />
          </div>

          {/* Right Column - Quick Actions & Alerts */}
          <div className="space-y-6">
            <QuickActions />
            <ComplianceAlerts />
          </div>
        </div>

        {/* Key Features Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-[#007B7F]">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-lg">
                <Clock className="w-5 h-5 mr-2 text-[#007B7F]" />
                Smart Attendance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-3">
                Biometric integration with real-time tracking and anomaly detection
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-[#007B7F]">98.2%</span>
                <span className="text-xs text-gray-500">Accuracy Rate</span>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-[#FF7A00]">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-lg">
                <Calendar className="w-5 h-5 mr-2 text-[#FF7A00]" />
                Shift Planning
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-3">
                Automated scheduling with intelligent workforce allocation
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-[#FF7A00]">24/7</span>
                <span className="text-xs text-gray-500">Coverage</span>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-[#007B7F]">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-lg">
                <DollarSign className="w-5 h-5 mr-2 text-[#007B7F]" />
                Auto Payroll
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-3">
                Fully automated payroll with compliance and statutory deductions
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-[#007B7F]">5min</span>
                <span className="text-xs text-gray-500">Process Time</span>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-[#FF7A00]">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-lg">
                <FileCheck className="w-5 h-5 mr-2 text-[#FF7A00]" />
                Compliance Hub
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-3">
                Automated compliance tracking and audit-ready documentation
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-[#FF7A00]">100%</span>
                <span className="text-xs text-gray-500">Compliance</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
