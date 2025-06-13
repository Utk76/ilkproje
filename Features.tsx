import React from 'react';
import { Shield, BarChart3, Users, Zap, Target, Globe } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: 'Gerçek Takipçi Doğrulaması',
      description: 'AI destekli analiz ile sahte takipçileri tespit ediyor, sadece gerçek kitleye sahip etkileyicileri gösteriyoruz.',
      color: 'text-green-600'
    },
    {
      icon: BarChart3,
      title: 'Detaylı Performans Analizi',
      description: 'Geçmiş kampanya verileri, etkileşim oranları ve ROI hesaplamaları ile en doğru kararı verin.',
      color: 'text-blue-600'
    },
    {
      icon: Users,
      title: 'Demografik Hedefleme',
      description: 'Müşterilérinizin yaş, cinsiyet, konum ve ilgi alanlarına göre ideal etkileyicileri bulun.',
      color: 'text-purple-600'
    },
    {
      icon: Zap,
      title: 'Hızlı Kampanya Kurulumu',
      description: '5 dakikada kampanyanızı oluşturun, etkileyicilere ulaşın ve sonuçları gerçek zamanlı takip edin.',
      color: 'text-yellow-600'
    },
    {
      icon: Target,
      title: 'Niş Pazar Uzmanlığı',
      description: 'Türkiye\'deki niş pazarlarda uzman etkileyicileri keşfedin ve hedef kitlenize doğrudan ulaşın.',
      color: 'text-red-600'
    },
    {
      icon: Globe,
      title: 'Yerel Pazar Bilgisi',
      description: 'Türk kültürünü ve trendlerini bilen, yerel pazarda etkili olan etkileyicilerle çalışın.',
      color: 'text-orange-600'
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Neden MikroEtki?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Türkiye'nin ilk mikro-etkileyici platformu olarak, KOBİ'lerin ihtiyaçlarını anlıyor 
            ve en uygun çözümleri sunuyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200 group">
              <div className={`w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;