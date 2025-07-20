import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "O que é o Bobbie Goods Personagens da Bíblia?",
      answer: "É uma coleção com mais de 70 personagens bíblicos ilustrados em um estilo fofo e kawaii, perfeito para que crianças e adultos aprendam sobre a Bíblia de forma divertida e visual. Inclui personagens de Gênesis a Apocalipse com versículos relacionados."
    },
    {
      question: "Como recebo o material?",
      answer: "Imediatamente após a compra, você receberá um e-mail com o link para download. Todo o material é digital, então você pode acessar instantaneamente de qualquer dispositivo."
    },
    {
      question: "Posso imprimir?",
      answer: "Sim! Todo o material vem em alta resolução e está otimizado tanto para uso digital (celular, tablet) quanto para impressão caseira ou profissional. Você pode imprimir quantas vezes quiser."
    },
    {
      question: "Para quais idades é indicado?",
      answer: "O material é perfeito para todas as idades: crianças a partir de 3 anos, jovens, adultos e líderes religiosos. Os desenhos são simples para os pequenos, mas com detalhes suficientes para entreter todas as idades."
    },
    {
      question: "Tem garantia?",
      answer: "Sim, oferecemos garantia incondicional de 7 dias. Se por qualquer motivo você não ficar satisfeito, devolvemos 100% do seu dinheiro sem perguntas."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Perguntas Frequentes 🤔
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gradient-hero border border-purple-deep/20 rounded-2xl px-6 shadow-soft"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-purple-deep transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};