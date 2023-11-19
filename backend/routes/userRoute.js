import express from 'express'
import { createUser, loginUser, logoutCurrentUser } from '../controllers/userController.js';
const router = express.Router()


router.post('/register', createUser)
router.post('/login', loginUser)
router.post('/logout', logoutCurrentUser)
export default router;