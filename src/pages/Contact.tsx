import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Info } from "lucide-react";
import logo from "@/assets/logo.png";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact - Acte Simplu</title>
        <meta name="description" content="Contactează echipa Acte Simplu pentru întrebări, sugestii sau colaborări." />
      </Helmet>

      <Layout>
        <div className="min-h-[80vh] flex items-center justify-center px-4 py-16">
          <div className="max-w-2xl mx-auto text-center animate-fade-in">
            <div className="flex justify-center mb-8">
              <img src={logo} alt="Acte Simplu" className="w-20 h-20" />
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact</h1>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Vă mulțumim pentru interesul acordat platformei Acte Simplu.
            </p>

            <Card className="mb-8">
              <CardContent className="p-8">
                <p className="text-foreground leading-relaxed mb-6">
                  Pentru întrebări, sugestii de îmbunătățire, semnalarea unor informații 
                  incorecte sau orice altă solicitare, vă rugăm să ne contactați la adresa 
                  de email de mai jos. Vom depune toate eforturile pentru a vă răspunde 
                  în cel mai scurt timp posibil.
                </p>

                <a 
                  href="mailto:actesimplu@yahoo.com"
                  className="inline-flex items-center gap-3 text-xl font-semibold text-primary hover:underline"
                >
                  <Mail className="h-6 w-6" />
                  actesimplu@yahoo.com
                </a>
              </CardContent>
            </Card>

            <div className="p-4 rounded-lg bg-muted inline-flex items-center gap-3">
              <Info className="h-5 w-5 text-muted-foreground flex-shrink-0" />
              <p className="text-sm text-muted-foreground text-left">
                Acte Simplu este un site informativ și nu oferă servicii de consultanță 
                sau asistență în obținerea documentelor oficiale.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Contact;