import { Schema, model } from "mongoose";
import { BooksModel, IBooks } from "../interface/book.interface.";
import { IWishlist, WishlistModel } from "../interface/wishlist.interface";

const wishlistSchema = new Schema<IWishlist>(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, required: true },
    publication_date: { type: String, required: true },
    email: { type: String, required: true },
    user_email: { type: String, required: true },
    reviews: { type: [] },
  },
  {
    timestamps: true,
  }
);

export const Wishlist = model<IWishlist, WishlistModel>(
  "Wishlist",
  wishlistSchema
);
