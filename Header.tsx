import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Menu, X, Bell, User } from 'lucide-react';

interface HeaderProps {
  onLoginClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLoginClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  console.log('✅ [Header Navigation] tamamlandı');

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => navigate('/')}>
              <div className="w-8 h-8 bg-gradient-to-br from-blue-800 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Mİ</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">MikroEtki</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => navigate('/discover')}
              className="text-gray-700 hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Keşfet
            </button>
            <button 
              onClick={() => navigate('/campaigns')}
              className="text-gray-700 hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Kampanyalar
            </button>
            <button 
              onClick={() => navigate('/analytics')}
              className="text-gray-700 hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Analitik
            </button>
            <button 
              onClick={() => navigate('/pricing')}
              className="text-gray-700 hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Fiyatlandırma
            </button>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-500 hover:text-gray-700 transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <button 
              onClick={onLoginClick}
              className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors font-medium"
            >
              Giriş Yap
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mt-2">
              <button 
                onClick={() => {
                  navigate('/discover');
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 hover:text-blue-800 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                Keşfet
              </button>
              <button 
                onClick={() => {
                  navigate('/campaigns');
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 hover:text-blue-800 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                Kampanyalar
              </button>
              <button 
                onClick={() => {
                  navigate('/analytics');
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 hover:text-blue-800 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                Analitik
              </button>
              <button 
                onClick={() => {
                  navigate('/pricing');
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 hover:text-blue-800 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                Fiyatlandırma
              </button>
              <div className="pt-2">
                <button 
                  onClick={() => {
                    onLoginClick();
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors font-medium"
                >
                  Giriş Yap
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;