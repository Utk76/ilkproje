import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, ArrowLeft } from 'lucide-react';

const DemoPage = () => {
  const navigate = useNavigate();

  console.log('✅ [DemoPage] tamamlandı');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-orange-600 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center space-x-2 text-white mb-8 hover:text-orange-300 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Ana Sayfaya Dön</span>
        </button>

        <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            MikroEtki Demo
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Platformumuzun özelliklerini keşfedin
          </p>

          <div className="bg-gray-100 rounded-2xl p-12 mb-8">
            <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Play className="w-12 h-12 text-white" />
            </div>
            <p className="text-gray-600 mb-4">Demo video burada görünecek</p>
            <p className="text-sm text-gray-500">
              Platform özelliklerini gösteren interaktif demo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 bg-blue-50 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">Etkileyici Keşfet</h3>
              <p className="text-sm text-gray-600">
                Gelişmiş filtreleme ile ideal etkileyicileri bulun
              </p>
            </div>
            <div className="p-6 bg-orange-50 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">Kampanya Yönetimi</h3>
              <p className="text-sm text-gray-600">
                Kampanyalarınızı kolayca oluşturun ve takip edin
              </p>
            </div>
            <div className="p-6 bg-green-50 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">Detaylı Analitik</h3>
              <p className="text-sm text-gray-600">
                Performansınızı gerçek zamanlı olarak izleyin
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={() => navigate('/login?role=brand')}
              className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition-colors font-medium"
            >
              Ücretsiz Başla
            </button>
            <button 
              onClick={() => navigate('/discover')}
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors font-medium"
            >
              Etkileyicileri Keşfet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;