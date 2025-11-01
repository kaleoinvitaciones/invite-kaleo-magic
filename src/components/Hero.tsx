import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import kaleoLogo from "@/assets/kaleo-logo.png";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background via-accent-light to-secondary px-4 py-20">
      <div className="absolute top-8 left-1/2 md:left-8 -translate-x-1/2 md:translate-x-0 animate-fade-in">
        <div className="flex items-center gap-4">
          <img 
            src={kaleoLogo} 
            alt="Kaleo Digital Logo" 
            className="h-20 md:h-24 w-auto"
          />
          <span className="hidden md:block text-3xl font-bold bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
            Kaleo Digital
          </span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8 mt-32 md:mt-24 animate-slide-up">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-primary-dark via-primary to-primary-glow bg-clip-text text-transparent">
            El llamado comienza aquí
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Abre tu invitación...
        </p>

        <div className="space-y-4 py-8">
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            En griego, <span className="font-semibold text-primary">kaleo</span> significa 
            <span className="font-semibold"> "llamar"</span>, 
            <span className="font-semibold"> "convocar"</span> o 
            <span className="font-semibold"> "invitar"</span>.
          </p>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            En <span className="font-semibold text-primary">Kaleo Digital</span>, transformamos ese llamado en 
            experiencias únicas a través de invitaciones digitales que 
            <span className="font-semibold"> emocionan</span>, 
            <span className="font-semibold"> inspiran</span> y 
            <span className="font-semibold"> conectan</span>.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-accent to-primary hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg px-8 py-6"
            onClick={scrollToContact}
          >
            Crea tu invitación ahora
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 text-lg px-8 py-6"
            onClick={scrollToServices}
          >
            Descubre más
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
