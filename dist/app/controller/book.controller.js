"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
const book_services_1 = require("../services/book.services");
const pick_1 = __importDefault(require("../shared/pick"));
const book_constants_1 = require("../constants/book.constants");
const getAllBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const filters = (0, pick_1.default)(req.query, book_constants_1.bookFilterFields);
        const result = yield book_services_1.BookServices.getAllBooks(filters);
        res.status(200).send({
            message: "Get All Book",
            data: result,
        });
    }
    catch (error) {
        res.status(400).send({
            message: error.message,
        });
    }
});
const postBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookData = __rest(req.body, []);
        const result = yield book_services_1.BookServices.postBook(bookData);
        res.status(200).send({
            message: "Book Created",
            data: result,
        });
    }
    catch (error) {
        res.status(400).send({
            message: error.message,
        });
    }
});
const updateBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updateData = __rest(req.body, []);
        const result = yield book_services_1.BookServices.updateBook(id, updateData);
        res.status(200).send({
            message: "Book Updated",
            data: result,
        });
    }
    catch (error) {
        res.status(400).send({
            message: error.message,
        });
    }
});
const deleteBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield book_services_1.BookServices.deleteBook(id);
        res.status(200).send({
            message: "Book Deleted",
            data: result,
        });
    }
    catch (error) {
        res.status(400).send({
            message: error.message,
        });
    }
});
const getSingleBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield book_services_1.BookServices.getSingleBook(id);
        res.status(200).send({
            message: "Get Single Book",
            data: result,
        });
    }
    catch (error) {
        res.status(400).send({
            message: error.message,
        });
    }
});
const updateReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reviewData = req.body.comment;
        const { id } = req.params;
        const result = yield book_services_1.BookServices.updateReview(id, reviewData);
        res.status(200).send({
            message: "Review Update successful",
            data: result,
        });
    }
    catch (error) {
        res.status(400).send({
            message: error.message,
        });
    }
});
exports.BookController = {
    getAllBooks,
    postBook,
    updateBook,
    deleteBook,
    getSingleBook,
    updateReview,
};
