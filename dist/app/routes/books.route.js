"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRouter = void 0;
const express_1 = __importDefault(require("express"));
const book_controller_1 = require("../controller/book.controller");
const router = express_1.default.Router();
router.get("/", book_controller_1.BookController.getAllBooks);
router.post("/", book_controller_1.BookController.postBook);
router.get("/:id", book_controller_1.BookController.getSingleBook);
router.patch("/:id", book_controller_1.BookController.updateBook);
router.patch("/review/:id", book_controller_1.BookController.updateReview);
router.delete("/:id", book_controller_1.BookController.deleteBook);
exports.BookRouter = router;
