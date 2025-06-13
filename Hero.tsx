import React from 'react';
import { TrendingUp, Users, Target, Star } from 'lucide-react';

interface HeroProps {
  onStartFree: () => void;
  onWatchDemo: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStartFree, onWatchDemo }) => {
  console.log('✅ [Hero Navigation] tamamlandı');

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-orange-600">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Türkiye'nin
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-yellow-300">
              Mikro-Etkileyici
            </span>
            Platformu
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            KOBİ'niz için uygun maliyetli, yüksek etkileşimli mikro-etkileyicileri keşfedin. 
            Gerçek takipçi kitlesi olan, Türk pazarını bilen etkileyicilerle büyüyün.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <button 
              onClick={onStartFree}
              className="w-full sm:w-auto bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-700 transform hover:scale-105 transition-all duration-200 shadow-xl"
            >
              Ücretsiz Başla
            </button>
            <button 
              onClick={onWatchDemo}
              className="w-full sm:w-auto bg-white bg-opacity-20 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-opacity-30 transition-all duration-200 backdrop-blur-sm border border-white border-opacity-30"
            >
              Demo İzle
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Users className="w-8 h-8 text-orange-300" />
              </div>
              <div className="text-3xl font-bold text-white">10K+</div>
              <div className="text-blue-200">Etkileyici</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <TrendingUp className="w-8 h-8 text-orange-300" />
              </div>
              <div className="text-3xl font-bold text-white">%87</div>
              <div className="text-blue-200">Ortalama Etkileşim</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Target className="w-8 h-8 text-orange-300" />
              </div>
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-blue-200">Başarılı Kampanya</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Star className="w-8 h-8 text-orange-300" />
              </div>
              <div className="text-3xl font-bold text-white">4.9</div>
              <div className="text-blue-200">Müşteri Puanı</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;