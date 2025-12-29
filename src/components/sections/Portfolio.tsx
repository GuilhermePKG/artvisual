import { useState } from "react";
import { X } from "lucide-react";

import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const projects = [
  {
    id: 1,
    title: "Fachada Comercial",
    category: "Fachadas",
    image: portfolio1,
  },
  {
    id: 2,
    title: "Sinalização Corporativa",
    category: "Sinalização",
    image: portfolio2,
  },
  {
    id: 3,
    title: "Impressão Digital",
    category: "Impressão",
    image: portfolio3,
  },
  {
    id: 4,
    title: "Envelopamento de Frota",
    category: "Frotas",
    image: portfolio4,
  },
  {
    id: 5,
    title: "Stand para Eventos",
    category: "Eventos",
    image: portfolio5,
  },
  {
    id: 6,
    title: "Display PDV",
    category: "PDV",
    image: portfolio6,
  },
];

const categories = ["Todos", "Fachadas", "Sinalização", "Impressão", "Frotas", "Eventos", "PDV"];

const Portfolio = () => {
  const [filter, setFilter] = useState("Todos");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredProjects = filter === "Todos" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Portfólio
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Nossos <span className="gradient-text">trabalhos</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Conheça alguns dos projetos que realizamos para nossos clientes.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category
                  ? "btn-gradient text-primary-foreground"
                  : "bg-card text-muted-foreground hover:text-foreground shadow-card"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(project.image)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-av-yellow text-sm font-medium mb-1">
                  {project.category}
                </span>
                <h3 className="text-background font-display font-bold text-xl">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-background hover:text-av-yellow transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Projeto"
            className="max-w-full max-h-[90vh] object-contain rounded-lg animate-scale-in"
          />
        </div>
      )}
    </section>
  );
};

export default Portfolio;
