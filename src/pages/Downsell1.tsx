import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Downsell1 = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(5 * 60); // 5 minutos

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
    window.open("https://pay.kirvano.com/001164e1-0a4b-43ff-8b87-0cb7cf19288c", "_blank");
    navigate("/upsell2");
  };

  const handleReject = () => {
    navigate("/thank-you");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-orange-900 to-yellow-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Timer */}
        <div className="text-center mb-8">
          <div className="inline-block bg-red-600 text-white px-6 py-3 rounded-full text-2xl font-bold animate-pulse">
            ⏰ ÚLTIMA CHANCE: {minutes}:{seconds}
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            ⚠️ ESPERE UM MOMENTO!
          </h1>
          <p className="text-xl md:text-2xl text-yellow-300">
            Antes de você sair, temos uma última oferta imperdível!
          </p>
        </div>

        {/* Oferta de Downsell */}
        <div className="max-w-4xl mx-auto bg-white text-gray-900 rounded-3xl shadow-2xl p-8 md:p-12 mb-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
              🔥 OFERTA RELÂMPAGO - APENAS R$ 19,90!
            </h2>
            <p className="text-xl text-gray-700 mb-6">
              Ok, entendemos que R$ 47,00 pode estar fora do seu orçamento agora...
            </p>
            <p className="text-lg text-gray-600">
              Por isso, vamos fazer uma oferta que você não pode recusar!
            </p>
          </div>

          {/* Produto Downsell */}
          <div className="bg-gradient-to-r from-red-100 to-pink-100 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 text-red-800">
              📖 ESTUDO BÍBLICO COMPLETO SOBRE AS VISÕES DE DANIEL - APOCALIPSE
            </h3>
            
            <div className="text-center mb-6">
              <div className="text-lg text-gray-600 line-through mb-2">De R$ 47,00 por apenas</div>
              <div className="text-6xl font-extrabold text-green-600 mb-2">R$ 19,90</div>
              <div className="bg-red-600 text-white px-4 py-2 rounded-full inline-block font-bold">
                🔥 MAIS DE 58% DE DESCONTO!
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-xl font-bold mb-4 text-blue-800">📚 Você ainda recebe TUDO:</h4>
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
                    <span>Interpretações proféticas completas</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-bold mb-4 text-purple-800">🎁 TODOS OS BÔNUS:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500 text-xl">🎯</span>
                    <span>Interpretações Proféticas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500 text-xl">🎯</span>
                    <span>Perguntas e Respostas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500 text-xl">🎯</span>
                    <span>Material em PDF</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500 text-xl">🎯</span>
                    <span>Acesso vitalício</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Urgência Extrema */}
          <div className="bg-red-100 border-2 border-red-500 rounded-xl p-6 mb-8">
            <div className="text-center">
              <h4 className="text-2xl font-bold text-red-800 mb-3">🚨 ATENÇÃO FINAL! 🚨</h4>
              <p className="text-red-700 text-lg mb-3">
                Esta é a última vez que verá este material por este preço.
              </p>
              <p className="text-red-600 font-bold">
                Após sair desta página, o valor volta para R$ 97,00!
              </p>
            </div>
          </div>

          {/* Botões */}
          <div className="flex flex-col gap-4">
            <button 
              onClick={handleAccept}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-2xl py-6 rounded-full shadow-xl transition-all duration-300 hover:scale-105 animate-pulse"
            >
              🚀 SIM! QUERO POR APENAS R$ 19,90
            </button>
            
            <button 
              onClick={handleReject}
              className="w-full bg-gray-500 hover:bg-gray-600 text-white font-bold text-lg py-4 rounded-full transition-all duration-300"
            >
              Não, vou continuar sem esta oferta
            </button>
          </div>
        </div>

        {/* Depoimento Social Proof */}
        <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur rounded-2xl p-6 mb-8">
          <div className="text-center">
            <p className="text-lg mb-4">
              "Este material mudou completamente minha compreensão sobre as profecias bíblicas. 
              Vale muito mais que os R$ 19,90!" 
            </p>
            <p className="text-yellow-300 font-bold">- Maria Silva, São Paulo</p>
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

export default Downsell1;
