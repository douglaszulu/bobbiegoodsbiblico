import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Upsell1 = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(10 * 60); // 10 minutos

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
    window.open("https://pay.kirvano.com/21d4c369-fed6-4166-a0ce-a259c0ebee7d", "_blank");
  };

  const handleReject = () => {
    navigate("/downsell1");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Timer */}
        <div className="text-center mb-8">
          <div className="inline-block bg-red-600 text-white px-6 py-3 rounded-full text-2xl font-bold">
            ⏰ OFERTA EXPIRA EM: {minutes}:{seconds}
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            🎉 PARABÉNS PELA SUA COMPRA!
          </h1>
          <p className="text-xl md:text-2xl text-yellow-300">
            Você tomou uma excelente decisão!
          </p>
        </div>

        {/* Oferta Principal */}
        <div className="max-w-4xl mx-auto bg-white text-gray-900 rounded-3xl shadow-2xl p-8 md:p-12 mb-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-bold text-red-600 mb-4">
              OFERTA ESPECIAL ÚNICA!
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 mb-6">
              Aproveite esta oportunidade ÚNICA para completar seus estudos bíblicos
            </p>
          </div>

          {/* Produto */}
          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 text-orange-800">
              📖 ESTUDO BÍBLICO COMPLETO SOBRE AS VISÕES DE DANIEL - APOCALIPSE
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-xl font-bold mb-4 text-blue-800">📚 O que você vai receber:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 text-xl">✔️</span>
                    <span>Estudo completo sobre as visões de Daniel</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 text-xl">✔️</span>
                    <span>Análise detalhada do Apocalipse</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 text-xl">✔️</span>
                    <span>Interpretações proféticas e sinais dos tempos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 text-xl">✔️</span>
                    <span>Conexões entre profecias e eventos atuais</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-bold mb-4 text-purple-800">🎁 BÔNUS EXCLUSIVOS:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500 text-xl">🎯</span>
                    <span>Interpretações Proféticas e Tradições Religiosas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500 text-xl">🎯</span>
                    <span>Perguntas e Respostas - Estudo Bíblico Daniel</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500 text-xl">🎯</span>
                    <span>Material em PDF para download</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500 text-xl">🎯</span>
                    <span>Acesso imediato e vitalício</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Preço */}
            <div className="text-center mb-6">
              <div className="text-lg text-gray-600 line-through mb-2">Valor normal: R$ 97,00</div>
              <div className="text-5xl font-extrabold text-green-600 mb-2">R$ 47,00</div>
              <div className="text-red-600 font-bold text-xl">🔥 Mais de 50% de desconto!</div>
            </div>
          </div>

          {/* Urgência */}
          <div className="bg-red-100 border-l-4 border-red-500 p-6 mb-8">
            <div className="flex items-center gap-3">
              <span className="text-3xl">⚠️</span>
              <div>
                <h4 className="text-xl font-bold text-red-800 mb-2">ATENÇÃO - OFERTA LIMITADA!</h4>
                <p className="text-red-700">
                  Esta oferta é exclusiva para quem acabou de comprar o Pack de Personagens Bíblicos. 
                  Após sair desta página, você não terá mais acesso a este desconto especial.
                </p>
              </div>
            </div>
          </div>

          {/* Botões */}
          <div className="flex flex-col gap-4">
            <button 
              onClick={handleAccept}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-2xl py-6 rounded-full shadow-xl transition-all duration-300 hover:scale-105"
            >
              🚀 SIM! QUERO ESTE ESTUDO COMPLETO - R$ 47,00
            </button>
            
            <button 
              onClick={handleReject}
              className="w-full bg-gray-400 hover:bg-gray-500 text-white font-bold text-lg py-4 rounded-full transition-all duration-300"
            >
              Não, obrigado. Continuar sem esta oferta.
            </button>
          </div>
        </div>

        {/* Garantia */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full">
            <span className="text-2xl">🛡️</span>
            <span className="font-bold">Garantia de 7 dias ou seu dinheiro de volta</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upsell1;
