"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-misused-promises */
const express_1 = __importDefault(require("express"));
const category_controllers_1 = require("../controllers/category.controllers");
const router = express_1.default.Router();
router.get('/getOneCategory', category_controllers_1.getOneCategory);
router.post('/createCategory', category_controllers_1.createCategory);
exports.default = router;
