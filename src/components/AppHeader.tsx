import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Link } from "react-router-dom";

interface AppHeaderProps {
  title: string;
  subtitle?: string;
}

export const AppHeader = ({ title, subtitle }: AppHeaderProps) => {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 lg:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="hover-scale">
              <img 
                src="/lovable-uploads/43b71453-b912-4268-9da6-bb40940e3ca8.png" 
                alt="Yallivo Logo" 
                className="h-10 w-auto"
              />
            </Link>
            <div className="hidden sm:block">
              <h1 className="text-lg font-semibold">{title}</h1>
              {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
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
  );
};