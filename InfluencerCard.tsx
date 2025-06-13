import React, { useState } from 'react';
import { MapPin, Users, TrendingUp, Heart, MessageCircle, Share, Star, Mail, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface InfluencerCardProps {
  influencer: {
    id: number;
    name: string;
    username: string;
    avatar: string;
    location: string;
    category: string;
    followers: number;
    engagement: number;
    avgLikes: number;
    avgComments: number;
    rating: number;
    priceRange: string;
    recentCampaigns: number;
    verified: boolean;
  };
  onViewProfile?: (id: number) => void;
}

const InfluencerCard: React.FC<InfluencerCardProps> = ({ influencer, onViewProfile }) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const navigate = useNavigate();

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  const handleContact = () => {
    // Check if user is logged in and is a brand
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const userType = localStorage.getItem('userType');
    
    if (!isLoggedIn) {
      // Redirect to login if not logged in
      navigate('/login?role=brand');
      return;
    }
    
    if (userType !== 'brand') {
      alert('Sadece marka hesapları etkileyicilerle iletişime geçebilir.');
      return;
    }
    
    // If logged in as brand, proceed with contact
    alert(`${influencer.name} ile iletişime geçiliyor...\nE-posta gönderiliyor!`);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${influencer.name} - MikroEtki`,
        text: `${influencer.name} profilini inceleyin`,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert(`${influencer.name} profil linki kopyalandı!`);
    }
  };

  const handleFavorite = () => {
    setIsFavorited(!isFavorited);
    alert(`${influencer.name} ${!isFavorited ? 'favorilere eklendi' : 'favorilerden çıkarıldı'}!`);
  };

  const handleViewProfile = () => {
    if (onViewProfile) {
      onViewProfile(influencer.id);
    } else {
      navigate(`/influencer/${influencer.id}`);
    }
  };

  console.log('✅ [InfluencerCard with Auth Check] tamamlandı');

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 group">
      {/* Header */}
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img
                src={influencer.avatar}
                alt={influencer.name}
                className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-100"
              />
              {influencer.verified && (
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              )}
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-800 transition-colors">
                {influencer.name}
              </h3>
              <p className="text-sm text-gray-500">@{influencer.username}</p>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium text-gray-700">{influencer.rating}</span>
          </div>
        </div>

        <div className="flex items-center space-x-4 mt-3 text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <MapPin className="w-4 h-4" />
            <span>{influencer.location}</span>
          </div>
          <div className="px-2 py-1 bg-gray-100 rounded-full text-xs">
            {influencer.category}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="px-6 pb-4">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-1 mb-1">
              <Users className="w-4 h-4 text-blue-600" />
              <span className="font-semibold text-gray-900">{formatNumber(influencer.followers)}</span>
            </div>
            <p className="text-xs text-gray-500">Takipçi</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center space-x-1 mb-1">
              <TrendingUp className="w-4 h-4 text-green-600" />
              <span className="font-semibold text-gray-900">{influencer.engagement}%</span>
            </div>
            <p className="text-xs text-gray-500">Etkileşim</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4 text-xs text-gray-600">
          <div className="flex items-center space-x-1">
            <Heart className="w-3 h-3 text-red-500" />
            <span>Ort. {formatNumber(influencer.avgLikes)} beğeni</span>
          </div>
          <div className="flex items-center space-x-1">
            <MessageCircle className="w-3 h-3 text-blue-500" />
            <span>Ort. {influencer.avgComments} yorum</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm font-semibold text-gray-900">{influencer.priceRange}</p>
            <p className="text-xs text-gray-500">Per post</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-500">{influencer.recentCampaigns} kampanya</p>
            <p className="text-xs text-gray-500">Son 3 ay</p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="px-6 pb-6">
        <div className="flex space-x-2 mb-3">
          <button 
            onClick={handleContact}
            className="flex-1 bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-900 transition-colors font-medium text-sm flex items-center justify-center space-x-1"
          >
            <Mail className="w-4 h-4" />
            <span>İletişime Geç</span>
          </button>
          <button 
            onClick={handleFavorite}
            className={`px-3 py-2 border rounded-lg transition-colors ${
              isFavorited 
                ? 'border-red-300 bg-red-50 text-red-600' 
                : 'border-gray-300 hover:bg-gray-50'
            }`}
          >
            <Heart className={`w-4 h-4 ${isFavorited ? 'fill-current' : ''}`} />
          </button>
          <button 
            onClick={handleShare}
            className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Share className="w-4 h-4 text-gray-600" />
          </button>
        </div>
        
        <button 
          onClick={handleViewProfile}
          className="w-full border border-blue-300 text-blue-600 py-2 rounded-lg hover:bg-blue-50 transition-colors font-medium text-sm flex items-center justify-center space-x-1"
        >
          <Eye className="w-4 h-4" />
          <span>Detaylı Profil</span>
        </button>
      </div>
    </div>
  );
};

export default InfluencerCard;