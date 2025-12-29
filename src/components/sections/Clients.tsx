import { Quote } from "lucide-react";

const clients = [
  //{ name: "Empresa Alpha", logo: "ALPHA" },
  //{ name: "Tech Solutions", logo: "TECH" },
  //{ name: "Grupo Beta", logo: "BETA" },
  //{ name: "Indústria Sigma", logo: "SIGMA" },
  //{ name: "Varejo Plus", logo: "PLUS" },
  //{ name: "Construtora Delta", logo: "DELTA" },
];

const testimonials = [
  {
    name: "Carlos Silva",
    company: "Grupo Beta",
    text: "A ARTVISUAL superou todas as nossas expectativas. O projeto da fachada ficou incrível e o atendimento foi excepcional.",
    color: "border-av-blue",
  },
  {
    name: "Marina Santos",
    company: "Tech Solutions",
    text: "Profissionalismo e criatividade em cada detalhe. Recomendo para qualquer empresa que busca qualidade em comunicação visual.",
    color: "border-av-pink",
  },
  {
    name: "Roberto Lima",
    company: "Varejo Plus",
    text: "Parceria de longa data. Sempre entregam no prazo e com qualidade superior. A melhor escolha que fizemos.",
    color: "border-av-orange",
  },
];

const Clients = () => {
  return (
    <section id="clientes" className="section-padding">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Clientes & Parceiros
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Quem <span className="gradient-text">confia</span> em nós
          </h2>
          <p className="text-muted-foreground text-lg">
            Empresas de diversos segmentos escolhem a ARTVISUAL para suas soluções de comunicação visual.
          </p>
        </div>

        {/* Clients Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="group flex items-center justify-center p-6 bg-card rounded-xl shadow-card card-hover aspect-square"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="font-display font-bold text-xl text-muted-foreground group-hover:gradient-text transition-all">
                {client.logo}
              </span>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`relative p-8 bg-card rounded-2xl shadow-card card-hover border-l-4 ${testimonial.color}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <Quote className="absolute top-6 right-6 text-muted-foreground/20" size={40} />
              <p className="text-foreground mb-6 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-display font-bold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
