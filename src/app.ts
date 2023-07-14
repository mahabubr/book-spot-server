import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app: Application = express()

// middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.get('/', async (req: Request, res: Response) => {
    res.status(200).send("Server Running")
})

export default app