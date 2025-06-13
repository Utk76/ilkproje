import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DiscoverPage from './pages/DiscoverPage';
import CampaignsPage from './pages/CampaignsPage';
import AnalyticsPage from './pages/AnalyticsPage';
import PricingPage from './pages/PricingPage';
import LoginPage from './pages/LoginPage';
import DemoPage from './pages/DemoPage';
import BrandDashboard from './pages/BrandDashboard';
import InfluencerDashboard from './pages/InfluencerDashboard';
import InfluencerDetail from './pages/InfluencerDetail';
import SecurityPage from './pages/SecurityPage';

function App() {
  console.log('✅ [App Router] tamamlandı');
  
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/discover" element={<DiscoverPage />} />
          <Route path="/campaigns" element={<CampaignsPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/brand-dashboard/*" element={<BrandDashboard />} />
          <Route path="/influencer-dashboard/*" element={<InfluencerDashboard />} />
          <Route path="/influencer/:id" element={<InfluencerDetail />} />
          <Route path="/security" element={<SecurityPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;