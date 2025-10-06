const Resume = require('../models/Resume');
const User = require('../models/User');

// @desc    Get all resumes for current user
// @route   GET /api/resumes
// @access  Private
exports.getResumes = async (req, res, next) => {
  try {
    const resumes = await Resume.find({ user: req.user.id })
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: resumes.length,
      data: { resumes }
    });

  } catch (error) {
    next(error);
  }
};

// @desc    Get single resume
// @route   GET /api/resumes/:id
// @access  Private
exports.getResume = async (req, res, next) => {
  try {
    const resume = await Resume.findById(req.params.id);

    if (!resume) {
      return res.status(404).json({
        success: false,
        message: 'Resume not found'
      });
    }

    // Check if user owns the resume
    if (resume.user.toString() !== req.user.id && !resume.isPublic) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to access this resume'
      });
    }

    // Increment view count
    resume.views += 1;
    await resume.save();

    res.status(200).json({
      success: true,
      data: { resume }
    });

  } catch (error) {
    next(error);
  }
};

// @desc    Create new resume
// @route   POST /api/resumes
// @access  Private
exports.createResume = async (req, res, next) => {
  try {
    const resumeData = {
      ...req.body,
      user: req.user.id
    };

    const resume = await Resume.create(resumeData);

    // Add resume to user's resumes array
    await User.findByIdAndUpdate(req.user.id, {
      $push: { resumes: resume._id }
    });

    res.status(201).json({
      success: true,
      message: 'Resume created successfully',
      data: { resume }
    });

  } catch (error) {
    next(error);
  }
};

// @desc    Update resume
// @route   PUT /api/resumes/:id
// @access  Private
exports.updateResume = async (req, res, next) => {
  try {
    let resume = await Resume.findById(req.params.id);

    if (!resume) {
      return res.status(404).json({
        success: false,
        message: 'Resume not found'
      });
    }

    // Check if user owns the resume
    if (resume.user.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to update this resume'
      });
    }

    resume = await Resume.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    res.status(200).json({
      success: true,
      message: 'Resume updated successfully',
      data: { resume }
    });

  } catch (error) {
    next(error);
  }
};

// @desc    Delete resume
// @route   DELETE /api/resumes/:id
// @access  Private
exports.deleteResume = async (req, res, next) => {
  try {
    const resume = await Resume.findById(req.params.id);

    if (!resume) {
      return res.status(404).json({
        success: false,
        message: 'Resume not found'
      });
    }

    // Check if user owns the resume
    if (resume.user.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to delete this resume'
      });
    }

    await resume.deleteOne();

    // Remove resume from user's resumes array
    await User.findByIdAndUpdate(req.user.id, {
      $pull: { resumes: resume._id }
    });

    res.status(200).json({
      success: true,
      message: 'Resume deleted successfully',
      data: {}
    });

  } catch (error) {
    next(error);
  }
};

// @desc    Duplicate resume
// @route   POST /api/resumes/:id/duplicate
// @access  Private
exports.duplicateResume = async (req, res, next) => {
  try {
    const originalResume = await Resume.findById(req.params.id);

    if (!originalResume) {
      return res.status(404).json({
        success: false,
        message: 'Resume not found'
      });
    }

    // Check if user owns the resume
    if (originalResume.user.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to duplicate this resume'
      });
    }

    // Create duplicate
    const duplicateData = originalResume.toObject();
    delete duplicateData._id;
    delete duplicateData.createdAt;
    delete duplicateData.updatedAt;
    duplicateData.title = `${duplicateData.title} (Copy)`;
    duplicateData.views = 0;
    duplicateData.downloads = 0;

    const duplicateResume = await Resume.create(duplicateData);

    // Add to user's resumes
    await User.findByIdAndUpdate(req.user.id, {
      $push: { resumes: duplicateResume._id }
    });

    res.status(201).json({
      success: true,
      message: 'Resume duplicated successfully',
      data: { resume: duplicateResume }
    });

  } catch (error) {
    next(error);
  }
};