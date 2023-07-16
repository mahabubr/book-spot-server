import { Request, Response } from "express";
import { WishlistServices } from "../services/wishlist.services";

const postWishlist = async (req: Request, res: Response) => {
  try {
    const { ...postData } = req.body;

    const result = await WishlistServices.postWishlist(postData);

    res.status(200).send({
      message: "Wishlist post successful",
      data: result,
    });
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  }
};

const getAllWishlist = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await WishlistServices.getAllWishlist(id);

    res.status(200).send({
      message: "Wishlist get successful",
      data: result,
    });
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  }
};
export const WishlistController = {
  postWishlist,
  getAllWishlist,
};
