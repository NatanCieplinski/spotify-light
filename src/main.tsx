import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { AppLayout } from './AppLayout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginPage, AuthGuard } from './components/auth'
import { AuthProvider } from './components/auth/AuthContext'

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/"
            element={
              <AuthGuard>
                <AppLayout />
              </AuthGuard>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
