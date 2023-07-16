import { Request, Response } from "express";
import { BookmarkServices } from "../services/bookmark.services";

const postBookmark = async (req: Request, res: Response) => {
  try {
    const { ...postData } = req.body;

    const result = await BookmarkServices.postBookmark(postData);

    res.status(200).send({
      message: "Bookmark post successful",
      data: result,
    });
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  }
};

const getAllBookmark = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await BookmarkServices.getAllBookmark(id);

    res.status(200).send({
      message: "Bookmark get successful",
      data: result,
    });
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  }
};
export const BookmarkController = {
  postBookmark,
  getAllBookmark,
};
