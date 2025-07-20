import { Card, CardContent } from "@/components/ui/card";

export const FeaturesSection = () => {
  const features = [
    {
      title: "+70 Personagens Bíblicos",
      description: "Ilustrados no estilo fofo Bobbie Goods",
      icon: "📚",
      color: "bg-pink-vibrant/10 border-pink-vibrant/20"
    },
    {
      title: "Acesso Imediato",
      description: "Material digital disponível na hora",
      icon: "⚡",
      color: "bg-blue-bright/10 border-blue-bright/20"
    },
    {
      title: "Pode Imprimir",
      description: "Use no celular, tablet ou impresso",
      icon: "🖨️",
      color: "bg-green-fresh/10 border-green-fresh/20"
    },
    {
      title: "Aprendizado Lúdico",
      description: "Visual, leve e colecionável",
      icon: "🎨",
      color: "bg-purple-deep/10 border-purple-deep/20"
    },
    {
      title: "Para Todas as Idades",
      description: "Crianças, jovens, adultos e líderes",
      icon: "👨‍👩‍👧‍👦",
      color: "bg-orange-warm/10 border-orange-warm/20"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Por que escolher nossos Personagens Bíblicos? 💖
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className={`${feature.color} border-2 hover:shadow-lg transition-all duration-300 hover:scale-105`}>
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Bible Quote */}
        <div className="bg-gradient-accent rounded-3xl p-8 md:p-12 text-center text-white shadow-glow">
          <blockquote className="text-lg md:text-xl italic mb-4">
            "Mas Jesus disse: 'Deixem que as crianças venham a mim e não as impeçam; pois o Reino dos céus pertence aos que são como elas'."
          </blockquote>
          <p className="text-white/90 font-medium">- Mateus 19:14</p>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-foreground/80 max-w-4xl mx-auto leading-relaxed">
            Por isso, a melhor forma de superar essas barreiras é chegando ao coração das crianças!
            E para te ajudar, criamos um material que vai mudar a forma como seu filho(a) vê a Bíblia.
          </p>
        </div>
      </div>
    </section>
  );
};