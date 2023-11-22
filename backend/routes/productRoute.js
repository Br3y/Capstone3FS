import express from "express";
import formidable from 'express-formidable'
const router = express.Router()

import {
    addProduct,
    updateProductDetails,
    removeProduct,
    getAllProducts,
    getProductById,
    fetchAllProducts,
    addProductReview,
    fetchTopProducts,
    fetchNewProducts
} from '../controllers/productController.js'
import { authenticate, authorizeAdmin } from "../middleware/authMiddleWare.js";
import checkId from '../middleware/checkId.js'

router
    .route('/fetchAllProducts')
    .get(fetchAllProducts)

router
    .route('/:id/reviews')
    .post(authenticate, checkId, addProductReview)

router
    .route('/top')
    .get(fetchTopProducts)
router
    .route('/new')
    .get(fetchNewProducts)

router
    .route('/')
    .post(authenticate, authorizeAdmin, formidable(), addProduct)
    .get(getAllProducts)
router
    .route('/:id')
    .get(getProductById)
    .put(authenticate, authorizeAdmin, formidable(), updateProductDetails)
    .delete(authenticate, authorizeAdmin, removeProduct)




export default router