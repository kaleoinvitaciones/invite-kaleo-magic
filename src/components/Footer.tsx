import kaleoLogo from "@/assets/kaleo-logo.png";
import { MessageCircle, Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-background to-accent-light/50 border-t border-accent/30 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <img 
              src={kaleoLogo} 
              alt="Kaleo Digital Logo" 
              className="h-12 w-auto"
            />
            <p className="text-sm text-muted-foreground text-center md:text-left max-w-xs">
              Invitaciones que inspiran, conectan y llaman con propósito.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center space-y-4">
            <h3 className="font-semibold text-foreground">Enlaces Rápidos</h3>
            <nav className="flex flex-col space-y-2 text-center">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('servicios')}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Servicios
              </button>
              <button 
                onClick={() => scrollToSection('portafolio')}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Portafolio
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Contacto
              </button>
            </nav>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <h3 className="font-semibold text-foreground">Síguenos</h3>
            <div className="flex gap-4">
              <a 
                href="https://wa.me/573012749388" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-accent/20 rounded-full hover:bg-accent hover:text-accent-foreground hover:scale-110 transition-all duration-300 group"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-accent group-hover:text-accent-foreground" />
              </a>
              <a 
                href="https://www.facebook.com/share/19uqmKuuC5/" 
                className="p-3 bg-tertiary/20 rounded-full hover:bg-tertiary hover:text-tertiary-foreground hover:scale-110 transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-tertiary group-hover:text-tertiary-foreground" />
              </a>
              <a 
                href="https://www.instagram.com/kaleodigital?igsh=eGx0amttaDRvM2o2" 
                className="p-3 bg-primary/20 rounded-full hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300 group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
              </a>
              <a 
                href="mailto:kaleoinvitaciones@gmail.com"
                className="p-3 bg-accent/20 rounded-full hover:bg-accent hover:text-accent-foreground hover:scale-110 transition-all duration-300 group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-accent group-hover:text-accent-foreground" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Kaleo Digital — Invitaciones que inspiran, conectan y llaman con propósito.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
