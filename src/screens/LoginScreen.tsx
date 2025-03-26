import { useState } from '@lynx-js/react'
import { useNavigate } from '../navigation/useNavigate.js'
import { Toast } from '../components/Toast.jsx'
interface ToastState {
    message: string
    type: 'success' | 'error'
    isVisible: boolean
  }
export function LoginScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const [toast, setToast] = useState<ToastState | null>(null)

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type, isVisible: true })
  }
  const handleLogin = () => {
    if (email == "admin" && password == "admin") {
    
    showToast('Giriş Yapıldı', 'success')
      navigate('/home')
    } else {
    
      showToast('E-Posta veya Şifre Hatalı', 'error')
    }
  }

  const handleEmailChange = (e: any) => {
    setEmail(e.detail.value || '')
  }

  const handlePasswordChange = (e: any) => {
    setPassword(e.detail.value || '')
  }

  return (
    <view className="home-container">
      <view className="home-header">
        <text className="home-title">TODO APP</text>
      </view>

      <view className="todo-input-container">
        <input
          className="todo-input"
          type="text"
          value={email}
          bindinput={handleEmailChange}
          placeholder="Email"
        />
      </view>
      <view className="todo-input-container">
        <input
          className="todo-input"
          type="password"
          value={password}
          bindinput={handlePasswordChange}
          placeholder="Password"
        />
      </view>
      <view className="login-button" bindtap={handleLogin}>
        <text className="login-button-text">Giriş Yap</text>
      </view>

      {toast?.isVisible && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

    </view>
  )
} 