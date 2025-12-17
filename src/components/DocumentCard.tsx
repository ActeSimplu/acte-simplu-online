import { Link } from "react-router-dom";
import { Document } from "@/data/documents";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Clock, Globe, FileText, ArrowRight } from "lucide-react";

interface DocumentCardProps {
  document: Document;
}

const DocumentCard = ({ document }: DocumentCardProps) => {
  return (
    <Link to={`/document/${document.id}`}>
      <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-primary/20 group">
        <CardContent className="p-6">
          <div className="flex items-start justify-between gap-3 mb-4">
            <div className="p-3 rounded-xl bg-primary/10">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <div className="flex gap-2">
              {document.canDoOnline && (
                <Badge variant="secondary" className="bg-secondary/20 text-secondary border-0">
                  <Globe className="h-3 w-3 mr-1" />
                  Online
                </Badge>
              )}
              {document.frequentlyChanges && (
                <Badge variant="outline" className="border-warning text-warning">
                  Actualizat des
                </Badge>
              )}
            </div>
          </div>

          <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
            {document.shortName}
          </h3>
          
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {document.institution}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{document.duration.split('(')[0].trim()}</span>
            </div>
            <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default DocumentCard;