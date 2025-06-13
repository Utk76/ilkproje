import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const navigate = useNavigate();

  console.log('✅ [Footer Navigation] tamamlandı');

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-800 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Mİ</span>
              </div>
              <span className="ml-2 text-xl font-bold">MikroEtki</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Türkiye'nin ilk mikro-etkileyici platformu. KOBİ'lerin büyümesi için 
              güvenilir etkileyici pazarlama çözümleri sunuyoruz.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Platform</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => navigate('/discover')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Etkileyici Keşfet
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/campaigns')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Kampanya Oluştur
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/analytics')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Analitik Raporlar
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/pricing')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Fiyatlandırma
                </button>
              </li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">API Dokümantasyonu</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Destek</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Yardım Merkezi</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Başlangıç Rehberi</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Video Eğitimler</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Webinarlar</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">İletişim</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">İletişim</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">info@mikroetki.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">+90 212 555 0123</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">Maslak, İstanbul</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-medium mb-3">Haftalık bülten</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="E-posta adresiniz"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-blue-500"
                />
                <button className="bg-orange-600 px-4 py-2 rounded-r-lg hover:bg-orange-700 transition-colors">
                  Abone Ol
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 MikroEtki. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Gizlilik Politikası
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Kullanım Şartları
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Çerez Politikası
              </a>
              <button 
                onClick={() => navigate('/security')}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Güvenlik & Sertifikalar
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;