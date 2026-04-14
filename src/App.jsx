import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'

import Sidebar from './components/Sidebar'

import Home from './pages/Home'
import Tutors from './pages/Tutors'
import Blog from './pages/Blog'
import Login from './pages/Login'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MySessions from './pages/MySessions'
import Verify from './pages/Verify'
import Session from './pages/Session'
import Signup from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  const location = useLocation();

  const hideSidebar = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <main className="flex">

      
      {!hideSidebar && <Sidebar />}

      <div className="flex-1">
        <Routes>

     
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

        
          <Route path="/tutors" element={<Tutors />} />
          <Route path="/tutors/:subject" element={<Tutors />} />

          
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />

       
          <Route
            path="/my-profile"
            element={
              <ProtectedRoute>
                <MyProfile />
              </ProtectedRoute>
            }
          />

          <Route
            path="/my-sessions"
            element={
              <ProtectedRoute>
                <MySessions />
              </ProtectedRoute>
            }
          />

          <Route
            path="/verify"
            element={
              <ProtectedRoute>
                <Verify />
              </ProtectedRoute>
            }
          />

          
          <Route path="/session/:tutId" element={<Session />} />

        </Routes>
      </div>
    </main>
  )
}

export default App