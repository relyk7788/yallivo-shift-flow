import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Plus, Filter, MoreHorizontal, Phone, MapPin, Eye, Edit, Trash2 } from "lucide-react";
import { AppHeader } from "@/components/AppHeader";
import { QuickNav } from "@/components/QuickNav";

const mockEmployees = [
  {
    id: "EMP001",
    name: "Rajesh Kumar",
    department: "Production",
    shift: "Morning",
    status: "Active",
    phone: "+91 9876543210",
    location: "Floor A",
    joinDate: "2023-01-15"
  },
  {
    id: "EMP002", 
    name: "Priya Sharma",
    department: "Quality Control",
    shift: "Evening",
    status: "Active",
    phone: "+91 9876543211",
    location: "Floor B",
    joinDate: "2023-02-20"
  },
  {
    id: "EMP003",
    name: "Amit Singh",
    department: "Maintenance",
    shift: "Night",
    status: "On Leave",
    phone: "+91 9876543212",
    location: "Floor C",
    joinDate: "2022-11-10"
  },
  {
    id: "EMP004",
    name: "Sunita Devi",
    department: "Packaging",
    shift: "Morning",
    status: "Active",
    phone: "+91 9876543213",
    location: "Floor A",
    joinDate: "2023-03-05"
  }
];

const Employees = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEmployees = mockEmployees.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-success text-success-foreground";
      case "On Leave": return "bg-warning text-warning-foreground";
      case "Inactive": return "bg-destructive text-destructive-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <AppHeader title="Employee Database" subtitle="Manage your workforce records and information" />

      <main className="container mx-auto px-4 lg:px-6 py-8">
        <QuickNav />
        
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Employee Database</h1>
            <p className="text-muted-foreground">Manage your workforce records and information</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="h-4 w-4 mr-2" />
            Add Employee
          </Button>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by name, ID, or department..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>

        {/* Employee Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredEmployees.map((employee) => (
            <Card key={employee.id} className="hover-scale cursor-pointer">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${employee.name}`} />
                      <AvatarFallback>{employee.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{employee.name}</CardTitle>
                      <CardDescription>{employee.id}</CardDescription>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-3 w-3" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-3 w-3" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Status</span>
                    <Badge className={getStatusColor(employee.status)}>
                      {employee.status}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Department</span>
                    <span className="text-sm font-medium">{employee.department}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Shift</span>
                    <span className="text-sm font-medium">{employee.shift}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Phone className="h-3 w-3 mr-1" />
                    {employee.phone}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-3 w-3 mr-1" />
                    {employee.location}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">{mockEmployees.length}</div>
              <div className="text-sm text-muted-foreground">Total Employees</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-success">{mockEmployees.filter(e => e.status === "Active").length}</div>
              <div className="text-sm text-muted-foreground">Active</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-warning">{mockEmployees.filter(e => e.status === "On Leave").length}</div>
              <div className="text-sm text-muted-foreground">On Leave</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-muted-foreground">4</div>
              <div className="text-sm text-muted-foreground">Departments</div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Employees;