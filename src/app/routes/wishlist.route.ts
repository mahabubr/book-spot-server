import express from "express";
import { WishlistController } from "../controller/wishlist.controller";

const router = express.Router();

router.post("/", WishlistController.postWishlist);

export const WishlistRouter = router;
