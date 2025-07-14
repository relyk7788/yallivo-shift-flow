import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Clock, 
  Users, 
  UserCheck, 
  UserX, 
  Calendar as CalendarIcon,
  Download,
  Filter,
  User
} from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const mockAttendanceData = [
  {
    id: "EMP001",
    name: "Rajesh Kumar",
    checkIn: "08:00 AM",
    checkOut: "05:00 PM",
    status: "Present",
    overtime: "1h 30m",
    department: "Production"
  },
  {
    id: "EMP002",
    name: "Priya Sharma", 
    checkIn: "02:00 PM",
    checkOut: "11:00 PM",
    status: "Present",
    overtime: "0h",
    department: "Quality Control"
  },
  {
    id: "EMP003",
    name: "Amit Singh",
    checkIn: "-",
    checkOut: "-",
    status: "Absent",
    overtime: "0h",
    department: "Maintenance"
  },
  {
    id: "EMP004",
    name: "Sunita Devi",
    checkIn: "08:15 AM",
    checkOut: "05:00 PM",
    status: "Late",
    overtime: "0h",
    department: "Packaging"
  }
];

const Attendance = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Present": return "bg-success text-success-foreground";
      case "Absent": return "bg-destructive text-destructive-foreground";
      case "Late": return "bg-warning text-warning-foreground";
      case "Half Day": return "bg-info text-info-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const presentCount = mockAttendanceData.filter(emp => emp.status === "Present" || emp.status === "Late").length;
  const absentCount = mockAttendanceData.filter(emp => emp.status === "Absent").length;
  const totalEmployees = mockAttendanceData.length;

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
                <p className="text-sm text-muted-foreground">Attendance Tracking</p>
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
            <h1 className="text-3xl font-bold text-foreground">Attendance Dashboard</h1>
            <p className="text-muted-foreground">Real-time attendance tracking and reporting</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button className="bg-primary hover:bg-primary/90">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Calendar Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5" />
                  Select Date
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={(date) => date && setSelectedDate(date)}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="mt-6 space-y-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Total</span>
                    </div>
                    <span className="text-lg font-bold">{totalEmployees}</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <UserCheck className="h-4 w-4 text-success" />
                      <span className="text-sm">Present</span>
                    </div>
                    <span className="text-lg font-bold text-success">{presentCount}</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <UserX className="h-4 w-4 text-destructive" />
                      <span className="text-sm">Absent</span>
                    </div>
                    <span className="text-lg font-bold text-destructive">{absentCount}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="today" className="space-y-4">
              <TabsList>
                <TabsTrigger value="today">Today's Attendance</TabsTrigger>
                <TabsTrigger value="weekly">Weekly View</TabsTrigger>
                <TabsTrigger value="reports">Reports</TabsTrigger>
              </TabsList>

              <TabsContent value="today" className="space-y-4">
                {/* Today's Overview */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-primary">{(presentCount/totalEmployees*100).toFixed(0)}%</div>
                      <div className="text-sm text-muted-foreground">Attendance Rate</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-success">{presentCount}</div>
                      <div className="text-sm text-muted-foreground">Present</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-destructive">{absentCount}</div>
                      <div className="text-sm text-muted-foreground">Absent</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-warning">1</div>
                      <div className="text-sm text-muted-foreground">Late Arrivals</div>
                    </CardContent>
                  </Card>
                </div>

                {/* Attendance List */}
                <Card>
                  <CardHeader>
                    <CardTitle>Today's Attendance Log</CardTitle>
                    <CardDescription>
                      {selectedDate.toLocaleDateString('en-IN', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockAttendanceData.map((employee) => (
                        <div key={employee.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center gap-4">
                            <div>
                              <div className="font-medium">{employee.name}</div>
                              <div className="text-sm text-muted-foreground">{employee.id} • {employee.department}</div>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-4">
                            <div className="text-center hidden sm:block">
                              <div className="text-sm font-medium">{employee.checkIn}</div>
                              <div className="text-xs text-muted-foreground">Check In</div>
                            </div>
                            <div className="text-center hidden sm:block">
                              <div className="text-sm font-medium">{employee.checkOut}</div>
                              <div className="text-xs text-muted-foreground">Check Out</div>
                            </div>
                            <div className="text-center hidden md:block">
                              <div className="text-sm font-medium">{employee.overtime}</div>
                              <div className="text-xs text-muted-foreground">Overtime</div>
                            </div>
                            <Badge className={getStatusColor(employee.status)}>
                              {employee.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="weekly">
                <Card>
                  <CardHeader>
                    <CardTitle>Weekly Attendance Summary</CardTitle>
                    <CardDescription>Attendance patterns and trends for the current week</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8 text-muted-foreground">
                      Weekly view functionality coming soon...
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reports">
                <Card>
                  <CardHeader>
                    <CardTitle>Attendance Reports</CardTitle>
                    <CardDescription>Generate and download attendance reports</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8 text-muted-foreground">
                      Reports functionality coming soon...
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Attendance;