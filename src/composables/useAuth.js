import api from '@/utils/http'

export const useAuth = () => {
  // Login: POST /auth/login -> { access_token }
  const login = async (username, password) => {
    try {
      const response = await api.post('/auth/admin/login', { username, password })
      // Debug log server response
      console.log('[useAuth] login response.data:', response.data)
      
      const accessToken = response.data.accessToken || response.data.token || response.data.access_token
      const user = response.data.data.user
      
      if (!accessToken) {
        return { success: false, message: 'No token returned from server' }
      }

      // Save token and user data
      localStorage.setItem('accessToken', accessToken)
      console.log('[useAuth] saved accessToken:', accessToken)
      
      // Save user data if provided by backend
      if (user) {
        localStorage.setItem('adminUser', JSON.stringify(user))
        console.log('[useAuth] saved user data:', user)
      }

      return { success: true, token: accessToken, user }
    } catch (error) {
      return { success: false, message: error.response?.data?.message || error.message || 'Login failed' }
    }
  }

  const getCurrentUser = () => {
    try {
      const userStr = localStorage.getItem('adminUser')
      if (userStr) {
        return JSON.parse(userStr)
      }
      return null
    } catch (error) {
      console.error('[useAuth] Error parsing user data:', error)
      return null
    }
  }

  const logout = () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('token')
    localStorage.removeItem('adminUser')
    window.location.href = '/login'
  }

  const isAuthenticated = () => {
    return !!(localStorage.getItem('accessToken') || localStorage.getItem('token'))
  }

  const getToken = () => {
    return localStorage.getItem('accessToken') || localStorage.getItem('token')
  }

  return {
    login,
    getCurrentUser,
    logout,
    isAuthenticated,
    getToken,
  }
}