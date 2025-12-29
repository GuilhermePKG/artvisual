import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: MapPin,
    title: "Endereço",
    info: "Rua Dona Alda de Andrade. 170 Imbiribeira - Recife ",
    color: "bg-av-orange/10 text-av-orange",
  },
  {
    icon: Phone,
    title: "Telefone",
    info: "(81) 99966-3287",
    color: "bg-av-blue/10 text-av-blue",
  },
  {
    icon: Mail,
    title: "E-mail",
    info: "comercial@artvisualsinalizacao.com.br",
    color: "bg-av-pink/10 text-av-pink",
  },
  {
    icon: Clock,
    title: "Horário",
    info: "Seg a Sab: 7h às 19h",
    color: "bg-av-yellow/10 text-av-yellow",
  },
];

const WHATSAPP_NUMBER = "5581999663287"; // Substituir pelo número real
const WHATSAPP_MESSAGE = "Olá! Gostaria de solicitar um orçamento.";

const Contact = () => {
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contato" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Contato
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Vamos <span className="gradient-text">conversar</span>?
          </h2>
          <p className="text-muted-foreground text-lg">
            Solicite um orçamento sem compromisso. Nossa equipe está pronta para atendê-lo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-card card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center flex-shrink-0`}>
                  <item.icon size={22} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground">{item.title}</h4>
                  <p className="text-muted-foreground">{item.info}</p>
                </div>
              </div>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <div className="bg-card p-8 md:p-12 rounded-2xl shadow-card text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#25D366]/10 flex items-center justify-center">
              <MessageCircle size={40} className="text-[#25D366]" />
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Fale conosco pelo WhatsApp
            </h3>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Clique no botão abaixo para iniciar uma conversa direta com nossa equipe. 
              Respondemos rapidamente!
            </p>
            <Button
              variant="gradient"
              size="lg"
              onClick={handleWhatsAppClick}
              className="gap-3 text-lg px-8 py-6"
            >
              <MessageCircle size={24} />
              Chamar no WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
