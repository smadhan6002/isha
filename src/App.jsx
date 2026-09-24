import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import { useState, useEffect } from 'react';
import { authService } from './services/authService';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check initial auth state
    setIsAuthenticated(authService.isAuthenticated());
    setIsLoading(false);

    // Subscribe to auth changes
    const unsubscribe = authService.subscribe((status) => {
      setIsAuthenticated(status);
    });

    return () => unsubscribe();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>; // Could be a premium spinner
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/admin" 
          element={isAuthenticated ? <Navigate to="/admin/dashboard" /> : <AdminLogin />} 
        />
        <Route 
          path="/admin/dashboard" 
          element={isAuthenticated ? <AdminDashboard /> : <Navigate to="/admin" />} 
        />
        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
