import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hola Kaleo Digital, quiero crear mi invitación");
    window.open(`https://wa.me/573012749388?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleWhatsApp}
      className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-accent to-primary text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group animate-fade-in"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
    </button>
  );
};

export default FloatingWhatsApp;
