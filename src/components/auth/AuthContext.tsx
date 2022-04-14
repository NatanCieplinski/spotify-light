import React from 'react'

export type AuthContextType = {
  authenticated: boolean
  data: null
}

export const AuthContext = React.createContext<AuthContextType>({
  authenticated: false,
  data: null,
})

export function useAuth() {
  return React.useContext(AuthContext)
}

export const AuthProvider: React.FC = ({ children }) => {
  const value = {
    authenticated: true,
    data: null,
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
