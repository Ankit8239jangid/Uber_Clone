import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function ProtectedRoute({ children, captainOnly = false }) {
    const navigate = useNavigate();
    const { isLogin, setIsLogin } = useAuth();

    useEffect(() => {
        const token = localStorage.getItem('token');
        const captainToken = localStorage.getItem('captaintoken');

        if (captainOnly) {
            // Captain-only route: require captainToken
            if (!captainToken) {
                setIsLogin(false);
                navigate('/captain-login', { replace: true });
            } else {
                setIsLogin(true);
                navigate('/captain-dashboard')
            }
        } else {
            // Generic protected route: allow either token
            if (!token && !captainToken) {
                setIsLogin(false);
                navigate('/user-login', { replace: true });
            } else {
                setIsLogin(true);
                navigate('/dashboard')
            }
        }
    }, [navigate, setIsLogin, captainOnly]);

    return isLogin ? children : null;
}

export default ProtectedRoute;