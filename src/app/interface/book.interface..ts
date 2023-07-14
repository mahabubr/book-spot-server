import { Model } from "mongoose"

export interface IBooks {
    title: string
    author: string
    genre: string
    publication_date: string
    reviews: string[]
}

export type BooksModel = Model<IBooks, Record<string, unknown>>