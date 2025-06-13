import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { User, Building, Eye, EyeOff, Mail } from 'lucide-react';

const LoginPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [userType, setUserType] = useState<'brand' | 'influencer'>('brand');
  const [showPassword, setShowPassword] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [forgotEmail, setForgotEmail] = useState('');

  useEffect(() => {
    const role = searchParams.get('role');
    if (role === 'influencer') {
      setUserType('influencer');
    }
  }, [searchParams]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Demo login logic with automatic redirect
    if (userType === 'brand') {
      // Store login state
      localStorage.setItem('userType', 'brand');
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/brand-dashboard');
    } else {
      // Store login state
      localStorage.setItem('userType', 'influencer');
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/influencer-dashboard');
    }
  };

  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate password reset email
    alert(`Şifre sıfırlama linki ${forgotEmail} adresine gönderildi!`);
    setShowForgotPassword(false);
    setForgotEmail('');
  };

  console.log('✅ [LoginPage with Auto-redirect] tamamlandı');

  if (showForgotPassword) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-orange-600 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl max-w-md w-full p-8 shadow-xl">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-800 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Şifremi Unuttum</h1>
            <p className="text-gray-600">E-posta adresinizi girin, size şifre sıfırlama linki gönderelim</p>
          </div>

          <form onSubmit={handleForgotPassword} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                E-posta
              </label>
              <input
                type="email"
                value={forgotEmail}
                onChange={(e) => setForgotEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="ornek@email.com"
                required
              />
            </div>
            
            <button 
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-colors"
            >
              Şifre Sıfırlama Linki Gönder
            </button>
          </form>

          <div className="text-center mt-6">
            <button 
              onClick={() => setShowForgotPassword(false)}
              className="text-blue-600 hover:text-blue-700 text-sm"
            >
              Giriş sayfasına dön
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-orange-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-8 shadow-xl">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-800 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-xl">Mİ</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">MikroEtki'ye Giriş</h1>
          <p className="text-gray-600">Hesabınıza giriş yapın</p>
        </div>

        {/* User Type Selection */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <button
            onClick={() => setUserType('brand')}
            className={`p-4 rounded-xl border-2 transition-all ${
              userType === 'brand' 
                ? 'border-blue-500 bg-blue-50' 
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <Building className="w-8 h-8 mx-auto mb-2 text-blue-600" />
            <div className="font-semibold">Marka/İşletme</div>
            <div className="text-sm text-gray-600">Etkileyici arıyorum</div>
          </button>
          <button
            onClick={() => setUserType('influencer')}
            className={`p-4 rounded-xl border-2 transition-all ${
              userType === 'influencer' 
                ? 'border-orange-500 bg-orange-50' 
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <User className="w-8 h-8 mx-auto mb-2 text-orange-600" />
            <div className="font-semibold">Etkileyici</div>
            <div className="text-sm text-gray-600">İş fırsatları arıyorum</div>
          </button>
        </div>

        {/* Demo Credentials Info */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
          <h3 className="font-semibold text-yellow-800 mb-2">Demo Giriş Bilgileri:</h3>
          <div className="text-sm text-yellow-700 space-y-1">
            <p><strong>Marka/İşletme:</strong> demo@marka.com / 123456</p>
            <p><strong>Etkileyici:</strong> demo@etkileyici.com / 123456</p>
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              E-posta
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="ornek@email.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Şifre
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>
          
          <button 
            type="submit"
            className={`w-full py-3 rounded-xl font-semibold transition-colors ${
              userType === 'brand'
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'bg-orange-600 hover:bg-orange-700 text-white'
            }`}
          >
            Giriş Yap
          </button>
        </form>

        <div className="text-center mt-6">
          <button 
            onClick={() => setShowForgotPassword(true)}
            className="text-blue-600 hover:text-blue-700 text-sm"
          >
            Şifremi Unuttum
          </button>
        </div>

        <div className="text-center mt-4">
          <span className="text-gray-600 text-sm">Hesabınız yok mu? </span>
          <button 
            onClick={() => navigate('/')}
            className="text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            Kayıt Olun
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;