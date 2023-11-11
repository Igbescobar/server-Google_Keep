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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCategory = exports.getOneCategory = void 0;
const Category_model_1 = __importDefault(require("../model/Category.model"));
const getOneCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const userId = (_a = req.payload) === null || _a === void 0 ? void 0 : _a._id;
    try {
        const todos = yield Category_model_1.default.find({ owner: userId });
        res.status(200).json(todos);
    }
    catch (error) {
        next(error);
    }
});
exports.getOneCategory = getOneCategory;
const createCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const _id = (_b = req.payload) === null || _b === void 0 ? void 0 : _b._id;
    const { title } = req.body;
    console.log(_id, req.payload);
    try {
        const createdCategory = yield Category_model_1.default.create({ title, owner: _id });
        if (createdCategory === null) {
            throw new Error('Error: Category could not be created');
        }
        res.status(200).json({ message: 'Category created' });
    }
    catch (error) {
        next(error);
    }
});
exports.createCategory = createCategory;
