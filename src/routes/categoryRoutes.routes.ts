/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import { createCategory, getOneCategory, updateCategory } from '../controllers/category.controllers'

const router = express.Router()

router.get('/getOneCategory', getOneCategory)
router.post('/createCategory', createCategory)
router.put('/updateCategory/:categoryId', updateCategory)

export default router
