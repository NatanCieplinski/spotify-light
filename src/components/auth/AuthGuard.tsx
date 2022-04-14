import { useAuth } from './AuthContext'
import { Navigate, useLocation } from 'react-router-dom'

export const AuthGuard: React.FC = ({ children }) => {
  const { access_token } = useAuth()
  const location = useLocation()

  return access_token ? (
    <>{children}</>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  )
}
