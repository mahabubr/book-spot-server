import { Schema, model } from "mongoose";
import { BooksModel, IBooks } from "../interface/book.interface.";

const bookSchema = new Schema<IBooks>({
    title: {type: String, required: true},
    author: {type: String, required: true},
    genre: {type: String, required: true},
    publication_date: {type: String, required: true},
    reviews: {type: []},
},{
    timestamps: true
})

export const Books = model<IBooks, BooksModel>("Books", bookSchema) 