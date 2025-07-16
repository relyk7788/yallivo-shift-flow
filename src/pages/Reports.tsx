import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  Download, 
  Calendar,
  TrendingUp,
  TrendingDown,
  FileText,
  Clock,
  Users
} from "lucide-react";
import { AppHeader } from "@/components/AppHeader";
import { QuickNav } from "@/components/QuickNav";

const Reports = () => {
  const reportTemplates = [
    {
      title: "Monthly Attendance Report",
      description: "Comprehensive attendance analysis for the current month",
      type: "Attendance",
      lastGenerated: "2 days ago",
      status: "Ready"
    },
    {
      title: "Shift Utilization Report",
      description: "Shift capacity and utilization metrics",
      type: "Shifts",
      lastGenerated: "5 days ago", 
      status: "Pending"
    },
    {
      title: "Employee Performance Report",
      description: "Individual employee performance and metrics",
      type: "Performance",
      lastGenerated: "1 week ago",
      status: "Ready"
    },
    {
      title: "Overtime Analysis",
      description: "Overtime trends and cost analysis",
      type: "Payroll",
      lastGenerated: "3 days ago",
      status: "Ready"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Ready": return "bg-success text-success-foreground";
      case "Pending": return "bg-warning text-warning-foreground";
      case "Error": return "bg-destructive text-destructive-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Attendance": return "bg-primary text-primary-foreground";
      case "Shifts": return "bg-secondary text-secondary-foreground";
      case "Performance": return "bg-accent text-accent-foreground";
      case "Payroll": return "bg-muted text-muted-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <AppHeader title="Reports & Analytics" subtitle="Generate and analyze workforce reports" />

      <main className="container mx-auto px-4 lg:px-6 py-8">
        <QuickNav />
        
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Reports & Analytics</h1>
            <p className="text-muted-foreground">Generate insights and analyze workforce data</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <FileText className="h-4 w-4 mr-2" />
            Custom Report
          </Button>
        </div>

        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList>
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="templates">Report Templates</TabsTrigger>
            <TabsTrigger value="history">Report History</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Avg Attendance</p>
                      <p className="text-2xl font-bold text-success">87.5%</p>
                    </div>
                    <div className="flex items-center text-success text-sm">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      +2.3%
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Overtime Hours</p>
                      <p className="text-2xl font-bold text-warning">142h</p>
                    </div>
                    <div className="flex items-center text-destructive text-sm">
                      <TrendingDown className="h-4 w-4 mr-1" />
                      -5.2%
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Shift Efficiency</p>
                      <p className="text-2xl font-bold text-primary">92.1%</p>
                    </div>
                    <div className="flex items-center text-success text-sm">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      +1.7%
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Active Employees</p>
                      <p className="text-2xl font-bold text-foreground">248</p>
                    </div>
                    <div className="flex items-center text-success text-sm">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      +12
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover-scale cursor-pointer">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Generate Attendance Report
                  </CardTitle>
                  <CardDescription>
                    Get detailed attendance analytics for any date range
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="outline">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Generate Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover-scale cursor-pointer">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-secondary" />
                    Employee Performance
                  </CardTitle>
                  <CardDescription>
                    Individual and team performance metrics
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="outline">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Generate Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover-scale cursor-pointer">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-accent" />
                    Shift Analysis
                  </CardTitle>
                  <CardDescription>
                    Shift patterns and optimization opportunities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="outline">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Generate Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="templates" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {reportTemplates.map((template, index) => (
                <Card key={index} className="hover-scale cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{template.title}</CardTitle>
                        <CardDescription className="mt-2">{template.description}</CardDescription>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Badge className={getStatusColor(template.status)}>
                          {template.status}
                        </Badge>
                        <Badge variant="outline" className={getTypeColor(template.type)}>
                          {template.type}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        Last generated: {template.lastGenerated}
                      </span>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <BarChart3 className="h-3 w-3 mr-1" />
                          View
                        </Button>
                        <Button size="sm">
                          <Download className="h-3 w-3 mr-1" />
                          Generate
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Reports</CardTitle>
                <CardDescription>Previously generated reports and downloads</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-muted-foreground">
                  <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No report history available</p>
                  <p className="text-sm">Generate your first report to see history here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Reports;