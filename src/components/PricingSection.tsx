import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const PricingSection = () => {
  const benefits = [
    "✨ +70 Personagens Bíblicos ilustrados",
    "📖 Devocional exclusivo de 30 dias",
    "📋 Checklist colecionável dos personagens",
    "📅 Planner ilustrado para estudos",
    "🎨 Páginas para colorir (bônus)",
    "📱 Versão digital otimizada",
    "🖨️ Versão para impressão em alta qualidade",
    "🔄 Atualizações gratuitas por 1 ano"
  ];

  // Timer dinâmico
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutos em segundos

  useEffect(() => {
    if (timeLeft === 0) {
      setTimeLeft(15 * 60); // reinicia para 15 minutos
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
  const seconds = String(timeLeft % 60).padStart(2, '0');

  // Lista de nomes fictícios
  const buyers = [
    "María", "Juan", "Lucía", "Pedro", "Ana", "Carlos", "Sofía", "Miguel", "Elena", "Javier", "Carmen", "Luis", "Paula", "Andrés", "Valeria"
  ];
  const [showToast, setShowToast] = useState(false);
  const [currentBuyer, setCurrentBuyer] = useState(buyers[0]);

  useEffect(() => {
    const showRandomToast = () => {
      const randomName = buyers[Math.floor(Math.random() * buyers.length)];
      setCurrentBuyer(randomName);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 5000);
    };
    showRandomToast(); // mostra ao carregar
    const interval = setInterval(showRandomToast, 25000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Banner fixo topo responsivo, paleta do site */}
      <div className="fixed z-50 top-4 left-1/2 transform -translate-x-1/2 w-[98vw] max-w-xl rounded-2xl shadow border border-white/20 flex flex-row items-center justify-between px-3 py-2 gap-2" style={{ minWidth: '280px', background: '#b13fc3' }}>
        <div className="flex flex-col justify-center items-start flex-1 min-w-0">
          <span className="text-xs md:text-sm text-white font-semibold whitespace-nowrap">67% OFF SÓ HOJE:</span>
          <span className="text-lg md:text-2xl font-extrabold text-white tracking-widest leading-tight">{minutes}:{seconds}</span>
        </div>
        <a
          href="https://pay.kirvano.com/76c8b58d-4afd-4820-87fc-61787e254334"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 md:flex-none w-auto px-3 md:px-6 py-2 md:py-3 bg-orange-500 hover:bg-orange-600 text-white text-sm md:text-base font-extrabold rounded-lg shadow transition-all duration-300 text-center whitespace-nowrap"
          style={{ maxWidth: '220px' }}
        >
          QUERO MEU PACK!
        </a>
      </div>
      {/* Toast de compra */}
      {showToast && (
        <div className="fixed left-4 bottom-4 z-50 bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg flex items-center gap-2 animate-bounce-in">
          <span className="font-bold">{currentBuyer}</span> acabou de comprar o pack
        </div>
      )}
      {/* Título e Subtítulo com fundo gradiente rosa-roxo para legibilidade */}
      <div className="max-w-3xl mx-auto mb-4 rounded-3xl px-6 py-8 shadow-lg" style={{ background: 'linear-gradient(135deg, #ff6b6b 0%, #7f53ac 100%)' }}>
        <h2 className="text-4xl md:text-6xl font-extrabold mb-2 text-white drop-shadow-lg">
          Garanta já seus +70 Personagens Bíblicos
        </h2>
        <div className="text-2xl font-bold mb-2 text-green-300 flex items-center justify-center gap-2">
          agora mesmo! 🚀
        </div>
        <p className="text-lg md:text-xl text-white/90 mb-0 font-medium">
          Comece hoje a colecionar e estudar de forma leve e divertida!
        </p>
      </div>

      {/* Card Central */}
      <div className="max-w-2xl mx-auto mb-8">
        <div className="relative bg-white rounded-3xl shadow-glow border-4 border-yellow-300 p-8 md:p-12">
          {/* Preço antigo */}
          <div className="text-center text-lg opacity-60 line-through mb-2">De R$ 29,97 por apenas</div>
          {/* Preço grande */}
          <div className="text-center text-6xl md:text-7xl font-extrabold text-green-600 mb-4">R$ 9,97</div>
          {/* Badge de desconto */}
          <div className="flex flex-col items-center mb-4">
            <div className="text-xl font-bold bg-yellow-400 text-black px-4 py-2 rounded-full inline-block mb-2 flex items-center gap-2">
              💰 67% DE DESCONTO HOJE
            </div>
            <div className="text-lg opacity-90">
              💝 Acesso Imediato + Todos os Bônus
            </div>
          </div>
          {/* Lista do que você vai receber */}
          <div className="bg-white/80 border-2 border-blue-200 rounded-xl p-6 mb-2">
            <h3 className="text-lg font-bold mb-3 text-blue-900">O que você vai receber:</h3>
            <ul className="space-y-2 text-blue-900">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-green-500 text-xl">✔️</span> <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Botão destacado */}
      <div className="max-w-2xl mx-auto mb-8">
        <a href="https://pay.kirvano.com/76c8b58d-4afd-4820-87fc-61787e254334" target="_blank" rel="noopener noreferrer" className="cta-button w-full block text-center font-bold text-xl py-4 rounded-full shadow-xl transition-all duration-300 hover:scale-105" style={{ background: '#FF6B00', color: '#fff', animation: 'pulse 2s infinite' }}>
          COMPRAR AGORA! - R$ 9,97 (DOWNLOAD IMEDIATO)
        </a>
      </div>

      {/* Barra de garantias */}
      <div className="max-w-2xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
        <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 text-purple-deep font-bold text-base shadow">
          ✅ Acesso Imediato
        </div>
        <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 text-purple-deep font-bold text-base shadow">
          ✅ Garantia de 7 dias
        </div>
        <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 text-purple-deep font-bold text-base shadow">
          ✅ Suporte 24h
        </div>
      </div>

      {/* Estatística de famílias */}
      <div className="text-center mt-4">
        <span className="inline-block bg-white/80 text-green-700 font-bold text-base px-6 py-2 rounded-full shadow-md">
          +1.500 famílias já garantiram o seu!
        </span>
      </div>
    </section>
  );
};