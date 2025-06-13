import React, { useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { 
  BarChart3, Users, MessageCircle, Heart, CreditCard, FileText, 
  Calendar, Settings, Bell
} from 'lucide-react';

// Dashboard Components
const GeneralOverview = () => (
  <div>
    <h2 className="text-2xl font-bold text-gray-900 mb-4">Genel Bakış</h2>
    <p className="text-gray-600">Dashboard overview placeholder</p>
  </div>
);

const Campaigns = () => (
  <div>
    <h2 className="text-2xl font-bold text-gray-900 mb-4">Kampanyalarım</h2>
    <p className="text-gray-600">Campaigns management placeholder</p>
  </div>
);

const Messages = () => (
  <div>
    <h2 className="text-2xl font-bold text-gray-900 mb-4">Mesajlar</h2>
    <p className="text-gray-600">Messages placeholder</p>
  </div>
);

const Favorites = () => (
  <div>
    <h2 className="text-2xl font-bold text-gray-900 mb-4">Favori Etkileyiciler</h2>
    <p className="text-gray-600">Favorites placeholder</p>
  </div>
);

const Subscription = () => (
  <div>
    <h2 className="text-2xl font-bold text-gray-900 mb-4">Abonelik Yönetimi</h2>
    <p className="text-gray-600">Subscription management placeholder</p>
  </div>
);

const Payments = () => (
  <div>
    <h2 className="text-2xl font-bold text-gray-900 mb-4">Ödeme Geçmişi</h2>
    <p className="text-gray-600">Payment history placeholder</p>
  </div>
);

const DashboardSettings = () => (
  <div>
    <h2 className="text-2xl font-bold text-gray-900 mb-4">Ayarlar</h2>
    <p className="text-gray-600">Settings placeholder</p>
  </div>
);

const BrandDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const currentPath = location.pathname.split('/').pop() || 'overview';

  const menuItems = [
    { id: 'overview', label: 'Genel Bakış', icon: BarChart3, path: '/brand-dashboard/overview' },
    { id: 'campaigns', label: 'Kampanyalarım', icon: Calendar, path: '/brand-dashboard/campaigns' },
    { id: 'messages', label: 'Mesajlar', icon: MessageCircle, path: '/brand-dashboard/messages' },
    { id: 'favorites', label: 'Favori Etkileyiciler', icon: Heart, path: '/brand-dashboard/favorites' },
    { id: 'subscription', label: 'Abonelik Yönetimi', icon: CreditCard, path: '/brand-dashboard/subscription' },
    { id: 'payments', label: 'Ödeme Geçmişi', icon: FileText, path: '/brand-dashboard/payments' },
    { id: 'settings', label: 'Ayarlar', icon: Settings, path: '/brand-dashboard/settings' }
  ];

  console.log('✅ [BrandDashboard] tamamlandı');

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
                  src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Profile"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="text-sm font-medium text-gray-700">Ahmet Yılmaz</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
                        ? 'bg-blue-50 text-blue-700 border border-blue-200' 
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
                <Route path="/" element={<GeneralOverview />} />
                <Route path="/overview" element={<GeneralOverview />} />
                <Route path="/campaigns" element={<Campaigns />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/subscription" element={<Subscription />} />
                <Route path="/payments" element={<Payments />} />
                <Route path="/settings" element={<DashboardSettings />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandDashboard;