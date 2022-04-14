import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'

export type AuthContextType = {
  access_token: string
}

export const AuthContext = React.createContext<AuthContextType>({
  access_token: '',
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

  return (
    <AuthContext.Provider
      value={{
        access_token,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
