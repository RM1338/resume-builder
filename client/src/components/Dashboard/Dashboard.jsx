import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useResume } from '../../context/ResumeContext';
import ResumeCard from './ResumeCard';
import { Plus, FileText } from 'lucide-react';

const Dashboard = () => {
  const { user } = useAuth();
  const { resumes, loading, fetchResumes } = useResume();
  const navigate = useNavigate();

  useEffect(() => {
    fetchResumes();
  }, []);

  const handleCreateResume = () => {
    navigate('/resume/new');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">
            Welcome back, {user?.name}!
          </h1>
          <p className="text-gray-600 mt-2">
            Manage your resumes and create new ones
          </p>
        </div>

        <div className="mb-6">
          <button
            onClick={handleCreateResume}
            className="btn-primary inline-flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Create New Resume
          </button>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin"></div>
          </div>
        ) : resumes.length === 0 ? (
          <div className="text-center py-16">
            <FileText className="w-20 h-20 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No resumes yet
            </h3>
            <p className="text-gray-500 mb-6">
              Create your first resume to get started
            </p>
            <button onClick={handleCreateResume} className="btn-primary">
              Create Resume
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resumes.map((resume) => (
              <ResumeCard key={resume._id} resume={resume} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;