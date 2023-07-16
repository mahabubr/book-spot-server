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
exports.WishlistController = void 0;
const wishlist_services_1 = require("../services/wishlist.services");
const postWishlist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const postData = __rest(req.body, []);
        const result = yield wishlist_services_1.WishlistServices.postWishlist(postData);
        res.status(200).send({
            message: "Wishlist post successful",
            data: result,
        });
    }
    catch (error) {
        res.status(400).send({
            message: error.message,
        });
    }
});
const getAllWishlist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield wishlist_services_1.WishlistServices.getAllWishlist(id);
        res.status(200).send({
            message: "Wishlist get successful",
            data: result,
        });
    }
    catch (error) {
        res.status(400).send({
            message: error.message,
        });
    }
});
exports.WishlistController = {
    postWishlist,
    getAllWishlist,
};
