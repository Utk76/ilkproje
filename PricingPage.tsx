import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Pricing from '../components/Pricing';

const PricingPage = () => {
  const navigate = useNavigate();

  console.log('✅ [PricingPage] tamamlandı');

  return (
    <div className="min-h-screen bg-white">
      <Header onLoginClick={() => navigate('/login')} />
      <div className="pt-16">
        <Pricing />
      </div>
      <Footer />
    </div>
  );
};

export default PricingPage;