const AUTH_KEY = 'isha_admin_auth';

let listeners = [];

export const authService = {
  login: async (email, password) => {
    // Mock authentication
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'admin@isha.com' && password === 'admin123') {
          localStorage.setItem(AUTH_KEY, 'true');
          authService.notify(true);
          resolve(true);
        } else {
          reject(new Error('Invalid email or password'));
        }
      }, 500); // Simulate network delay
    });
  },

  logout: () => {
    localStorage.removeItem(AUTH_KEY);
    authService.notify(false);
  },

  isAuthenticated: () => {
    return localStorage.getItem(AUTH_KEY) === 'true';
  },

  subscribe: (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  },

  notify: (status) => {
    listeners.forEach(listener => listener(status));
  }
};
