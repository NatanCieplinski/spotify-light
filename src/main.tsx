import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { AppLayout } from './AppLayout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginPage, AuthGuard, AuthProvider } from './components/auth'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
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
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
