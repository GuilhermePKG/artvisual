import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Clients from "@/components/sections/Clients";
import Contact from "@/components/sections/Contact";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>ARTVISUAL | Comunicação Visual e Sinalização em São Paulo</title>
        <meta 
          name="description" 
          content="ARTVISUAL - Especialistas em comunicação visual, sinalização, impressão digital e design gráfico em São Paulo. Mais de 15 anos transformando marcas." 
        />
        <meta name="keywords" content="comunicação visual, sinalização, impressão digital, letreiros, fachadas, São Paulo, design gráfico" />
        <meta property="og:title" content="ARTVISUAL | Comunicação Visual e Sinalização" />
        <meta property="og:description" content="Transformamos suas ideias em experiências visuais. Soluções completas em comunicação visual." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://artvisual.com.br" />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <Clients />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
