import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Upsell2 = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(8 * 60); // 8 minutos

  useEffect(() => {
    if (timeLeft === 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
  const seconds = String(timeLeft % 60).padStart(2, '0');

  const handleAccept = () => {
    window.open("https://pay.kirvano.com/951b35ce-4a47-4571-a46c-2977281a6b00", "_blank");
    navigate("/thank-you");
  };

  const handleReject = () => {
    navigate("/thank-you");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Timer */}
        <div className="text-center mb-8">
          <div className="inline-block bg-gradient-to-r from-red-600 to-pink-600 text-white px-6 py-3 rounded-full text-2xl font-bold">
            ⏰ OFERTA FINAL EXPIRA EM: {minutes}:{seconds}
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            🎉 ÚLTIMA OFERTA ESPECIAL!
          </h1>
          <p className="text-xl md:text-2xl text-yellow-300">
            Complete sua biblioteca de estudos bíblicos!
          </p>
        </div>

        {/* Oferta Upsell 2 */}
        <div className="max-w-4xl mx-auto bg-white text-gray-900 rounded-3xl shadow-2xl p-8 md:p-12 mb-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              📖 MANUAL DE INTERPRETAÇÃO BÍBLICA
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 mb-6">
              O complemento perfeito para seus estudos!
            </p>
          </div>

          {/* Produto */}
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-purple-800">
                  📚 O que você vai aprender:
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-3">
                    <span className="text-purple-500 text-2xl">🔍</span>
                    <span>Técnicas avançadas de interpretação</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-purple-500 text-2xl">📖</span>
                    <span>Métodos de estudo bíblico sistemático</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-purple-500 text-2xl">🧭</span>
                    <span>Como contextualizar passagens difíceis</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-purple-500 text-2xl">⚖️</span>
                    <span>Princípios de hermenêutica bíblica</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-purple-500 text-2xl">🎯</span>
                    <span>Aplicação prática das escrituras</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-pink-800">
                  🎁 Bônus inclusos:
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-3">
                    <span className="text-pink-500 text-2xl">📋</span>
                    <span>Checklist de interpretação</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-pink-500 text-2xl">📝</span>
                    <span>Templates para estudos</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-pink-500 text-2xl">🗂️</span>
                    <span>Guia de referências cruzadas</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-pink-500 text-2xl">💡</span>
                    <span>Dicas de memorização</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-pink-500 text-2xl">🔄</span>
                    <span>Atualizações gratuitas</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Preço */}
            <div className="text-center mt-8">
              <div className="text-lg text-gray-600 line-through mb-2">Valor normal: R$ 49,90</div>
              <div className="text-5xl font-extrabold text-green-600 mb-2">R$ 16,90</div>
              <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-4 py-2 rounded-full inline-block font-bold text-lg">
                🔥 DESCONTO DE 66%!
              </div>
            </div>
          </div>

          {/* Por que esta oferta é especial */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
            <h4 className="text-xl font-bold text-blue-800 mb-3">
              💎 Por que esta oferta é especial?
            </h4>
            <p className="text-blue-700 mb-3">
              Você acabou de adquirir um material incrível sobre profecias bíblicas. 
              Agora você pode potencializar ainda mais seus estudos com técnicas profissionais de interpretação!
            </p>
            <p className="text-blue-600 font-semibold">
              ✨ Juntos, estes materiais formarão sua biblioteca completa de estudos bíblicos!
            </p>
          </div>

          {/* Urgência */}
          <div className="bg-red-100 border-2 border-red-500 rounded-xl p-6 mb-8">
            <div className="text-center">
              <h4 className="text-2xl font-bold text-red-800 mb-3">⚡ ÚLTIMA CHANCE!</h4>
              <p className="text-red-700 text-lg mb-3">
                Este é o preço mais baixo que oferecemos para este manual.
              </p>
              <p className="text-red-600 font-bold">
                Após esta página, o valor será R$ 49,90!
              </p>
            </div>
          </div>

          {/* Botões */}
          <div className="flex flex-col gap-4">
            <button 
              onClick={handleAccept}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-2xl py-6 rounded-full shadow-xl transition-all duration-300 hover:scale-105"
            >
              🚀 SIM! QUERO O MANUAL POR R$ 16,90
            </button>
            
            <button 
              onClick={handleReject}
              className="w-full bg-gray-400 hover:bg-gray-500 text-white font-bold text-lg py-4 rounded-full transition-all duration-300"
            >
              Não, obrigado. Finalizar compras.
            </button>
          </div>
        </div>

        {/* Depoimentos */}
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur rounded-xl p-6">
            <p className="text-sm mb-3">
              "O Manual de Interpretação transformou minha forma de estudar a Bíblia. 
              Agora entendo passagens que antes eram um mistério!"
            </p>
            <p className="text-yellow-300 font-bold">- João Santos</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur rounded-xl p-6">
            <p className="text-sm mb-3">
              "Excelente complemento! Uso junto com os estudos proféticos. 
              Recomendo para todos os estudantes da Bíblia."
            </p>
            <p className="text-yellow-300 font-bold">- Ana Costa</p>
          </div>
        </div>

        {/* Garantia */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full">
            <span className="text-2xl">🛡️</span>
            <span className="font-bold">Garantia incondicional de 7 dias</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upsell2;
