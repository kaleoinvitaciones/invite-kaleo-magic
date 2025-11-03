import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

const portfolioItems = [
  {
    title: "Revelación",
    url: "https://revelacion.kaleo.digital/?kaleo=true",
    description: "Invitación para revelación de género",
    gradient: "from-pink-400 to-blue-400"
  },
  // Placeholder for more portfolio items
  {
    title: "Boda Elegante",
    url: "https://conferencia-parejas.kaleo.digital/",
    description: "Invitación de boda minimalista",
    gradient: "from-primary to-primary-light"
  },
  {
    title: "Quinceaños",
    url: "#",
    description: "Celebración de 15 años",
    gradient: "from-purple-400 to-pink-400"
  },
  {
    title: "Baby Shower",
    url: "#",
    description: "Bienvenida al nuevo bebé",
    gradient: "from-blue-300 to-cyan-300"
  },
  {
    title: "Cumpleaños",
    url: "#",
    description: "Fiesta de cumpleaños",
    gradient: "from-orange-400 to-red-400"
  },
  {
    title: "Aniversario",
    url: "#",
    description: "Celebración de aniversario",
    gradient: "from-rose-400 to-pink-500"
  }
];

const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? portfolioItems : portfolioItems.slice(0, 2);

  return (
    <section id="portafolio" className="py-24 px-4 bg-gradient-to-b from-background to-accent-light/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-8 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-tertiary via-primary to-accent bg-clip-text text-transparent">
              Nuestros Kaleos
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre algunas de las invitaciones que hemos creado con amor y dedicación
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          {visibleItems.map((item, index) => (
            <Card 
              key={index}
              className="group cursor-pointer overflow-hidden border-accent/30 hover:border-primary/50 hover:shadow-2xl transition-all duration-500"
              onClick={() => item.url !== "#" && window.open(item.url, '_blank')}
            >
              <div className={`h-64 bg-gradient-to-br ${item.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                <div className="relative z-10 text-white text-center p-6 transform group-hover:scale-110 transition-transform duration-300">
                  <h3 className="text-3xl font-bold mb-2">{item.title}</h3>
                  <p className="text-white/90">{item.description}</p>
                </div>
                {item.url !== "#" && (
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="w-6 h-6 text-white" />
                  </div>
                )}
              </div>
              <div className="p-6 bg-card">
                <p className="text-center text-muted-foreground">
                  {item.url !== "#" ? "Click para ver" : "Próximamente"}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {portfolioItems.length > 2 && (
          <div className="text-center mt-8">
            <Button 
              onClick={() => setShowAll(!showAll)}
              variant="outline"
              size="lg"
              className="border-2 border-tertiary text-tertiary hover:bg-tertiary hover:text-tertiary-foreground transition-all duration-300"
            >
              {showAll ? "Ver menos" : "Ver más"}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
