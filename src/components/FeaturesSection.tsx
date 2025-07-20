import { Card, CardContent } from "@/components/ui/card";

export const FeaturesSection = () => {
  const features = [
    {
      title: "+70 Personajes Bíblicos",
      description: "Ilustrados en estilo tierno Bobbie Goods",
      icon: "📚",
      color: "bg-pink-vibrant/10 border-pink-vibrant/20"
    },
    {
      title: "Acceso Inmediato",
      description: "Material digital disponible al instante",
      icon: "⚡",
      color: "bg-blue-bright/10 border-blue-bright/20"
    },
    {
      title: "Se Puede Imprimir",
      description: "Úsalo en celular, tablet o impreso",
      icon: "🖨️",
      color: "bg-green-fresh/10 border-green-fresh/20"
    },
    {
      title: "Aprendizaje Lúdico",
      description: "Visual, ligero y coleccionable",
      icon: "🎨",
      color: "bg-purple-deep/10 border-purple-deep/20"
    },
    {
      title: "Para Todas las Edades",
      description: "Niños, jóvenes, adultos y líderes",
      icon: "👨‍👩‍👧‍👦",
      color: "bg-orange-warm/10 border-orange-warm/20"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            ¿Por qué elegir nuestros Personajes Bíblicos? 💖
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
            "Pero Jesús dijo: 'Dejen que los niños vengan a mí y no se lo impidan; 
            pues el Reino de los cielos pertenece a los que son como ellos'."
          </blockquote>
          <p className="text-white/90 font-medium">- Mateo 19:14</p>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-foreground/80 max-w-4xl mx-auto leading-relaxed">
            Por eso, ¡la mejor forma de superar estas barreras es llegando a sus corazones! 
            Y para ayudarte hemos creado un material que cambiará la forma en que tu hijo(a) ve la Biblia.
          </p>
        </div>
      </div>
    </section>
  );
};