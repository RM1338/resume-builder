import { createContext, useContext, useState } from 'react';
import api from '../services/api';
import toast from 'react-hot-toast';

const ResumeContext = createContext(null);

export const useResume = () => {
  const context = useContext(ResumeContext);
  if (!context) {
    throw new Error('useResume must be used within ResumeProvider');
  }
  return context;
};

export const ResumeProvider = ({ children }) => {
  const [resumes, setResumes] = useState([]);
  const [currentResume, setCurrentResume] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch all resumes
  const fetchResumes = async () => {
    setLoading(true);
    try {
      const response = await api.get('/resumes');
      setResumes(response.data.data.resumes);
      return response.data;
    } catch (error) {
      toast.error('Failed to fetch resumes');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Fetch single resume
  const fetchResume = async (id) => {
    setLoading(true);
    try {
      const response = await api.get(`/resumes/${id}`);
      setCurrentResume(response.data.data.resume);
      return response.data;
    } catch (error) {
      toast.error('Failed to fetch resume');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Create resume
  const createResume = async (resumeData) => {
    setLoading(true);
    try {
      const response = await api.post('/resumes', resumeData);
      setResumes([response.data.data.resume, ...resumes]);
      toast.success('Resume created successfully!');
      return response.data;
    } catch (error) {
      toast.error('Failed to create resume');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Update resume
  const updateResume = async (id, resumeData) => {
    try {
      const response = await api.put(`/resumes/${id}`, resumeData);
      setCurrentResume(response.data.data.resume);
      setResumes(resumes.map(r => r._id === id ? response.data.data.resume : r));
      return response.data;
    } catch (error) {
      toast.error('Failed to update resume');
      throw error;
    }
  };

  // Delete resume
  const deleteResume = async (id) => {
    try {
      await api.delete(`/resumes/${id}`);
      setResumes(resumes.filter(r => r._id !== id));
      toast.success('Resume deleted successfully');
    } catch (error) {
      toast.error('Failed to delete resume');
      throw error;
    }
  };

  // Duplicate resume
  const duplicateResume = async (id) => {
    setLoading(true);
    try {
      const response = await api.post(`/resumes/${id}/duplicate`);
      setResumes([response.data.data.resume, ...resumes]);
      toast.success('Resume duplicated successfully!');
      return response.data;
    } catch (error) {
      toast.error('Failed to duplicate resume');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const value = {
    resumes,
    currentResume,
    loading,
    fetchResumes,
    fetchResume,
    createResume,
    updateResume,
    deleteResume,
    duplicateResume,
    setCurrentResume,
  };

  return <ResumeContext.Provider value={value}>{children}</ResumeContext.Provider>;
};