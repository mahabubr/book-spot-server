import { Request, Response } from "express";
import { BookServices } from "../services/book.services";

const getAllBooks = async (req: Request, res: Response) => {
    try {
        const result = await BookServices.getAllBooks()

        res.status(200).send({
            message: "Get All Book",
            data: result
        })
    } catch (error) {
        console.log(error);
    }
}

export const BookController = {
    getAllBooks
}