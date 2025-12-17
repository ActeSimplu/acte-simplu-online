import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import SearchBar from "@/components/SearchBar";
import DocumentCard from "@/components/DocumentCard";
import { Badge } from "@/components/ui/badge";
import { getPopularDocuments } from "@/data/documents";
import { Info, TrendingUp } from "lucide-react";
import logo from "@/assets/logo.png";

const Index = () => {
  const popularDocuments = getPopularDocuments();

  return (
    <>
      <Helmet>
        <title>Acte Simplu - Ghid pentru obținerea actelor oficiale din România</title>
        <meta name="description" content="Găsește rapid informații despre obținerea actelor oficiale din România: pașaport, buletin, permis auto, PFA și multe altele. Ghid complet cu documente necesare, costuri și durate." />
      </Helmet>

      <Layout>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center px-4 py-16">
          {/* Background Logo with Glass Overlay */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <img 
              src={logo} 
              alt="" 
              className="w-[500px] h-[500px] object-contain opacity-10"
              aria-hidden="true"
            />
            <div className="absolute inset-0 glass-overlay" />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center max-w-3xl mx-auto animate-fade-in">
            <div className="flex justify-center mb-6">
              <img src={logo} alt="Acte Simplu" className="w-24 h-24 drop-shadow-lg" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Acte Simplu
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Ghidul tău pentru obținerea actelor oficiale din România.
              <br />
              <span className="text-lg">Rapid, clar și actualizat.</span>
            </p>

            <div className="flex justify-center mb-6">
              <SearchBar />
            </div>

            <Badge variant="outline" className="gap-2 px-4 py-2">
              <Info className="h-4 w-4 text-primary" />
              Informații actualizate periodic. Verifică întotdeauna site-urile oficiale.
            </Badge>
          </div>
        </section>

        {/* Popular Documents Section */}
        <section className="px-4 py-16 bg-muted/50">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Documente populare</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularDocuments.map((doc) => (
                <DocumentCard key={doc.id} document={doc} />
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Despre Acte Simplu</h2>
            <p className="text-muted-foreground leading-relaxed">
              Acte Simplu este un ghid informativ care te ajută să înțelegi procesul de obținere 
              a documentelor oficiale din România. Oferim informații despre documentele necesare, 
              costuri, durate de procesare și instituțiile responsabile. Toate informațiile sunt 
              orientative - pentru detalii exacte, consultă întotdeauna site-urile oficiale ale instituțiilor.
            </p>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Index;