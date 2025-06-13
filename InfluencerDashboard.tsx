import React, { useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { 
  BarChart3, Edit, MessageCircle, TrendingUp, DollarSign, 
  Settings, Bell
} from 'lucide-react';

// Dashboard Components
const Profile = () => (
  <div>
    <h2 className="text-2xl font-bold text-gray-900 mb-4">Profil Yönetimi</h2>
    <p className="text-gray-600">Profile management placeholder</p>
  </div>
);

const Offers = () => (
  <div>
    <h2 className="text-2xl font-bold text-gray-900 mb-4">Gelen Teklifler</h2>
    <p className="text-gray-600">Incoming offers placeholder</p>
  </div>
);

const Reports = () => (
  <div>
    <h2 className="text-2xl font-bold text-gray-900 mb-4">Performans Raporları</h2>
    <p className="text-gray-600">Performance reports placeholder</p>
  </div>
);

const Earnings = () => (
  <div>
    <h2 className="text-2xl font-bold text-gray-900 mb-4">Kazanç Takibi</h2>
    <p className="text-gray-600">Earnings tracking placeholder</p>
  </div>
);

const InfluencerSettings = () => (
  <div>
    <h2 className="text-2xl font-bold text-gray-900 mb-4">Ayarlar</h2>
    <p className="text-gray-600">Settings placeholder</p>
  </div>
);

const InfluencerDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user] = useState({ name: 'Ayşe Demir' });
  
  const currentPath = location.pathname.split('/').pop() || 'profile';

  const menuItems = [
    { id: 'profile', label: 'Profil Yönetimi', icon: Edit, path: '/influencer-dashboard/profile' },
    { id: 'offers', label: 'Gelen Teklifler', icon: MessageCircle, path: '/influencer-dashboard/offers' },
    { id: 'reports', label: 'Performans Raporları', icon: TrendingUp, path: '/influencer-dashboard/reports' },
    { id: 'earnings', label: 'Kazanç Takibi', icon: DollarSign, path: '/influencer-dashboard/earnings' },
    { id: 'settings', label: 'Ayarlar', icon: Settings, path: '/influencer-dashboard/settings' }
  ];

  console.log('✅ [InfluencerDashboard] tamamlandı');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-800 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Mİ</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">MikroEtki</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-gray-700 transition-colors relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center space-x-2">
                <img
                  src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Profile"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="text-sm font-medium text-gray-700">{user.name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Hoş Geldin, {user.name}!</h1>
          <p className="text-gray-600">Hesabınızın genel durumu ve performans metrikleri</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <nav className="space-y-2">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => navigate(item.path)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-colors ${
                      currentPath === item.id
                        ? 'bg-orange-50 text-orange-700 border border-orange-200' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <Routes>
                <Route path="/" element={<Profile />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/offers" element={<Offers />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/earnings" element={<Earnings />} />
                <Route path="/settings" element={<InfluencerSettings />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfluencerDashboard;