import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Shield, Lock, Eye, FileText, Award, CheckCircle } from 'lucide-react';

const SecurityPage = () => {
  const navigate = useNavigate();

  const securityFeatures = [
    {
      icon: Shield,
      title: 'SSL Şifreleme',
      description: 'Tüm veri transferleri 256-bit SSL şifreleme ile korunur',
      status: 'Aktif'
    },
    {
      icon: Lock,
      title: 'Güvenli Kimlik Doğrulama',
      description: '2FA desteği ve güçlü şifre politikaları',
      status: 'Aktif'
    },
    {
      icon: Eye,
      title: 'Gizlilik Koruması',
      description: 'KVKK ve GDPR uyumlu veri işleme',
      status: 'Uyumlu'
    },
    {
      icon: FileText,
      title: 'Düzenli Güvenlik Denetimleri',
      description: 'Üçüncü taraf güvenlik firmaları tarafından test edilir',
      status: 'Güncel'
    }
  ];

  const certifications = [
    {
      name: 'ISO 27001',
      description: 'Bilgi Güvenliği Yönetim Sistemi',
      icon: Award
    },
    {
      name: 'KVKK Uyumlu',
      description: 'Kişisel Verilerin Korunması Kanunu',
      icon: Shield
    },
    {
      name: 'GDPR Uyumlu',
      description: 'Avrupa Genel Veri Koruma Tüzüğü',
      icon: Lock
    }
  ];

  console.log('✅ [SecurityPage] tamamlandı');

  return (
    <div className="min-h-screen bg-white">
      <Header onLoginClick={() => navigate('/login')} />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Güvenlik & Sertifikalar
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Verilerinizin güvenliği bizim önceliğimizdir. En yüksek güvenlik standartlarını uyguluyoruz.
            </p>
          </div>

          {/* Security Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                        {feature.status}
                      </span>
                    </div>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Sertifikalar ve Uyumluluk
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <cert.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{cert.name}</h3>
                  <p className="text-gray-600 text-sm">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Security Practices */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Güvenlik Uygulamalarımız
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Veri Şifreleme</h4>
                    <p className="text-sm text-gray-600">Tüm hassas veriler AES-256 ile şifrelenir</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Düzenli Yedekleme</h4>
                    <p className="text-sm text-gray-600">Verileriniz günlük olarak yedeklenir</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Erişim Kontrolü</h4>
                    <p className="text-sm text-gray-600">Rol tabanlı erişim yönetimi</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Güvenlik İzleme</h4>
                    <p className="text-sm text-gray-600">7/24 güvenlik izleme ve alarm sistemi</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Penetrasyon Testleri</h4>
                    <p className="text-sm text-gray-600">Düzenli güvenlik açığı taramaları</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Güvenli Geliştirme</h4>
                    <p className="text-sm text-gray-600">Secure coding practices ve code review</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact for Security */}
          <div className="text-center mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Güvenlik Konularında İletişim
            </h2>
            <p className="text-gray-600 mb-6">
              Güvenlik ile ilgili sorularınız veya bildirmek istediğiniz açıklar için bizimle iletişime geçin.
            </p>
            <a 
              href="mailto:security@mikroetki.com"
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
            >
              <Shield className="w-5 h-5" />
              <span>security@mikroetki.com</span>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SecurityPage;