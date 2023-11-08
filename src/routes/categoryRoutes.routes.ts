/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import { createCategory, getOneCategory } from '../controllers/category.controllers'

const router = express.Router()

router.get('/getOneCategory/:categoryId', getOneCategory)
router.post('/createCategory', createCategory)

export default router
