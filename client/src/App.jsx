import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import { ResumeProvider } from './context/ResumeContext';
import Navbar from './components/Layout/Navbar';

function App() {
  return (
    <AuthProvider>
      <ResumeProvider>
        <div className="min-h-screen">
          <Navbar />
          <Outlet />
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 3000,
              style: {
                background: '#fff',
                color: '#363636',
              },
            }}
          />
        </div>
      </ResumeProvider>
    </AuthProvider>
  );
}

export default App;