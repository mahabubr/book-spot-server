import express from 'express'
import { BookController } from '../controller/book.controller'

const router = express.Router()

router.get('/', BookController.getAllBooks)
router.post('/', BookController.postBook)
router.get('/:id', BookController.getSingleBook)
router.patch('/:id', BookController.updateBook)
router.delete('/:id', BookController.deleteBook)

export const BookRouter = router