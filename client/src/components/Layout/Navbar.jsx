import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { FileText, LogOut, User } from 'lucide-react';

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <nav className="glass sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2 text-primary-600 font-bold text-xl">
            <FileText className="w-7 h-7" />
            ResumeBuilder
          </Link>

          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className="text-gray-700 hover:text-primary-600 font-medium">
                  Dashboard
                </Link>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 text-gray-700">
                    <User className="w-5 h-5" />
                    <span className="font-medium">{user?.name}</span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="btn-outline inline-flex items-center gap-2"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-700 hover:text-primary-600 font-medium">
                  Login
                </Link>
                <Link to="/register" className="btn-primary">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;