import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'

export type AuthContextType = {
  access_token: string
  logout: () => void
}

export const AuthContext = React.createContext<AuthContextType>({
  access_token: '',
  //eslint-disable-next-line @typescript-eslint/no-empty-function
  logout: () => {},
})

export function useAuth() {
  return React.useContext(AuthContext)
}

export const AuthProvider: React.FC = ({ children }) => {
  const [access_token, setAccessToken] = useState(
    localStorage.getItem('access_token') ?? ''
  )

  const { hash } = useLocation()

  useEffect(() => {
    const queryAccessToken = queryString.parse(hash).access_token
    if (queryAccessToken) {
      setAccessToken(queryAccessToken as string)
      localStorage.setItem('access_token', queryAccessToken as string)
    }
  }, [hash])

  const logout = () => {
    localStorage.removeItem('access_token')
    setAccessToken('')
  }

  return (
    <AuthContext.Provider
      value={{
        access_token,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
