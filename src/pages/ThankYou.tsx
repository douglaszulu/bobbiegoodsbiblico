import React, { useEffect, useState } from "react";

const ThankYou = () => {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    // Remove confetti após 5 segundos
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 text-white relative overflow-hidden">
      {/* Confetti Animation */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-10">
          <div className="confetti-container">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="confetti"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  backgroundColor: ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4'][Math.floor(Math.random() * 5)]
                }}
              />
            ))}
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-12 relative z-20">
        {/* Header de Sucesso */}
        <div className="text-center mb-12">
          <div className="inline-block bg-green-600 text-white p-6 rounded-full mb-6">
            <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            🎉 PARABÉNS!
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold text-green-300 mb-6">
            Sua compra foi realizada com sucesso!
          </h2>
          <p className="text-xl md:text-2xl text-emerald-200">
            Obrigado por confiar em nosso trabalho!
          </p>
        </div>

        {/* Card Principal */}
        <div className="max-w-4xl mx-auto bg-white text-gray-900 rounded-3xl shadow-2xl p-8 md:p-12 mb-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-green-600 mb-4">
              ✅ Compra Confirmada!
            </h3>
            <p className="text-xl text-gray-700">
              Seu pedido foi processado e você receberá os materiais em breve.
            </p>
          </div>

          {/* Próximos Passos */}
          <div className="bg-blue-50 rounded-2xl p-8 mb-8">
            <h4 className="text-2xl font-bold text-blue-800 mb-6 text-center">
              📋 Próximos Passos:
            </h4>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <h5 className="font-bold text-blue-800 mb-2">📧 Verifique seu E-mail</h5>
                <p className="text-blue-700 text-sm">
                  Você receberá um e-mail de confirmação com os links de download em até 5 minutos.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <h5 className="font-bold text-green-800 mb-2">📱 Faça o Download</h5>
                <p className="text-green-700 text-sm">
                  Clique nos links enviados por e-mail para baixar seus materiais digitais.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  3
                </div>
                <h5 className="font-bold text-purple-800 mb-2">🎯 Comece a Estudar</h5>
                <p className="text-purple-700 text-sm">
                  Organize seus materiais e comece sua jornada de estudos bíblicos!
                </p>
              </div>
            </div>
          </div>

          {/* Informações Importantes */}
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
            <h4 className="text-xl font-bold text-yellow-800 mb-3">
              ⚠️ Informações Importantes:
            </h4>
            <ul className="space-y-2 text-yellow-700">
              <li className="flex items-center gap-2">
                <span className="text-yellow-600">📌</span>
                <span>Verifique sua caixa de spam caso não receba o e-mail em 5 minutos</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yellow-600">📌</span>
                <span>Salve os arquivos em seu dispositivo para acesso offline</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yellow-600">📌</span>
                <span>Você tem acesso vitalício aos materiais adquiridos</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yellow-600">📌</span>
                <span>Garantia de 7 dias - caso não fique satisfeito, devolvemos seu dinheiro</span>
              </li>
            </ul>
          </div>

          {/* Contato de Suporte */}
          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <h4 className="text-xl font-bold text-gray-800 mb-3 text-center">
              🆘 Precisa de Ajuda?
            </h4>
            <p className="text-gray-700 text-center mb-4">
              Nossa equipe de suporte está sempre disponível para ajudá-lo!
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <div className="text-center">
                <div className="font-bold text-gray-800">📧 E-mail:</div>
                <div className="text-blue-600">suporte@bobbiegoods.com</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-gray-800">💬 WhatsApp:</div>
                <div className="text-green-600">(11) 99999-9999</div>
              </div>
            </div>
          </div>
        </div>

        {/* Testemunhos de Satisfação */}
        <div className="max-w-4xl mx-auto mb-8">
          <h3 className="text-2xl font-bold text-center mb-8 text-green-300">
            💬 O que nossos clientes dizem:
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <div className="flex items-center mb-3">
                <div className="flex text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
              <p className="text-sm mb-3">
                "Material excelente! Meus filhos adoraram os personagens e eu aprendi muito com os estudos."
              </p>
              <p className="text-green-300 font-bold">- Maria Santos</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <div className="flex items-center mb-3">
                <div className="flex text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
              <p className="text-sm mb-3">
                "Compra valeu cada centavo! Conteúdo de qualidade e entrega super rápida."
              </p>
              <p className="text-green-300 font-bold">- João Silva</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <div className="flex items-center mb-3">
                <div className="flex text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
              <p className="text-sm mb-3">
                "Recomendo para todas as famílias! Transformou nosso tempo de estudo bíblico."
              </p>
              <p className="text-green-300 font-bold">- Ana Costa</p>
            </div>
          </div>
        </div>

        {/* Agradecimento Final */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-full">
            <span className="text-xl font-bold">
              🙏 Muito obrigado pela sua confiança!
            </span>
          </div>
          <p className="text-emerald-200 mt-4 text-lg">
            Que Deus abençoe seus estudos e sua família! 🙌
          </p>
        </div>
      </div>

      <style jsx>{`
        .confetti-container {
          position: relative;
          width: 100%;
          height: 100%;
        }
        
        .confetti {
          position: absolute;
          width: 10px;
          height: 10px;
          background-color: #FFD700;
          animation: confetti-fall 3s linear infinite;
        }
        
        @keyframes confetti-fall {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default ThankYou;
