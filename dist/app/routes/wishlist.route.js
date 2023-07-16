"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishlistRouter = void 0;
const express_1 = __importDefault(require("express"));
const wishlist_controller_1 = require("../controller/wishlist.controller");
const router = express_1.default.Router();
router.post("/", wishlist_controller_1.WishlistController.postWishlist);
router.get("/:id", wishlist_controller_1.WishlistController.getAllWishlist);
exports.WishlistRouter = router;
