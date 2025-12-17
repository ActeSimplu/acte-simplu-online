import { Link } from "react-router-dom";
import { documents, institutions } from "@/data/documents";
import { ChevronDown, FileText, Building2 } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";
import logo from "@/assets/logo.png";

interface SidebarProps {
  onItemClick?: () => void;
}

const Sidebar = ({ onItemClick }: SidebarProps) => {
  const [institutionsOpen, setInstitutionsOpen] = useState(false);

  const sortedDocuments = [...documents].sort((a, b) => 
    a.shortName.localeCompare(b.shortName, 'ro')
  );

  return (
    <div className="h-full bg-sidebar border-r border-sidebar-border flex flex-col">
      {/* Logo */}
      <Link 
        to="/" 
        className="p-6 border-b border-sidebar-border flex items-center gap-3"
        onClick={onItemClick}
      >
        <img src={logo} alt="Acte Simplu" className="w-10 h-10" />
        <span className="font-bold text-xl text-sidebar-primary">Acte Simplu</span>
      </Link>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4">
        {/* Documents Section */}
        <div className="mb-6">
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-3">
            Documente
          </h3>
          <ul className="space-y-1">
            {sortedDocuments.map((doc) => (
              <li key={doc.id}>
                <Link
                  to={`/document/${doc.id}`}
                  onClick={onItemClick}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
                >
                  <FileText className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">{doc.shortName}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Institutions Section */}
        <div>
          <Collapsible open={institutionsOpen} onOpenChange={setInstitutionsOpen}>
            <CollapsibleTrigger className="w-full">
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-3 flex items-center justify-between">
                Instituții
                <ChevronDown className={`h-4 w-4 transition-transform ${institutionsOpen ? 'rotate-180' : ''}`} />
              </h3>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <ul className="space-y-1">
                {institutions.map((inst) => (
                  <li key={inst.id}>
                    <a
                      href={inst.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={onItemClick}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
                    >
                      <Building2 className="h-4 w-4 text-secondary" />
                      <span className="text-sm font-medium">{inst.shortName}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-sidebar-border">
        <p className="text-xs text-muted-foreground text-center">
          © 2024 Acte Simplu
        </p>
      </div>
    </div>
  );
};

export default Sidebar;