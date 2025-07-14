
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Clock, DollarSign, FileCheck, AlertTriangle, TrendingUp, Calendar, MapPin, Menu } from "lucide-react";
import { DashboardStats } from "@/components/dashboard/DashboardStats";
import { AttendanceOverview } from "@/components/dashboard/AttendanceOverview";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { ComplianceAlerts } from "@/components/dashboard/ComplianceAlerts";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4 lg:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover-scale">
                <span className="text-primary-foreground font-bold text-xl">Y</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold text-foreground">Yallivo HRMS</h1>
                <p className="text-sm text-muted-foreground">Precision Workforce. Factory-Ready HR.</p>
              </div>
            </div>
            
            {/* Desktop Controls */}
            <div className="hidden md:flex items-center space-x-4">
              <select 
                className="px-3 py-2 bg-background border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-all hover-lift"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                <option>All Locations</option>
                <option>Factory A - Mumbai</option>
                <option>Factory B - Pune</option>
                <option>Factory C - Chennai</option>
              </select>
              <Badge variant="outline" className="bg-accent text-accent-foreground border-accent hover-scale">
                <MapPin className="w-3 h-3 mr-1" />
                3 Active Sites
              </Badge>
              <ThemeToggle />
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="hover-scale"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 p-4 border-t border-border fade-in">
              <div className="space-y-3">
                <select 
                  className="w-full px-3 py-2 bg-background border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                >
                  <option>All Locations</option>
                  <option>Factory A - Mumbai</option>
                  <option>Factory B - Pune</option>
                  <option>Factory C - Chennai</option>
                </select>
                <Badge variant="outline" className="bg-accent text-accent-foreground border-accent w-fit">
                  <MapPin className="w-3 h-3 mr-1" />
                  3 Active Sites
                </Badge>
              </div>
            </div>
          )}
        </div>
      </header>

      <div className="container mx-auto p-4 lg:p-6 space-y-6">
        {/* Dashboard Stats */}
        <div className="fade-in">
          <DashboardStats />
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
          {/* Left Column - Attendance & Activity */}
          <div className="lg:col-span-2 space-y-4 lg:space-y-6">
            <div className="fade-in">
              <AttendanceOverview />
            </div>
            <div className="fade-in">
              <RecentActivity />
            </div>
          </div>

          {/* Right Column - Quick Actions & Alerts */}
          <div className="space-y-4 lg:space-y-6">
            <div className="fade-in">
              <QuickActions />
            </div>
            <div className="fade-in">
              <ComplianceAlerts />
            </div>
          </div>
        </div>

        {/* Key Features Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 fade-in">
          <Card className="hover-lift cursor-pointer border-l-4 border-l-primary group">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-lg group-hover:text-primary transition-colors">
                <Clock className="w-5 h-5 mr-2 text-primary" />
                Smart Attendance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Biometric integration with real-time tracking and anomaly detection
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary">98.2%</span>
                <span className="text-xs text-muted-foreground">Accuracy Rate</span>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift cursor-pointer border-l-4 border-l-accent group">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-lg group-hover:text-accent transition-colors">
                <Calendar className="w-5 h-5 mr-2 text-accent" />
                Shift Planning
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Automated scheduling with intelligent workforce allocation
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-accent">24/7</span>
                <span className="text-xs text-muted-foreground">Coverage</span>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift cursor-pointer border-l-4 border-l-primary group">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-lg group-hover:text-primary transition-colors">
                <DollarSign className="w-5 h-5 mr-2 text-primary" />
                Auto Payroll
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Fully automated payroll with compliance and statutory deductions
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary">5min</span>
                <span className="text-xs text-muted-foreground">Process Time</span>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift cursor-pointer border-l-4 border-l-accent group">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-lg group-hover:text-accent transition-colors">
                <FileCheck className="w-5 h-5 mr-2 text-accent" />
                Compliance Hub
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Automated compliance tracking and audit-ready documentation
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-accent">100%</span>
                <span className="text-xs text-muted-foreground">Compliance</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
