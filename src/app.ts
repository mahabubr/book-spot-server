import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { BookRouter } from './app/routes/books.route'

dotenv.config()

const app: Application = express()

// middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Routers

app.use('/api/v1/book', BookRouter)


app.get('/', async (req: Request, res: Response) => {
    res.status(200).send("Server Running")
})

export default app