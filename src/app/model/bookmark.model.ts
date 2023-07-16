import { Schema, model } from "mongoose";
import { IWishlist, WishlistModel } from "../interface/wishlist.interface";

const bookmarkSchema = new Schema<IWishlist>(
  {
    title: { type: String },
    author: { type: String },
    genre: { type: String },
    publication_date: { type: String },
    email: { type: String },
    user_email: { type: String },
    reviews: { type: [] },
  },
  {
    timestamps: true,
  }
);

export const Bookmark = model<IWishlist, WishlistModel>(
  "Bookmark",
  bookmarkSchema
);
