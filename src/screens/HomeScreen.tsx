import { useState } from '@lynx-js/react'
import { useNavigate } from '../navigation/useNavigate.js'
import { Toast } from '../components/Toast.jsx'

interface Todo {
  id: number
  text: string
  completed: boolean
}

interface ToastState {
  message: string
  type: 'success' | 'error'
  isVisible: boolean
}

export function HomeScreen() {
  const navigate = useNavigate()
  const [todos, setTodos] = useState<Todo[]>([])
  const [newTodo, setNewTodo] = useState('')
  const [toast, setToast] = useState<ToastState | null>(null)

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type, isVisible: true })
  }

  const handleLogout = () => {
    navigate('/login')
  }

  const handleInputChange = (e: any) => {
    const value = e.detail.value || ''
    setNewTodo(value)
  }

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos(prevTodos => [
        ...prevTodos,
        {
          id: Date.now(),
          text: newTodo.trim(),
          completed: false
        }
      ])
      setNewTodo('')
      showToast('Görev başarıyla eklendi!', 'success')
    }
  }

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      handleAddTodo()
    }
  }

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
    showToast('Görev başarıyla silindi!', 'success')
  }

  return (
    <view className="home-container">
      <view className="home-header">
        <text className="home-title">Yapılacaklar</text>
        <text className="logout-button" bindtap={handleLogout}>Çıkış Yap</text>
      </view>

      <view className="todo-input-container">
        <input
          className="todo-input"
          type="text"
          value={newTodo}
          bindinput={handleInputChange}
          placeholder="Yeni görev ekle..."
        />
        <view 
          className="add-button"
          bindtap={handleAddTodo}
        >
          <text style={{ color: 'white' }}>Ekle</text>
        </view>
      </view>

      <view className="todo-list">
        {todos.length === 0 ? (
          <text style={{ textAlign: 'center', color: '#a0aec0', padding: '20px' }}>
            Henüz görev eklenmemiş
          </text>
        ) : (
          todos.map(todo => (
            <view key={todo.id} className="todo-item">
              <view 
                className={`todo-checkbox ${todo.completed ? 'checked' : ''}`}
                bindtap={() => toggleTodo(todo.id)}
              />
              <text className={`todo-text ${todo.completed ? 'completed' : ''}`}>
                {todo.text}
              </text>
              <text className="todo-delete" bindtap={() => deleteTodo(todo.id)}>
                Sil
              </text>
            </view>
          ))
        )}
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