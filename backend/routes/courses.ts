import express, { Router, Request, Response } from 'express';
import Course from '../models/Course';
import UserProgress from '../models/UserProgress';
import { authenticateToken } from '../middleware/auth';

const router: Router = express.Router();

// Get all courses
router.get('/', async (req: Request, res: Response) => {
  try {
    const courses = await Course.find().select('-lessons.content');
    res.status(200).json({
      message: 'Courses retrieved successfully',
      data: courses,
    });
  } catch (error) {
    console.error('Error fetching courses:', error);
    res.status(500).json({ message: 'Server error', error });
  }
});

// Get single course with lessons
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const course = await Course.findById(id);

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    res.status(200).json({
      message: 'Course retrieved successfully',
      data: course,
    });
  } catch (error) {
    console.error('Error fetching course:', error);
    res.status(500).json({ message: 'Server error', error });
  }
});

// Get user's course progress
router.get('/user/:courseId', authenticateToken, async (req: Request, res: Response) => {
  try {
    const { courseId } = req.params;
    const userId = (req as any).user?.id;

    const progress = await UserProgress.findOne({ userId, courseId });

    if (!progress) {
      return res.status(404).json({ message: 'Progress not found' });
    }

    res.status(200).json({
      message: 'User progress retrieved successfully',
      data: progress,
    });
  } catch (error) {
    console.error('Error fetching progress:', error);
    res.status(500).json({ message: 'Server error', error });
  }
});

// Start a course
router.post('/start/:courseId', authenticateToken, async (req: Request, res: Response) => {
  try {
    const { courseId } = req.params;
    const userId = (req as any).user?.id;

    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    // Check if course exists
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    // Check if already started
    let progress = await UserProgress.findOne({ userId, courseId });
    if (progress) {
      return res.status(400).json({ message: 'Course already started' });
    }

    // Create new progress record
    progress = new UserProgress({
      userId,
      courseId,
      completedLessons: [],
      progress: 0,
      completed: false,
    });

    await progress.save();

    res.status(201).json({
      message: 'Course started successfully',
      data: progress,
    });
  } catch (error) {
    console.error('Error starting course:', error);
    res.status(500).json({ message: 'Server error', error });
  }
});

// Mark lesson as completed
router.post('/lesson/complete/:courseId/:lessonId', authenticateToken, async (req: Request, res: Response) => {
  try {
    const { courseId, lessonId } = req.params;
    const userId = (req as any).user?.id;

    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const progress = await UserProgress.findOne({ userId, courseId });

    if (!progress) {
      return res.status(404).json({ message: 'Course progress not found' });
    }

    // Add lesson to completed if not already
    if (!progress.completedLessons.includes(lessonId)) {
      progress.completedLessons.push(lessonId);

      // Get course to calculate progress
      const course = await Course.findById(courseId);
      if (course) {
        const totalLessons = course.lessons.length;
        progress.progress = Math.round((progress.completedLessons.length / totalLessons) * 100);

        // Check if course completed
        if (progress.progress >= 80) {
          progress.completed = true;
          progress.completedAt = new Date();
        }
      }

      await progress.save();
    }

    res.status(200).json({
      message: 'Lesson marked as completed',
      data: progress,
    });
  } catch (error) {
    console.error('Error completing lesson:', error);
    res.status(500).json({ message: 'Server error', error });
  }
});

// Get user's all course progress
router.get('/:userId/progress', authenticateToken, async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user?.id;

    const progressList = await UserProgress.find({ userId }).populate('courseId');

    res.status(200).json({
      message: 'User course progress retrieved successfully',
      data: progressList,
    });
  } catch (error) {
    console.error('Error fetching progress list:', error);
    res.status(500).json({ message: 'Server error', error });
  }
});

export default router;
