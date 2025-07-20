import { Card, CardContent } from "@/components/ui/card";

export const WhyChooseSection = () => {
  const reasons = [
    {
      title: "Exclusividade Total",
      description: "Design único no mercado - você não encontrará esses personagens em nenhum outro lugar",
      icon: "💎",
      gradient: "bg-gradient-to-br from-pink-vibrant/20 to-purple-deep/20"
    },
    {
      title: "Aprendizado Divertido", 
      description: "Transforme o estudo bíblico em momentos de alegria e descoberta para toda a família",
      icon: "🎯",
      gradient: "bg-gradient-to-br from-blue-bright/20 to-green-fresh/20"
    },
    {
      title: "Feito com Amor",
      description: "Cada ilustração foi cuidadosamente criada pensando no desenvolvimento espiritual das crianças",
      icon: "❤️",
      gradient: "bg-gradient-to-br from-orange-warm/20 to-pink-vibrant/20"
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Por que escolher nosso material? ✨
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Desenvolvido com amor e cuidado especial para sua família
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <Card key={index} className={`${reason.gradient} border-0 shadow-soft hover:shadow-glow transition-all duration-300 hover:scale-105`}>
              <CardContent className="p-8 text-center h-full">
                <div className="text-6xl mb-6">{reason.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{reason.title}</h3>
                <p className="text-foreground/80 leading-relaxed">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Call to Action Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 text-center shadow-glow">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Dê vida aos lindos desenhos! 🥰
          </h3>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Bobbie Goods da Bíblia é para você que, em um mundo com tantas distrações, entende a importância de transmitir valores e princípios cristãos às crianças desde cedo, de forma didática, leve e eficiente.
          </p>
        </div>
      </div>
    </section>
  );
};