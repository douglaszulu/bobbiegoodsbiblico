import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import personajesBiblicos from "@/assets/personajes-biblicos.png";

export const HeroBanner = () => {
  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Floating shapes for decoration */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-pink-vibrant/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-16 w-32 h-32 bg-purple-deep/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-blue-bright/20 rounded-full blur-xl animate-pulse delay-500"></div>
      
      <div className="container mx-auto px-4 py-16 text-center relative z-10">
        {/* Special Offer Badge */}
        <Badge variant="secondary" className="mb-8 text-white text-lg px-6 py-2 bg-gradient-main">
          ⭐ OFERTA ESPECIAL
        </Badge>
        
        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-main bg-clip-text text-transparent leading-tight">
          Ensine a Bíblia para seus filhos de forma divertida e criativa! 🎨✝️
        </h1>
        
        {/* Subtitle */}
        <p className="text-2xl md:text-3xl text-foreground/80 mb-8 font-medium">
          Pacote com mais de 70 ilustrações fofas (Bobbie Goods) para colorir, aprender e colecionar. Download imediato!
        </p>
        
        {/* Description */}
        <p className="text-lg md:text-xl text-foreground/70 mb-12 max-w-3xl mx-auto">
          Estude, colecione e se encante com as ilustrações mais fofas dos personagens bíblicos!
        </p>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft">
            <div className="text-4xl font-bold text-pink-vibrant mb-2">+70</div>
            <div className="text-foreground/70">Personagens</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft">
            <div className="text-4xl font-bold text-blue-bright mb-2">HD</div>
            <div className="text-foreground/70">Alta Qualidade</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft">
            <div className="text-4xl font-bold text-purple-deep mb-2">100%</div>
            <div className="text-foreground/70">Digital</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft">
            <div className="text-4xl font-bold text-green-fresh mb-2">Acesso</div>
            <div className="text-foreground/70">Imediato</div>
          </div>
        </div>
        
        {/* CTA Button */}
        <Button variant="cta" className="w-full"
                    onClick={() => window.open('https://pay.kirvano.com/76c8b58d-4afd-4820-87fc-61787e254334', '_blank')}
                  >
                    QUERO MEU PACK! (SOMENTE R$ 9,97)
                  </Button>
        
        {/* Hero Image */}
        <div className="relative max-w-4xl mx-auto">
          <img 
            src={personajesBiblicos} 
            alt="Personagens bíblicos no estilo Bobbie Goods" 
            className="w-full h-auto rounded-3xl shadow-glow"
          />
        </div>
        
        {/* Bottom Text */}
        <div className="mt-12 max-w-4xl mx-auto">
          <p className="text-lg text-foreground/70 leading-relaxed">
            <span className="font-bold text-purple-deep">Tempo de qualidade com Deus e em família.</span> 
            Enquanto milhares de pessoas encontraram nos marcadores uma forma de acalmar a mente, nós trouxemos o mesmo conceito para um lugar ainda mais profundo: a Bíblia.
          </p>
        </div>
      </div>
    </div>
  );
};
