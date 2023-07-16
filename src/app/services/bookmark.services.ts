import { IWishlist } from "../interface/wishlist.interface";
import { Bookmark } from "../model/bookmark.model";

const postBookmark = async (payload: IWishlist) => {
  const result = await Bookmark.create(payload);
  return result;
};

const getAllBookmark = async (email: string) => {
  const result = await Bookmark.find({ user_email: email }).sort({
    createdAt: -1,
  });
  return result;
};

export const BookmarkServices = {
  postBookmark,
  getAllBookmark,
};
