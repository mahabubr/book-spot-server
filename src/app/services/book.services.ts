import { Books } from "../model/book.model"

const getAllBooks = async () => {
    const result = await Books.find({})
    return result
}

export const BookServices = {
    getAllBooks
}