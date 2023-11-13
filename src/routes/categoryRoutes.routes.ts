/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import { createCategory, getOneCategory, updateCategory } from '../controllers/category.controllers'
import { schemaValidation } from '../middlewares/schemaValidation.middleware'
import { createCategoryShema, updateCategorySchema } from '../schemas/category.shema'
import { isAuthenticated } from '../middlewares/verifyToken.middleware'

const router = express.Router()

router.get('/getOneCategory/:categoryId', isAuthenticated, getOneCategory)
router.post('/createCategory', isAuthenticated, schemaValidation(createCategoryShema), createCategory)
router.put('/updateCategory/:categoryId', isAuthenticated, schemaValidation(updateCategorySchema), updateCategory)

export default router
