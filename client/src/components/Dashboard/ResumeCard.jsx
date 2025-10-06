import { useNavigate } from 'react-router-dom';
import { useResume } from '../../context/ResumeContext';
import { Edit, Trash2, Copy, Eye, Download } from 'lucide-react';
import { format } from 'date-fns';

const ResumeCard = ({ resume }) => {
  const navigate = useNavigate();
  const { deleteResume, duplicateResume } = useResume();

  const handleEdit = () => {
    navigate(`/resume/edit/${resume._id}`);
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this resume?')) {
      await deleteResume(resume._id);
    }
  };

  const handleDuplicate = async () => {
    await duplicateResume(resume._id);
  };

  return (
    <div className="card-hover">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-1">
            {resume.title}
          </h3>
          <p className="text-sm text-gray-500">
            {format(new Date(resume.updatedAt), 'MMM dd, yyyy')}
          </p>
        </div>
        <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full">
          {resume.template}
        </span>
      </div>

      <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
        <span className="flex items-center gap-1">
          <Eye className="w-4 h-4" />
          {resume.views}
        </span>
        <span className="flex items-center gap-1">
          <Download className="w-4 h-4" />
          {resume.downloads}
        </span>
      </div>

      <div className="flex gap-2">
        <button
          onClick={handleEdit}
          className="flex-1 btn-primary py-2 text-sm"
        >
          <Edit className="w-4 h-4 inline mr-1" />
          Edit
        </button>
        <button
          onClick={handleDuplicate}
          className="btn-outline p-2"
          title="Duplicate"
        >
          <Copy className="w-4 h-4" />
        </button>
        <button
          onClick={handleDelete}
          className="btn-secondary p-2 hover:bg-red-50 hover:text-red-600"
          title="Delete"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ResumeCard;