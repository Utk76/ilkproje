import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import SearchFilters from '../components/SearchFilters';
import InfluencerGrid from '../components/InfluencerGrid';
import Footer from '../components/Footer';

const DiscoverPage = () => {
  const navigate = useNavigate();

  const handleViewProfile = (influencerId: number) => {
    navigate(`/influencer/${influencerId}`);
  };

  console.log('✅ [DiscoverPage] tamamlandı');

  return (
    <div className="min-h-screen bg-white">
      <Header onLoginClick={() => navigate('/login')} />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Etkileyici Keşfet
          </h1>
          <p className="text-xl text-gray-600 text-center mb-8">
            Markanıza uygun mikro-etkileyicileri bulun ve iş birliği yapın
          </p>
        </div>
        <SearchFilters />
        <InfluencerGrid onViewProfile={handleViewProfile} />
      </div>
      <Footer />
    </div>
  );
};

export default DiscoverPage;