import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Button } from "./ui/button";
import { Mail, Menu, X } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Mobile Header */}
      <header className="md:hidden flex items-center justify-between p-4 border-b border-border bg-card">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
        <Link to="/" className="font-bold text-lg text-primary">
          Acte Simplu
        </Link>
        <Link to="/contact">
          <Button variant="outline" size="icon">
            <Mail className="h-4 w-4" />
          </Button>
        </Link>
      </header>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-foreground/50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed md:sticky top-0 left-0 z-50 h-screen w-72
        transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <Sidebar onItemClick={() => setSidebarOpen(false)} />
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-h-screen">
        {children}
      </main>

      {/* Contact Button - Desktop */}
      <Link 
        to="/contact" 
        className="hidden md:flex fixed bottom-6 right-6 z-30"
      >
        <Button className="gap-2 shadow-lg">
          <Mail className="h-4 w-4" />
          Contact
        </Button>
      </Link>
    </div>
  );
};

export default Layout;