import { Link } from 'react-router-dom';
import { FileText, Zap, Download, Shield } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Build Your Perfect Resume
            <span className="block text-primary-600">In Minutes</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Create ATS-optimized resumes with professional templates.
            Land your dream job faster with our intuitive resume builder.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/register" className="btn-primary text-lg px-8 py-4">
              Get Started Free
            </Link>
            <Link to="/login" className="btn-outline text-lg px-8 py-4">
              Sign In
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {[
            {
              icon: Zap,
              title: 'Quick & Easy',
              description: 'Create professional resumes in under 5 minutes'
            },
            {
              icon: FileText,
              title: '10+ Templates',
              description: 'Industry-specific ATS-optimized templates'
            },
            {
              icon: Download,
              title: 'Multiple Formats',
              description: 'Export to PDF, DOCX, and more'
            },
            {
              icon: Shield,
              title: 'Secure & Private',
              description: 'Your data is encrypted and secure'
            }
          ].map((feature, index) => (
            <div key={index} className="card text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <feature.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;