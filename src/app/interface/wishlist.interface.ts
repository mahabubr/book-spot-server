import { Model } from "mongoose";

export interface IWishlist {
  title: string;
  author: string;
  genre: string;
  publication_date: string;
  email: string;
  user_email: string;
  reviews?: string[];
}

export type WishlistModel = Model<IWishlist, Record<string, unknown>>;
