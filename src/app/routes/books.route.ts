import express from 'express'
import { BookController } from '../controller/book.controller'

const router = express.Router()

router.get('/', BookController.getAllBooks)

export const BookRouter = router