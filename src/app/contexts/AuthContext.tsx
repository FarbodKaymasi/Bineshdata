import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { authApi } from '../utils/auth';

interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  checkAuth: () => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return authApi.isAuthenticated();
  });

  useEffect(() => {
    // Check authentication on mount
    const authenticated = authApi.isAuthenticated();
    setIsAuthenticated(authenticated);
  }, []);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    authApi.logout();
    setIsAuthenticated(false);
  };

  const checkAuth = () => {
    const authenticated = authApi.isAuthenticated();
    setIsAuthenticated(authenticated);
    return authenticated;
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
