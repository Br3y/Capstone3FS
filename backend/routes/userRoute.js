import express from 'express'
import { 
    createUser,
    loginUser,
    logoutCurrentUser,
    getAllUsers,
    getCurrentUserProfile,
    updateCurrentUserProfile
} from '../controllers/userController.js';

import { authenticate, authorizeAdmin } from '../middleware/authMiddleWare.js';

const router = express.Router()

router.get('/getAllUsers', authenticate, authorizeAdmin, getAllUsers)
router.post('/register', createUser)
router.post('/login', loginUser)
router.post('/logout', logoutCurrentUser)

router
    .route('/profile')
    .get(authenticate, getCurrentUserProfile)
    .put(authenticate, updateCurrentUserProfile)

export default router;