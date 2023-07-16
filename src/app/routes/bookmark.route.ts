import express from "express";
import { BookmarkController } from "../controller/bookmark.controller";

const router = express.Router();

router.post("/", BookmarkController.postBookmark);
router.get("/:id", BookmarkController.getAllBookmark);

export const BookmarkRouter = router;
