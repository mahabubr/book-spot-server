import express from "express";
import { WishlistController } from "../controller/wishlist.controller";

const router = express.Router();

router.post("/", WishlistController.postWishlist);
router.get("/:id", WishlistController.getAllWishlist);

export const WishlistRouter = router;
