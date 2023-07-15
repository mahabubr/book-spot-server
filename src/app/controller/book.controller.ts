import { Request, Response } from "express";
import { BookServices } from "../services/book.services";
import pick from "../shared/pick";
import { bookFilterFields } from "../constants/book.constants";

const getAllBooks = async (req: Request, res: Response) => {
  try {
    const filters = pick(req.query, bookFilterFields);

    const result = await BookServices.getAllBooks(filters);

    res.status(200).send({
      message: "Get All Book",
      data: result,
    });
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  }
};

const postBook = async (req: Request, res: Response) => {
  try {
    const { ...bookData } = req.body;

    const result = await BookServices.postBook(bookData);

    res.status(200).send({
      message: "Book Created",
      data: result,
    });
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  }
};

const updateBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { ...updateData } = req.body;

    const result = await BookServices.updateBook(id, updateData);

    res.status(200).send({
      message: "Book Updated",
      data: result,
    });
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  }
};

const deleteBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await BookServices.deleteBook(id);

    res.status(200).send({
      message: "Book Deleted",
      data: result,
    });
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  }
};

const getSingleBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await BookServices.getAllBooks(id);

    res.status(200).send({
      message: "Get Single Book",
      data: result,
    });
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  }
};

export const BookController = {
  getAllBooks,
  postBook,
  updateBook,
  deleteBook,
  getSingleBook,
};
