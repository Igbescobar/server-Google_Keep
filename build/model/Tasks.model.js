"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const taskSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    categoryID: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Project'
    },
    owner: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});
const Task = (0, mongoose_1.model)('Task', taskSchema);
exports.default = Task;
