import { Navigate } from 'react-router-dom';
import { useSession } from '../hooks/useSession';

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useSession();
  
  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return <>{children}</>;
};