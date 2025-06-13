import React from 'react';
import { TrendingUp, Users, Award, DollarSign } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: Users,
      value: '10,000+',
      label: 'Doğrulanmış Etkileyici',
      description: 'Gerçek takipçisi olan, aktif etkileyiciler',
      color: 'bg-blue-500'
    },
    {
      icon: TrendingUp,
      value: '%87',
      label: 'Ortalama Etkileşim Oranı',
      description: 'Sektör ortalamasının 3 katı',
      color: 'bg-green-500'
    },
    {
      icon: Award,
      value: '500+',
      label: 'Başarılı Kampanya',
      description: 'Hedeflenen ROI\'a ulaşan projeler',
      color: 'bg-purple-500'
    },
    {
      icon: DollarSign,
      value: '₺50M+',
      label: 'Toplam Kampanya Değeri',
      description: 'Platform üzerinden gerçekleşen iş hacmi',
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Rakamlarla MikroEtki
          </h2>
          <p className="text-xl text-gray-600">
            Türkiye'nin en büyük mikro-etkileyici ağında yerinizi alın
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className={`w-16 h-16 ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-2">
                {stat.label}
              </div>
              <div className="text-gray-600">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;