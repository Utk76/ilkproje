import React, { useState } from 'react';
import { Check, Star, Crown, Zap, Users, BarChart3, MessageCircle, TrendingUp, Shield, Headphones } from 'lucide-react';
import AuthModal from './AuthModal';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'brand' | 'influencer' | 'login'>('brand');
  const [selectedPackage, setSelectedPackage] = useState('');

  const packages = [
    {
      name: 'Temel İşletme',
      subtitle: 'Startup & Küçük İşletmeler İçin',
      icon: Zap,
      monthlyPrice: 499,
      quarterlyPrice: 1497,
      color: 'blue',
      popular: false,
      trialDays: 3,
      features: [
        { text: '3 Ayda 10 Profil Görüntüleme', icon: Users },
        { text: 'Sadece Takipçi Demografisi', icon: BarChart3 },
        { text: 'Temel Filtreleme Seçenekleri', icon: TrendingUp },
        { text: '3 Ayda 5 İletişim Hakkı', icon: MessageCircle },
        { text: 'Sınırlı Genel Trend Raporları', icon: BarChart3 }
      ],
      limitations: [
        'Etkileşim oranı analizi yok',
        'Sahte takipçi tespiti yok',
        'Detaylı analizler yok',
        'Akıllı eşleştirme yok'
      ]
    },
    {
      name: 'Büyüyen İşletme',
      subtitle: 'Orta Ölçekli KOBİ\'ler İçin',
      icon: TrendingUp,
      monthlyPrice: 1499,
      quarterlyPrice: 4497,
      color: 'orange',
      popular: true,
      trialDays: 3,
      features: [
        { text: '3 Ayda 20 Profil Görüntüleme', icon: Users },
        { text: 'Etkileşim Oranı Analizi', icon: BarChart3 },
        { text: 'Gelişmiş Filtreleme ve Akıllı Eşleştirme', icon: TrendingUp },
        { text: '3 Ayda 20 İletişim Hakkı', icon: MessageCircle },
        { text: 'Teklif Gönderme İmkanı', icon: MessageCircle },
        { text: 'Kategorize Edilmiş Yükselen Trendler', icon: BarChart3 },
        { text: 'Öncelikli Müşteri Hizmetleri', icon: Headphones }
      ],
      limitations: [
        'Sahte takipçi analizi Kurumsal pakete özel'
      ]
    },
    {
      name: 'Kurumsal',
      subtitle: 'Ajanslar ve Büyük Markalar İçin',
      icon: Crown,
      monthlyPrice: 3499,
      quarterlyPrice: 10497,
      color: 'purple',
      popular: false,
      trialDays: 3,
      features: [
        { text: 'Sınırsız Profil Görüntüleme', icon: Users },
        { text: 'Tam Analiz Paketi', icon: BarChart3 },
        { text: 'Sahte Takipçi Tespiti', icon: Shield },
        { text: 'AI Destekli Öneriler', icon: Star },
        { text: 'Sınırsız İletişim ve Teklif', icon: MessageCircle },
        { text: 'Kampanya Yönetimi Araçları', icon: TrendingUp },
        { text: 'Özel Trend Raporları ve Analizler', icon: BarChart3 },
        { text: '7/24 Premium Destek', icon: Headphones },
        { text: 'API Erişimi', icon: Zap },
        { text: 'Özel Hesap Yöneticisi', icon: Users }
      ],
      limitations: []
    }
  ];

  const getColorClasses = (color: string, type: 'bg' | 'text' | 'border' | 'hover') => {
    const colors = {
      blue: {
        bg: 'bg-blue-600',
        text: 'text-blue-600',
        border: 'border-blue-200',
        hover: 'hover:bg-blue-700'
      },
      orange: {
        bg: 'bg-orange-600',
        text: 'text-orange-600',
        border: 'border-orange-200',
        hover: 'hover:bg-orange-700'
      },
      purple: {
        bg: 'bg-purple-600',
        text: 'text-purple-600',
        border: 'border-purple-200',
        hover: 'hover:bg-purple-700'
      }
    };
    return colors[color as keyof typeof colors][type];
  };

  const handlePackageSelect = (packageName: string) => {
    setSelectedPackage(packageName);
    setModalType('brand');
    setModalOpen(true);
  };

  console.log('✅ [Pricing with Updated Prices and Trial] tamamlandı');

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            İşletmenize Uygun Paketi Seçin
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Küçük işletmelerden büyük ajanslar ve markalara kadar, 
            her ihtiyaca uygun esnek paket seçenekleri sunuyoruz.
          </p>

          {/* Free Trial Notice */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2">
              <Star className="w-5 h-5 text-green-600" />
              <span className="text-green-800 font-medium">
                Tüm paketlerde 3 gün ücretsiz deneme! Kredi kartı gerekmez.
              </span>
            </div>
          </div>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Aylık
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isAnnual ? 'bg-orange-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              3 Aylık
            </span>
            {isAnnual && (
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                Daha Ekonomik
              </span>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden ${
                pkg.popular ? 'ring-2 ring-orange-500 scale-105' : 'border border-gray-200'
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-0 right-0 bg-orange-600 text-white text-center py-2 text-sm font-medium">
                  En Popüler Paket
                </div>
              )}

              <div className={`p-8 ${pkg.popular ? 'pt-12' : ''}`}>
                {/* Package Header */}
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 ${getColorClasses(pkg.color, 'bg')} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <pkg.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{pkg.subtitle}</p>
                  
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">
                      ₺{isAnnual ? pkg.quarterlyPrice.toLocaleString('tr-TR') : pkg.monthlyPrice.toLocaleString('tr-TR')}
                    </span>
                    <span className="text-gray-600">/{isAnnual ? '3 ay' : 'ay'}</span>
                  </div>
                  
                  {isAnnual && (
                    <p className="text-sm text-gray-500">
                      3 Aylık ₺{pkg.quarterlyPrice.toLocaleString('tr-TR')} 
                      <span className="text-green-600 font-medium ml-1">
                        (₺{(pkg.monthlyPrice * 3 - pkg.quarterlyPrice).toLocaleString('tr-TR')} tasarruf)
                      </span>
                    </p>
                  )}

                  {/* Trial Badge */}
                  <div className="mt-4">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                      {pkg.trialDays} Gün Ücretsiz Deneme
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <div className={`w-5 h-5 ${getColorClasses(pkg.color, 'bg')} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700">{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* Limitations */}
                {pkg.limitations.length > 0 && (
                  <div className="mb-8">
                    <h4 className="text-sm font-medium text-gray-500 mb-3">Sınırlamalar:</h4>
                    <div className="space-y-2">
                      {pkg.limitations.map((limitation, limitIndex) => (
                        <div key={limitIndex} className="flex items-start space-x-3">
                          <div className="w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                          </div>
                          <span className="text-gray-500 text-sm">{limitation}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA Button */}
                <button 
                  onClick={() => handlePackageSelect(pkg.name)}
                  className={`w-full ${getColorClasses(pkg.color, 'bg')} ${getColorClasses(pkg.color, 'hover')} text-white py-3 rounded-xl font-semibold transition-colors`}
                >
                  {pkg.trialDays} Gün Ücretsiz Dene
                </button>
                
                <p className="text-xs text-gray-500 text-center mt-2">
                  Deneme süresi sonunda otomatik ücretlendirme başlar
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Subscription Management Info */}
        <div className="mt-16 bg-blue-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Esnek Abonelik Yönetimi
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Paket Değişikliği</h4>
              <p className="text-gray-600 text-sm">
                İstediğiniz zaman üst veya alt pakete geçiş yapabilirsiniz. 
                Değişiklik bir sonraki fatura döneminde geçerli olur.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Güvenli Ödeme</h4>
              <p className="text-gray-600 text-sm">
                Kredi kartı, banka kartı ve havale seçenekleri. 
                Tüm ödemeler SSL güvenlik ile korunur.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-red-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">İptal Seçeneği</h4>
              <p className="text-gray-600 text-sm">
                İstediğiniz zaman iptal edebilirsiniz. 
                Mevcut dönem sonuna kadar hizmetiniz devam eder.
              </p>
            </div>
          </div>
        </div>

        {/* Influencer CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Etkileyici misiniz?
            </h3>
            <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
              Platformumuza ücretsiz kayıt olun, profilinizi oluşturun ve markalardan 
              iş teklifleri almaya başlayın. Sosyal medya verileriniz otomatik olarak çekilir.
            </p>
            <button 
              onClick={() => {
                setModalType('influencer');
                setModalOpen(true);
              }}
              className="bg-white text-orange-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              Ücretsiz Etkileyici Kaydı
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Sıkça Sorulan Sorular
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">
                Ücretsiz deneme nasıl çalışır?
              </h4>
              <p className="text-gray-600 text-sm">
                3 gün boyunca tüm özellikleri ücretsiz kullanabilirsiniz. 
                Kredi kartı bilgisi gerekmez, deneme süresi sonunda otomatik ücretlendirme başlar.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">
                Paket değişikliği yapabilir miyim?
              </h4>
              <p className="text-gray-600 text-sm">
                Evet, istediğiniz zaman paketinizi yükseltebilir veya düşürebilirsiniz. 
                Değişiklik bir sonraki fatura döneminde geçerli olur.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">
                İptal etmek istersem ne olur?
              </h4>
              <p className="text-gray-600 text-sm">
                İstediğiniz zaman iptal edebilirsiniz. İptal sonrası mevcut dönem 
                sonuna kadar hizmetiniz devam eder.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">
                Fatura ve ödeme seçenekleri?
              </h4>
              <p className="text-gray-600 text-sm">
                Kredi kartı, banka kartı ve havale ile ödeme yapabilirsiniz. 
                Tüm ödemeler güvenli SSL ile korunur.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Auth Modal */}
      <AuthModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        type={modalType}
        selectedPackage={selectedPackage}
      />
    </div>
  );
};

export default Pricing;