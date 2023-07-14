import express from 'express'
import { BookController } from '../controller/book.controller'

const router = express.Router()

router.get('/', BookController.getAllBooks)
router.post('/', BookController.postBook)
router.patch('/', BookController.updateBook)

export const BookRouter = router