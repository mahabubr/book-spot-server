"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wishlist = void 0;
const mongoose_1 = require("mongoose");
const wishlistSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, required: true },
    publication_date: { type: String, required: true },
    email: { type: String, required: true },
    user_email: { type: String, required: true },
    reviews: { type: [] },
}, {
    timestamps: true,
});
exports.Wishlist = (0, mongoose_1.model)("Wishlist", wishlistSchema);
