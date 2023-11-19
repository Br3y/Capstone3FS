import express from 'express'
import { createUser, loginUser, logoutCurrentUser, getAllUsers } from '../controllers/userController.js';
import { authenticate, authorizeAdmin } from '../middleware/authMiddleWare.js';

const router = express.Router()

router.get('/getAllUsers', authenticate, authorizeAdmin, getAllUsers)
router.post('/register', createUser)
router.post('/login', loginUser)
router.post('/logout', logoutCurrentUser)


export default router;