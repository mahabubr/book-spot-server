import { IWishlist } from "../interface/wishlist.interface";
import { Wishlist } from "../model/wishlist.model";

const postWishlist = async (payload: IWishlist) => {
  const result = await Wishlist.create(payload);
  return result;
};

const getAllWishlist = async (email: string) => {
  const result = await Wishlist.find({ user_email: email }).sort({
    createdAt: -1,
  });
  return result;
};

export const WishlistServices = {
  postWishlist,
  getAllWishlist,
};
