import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Image, 
  Calendar, 
  MapPin, 
  CheckCircle, 
  User, 
  MessageCircle, 
  Music, 
  Sparkles,
  Heart
} from "lucide-react";
import { useState } from "react";

const features = [
  { icon: Image, title: "Foto o video de portada", description: "Impacta desde el primer momento" },
  { icon: Image, title: "Carrusel de hasta 5 fotos", description: "Comparte tus mejores momentos" },
  { icon: Calendar, title: "Detalle del evento", description: "Fecha, hora y lugar claramente" },
  { icon: Sparkles, title: "Cuenta regresiva dinámica", description: "Genera expectativa y emoción" },
  { icon: MapPin, title: "Mapa interactivo", description: "Google Maps integrado" },
  { icon: CheckCircle, title: "Confirmación de asistencia", description: "Conectado a Google Sheets" },
  { icon: User, title: "Personalización por invitado", description: "Cada invitación es única" },
  { icon: MessageCircle, title: "Botón de WhatsApp", description: "Comunicación directa contigo" },
  { icon: Music, title: "Música de fondo", description: "Crea la atmósfera perfecta" },
  { icon: Heart, title: "Pantalla de bienvenida", description: "\"Abre tu invitación\" personalizado" },
];

const Services = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleFeatures = showAll ? features : features.slice(0, 2);

  return (
    <section id="servicios" className="py-24 px-4 bg-gradient-to-b from-secondary via-accent-light to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-8 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-accent via-primary to-primary-light bg-clip-text text-transparent">
              Invitaciones que hablan con propósito
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cada evento comienza con un llamado. En Kaleo Digital diseñamos invitaciones digitales únicas 
            que llegan directo al corazón.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4 text-lg">
            <span className="flex items-center gap-2 text-primary font-medium">
              📱 Instantáneas
            </span>
            <span className="flex items-center gap-2 text-primary font-medium">
              🌎 Ecológicas
            </span>
            <span className="flex items-center gap-2 text-primary font-medium">
              💫 Completamente personalizables
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleFeatures.map((feature, index) => {
            const Icon = feature.icon;
            const isNewItem = index >= 2;
            return (
              <Card 
                key={index} 
                className={`p-6 hover:shadow-xl transition-all duration-300 border-accent/20 bg-card/80 backdrop-blur-sm group hover:border-primary/50 ${
                  isNewItem && showAll ? 'animate-fade-in-item' : ''
                }`}
                style={isNewItem && showAll ? { animationDelay: `${(index - 2) * 0.1}s` } : {}}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full group-hover:scale-110 group-hover:from-primary/30 group-hover:to-primary-glow/30 transition-all duration-300">
                    <Icon className="w-8 h-8 text-accent group-hover:text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {features.length > 2 && (
          <div className="text-center mt-8">
            <Button 
              onClick={() => setShowAll(!showAll)}
              variant="outline"
              size="lg"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              {showAll ? "Ver menos" : "Ver más"}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
