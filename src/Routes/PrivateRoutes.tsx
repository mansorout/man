import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }: any) => {
  const location = useLocation();
  const g_authUser = useSelector((state: any) => state?.authReducer.authUser);

  if (!g_authUser?.isUserAuthenticated) {
    // not logged in so redirect to login page with the return url
    return <Navigate to="/login" state={{ from: location }} />
  }

  // authorized so return child components
  // return <Navigate to={location} />
  return children;
}

export default PrivateRoute