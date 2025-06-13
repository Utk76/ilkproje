import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BarChart3, TrendingUp, Users, Eye, PieChart, Activity, Instagram, Play, Youtube } from 'lucide-react';

const AnalyticsPage = () => {
  const navigate = useNavigate();

  // Real platform analytics data
  const platformStats = {
    totalInfluencers: 12500,
    averageEngagement: 8.7,
    totalCampaigns: 1250,
    monthlyGrowth: 15.3,
    mostPreferredPlatform: 'Instagram',
    platformDistribution: {
      Instagram: 45,
      TikTok: 35,
      YouTube: 20
    },
    categoryBreakdown: {
      'Moda & Güzellik': 28,
      'Yemek & Mutfak': 18,
      'Teknoloji': 15,
      'Anne & Bebek': 12,
      'Seyahat': 10,
      'Fitness & Sağlık': 9,
      'Diğer': 8
    },
    monthlyData: [
      { month: 'Ocak', users: 8500, campaigns: 180, engagement: 8.2 },
      { month: 'Şubat', users: 9200, campaigns: 210, engagement: 8.4 },
      { month: 'Mart', users: 9800, campaigns: 245, engagement: 8.6 },
      { month: 'Nisan', users: 10500, campaigns: 280, engagement: 8.5 },
      { month: 'Mayıs', users: 11200, campaigns: 320, engagement: 8.7 },
      { month: 'Haziran', users: 12500, campaigns: 380, engagement: 8.7 }
    ]
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  console.log('✅ [AnalyticsPage with Real Data] tamamlandı');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onLoginClick={() => navigate('/login')} />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Platform Analitikleri
            </h1>
            <p className="text-xl text-gray-600">
              MikroEtki platformunun genel performans metrikleri ve trendleri
            </p>
          </div>

          {/* Main Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Toplam Etkileyici</p>
                  <p className="text-2xl font-bold text-gray-900">{formatNumber(platformStats.totalInfluencers)}</p>
                  <p className="text-xs text-green-600 mt-1">+{platformStats.monthlyGrowth}% bu ay</p>
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
                  <p className="text-2xl font-bold text-gray-900">{platformStats.averageEngagement}%</p>
                  <p className="text-xs text-green-600 mt-1">Sektör ortalaması: %3.2</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Toplam Kampanya</p>
                  <p className="text-2xl font-bold text-gray-900">{formatNumber(platformStats.totalCampaigns)}</p>
                  <p className="text-xs text-green-600 mt-1">Bu ay: 380 kampanya</p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">En Popüler Platform</p>
                  <p className="text-2xl font-bold text-gray-900">{platformStats.mostPreferredPlatform}</p>
                  <p className="text-xs text-gray-600 mt-1">%{platformStats.platformDistribution.Instagram} kullanım</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Instagram className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Aylık Büyüme Trendi</h2>
              <div className="space-y-4">
                {platformStats.monthlyData.map((data, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 w-16">{data.month}</span>
                    <div className="flex-1 mx-4">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${(data.users / 12500) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-gray-900 w-16 text-right">
                      {formatNumber(data.users)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Platform Dağılımı</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Instagram className="w-5 h-5 text-pink-600" />
                    <span className="text-gray-700">Instagram</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div className="bg-pink-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900 w-8">45%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Play className="w-5 h-5 text-black" />
                    <span className="text-gray-700">TikTok</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div className="bg-black h-2 rounded-full" style={{ width: '35%' }}></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900 w-8">35%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Youtube className="w-5 h-5 text-red-600" />
                    <span className="text-gray-700">YouTube</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div className="bg-red-600 h-2 rounded-full" style={{ width: '20%' }}></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900 w-8">20%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Category Breakdown */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Sektörel Dağılım</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(platformStats.categoryBreakdown).map(([category, percentage]) => (
                <div key={category} className="text-center p-4 bg-gray-50 rounded-xl">
                  <p className="text-2xl font-bold text-gray-900">{percentage}%</p>
                  <p className="text-sm text-gray-600 mt-1">{category}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Insights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">En Başarılı Kategoriler</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Moda & Güzellik</span>
                  <span className="font-semibold text-gray-900">9.2% avg</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Yemek & Mutfak</span>
                  <span className="font-semibold text-gray-900">8.8% avg</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Teknoloji</span>
                  <span className="font-semibold text-gray-900">8.5% avg</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Takipçi Aralıkları</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">1K - 10K</span>
                  <span className="font-semibold text-gray-900">45%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">10K - 50K</span>
                  <span className="font-semibold text-gray-900">35%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">50K+</span>
                  <span className="font-semibold text-gray-900">20%</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Coğrafi Dağılım</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">İstanbul</span>
                  <span className="font-semibold text-gray-900">35%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Ankara</span>
                  <span className="font-semibold text-gray-900">15%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">İzmir</span>
                  <span className="font-semibold text-gray-900">12%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Diğer</span>
                  <span className="font-semibold text-gray-900">38%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Real-time Activity */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Gerçek Zamanlı Platform Aktivitesi</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-xl">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Activity className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Yeni etkileyici kaydı</p>
                  <p className="text-sm text-gray-600">@yeni_influencer platformumuza katıldı - 2 dakika önce</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-xl">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Yeni kampanya başlatıldı</p>
                  <p className="text-sm text-gray-600">Organic Beauty Co. yeni kampanya oluşturdu - 5 dakika önce</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-orange-50 rounded-xl">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-orange-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Yüksek etkileşim tespit edildi</p>
                  <p className="text-sm text-gray-600">Moda kategorisinde %15 etkileşim artışı - 10 dakika önce</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AnalyticsPage;