import React, { useState } from 'react';
import InfluencerCard from './InfluencerCard';

interface InfluencerGridProps {
  onViewProfile?: (id: number) => void;
}

const InfluencerGrid: React.FC<InfluencerGridProps> = ({ onViewProfile }) => {
  const [sortBy, setSortBy] = useState('recommended');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  // Mock data for demonstration
  const influencers = [
    {
      id: 1,
      name: 'Ayşe Demir',
      username: 'aysedemir_style',
      avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=400',
      location: 'İstanbul',
      category: 'Moda & Güzellik',
      followers: 15400,
      engagement: 8.2,
      avgLikes: 1250,
      avgComments: 89,
      rating: 4.8,
      priceRange: '₺2,500 - ₺4,000',
      recentCampaigns: 12,
      verified: true
    },
    {
      id: 2,
      name: 'Mehmet Özkan',
      username: 'mehmet_foodie',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      location: 'Ankara',
      category: 'Yemek & Mutfak',
      followers: 8900,
      engagement: 12.5,
      avgLikes: 980,
      avgComments: 145,
      rating: 4.9,
      priceRange: '₺1,800 - ₺3,200',
      recentCampaigns: 8,
      verified: false
    },
    {
      id: 3,
      name: 'Zeynep Yılmaz',
      username: 'zeynep_travels',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
      location: 'İzmir',
      category: 'Seyahat',
      followers: 22100,
      engagement: 6.8,
      avgLikes: 1450,
      avgComments: 67,
      rating: 4.7,
      priceRange: '₺3,500 - ₺5,500',
      recentCampaigns: 15,
      verified: true
    },
    {
      id: 4,
      name: 'Can Polat',
      username: 'can_tech',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      location: 'İstanbul',
      category: 'Teknoloji',
      followers: 12800,
      engagement: 9.1,
      avgLikes: 1100,
      avgComments: 78,
      rating: 4.6,
      priceRange: '₺2,200 - ₺3,800',
      recentCampaigns: 10,
      verified: true
    },
    {
      id: 5,
      name: 'Elif Kaya',
      username: 'elif_fitness',
      avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
      location: 'Bursa',
      category: 'Fitness & Sağlık',
      followers: 18600,
      engagement: 7.9,
      avgLikes: 1380,
      avgComments: 92,
      rating: 4.8,
      priceRange: '₺2,800 - ₺4,200',
      recentCampaigns: 14,
      verified: false
    },
    {
      id: 6,
      name: 'Burak Şahin',
      username: 'burak_home',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      location: 'Antalya',
      category: 'Ev & Dekorasyon',
      followers: 9200,
      engagement: 11.3,
      avgLikes: 890,
      avgComments: 156,
      rating: 4.9,
      priceRange: '₺1,900 - ₺3,100',
      recentCampaigns: 7,
      verified: true
    }
  ];

  const handleSort = (value: string) => {
    setSortBy(value);
    console.log(`Sıralama değiştirildi: ${value}`);
  };

  const handleLoadMore = () => {
    alert('Daha fazla etkileyici yükleniyor...');
  };

  const getSortedInfluencers = () => {
    const sorted = [...influencers];
    switch (sortBy) {
      case 'engagement':
        return sorted.sort((a, b) => b.engagement - a.engagement);
      case 'followers':
        return sorted.sort((a, b) => b.followers - a.followers);
      case 'rating':
        return sorted.sort((a, b) => b.rating - a.rating);
      case 'price-low':
        return sorted.sort((a, b) => {
          const aPrice = parseInt(a.priceRange.split(' - ')[0].replace('₺', '').replace(',', ''));
          const bPrice = parseInt(b.priceRange.split(' - ')[0].replace('₺', '').replace(',', ''));
          return aPrice - bPrice;
        });
      case 'price-high':
        return sorted.sort((a, b) => {
          const aPrice = parseInt(a.priceRange.split(' - ')[1].replace('₺', '').replace(',', ''));
          const bPrice = parseInt(b.priceRange.split(' - ')[1].replace('₺', '').replace(',', ''));
          return bPrice - aPrice;
        });
      default:
        return sorted;
    }
  };

  const sortedInfluencers = getSortedInfluencers();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Öne Çıkan Etkileyiciler</h2>
          <p className="text-gray-600 mt-1">{sortedInfluencers.length} etkileyici bulundu</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 8a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 12a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 16a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
              </svg>
            </button>
          </div>
          <select 
            value={sortBy}
            onChange={(e) => handleSort(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="recommended">Sırala: Önerilen</option>
            <option value="engagement">Etkileşim Oranı</option>
            <option value="followers">Takipçi Sayısı</option>
            <option value="price-low">Fiyat (Düşük-Yüksek)</option>
            <option value="price-high">Fiyat (Yüksek-Düşük)</option>
            <option value="rating">Puan (Yüksek-Düşük)</option>
          </select>
        </div>
      </div>

      <div className={`${
        viewMode === 'grid' 
          ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
          : 'space-y-4'
      }`}>
        {sortedInfluencers.map((influencer) => (
          <InfluencerCard 
            key={influencer.id} 
            influencer={influencer} 
            onViewProfile={onViewProfile}
          />
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-12">
        <button 
          onClick={handleLoadMore}
          className="bg-blue-800 text-white px-8 py-3 rounded-lg hover:bg-blue-900 transition-colors font-medium"
        >
          Daha Fazla Göster
        </button>
      </div>

      {/* Results Summary */}
      <div className="mt-8 text-center text-sm text-gray-500">
        Gösterilen: {sortedInfluencers.length} etkileyici • Toplam: 10,000+ etkileyici
      </div>
    </div>
  );
};

export default InfluencerGrid;