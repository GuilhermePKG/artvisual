import { Award, Users, Target, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Criatividade",
    description: "Soluções inovadoras e personalizadas para cada projeto.",
    color: "text-av-yellow",
    bgColor: "bg-av-yellow/10",
  },
  {
    icon: Award,
    title: "Qualidade",
    description: "Materiais premium e acabamento impecável em todos os trabalhos.",
    color: "text-av-blue",
    bgColor: "bg-av-blue/10",
  },
  {
    icon: Target,
    title: "Compromisso",
    description: "Prazos rigorosos e atendimento personalizado.",
    color: "text-av-pink",
    bgColor: "bg-av-pink/10",
  },
  {
    icon: Users,
    title: "Parceria",
    description: "Trabalhamos junto com você do conceito à instalação.",
    color: "text-av-orange",
    bgColor: "bg-av-orange/10",
  },
];

const About = () => {
  return (
    <section id="quem-somos" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Quem Somos
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Mais de 15 anos transformando{" "}
            <span className="gradient-text">marcas</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A ARTVISUAL é uma empresa especializada em comunicação visual, oferecendo soluções completas para empresas que desejam destacar sua marca no mercado.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Story */}
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-av-blue via-av-pink to-av-orange rounded-full" />
              <div className="pl-8 space-y-6">
                <p className="text-foreground leading-relaxed">
                  Fundada com a missão de transformar a comunicação visual das empresas brasileiras, a <strong className="text-primary">ARTVISUAL</strong> se consolidou como referência no setor.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Nossa equipe de profissionais qualificados trabalha com as mais modernas tecnologias de impressão digital e produção de materiais, garantindo resultados que superam expectativas.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Do briefing à instalação, acompanhamos cada etapa do projeto para assegurar a perfeita execução e total satisfação do cliente.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Values */}
          <div className="grid grid-cols-2 gap-4">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="p-6 bg-card rounded-2xl shadow-card card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 rounded-xl ${value.bgColor} flex items-center justify-center mb-4`}>
                  <value.icon className={`${value.color}`} size={24} />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
