"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookmarkRouter = void 0;
const express_1 = __importDefault(require("express"));
const bookmark_controller_1 = require("../controller/bookmark.controller");
const router = express_1.default.Router();
router.post("/", bookmark_controller_1.BookmarkController.postBookmark);
router.get("/:id", bookmark_controller_1.BookmarkController.getAllBookmark);
exports.BookmarkRouter = router;
