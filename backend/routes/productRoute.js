import express from "express";
import formidable from 'express-formidable'
const router = express.Router()


import { authenticate, authorizeAdmin } from "../middleware/authMiddleWare.js";
import checkId from '../middleware/checkId.js'

export default router