import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Clock, 
  Users, 
  Plus,
  Calendar,
  RotateCcw,
  User,
  MapPin,
  AlertTriangle
} from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const mockShifts = [
  {
    id: "SHIFT001",
    name: "Morning Shift",
    startTime: "08:00 AM",
    endTime: "05:00 PM",
    department: "Production",
    assignedEmployees: 12,
    maxCapacity: 15,
    status: "Active",
    location: "Floor A"
  },
  {
    id: "SHIFT002", 
    name: "Evening Shift",
    startTime: "02:00 PM",
    endTime: "11:00 PM",
    department: "Quality Control",
    assignedEmployees: 8,
    maxCapacity: 10,
    status: "Active",
    location: "Floor B"
  },
  {
    id: "SHIFT003",
    name: "Night Shift",
    startTime: "11:00 PM",
    endTime: "08:00 AM",
    department: "Maintenance",
    assignedEmployees: 5,
    maxCapacity: 8,
    status: "Understaffed",
    location: "Floor C"
  }
];

const mockEmployeeShifts = [
  {
    id: "EMP001",
    name: "Rajesh Kumar",
    currentShift: "Morning Shift",
    nextShift: "Morning Shift",
    department: "Production",
    status: "Scheduled"
  },
  {
    id: "EMP002",
    name: "Priya Sharma",
    currentShift: "Evening Shift", 
    nextShift: "Evening Shift",
    department: "Quality Control",
    status: "Scheduled"
  },
  {
    id: "EMP003",
    name: "Amit Singh",
    currentShift: "Night Shift",
    nextShift: "Morning Shift",
    department: "Maintenance",
    status: "Swap Requested"
  }
];

const Shifts = () => {
  const getShiftStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-success text-success-foreground";
      case "Understaffed": return "bg-warning text-warning-foreground";
      case "Overstaffed": return "bg-info text-info-foreground";
      case "Inactive": return "bg-muted text-muted-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getEmployeeStatusColor = (status: string) => {
    switch (status) {
      case "Scheduled": return "bg-success text-success-foreground";
      case "Swap Requested": return "bg-warning text-warning-foreground";
      case "Unassigned": return "bg-destructive text-destructive-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getCapacityColor = (assigned: number, max: number) => {
    const percentage = (assigned / max) * 100;
    if (percentage < 70) return "text-warning";
    if (percentage > 100) return "text-destructive";
    return "text-success";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 lg:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="hover-scale">
                <img 
                  src="/lovable-uploads/43b71453-b912-4268-9da6-bb40940e3ca8.png" 
                  alt="Yallivo Logo" 
                  className="h-10 w-auto"
                />
              </div>
              <div className="hidden sm:block">
                <p className="text-sm text-muted-foreground">Shift Management</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Button variant="outline" size="sm">
                <User className="h-4 w-4 mr-2" />
                HR Admin
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 lg:px-6 py-8">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Shift Management</h1>
            <p className="text-muted-foreground">Manage shifts, schedules, and workforce planning</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <RotateCcw className="h-4 w-4 mr-2" />
              Auto Schedule
            </Button>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="h-4 w-4 mr-2" />
              Create Shift
            </Button>
          </div>
        </div>

        <Tabs defaultValue="shifts" className="space-y-6">
          <TabsList>
            <TabsTrigger value="shifts">Shift Overview</TabsTrigger>
            <TabsTrigger value="schedule">Employee Schedule</TabsTrigger>
            <TabsTrigger value="requests">Swap Requests</TabsTrigger>
          </TabsList>

          <TabsContent value="shifts" className="space-y-6">
            {/* Shift Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary">{mockShifts.length}</div>
                  <div className="text-sm text-muted-foreground">Active Shifts</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-success">
                    {mockShifts.reduce((sum, shift) => sum + shift.assignedEmployees, 0)}
                  </div>
                  <div className="text-sm text-muted-foreground">Assigned Employees</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-warning">
                    {mockShifts.filter(shift => shift.status === "Understaffed").length}
                  </div>
                  <div className="text-sm text-muted-foreground">Understaffed</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-info">24</div>
                  <div className="text-sm text-muted-foreground">Hours Coverage</div>
                </CardContent>
              </Card>
            </div>

            {/* Shift Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {mockShifts.map((shift) => (
                <Card key={shift.id} className="hover-scale cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{shift.name}</CardTitle>
                        <CardDescription>{shift.id}</CardDescription>
                      </div>
                      <Badge className={getShiftStatusColor(shift.status)}>
                        {shift.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{shift.startTime} - {shift.endTime}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{shift.location} • {shift.department}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">Capacity</span>
                        </div>
                        <span className={`text-sm font-medium ${getCapacityColor(shift.assignedEmployees, shift.maxCapacity)}`}>
                          {shift.assignedEmployees}/{shift.maxCapacity}
                        </span>
                      </div>

                      {/* Capacity Bar */}
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-300"
                          style={{ width: `${Math.min((shift.assignedEmployees / shift.maxCapacity) * 100, 100)}%` }}
                        />
                      </div>

                      {shift.status === "Understaffed" && (
                        <div className="flex items-center gap-2 text-warning text-sm">
                          <AlertTriangle className="h-4 w-4" />
                          <span>Needs {shift.maxCapacity - shift.assignedEmployees} more employees</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="schedule" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Employee Schedule</CardTitle>
                <CardDescription>Current and upcoming shift assignments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockEmployeeShifts.map((employee) => (
                    <div key={employee.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${employee.name}`} />
                          <AvatarFallback>{employee.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{employee.name}</div>
                          <div className="text-sm text-muted-foreground">{employee.id} • {employee.department}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="text-center hidden sm:block">
                          <div className="text-sm font-medium">{employee.currentShift}</div>
                          <div className="text-xs text-muted-foreground">Current</div>
                        </div>
                        <div className="text-center hidden md:block">
                          <div className="text-sm font-medium">{employee.nextShift}</div>
                          <div className="text-xs text-muted-foreground">Next</div>
                        </div>
                        <Badge className={getEmployeeStatusColor(employee.status)}>
                          {employee.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="requests" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Shift Swap Requests</CardTitle>
                <CardDescription>Pending shift change requests from employees</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-muted-foreground">
                  <RotateCcw className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No pending shift swap requests</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Shifts;