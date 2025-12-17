import { useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { getDocumentById, counties } from "@/data/documents";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  FileText, 
  Banknote, 
  Clock, 
  AlertTriangle, 
  ExternalLink,
  Globe,
  Info,
  Calendar,
  CheckCircle2,
  XCircle
} from "lucide-react";
import { useState } from "react";

const DocumentPage = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedCounty, setSelectedCounty] = useState<string>("");
  
  const document = id ? getDocumentById(id) : undefined;

  if (!document) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{document.name} - Acte Simplu</title>
        <meta name="description" content={`Ghid complet pentru obținerea ${document.name}: documente necesare, costuri, durată și instituții. Informații actualizate pentru România.`} />
      </Helmet>

      <Layout>
        <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
          {/* Header */}
          <header className="mb-8 animate-fade-in">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {document.canDoOnline ? (
                <Badge className="bg-secondary text-secondary-foreground gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Se poate face online
                </Badge>
              ) : (
                <Badge variant="outline" className="gap-1.5">
                  <XCircle className="h-3.5 w-3.5" />
                  Doar fizic
                </Badge>
              )}
              {document.frequentlyChanges && (
                <Badge variant="outline" className="border-warning text-warning gap-1.5">
                  <Info className="h-3.5 w-3.5" />
                  Informație actualizată des
                </Badge>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-3">{document.name}</h1>
            <p className="text-lg text-muted-foreground">{document.institution}</p>
            
            <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>Ultima actualizare: {document.lastUpdated}</span>
            </div>
          </header>

          {/* County Selector */}
          <Card className="mb-6 border-primary/20">
            <CardContent className="p-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="font-medium">Selectează județul:</span>
                </div>
                <Select value={selectedCounty} onValueChange={setSelectedCounty}>
                  <SelectTrigger className="w-full sm:w-64">
                    <SelectValue placeholder="Alege județul" />
                  </SelectTrigger>
                  <SelectContent>
                    {counties.map((county) => (
                      <SelectItem key={county} value={county}>
                        {county}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {selectedCounty && (
                <p className="text-sm text-muted-foreground mt-3 flex items-start gap-2">
                  <Info className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  Procedura poate varia în funcție de județul selectat. Verifică site-ul instituției locale pentru detalii specifice.
                </p>
              )}
            </CardContent>
          </Card>

          {/* Main Info Cards */}
          <div className="grid gap-6">
            {/* Where to go */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <MapPin className="h-5 w-5 text-primary" />
                  Unde trebuie să mergi
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">{document.whereToGo}</p>
                {document.onlineDetails && (
                  <p className="mt-3 text-sm text-secondary flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    {document.onlineDetails}
                  </p>
                )}
              </CardContent>
            </Card>

            {/* Required Documents */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <FileText className="h-5 w-5 text-primary" />
                  Acte necesare
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {document.requiredDocs.map((doc, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Costs & Duration */}
            <div className="grid sm:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Banknote className="h-5 w-5 text-primary" />
                    Costuri
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-foreground">{document.costs}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Clock className="h-5 w-5 text-primary" />
                    Durata estimată
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-medium text-foreground">{document.duration}</p>
                </CardContent>
              </Card>
            </div>

            {/* Common Mistakes */}
            <Card className="border-warning/30 bg-warning/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg text-warning">
                  <AlertTriangle className="h-5 w-5" />
                  Greșeli frecvente de evitat
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {document.commonMistakes.map((mistake, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <XCircle className="h-5 w-5 text-warning flex-shrink-0 mt-0.5" />
                      <span>{mistake}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Official Website */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h3 className="font-semibold mb-1">Site-ul oficial al instituției</h3>
                    <p className="text-sm text-muted-foreground">
                      Pentru informații complete și actualizate
                    </p>
                  </div>
                  <Button asChild>
                    <a 
                      href={document.officialWebsite} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Vizitează site-ul
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 p-4 rounded-lg bg-muted">
            <p className="text-sm text-muted-foreground text-center">
              <Info className="h-4 w-4 inline mr-2" />
              Informațiile sunt orientative și pot suferi modificări. 
              Consultă întotdeauna sursa oficială pentru detalii actualizate.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default DocumentPage;