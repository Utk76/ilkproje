import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  MapPin, Users, TrendingUp, Heart, Star, Shield, Eye,
  BarChart3, PieChart, Camera, ArrowLeft
} from 'lucide-react';

const InfluencerDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data based on ID
  const influencer = {
    id: parseInt(id || '1'),
    name: 'Ayşe Demir',
    username: 'aysedemir_style',
    avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=400',
    coverImage: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=1200',
    location: 'İstanbul, Türkiye',
    category: 'Moda & Güzellik',
    bio: 'Moda ve güzellik tutkunu. Sürdürülebilir yaşam savunucusu. İstanbul\'dan sevgilerle ✨',
    followers: 15400,
    engagement: 8.2,
    avgLikes: 1250,
    avgComments: 89,
    rating: 4.8,
    priceRange: '₺2,500 - ₺4,000',
    verified: true,
    trustScore: 92
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  const tabs = [
    { id: 'overview', label: 'Genel Bakış', icon: Eye },
    { id: 'analytics', label: 'Analitik', icon: BarChart3 },
    { id: 'demographics', label: 'Demografi', icon: PieChart },
    { id: 'content', label: 'İçerikler', icon: Camera },
    { id: 'performance', label: 'Performans', icon: TrendingUp }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Genel Bakış</h2>
            <p className="text-gray-600">Overview content placeholder</p>
          </div>
        );
      case 'analytics':
        return (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Analitik</h2>
            <p className="text-gray-600">Analytics content placeholder</p>
          </div>
        );
      case 'demographics':
        return (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Demografi</h2>
            <p className="text-gray-600">Demographics content placeholder</p>
          </div>
        );
      case 'content':
        return (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">İçerikler</h2>
            <p className="text-gray-600">Content showcase placeholder</p>
          </div>
        );
      case 'performance':
        return (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Performans</h2>
            <p className="text-gray-600">Performance metrics placeholder</p>
          </div>
        );
      default:
        return null;
    }
  };

  console.log('✅ [InfluencerDetail] tamamlandı');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors mr-6"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Geri</span>
            </button>
            <div className="w-8 h-8 bg-gradient-to-br from-blue-800 to-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Mİ</span>
            </div>
            <span className="ml-2 text-xl font-bold text-gray-900">MikroEtki</span>
          </div>
        </div>
      </div>

      {/* Cover & Profile Header */}
      <div className="relative">
        <div 
          className="h-64 bg-cover bg-center"
          style={{ backgroundImage: `url(${influencer.coverImage})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-end space-y-4 md:space-y-0 md:space-x-6 -mt-16">
            <div className="relative">
              <img
                src={influencer.avatar}
                alt={influencer.name}
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
              />
              {influencer.verified && (
                <div className="absolute bottom-2 right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              )}
            </div>
            
            <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="mb-4 lg:mb-0">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{influencer.name}</h1>
                  <p className="text-lg text-gray-600 mb-2">@{influencer.username}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{influencer.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span>{influencer.rating} puan</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Shield className="w-4 h-4 text-green-500" />
                      <span>%{influencer.trustScore} güven skoru</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <button className="px-4 py-2 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors flex items-center space-x-2">
                    <Heart className="w-4 h-4" />
                    <span>Favorile</span>
                  </button>
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium">
                    İletişime Geç
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-2">
          <nav className="flex space-x-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-xl transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-50 text-blue-700 border border-blue-200'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default InfluencerDetail;