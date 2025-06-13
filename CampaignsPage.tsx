import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Calendar, Users, TrendingUp, DollarSign, Eye, Play } from 'lucide-react';

const CampaignsPage = () => {
  const navigate = useNavigate();

  const campaigns = [
    {
      id: 1,
      name: 'Yaz Koleksiyonu Lansmanı',
      status: 'active',
      influencers: 5,
      budget: 15000,
      reach: 125000,
      engagement: 8.5,
      startDate: '2024-01-15',
      endDate: '2024-02-15',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      name: 'Organik Ürün Tanıtımı',
      status: 'completed',
      influencers: 3,
      budget: 8500,
      reach: 85000,
      engagement: 12.3,
      startDate: '2023-12-01',
      endDate: '2023-12-31',
      image: 'https://images.pexels.com/photos/1029896/pexels-photo-1029896.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      name: 'Teknoloji Ürün Lansmanı',
      status: 'draft',
      influencers: 0,
      budget: 12000,
      reach: 0,
      engagement: 0,
      startDate: '2024-02-20',
      endDate: '2024-03-20',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      case 'draft': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'Aktif';
      case 'completed': return 'Tamamlandı';
      case 'draft': return 'Taslak';
      default: return status;
    }
  };

  console.log('✅ [CampaignsPage] tamamlandı');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onLoginClick={() => navigate('/login')} />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Kampanyalar
              </h1>
              <p className="text-xl text-gray-600">
                Etkileyici pazarlama kampanyalarınızı yönetin ve takip edin
              </p>
            </div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors font-medium">
              Yeni Kampanya Oluştur
            </button>
          </div>

          {/* Campaign Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Aktif Kampanyalar</p>
                  <p className="text-2xl font-bold text-gray-900">3</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Toplam Erişim</p>
                  <p className="text-2xl font-bold text-gray-900">210K</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Ortalama Etkileşim</p>
                  <p className="text-2xl font-bold text-gray-900">9.2%</p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Toplam Harcama</p>
                  <p className="text-2xl font-bold text-gray-900">₺35.5K</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Campaign List */}
          <div className="space-y-6">
            {campaigns.map((campaign) => (
              <div key={campaign.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src={campaign.image}
                      alt={campaign.name}
                      className="w-16 h-16 rounded-xl object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{campaign.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(campaign.status)}`}>
                        {getStatusText(campaign.status)}
                      </span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                      <Eye className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                      <Play className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Etkileyici Sayısı</p>
                    <p className="font-semibold text-gray-900">{campaign.influencers}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Bütçe</p>
                    <p className="font-semibold text-gray-900">₺{campaign.budget.toLocaleString('tr-TR')}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Erişim</p>
                    <p className="font-semibold text-gray-900">{formatNumber(campaign.reach)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Etkileşim</p>
                    <p className="font-semibold text-gray-900">{campaign.engagement > 0 ? `%${campaign.engagement}` : '-'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Süre</p>
                    <p className="font-semibold text-gray-900">{campaign.startDate} - {campaign.endDate}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CampaignsPage;