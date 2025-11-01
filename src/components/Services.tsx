import { Card } from "@/components/ui/card";
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
  return (
    <section id="servicios" className="py-24 px-4 bg-gradient-to-b from-background to-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
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
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="p-6 hover:shadow-xl transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 bg-gradient-to-br from-primary/10 to-primary-light/10 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-primary" />
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
      </div>
    </section>
  );
};

export default Services;
