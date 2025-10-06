const mongoose = require('mongoose');

const workExperienceSchema = new mongoose.Schema({
  company: { type: String, required: true },
  position: { type: String, required: true },
  location: { type: String },
  startDate: { type: Date, required: true },
  endDate: { type: Date },
  isCurrentlyWorking: { type: Boolean, default: false },
  description: [{ type: String }]
});

const educationSchema = new mongoose.Schema({
  institution: { type: String, required: true },
  degree: { type: String, required: true },
  fieldOfStudy: { type: String },
  location: { type: String },
  startDate: { type: Date },
  endDate: { type: Date },
  grade: { type: String },
  description: { type: String }
});

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  technologies: [{ type: String }],
  link: { type: String },
  githubLink: { type: String },
  startDate: { type: Date },
  endDate: { type: Date },
  highlights: [{ type: String }]
});

const skillSchema = new mongoose.Schema({
  category: {
    type: String,
    enum: ['Technical', 'Soft Skills', 'Languages', 'Tools', 'Frameworks', 'Other'],
    default: 'Technical'
  },
  skills: [{ type: String }]
});

const certificationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  issuer: { type: String },
  issueDate: { type: Date },
  expiryDate: { type: Date },
  credentialId: { type: String },
  credentialUrl: { type: String }
});

const resumeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: [true, 'Please provide a resume title'],
    trim: true,
    maxlength: [100, 'Title cannot be more than 100 characters']
  },
  template: {
    type: String,
    enum: ['technology', 'business', 'creative', 'healthcare', 'education', 
           'finance', 'marketing', 'engineering', 'legal', 'general'],
    default: 'general'
  },
  personalInfo: {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    location: { type: String },
    profileImage: { type: String },
    linkedin: { type: String },
    github: { type: String },
    portfolio: { type: String },
    summary: { type: String, maxlength: 500 }
  },
  workExperience: [workExperienceSchema],
  education: [educationSchema],
  projects: [projectSchema],
  skills: [skillSchema],
  certifications: [certificationSchema],
  customSections: [{
    title: { type: String },
    content: { type: String }
  }],
  theme: {
    colorScheme: { type: String, default: 'blue' },
    fontFamily: { type: String, default: 'Inter' },
    fontSize: { type: String, default: 'medium' },
    spacing: { type: String, default: 'normal' }
  },
  isPublic: {
    type: Boolean,
    default: false
  },
  views: {
    type: Number,
    default: 0
  },
  downloads: {
    type: Number,
    default: 0
  },
  lastModified: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Index for faster queries
resumeSchema.index({ user: 1, createdAt: -1 });
resumeSchema.index({ title: 'text' });

// Update lastModified before saving
resumeSchema.pre('save', function(next) {
  this.lastModified = Date.now();
  next();
});

module.exports = mongoose.model('Resume', resumeSchema);