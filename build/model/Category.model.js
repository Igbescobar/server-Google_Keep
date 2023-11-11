"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// export interface CategoryParamsType {
// }
const categorySchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: [true, 'Title is required.'],
        trim: true,
        unique: true
    },
    description: {
        type: String,
        trim: true
    },
    owner: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});
const Category = (0, mongoose_1.model)('Category', categorySchema);
exports.default = Category;
