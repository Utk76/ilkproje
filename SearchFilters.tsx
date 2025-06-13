import React, { useState } from 'react';
import { Search, Filter, MapPin, Users, TrendingUp, Sliders } from 'lucide-react';

const SearchFilters = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [followersRange, setFollowersRange] = useState('');
  const [engagementRange, setEngagementRange] = useState('');
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    'Moda & Güzellik', 'Yemek & Mutfak', 'Teknoloji', 'Seyahat', 
    'Fitness & Sağlık', 'Anne & Bebek', 'Ev & Dekorasyon', 'Eğitim'
  ];

  const locations = [
    'İstanbul', 'Ankara', 'İzmir', 'Bursa', 'Antalya', 'Adana', 'Konya', 'Gaziantep'
  ];

  const handleSearch = () => {
    const filters = {
      searchTerm,
      category: selectedCategory,
      location: selectedLocation,
      followersRange,
      engagementRange
    };
    
    console.log('Arama filtreleri:', filters);
    alert(`Arama yapılıyor...\n${Object.entries(filters).filter(([_, value]) => value).map(([key, value]) => `${key}: ${value}`).join('\n')}`);
  };

  const handleAdvancedFilter = () => {
    setShowAdvancedFilters(!showAdvancedFilters);
  };

  const handleQuickFilter = (type: 'followers' | 'engagement', value: string) => {
    if (type === 'followers') {
      setFollowersRange(followersRange === value ? '' : value);
    } else {
      setEngagementRange(engagementRange === value ? '' : value);
    }
  };

  const clearAllFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedLocation('');
    setFollowersRange('');
    setEngagementRange('');
    setShowAdvancedFilters(false);
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 mx-4 -mt-16 relative z-10 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Search */}
        <div className="lg:col-span-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Etkileyici ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Category */}
        <div>
          <select 
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Kategori</option>
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        {/* Location */}
        <div>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select 
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Konum</option>
              {locations.map((location) => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Search Button */}
        <div>
          <button 
            onClick={handleSearch}
            className="w-full bg-blue-800 text-white px-4 py-3 rounded-xl hover:bg-blue-900 transition-colors flex items-center justify-center space-x-2"
          >
            <Search className="w-5 h-5" />
            <span>Ara</span>
          </button>
        </div>
      </div>

      {/* Advanced Filters Toggle */}
      <div className="flex justify-between items-center mt-4">
        <div className="flex flex-wrap gap-2">
          <span className="text-sm text-gray-600 mr-2">Hızlı Filtre:</span>
          <button 
            onClick={() => handleQuickFilter('followers', '1K-10K')}
            className={`px-3 py-1 rounded-full text-sm transition-colors ${
              followersRange === '1K-10K' 
                ? 'bg-blue-500 text-white' 
                : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
            }`}
          >
            1K-10K Takipçi
          </button>
          <button 
            onClick={() => handleQuickFilter('engagement', '5+')}
            className={`px-3 py-1 rounded-full text-sm transition-colors ${
              engagementRange === '5+' 
                ? 'bg-green-500 text-white' 
                : 'bg-green-100 text-green-800 hover:bg-green-200'
            }`}
          >
            %5+ Etkileşim
          </button>
          <button 
            onClick={() => alert('Son 30 gün aktif filtresi uygulandı!')}
            className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm hover:bg-purple-200 transition-colors"
          >
            Son 30 Gün Aktif
          </button>
          <button 
            onClick={() => alert('Bütçe dostu filtresi uygulandı!')}
            className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm hover:bg-orange-200 transition-colors"
          >
            Bütçe Dostu
          </button>
          {(searchTerm || selectedCategory || selectedLocation || followersRange || engagementRange) && (
            <button 
              onClick={clearAllFilters}
              className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm hover:bg-red-200 transition-colors"
            >
              Filtreleri Temizle
            </button>
          )}
        </div>
        
        <button 
          onClick={handleAdvancedFilter}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
        >
          <Sliders className="w-4 h-4" />
          <span className="text-sm">Gelişmiş Filtreler</span>
        </button>
      </div>

      {/* Advanced Filters Panel */}
      {showAdvancedFilters && (
        <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-4">Gelişmiş Filtreler</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Takipçi Aralığı
              </label>
              <select 
                value={followersRange}
                onChange={(e) => setFollowersRange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Seçin</option>
                <option value="1K-5K">1K - 5K</option>
                <option value="5K-10K">5K - 10K</option>
                <option value="10K-50K">10K - 50K</option>
                <option value="50K+">50K+</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Etkileşim Oranı
              </label>
              <select 
                value={engagementRange}
                onChange={(e) => setEngagementRange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Seçin</option>
                <option value="3-5">%3 - %5</option>
                <option value="5-8">%5 - %8</option>
                <option value="8-12">%8 - %12</option>
                <option value="12+">%12+</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bütçe Aralığı
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">Seçin</option>
                <option value="500-1500">₺500 - ₺1,500</option>
                <option value="1500-3000">₺1,500 - ₺3,000</option>
                <option value="3000-5000">₺3,000 - ₺5,000</option>
                <option value="5000+">₺5,000+</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end mt-4 space-x-2">
            <button 
              onClick={() => setShowAdvancedFilters(false)}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              İptal
            </button>
            <button 
              onClick={() => {
                handleSearch();
                setShowAdvancedFilters(false);
              }}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Filtreleri Uygula
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchFilters;