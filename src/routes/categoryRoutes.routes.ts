/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import { createCategory, getOneCategory, updateCategory } from '../controllers/category.controllers'
import { schemaValidation } from '../middlewares/schemaValidation.middleware'
import { createCategoryShema } from '../schemas/category.shema'

const router = express.Router()

router.get('/getOneCategory/:categoryId', getOneCategory)
router.post('/createCategory', schemaValidation(createCategoryShema), createCategory)
router.put('/updateCategory/:categoryId', updateCategory)

export default router
