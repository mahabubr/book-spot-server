import { IBooks } from "../interface/book.interface.";
import { Wishlist } from "../model/wishlist.model";

const postWishlist = async (payload: IBooks) => {
  const result = await Wishlist.create(payload);
  return result;
};

const getAllWishlist = async (email: string) => {
  const result = await Wishlist.find({ user_email: email });
  return result;
};

export const WishlistServices = {
  postWishlist,
  getAllWishlist,
};
