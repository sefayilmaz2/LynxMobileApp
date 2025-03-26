import { useCallback } from '@lynx-js/react'
import { navigate } from '../App.jsx'

export function useNavigate() {
  return useCallback((path: string) => {
    navigate(path)
  }, [])
} 