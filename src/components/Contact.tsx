import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Mail } from "lucide-react";

const Contact = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hola Kaleo Digital, quiero crear mi invitación");
    window.open(`https://wa.me/573012749388?text=${message}`, '_blank');
  };

  const handleEmail = () => {
    window.location.href = "mailto:kaleoinvitaciones@gmail.com";
  };

  return (
    <section id="contacto" className="py-24 px-4 bg-gradient-to-b from-secondary to-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-6 mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
              Tu llamado comienza aquí
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            ¿Listo para crear tu Kaleo? Cuéntanos tu idea, y juntos haremos que tu invitación sea inolvidable.
          </p>
        </div>

        <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-border/50 shadow-xl animate-slide-up">
          <div className="grid md:grid-cols-2 gap-6">
            <Button
              size="lg"
              className="h-auto py-8 flex flex-col items-center gap-4 bg-gradient-to-r from-primary to-primary-light hover:shadow-xl transition-all duration-300 group"
              onClick={handleWhatsApp}
            >
              <MessageCircle className="w-12 h-12 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-center">
                <div className="text-xl font-semibold mb-1">WhatsApp</div>
                <div className="text-sm opacity-90">Chatea con nosotros</div>
              </div>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="h-auto py-8 flex flex-col items-center gap-4 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
              onClick={handleEmail}
            >
              <Mail className="w-12 h-12 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-center">
                <div className="text-xl font-semibold mb-1">Email</div>
                <div className="text-sm opacity-90">kaleoinvitaciones@gmail.com</div>
              </div>
            </Button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              También puedes contactarnos por teléfono: 
              <a href="tel:+573012749388" className="text-primary font-semibold hover:underline ml-2">
                +57 301 274 9388
              </a>
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
