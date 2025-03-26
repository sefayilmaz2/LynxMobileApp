import { useEffect, useState } from '@lynx-js/react'
import { LoginScreen } from './screens/LoginScreen.jsx'
import { HomeScreen } from './screens/HomeScreen.jsx'
import './App.css'

// Global state için basit bir store
let globalCurrentPath = '/login'
let subscribers: ((path: string) => void)[] = []

export const navigate = (path: string) => {
  globalCurrentPath = path
  // Tüm subscriber'ları bilgilendir
  subscribers.forEach(callback => callback(path))
}

export const useCurrentPath = () => {
  const [currentPath, setCurrentPath] = useState(globalCurrentPath)

  useEffect(() => {
    // State değişikliklerini dinle
    subscribers.push(setCurrentPath)
    return () => {
      subscribers = subscribers.filter(cb => cb !== setCurrentPath)
    }
  }, [])

  return currentPath
}

export function App() {
  const currentPath = useCurrentPath()

  return (
    <view>
      <view className='Background' />
      <view className='App'>
        {currentPath === '/login' ? <LoginScreen /> : <HomeScreen />}
      </view>
    </view>
  )
}
