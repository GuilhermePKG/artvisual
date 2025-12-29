import { 
  PenTool, 
  Printer, 
  Building2, 
  Palette, 
  Lightbulb,
  ShoppingBag
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Building2,
    title: "Fachadas e Letreiros",
    description: "Letreiros luminosos, fachadas em ACM, letras caixas e totens que destacam seu negócio.",
    color: "from-av-blue to-av-blue/70",
  },
  {
    icon: PenTool,
    title: "Sinalização",
    description: "Sinalização interna e externa, placas de identificação e sistemas de wayfinding.",
    color: "from-av-pink to-av-pink/70",
  },
  {
    icon: Printer,
    title: "Impressão Digital",
    description: "Impressão em alta definição em diversos materiais: banners, adesivos, lonas e tecidos.",
    color: "from-av-yellow to-av-yellow/70",
  },
  {
    icon: Palette,
    title: "Design Gráfico",
    description: "Criação de identidade visual, logotipos, materiais promocionais e papelaria corporativa.",
    color: "from-av-orange to-av-orange/70",
  },
  {
    icon: ShoppingBag,
    title: "PDV e Displays",
    description: "Materiais de ponto de venda, displays, totens interativos e mobiliário promocional.",
    color: "from-av-blue to-av-pink",
  },
  {
    icon: Lightbulb,
    title: "Projetos Especiais",
    description: "Projetos personalizados e soluções sob medida para necessidades específicas.",
    color: "from-av-pink to-av-orange",
  },
];

const Services = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="servicos" className="section-padding">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Nossos Serviços
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Soluções completas em{" "}
            <span className="gradient-text">comunicação visual</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos uma linha completa de produtos e serviços para atender todas as necessidades de comunicação visual da sua empresa.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-8 bg-card rounded-2xl shadow-card card-hover overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
              
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 text-primary-foreground shadow-lg`}>
                <service.icon size={28} />
              </div>

              {/* Content */}
              <h3 className="font-display font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="gradient" size="lg" onClick={scrollToContact}>
            Solicite um Orçamento
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
