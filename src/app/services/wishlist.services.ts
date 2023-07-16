import { IBooks } from "../interface/book.interface.";
import { Wishlist } from "../model/wishlist.model";

const postWishlist = async (payload: IBooks) => {
  const result = await Wishlist.create(payload);
  return result;
};

export const WishlistServices = {
  postWishlist,
};
