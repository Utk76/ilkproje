import React, { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import AuthModal from './AuthModal';

const CTA = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'brand' | 'influencer' | 'login'>('brand');

  const benefits = [
    'Ücretsiz hesap açma',
    '7 gün ücretsiz deneme',
    'Kredi kartı gerekmez',
    '24/7 müşteri desteği'
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-orange-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Bugün Başlayın,
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-yellow-300">
            Yarın Büyüyün
          </span>
        </h2>
        
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Türkiye'nin en etkili mikro-etkileyici platformunda yerinizi alın. 
          İlk kampanyanızı ücretsiz başlatın.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center space-x-2 text-white">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button 
            onClick={() => {
              setModalType('brand');
              setModalOpen(true);
            }}
            className="w-full sm:w-auto bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-700 transform hover:scale-105 transition-all duration-200 shadow-xl flex items-center justify-center space-x-2"
          >
            <span>Ücretsiz Hesap Aç</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <button 
            onClick={() => {
              setModalType('login');
              setModalOpen(true);
            }}
            className="w-full sm:w-auto bg-white bg-opacity-20 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-opacity-30 transition-all duration-200 backdrop-blur-sm border border-white border-opacity-30"
          >
            Satış ile Konuş
          </button>
        </div>

        <p className="text-blue-200 text-sm mt-6">
          Binlerce KOBİ'nin tercihi • Türkiye'nin #1 mikro-etkileyici platformu
        </p>
      </div>

      {/* Auth Modal */}
      <AuthModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        type={modalType}
      />
    </div>
  );
};

export default CTA;