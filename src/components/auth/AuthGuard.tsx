import { useAuth } from './AuthContext'
import { Navigate, useLocation } from 'react-router-dom'

export const AuthGuard: React.FC = ({ children }) => {
  const { authenticated } = useAuth()
  const location = useLocation()

  console.log(authenticated)

  return authenticated ? (
    <>{children}</>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  )
}
