import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/authService';
import { Lock, Mail, Eye, EyeOff } from 'lucide-react';
import '../components.css';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    setIsLoading(true);
    try {
      await authService.login(email, password);
      navigate('/admin/dashboard');
    } catch (err) {
      setError(err.message || 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--color-bg-cream)'}}>
      <div style={{width: '100%', maxWidth: '420px', padding: '32px', backgroundColor: 'white', borderRadius: '12px', boxShadow: 'var(--shadow-lg)'}}>
        
        <div style={{textAlign: 'center', marginBottom: '32px'}}>
          <div className="brand-logo" style={{fontSize: '2rem', marginBottom: '8px'}}>ISHA</div>
          <h1 style={{fontSize: '1.25rem', color: 'var(--color-text-muted)'}}>Admin Portal</h1>
        </div>

        {error && (
          <div style={{backgroundColor: '#fee2e2', color: '#dc2626', padding: '12px', borderRadius: '8px', marginBottom: '24px', fontSize: '0.875rem'}}>
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label className="form-label">Email / Username</label>
            <div style={{position: 'relative'}}>
              <div style={{position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)'}}>
                <Mail size={18} />
              </div>
              <input 
                type="email" 
                className="form-control" 
                style={{paddingLeft: '40px'}} 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@isha.com"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <div style={{position: 'relative'}}>
              <div style={{position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)'}}>
                <Lock size={18} />
              </div>
              <input 
                type={showPassword ? 'text' : 'password'} 
                className="form-control" 
                style={{paddingLeft: '40px', paddingRight: '40px'}} 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)'}}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button 
            type="submit" 
            className="btn-primary" 
            style={{width: '100%', marginTop: '16px'}}
            disabled={isLoading}
          >
            {isLoading ? 'Authenticating...' : 'Login to Dashboard'}
          </button>
        </form>
        
        <div style={{marginTop: '24px', textAlign: 'center', fontSize: '0.75rem', color: 'var(--color-text-muted)'}}>
          <p>Demo Credentials:</p>
          <p>admin@isha.com / admin123</p>
        </div>
        <div style={{marginTop: '16px', textAlign: 'center'}}>
           <a href="/" style={{fontSize: '0.875rem', color: 'var(--color-primary)', textDecoration: 'underline'}}>Return to Public Website</a>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
