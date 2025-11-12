import api from '@/utils/http'

export const useAuth = () => {
  // Login: POST /auth/login -> { access_token }
  const login = async (username, password) => {
    try {
      const response = await api.post('/auth/login', { username, password })
      // Debug log server response
      console.log('[useAuth] login response.data:', response.data)
      const accessToken = response.data.access_token || response.data.token || response.data.accessToken
      if (!accessToken) {
        return { success: false, message: 'No token returned from server' }
      }

      // Save token (do not auto-fetch user here to avoid triggering 401 redirects)
      localStorage.setItem('accessToken', accessToken)
      console.log('[useAuth] saved accessToken:', accessToken)

      // Validate token by calling /auth/me using native fetch to avoid axios response interceptor
      try {
        const base = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000'
        const url = base.replace(/\/$/, '') + '/auth/me'
        const res = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
          },
        })

        if (!res.ok) {
          // token invalid
          localStorage.removeItem('accessToken')
          return { success: false, message: 'Token validation failed' }
        }

        const data = await res.json()
        const userObj = data.user || data
        if (userObj) localStorage.setItem('adminUser', JSON.stringify(userObj))

        return { success: true, token: accessToken }
      } catch (err) {
        localStorage.removeItem('accessToken')
        return { success: false, message: err.message || 'Token validation error' }
      }
    } catch (error) {
      return { success: false, message: error.response?.data?.message || error.message || 'Login failed' }
    }
  }

  const getCurrentUser = async () => {
    try {
      const res = await api.get('/auth/me')
      return res.data.user || res.data
    } catch (error) {
      // If 401, interceptor will redirect
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
