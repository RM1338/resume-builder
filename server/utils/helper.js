// Format date helper
exports.formatDate = (date) => {
  if (!date) return '';
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long'
  });
};

// Calculate completion percentage
exports.calculateCompletionPercentage = (resume) => {
  let completedFields = 0;
  let totalFields = 8;

  if (resume.personalInfo?.fullName) completedFields++;
  if (resume.personalInfo?.email) completedFields++;
  if (resume.personalInfo?.summary) completedFields++;
  if (resume.workExperience?.length > 0) completedFields++;
  if (resume.education?.length > 0) completedFields++;
  if (resume.skills?.length > 0) completedFields++;
  if (resume.projects?.length > 0) completedFields++;
  if (resume.certifications?.length > 0) completedFields++;

  return Math.round((completedFields / totalFields) * 100);
};

// Sanitize user input
exports.sanitizeInput = (input) => {
  if (typeof input !== 'string') return input;
  return input.trim().replace(/<[^>]*>/g, '');
};