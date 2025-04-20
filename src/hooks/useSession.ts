import { useState, useEffect, } from 'react';
import { useNavigate } from 'react-router-dom';

interface SessionData {
  user: any;
  token: string;
  timestamp: number;
  expiresIn: number;
}

export const useSession = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<any>(null);
  let navigate = useNavigate();

  const checkSession = () => {
    const sessionData = localStorage.getItem('userSession');
    if (sessionData) {
      const session: SessionData = JSON.parse(sessionData);
      const now = new Date().getTime();
      const isExpired = now - session.timestamp > session.expiresIn;

      if (isExpired) {
        localStorage.removeItem('userSession');
        setIsAuthenticated(false);
        setUser(null);
        return false;
      }

      setIsAuthenticated(true);
      setUser(session.user);
      navigate("/");
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem('userSession');
    setIsAuthenticated(false);
    setUser(null);
  };

  useEffect(() => {
    checkSession();
  }, []);

  return { isAuthenticated, user, logout, checkSession };
};