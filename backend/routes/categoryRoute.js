import express from "express";
import {
  createCategory,
  updateCategory,
  removeCategory,
  listCategory,
  readCategory
} from "../controllers/categoryController.js";
import { authenticate, authorizeAdmin } from "../middleware/authMiddleWare.js";
const router = express.Router();

router.route("/").post(authenticate, authorizeAdmin, createCategory);
router
    .route("/:categoryId")
    .put(authenticate, authorizeAdmin, updateCategory)
    .delete(authenticate, authorizeAdmin, removeCategory)

router
    .route("/categories")
    .get(listCategory)

router
    .route("/:id")
    .get(readCategory)
export default router;
