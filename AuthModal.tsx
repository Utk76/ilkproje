import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X, User, Building } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'brand' | 'influencer' | 'login';
  selectedPackage?: string;
  onBrandLogin?: () => void;
  onInfluencerLogin?: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ 
  isOpen, 
  onClose, 
  type, 
  selectedPackage,
  onBrandLogin,
  onInfluencerLogin 
}) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleBrandLogin = () => {
    if (onBrandLogin) {
      onBrandLogin();
    } else {
      navigate('/login?role=brand');
    }
    onClose();
  };

  const handleInfluencerLogin = () => {
    if (onInfluencerLogin) {
      onInfluencerLogin();
    } else {
      navigate('/login?role=influencer');
    }
    onClose();
  };

  console.log('✅ [AuthModal Navigation] tamamlandı');

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            {type === 'login' ? 'Giriş Yap' : 
             type === 'brand' ? `${selectedPackage} Paketine Kayıt` : 
             'Etkileyici Olarak Kayıt Ol'}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* User Type Selection */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <button
            onClick={handleBrandLogin}
            className="p-4 rounded-xl border-2 border-gray-200 hover:border-blue-300 transition-all"
          >
            <Building className="w-8 h-8 mx-auto mb-2 text-blue-600" />
            <div className="font-semibold">Marka/İşletme</div>
            <div className="text-sm text-gray-600">Etkileyici arıyorum</div>
          </button>
          <button
            onClick={handleInfluencerLogin}
            className="p-4 rounded-xl border-2 border-gray-200 hover:border-orange-300 transition-all"
          >
            <User className="w-8 h-8 mx-auto mb-2 text-orange-600" />
            <div className="font-semibold">Etkileyici</div>
            <div className="text-sm text-gray-600">İş fırsatları arıyorum</div>
          </button>
        </div>

        {/* Demo Credentials Info */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
          <h3 className="font-semibold text-yellow-800 mb-2">Demo Giriş Bilgileri:</h3>
          <div className="text-sm text-yellow-700 space-y-1">
            <p><strong>Marka/İşletme:</strong> demo@marka.com / 123456</p>
            <p><strong>Etkileyici:</strong> demo@etkileyici.com / 123456</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;