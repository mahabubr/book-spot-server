import { Request, Response } from "express";
import { BookServices } from "../services/book.services";
import pick from "../shared/pick";
import { bookFilterFields } from "../constants/book.constants";

const getAllBooks = async (req: Request, res: Response) => {
    try {

        const filters = pick(req.query, bookFilterFields)

        const result = await BookServices.getAllBooks(filters)

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