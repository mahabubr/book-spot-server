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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookmarkController = void 0;
const bookmark_services_1 = require("../services/bookmark.services");
const postBookmark = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const postData = __rest(req.body, []);
        const result = yield bookmark_services_1.BookmarkServices.postBookmark(postData);
        res.status(200).send({
            message: "Bookmark post successful",
            data: result,
        });
    }
    catch (error) {
        res.status(400).send({
            message: error.message,
        });
    }
});
const getAllBookmark = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield bookmark_services_1.BookmarkServices.getAllBookmark(id);
        res.status(200).send({
            message: "Bookmark get successful",
            data: result,
        });
    }
    catch (error) {
        res.status(400).send({
            message: error.message,
        });
    }
});
exports.BookmarkController = {
    postBookmark,
    getAllBookmark,
};
