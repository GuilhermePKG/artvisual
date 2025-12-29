import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container-narrow section-padding pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="font-display text-2xl font-bold">
                <span className="text-av-blue">ART</span>
                <span className="text-av-pink">VI</span>
                <span className="text-av-yellow">SU</span>
                <span className="text-av-orange">AL</span>
              </span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Transformamos ideias em comunicação visual de impacto. Sua marca merece ser vista.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/artvisualsinalizacao?igsh=MWg3anQ1ZmE2NWxtcQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-av-pink transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-av-blue transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-av-blue transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {["Home", "Quem Somos", "Serviços", "Portfólio", "Clientes", "Contato"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(" ", "-")}`}
                      className="text-background/70 hover:text-av-yellow transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Serviços</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li>Comunicação Visual</li>
              <li>Sinalização</li>
              <li>Impressão Digital</li>
              <li>Design Gráfico</li>
              <li>Projetos Especiais</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-background/70">
                <MapPin size={18} className="text-av-orange mt-0.5 flex-shrink-0" />
                <span>Rua Dona Alda de Andrade Nº170, Recife - PE</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-background/70">
                <Phone size={18} className="text-av-yellow flex-shrink-0" />
                <span>+55 (81) 3299-5311 / (81) 99966-3287</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-background/70">
                <Mail size={18} className="text-av-pink flex-shrink-0" />
                <span>comercial@artvisualsinalizacao.com.br</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container-narrow py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/60">
          <p>© {currentYear} ARTVISUAL. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
