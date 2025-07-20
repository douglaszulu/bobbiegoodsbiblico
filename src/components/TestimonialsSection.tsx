import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Carla Oliveira",
      text: "Meus filhos adoraram colorir os personagens! Uma forma linda de aprender sobre a Bíblia.",
      avatar: "CO",
      rating: 5,
      productImage: "/lovable-uploads/9253593d-f68e-451b-bc72-7f5d28ac7deb.png"
    },
    {
      name: "Pastor Juan",
      text: "Excelente recurso para usar na igreja! As crianças amam esses desenhos.",
      avatar: "PJ",
      rating: 5,
      productImage: "/lovable-uploads/058758b6-b9d8-41e5-9539-2de2029e1c4f.png"
    },
    {
      name: "Maria Santos",
      text: "Meus filhos adoraram colorir! A qualidade dos desenhos é excepcional.",
      avatar: "MS",
      rating: 5,
      productImage: "/lovable-uploads/0f3d9fa6-14df-4284-a99d-b4d2c0798d00.png"
    },
    {
      name: "Ana Costa",
      text: "Material incrível! Minha filha não para de colorir os personagens bíblicos.",
      avatar: "AC",
      rating: 5,
      productImage: "/lovable-uploads/67ec20f3-aa6f-48ee-ae18-15783156fe35.png"
    },
    {
      name: "Marcos Silva",
      text: "Qualidade excepcional dos desenhos! Perfeito para atividades educativas.",
      avatar: "MSi",
      rating: 5,
      productImage: "/lovable-uploads/91f6c47a-fe1a-4bae-affb-dd2fcafd177e.png"
    },
    {
      name: "Família Oliveira",
      text: "Perfeito para atividades em família! Material muito bem elaborado.",
      avatar: "FO",
      rating: 5,
      productImage: "/lovable-uploads/9b634237-b21a-40ff-97af-f1c75868554e.png"
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            O que dizem nossos clientes 💖
          </h2>
          <div className="flex items-center justify-center gap-2 text-green-fresh text-xl font-bold">
            <span>+1.500 clientes satisfeitos</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i}>⭐</span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/90 backdrop-blur-sm border-0 shadow-soft hover:shadow-glow transition-all duration-300 hover:scale-105 overflow-hidden">
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={testimonial.productImage} 
                    alt={`Produto usado por ${testimonial.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Testimonial Content */}
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="w-12 h-12 mr-4">
                      <AvatarFallback className="bg-gradient-main text-white font-bold">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-400">⭐</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-foreground/80 italic">"{testimonial.text}"</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};