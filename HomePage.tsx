import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import SearchFilters from '../components/SearchFilters';
import InfluencerGrid from '../components/InfluencerGrid';
import Features from '../components/Features';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import AuthModal from '../components/AuthModal';

const HomePage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'brand' | 'influencer' | 'login'>('login');
  const navigate = useNavigate();

  const handleViewProfile = (influencerId: number) => {
    navigate(`/influencer/${influencerId}`);
  };

  console.log('✅ [HomePage] tamamlandı');

  return (
    <div className="min-h-screen bg-white">
      <Header onLoginClick={() => setModalOpen(true)} />
      <Hero 
        onStartFree={() => navigate('/login?role=brand')}
        onWatchDemo={() => navigate('/demo')}
      />
      <SearchFilters />
      <InfluencerGrid onViewProfile={handleViewProfile} />
      <Features />
      <Stats />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
      
      <AuthModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        type={modalType}
        onBrandLogin={() => navigate('/login?role=brand')}
        onInfluencerLogin={() => navigate('/login?role=influencer')}
      />
    </div>
  );
};

export default HomePage;