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
exports.deleteTask = exports.updatedTask = exports.createTask = exports.getAllTasks = void 0;
const Tasks_model_1 = __importDefault(require("../model/Tasks.model"));
const getAllTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const userId = (_a = req.payload) === null || _a === void 0 ? void 0 : _a._id;
    try {
        const todos = yield Tasks_model_1.default.find({ owner: userId });
        res.status(200).json(todos);
    }
    catch (error) {
        res.status(500).json({ success: false, error });
    }
});
exports.getAllTasks = getAllTasks;
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const userId = (_b = req.payload) === null || _b === void 0 ? void 0 : _b._id;
    const { title } = req.body;
    console.log(userId, req.payload);
    try {
        const userTasks = yield Tasks_model_1.default.find({ owner: userId });
        if (userTasks === null) {
            throw new Error('Error: User does not exist');
        }
        const createdTask = yield Tasks_model_1.default.create({ title, owner: userId });
        if (createdTask === null) {
            throw new Error('Error: Task could not be created');
        }
        res.status(200).json({ message: 'Task created' });
    }
    catch (error) {
        res.status(500).json({ success: false, error });
    }
});
exports.createTask = createTask;
const updatedTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id, completed } = req.body;
    console.log(_id, completed);
    console.log(req.body);
    try {
        const updatedTask = yield Tasks_model_1.default.findByIdAndUpdate(_id, { $set: { completed: !completed } }, { new: true });
        res.status(200).json({ updatedTask });
    }
    catch (error) {
        res.status(500).json({ success: false, error });
    }
});
exports.updatedTask = updatedTask;
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield Tasks_model_1.default.findByIdAndDelete(id);
        res.status(204).json({ message: 'Task deleted' });
    }
    catch (error) {
        res.status(500).json({ success: false, error });
    }
});
exports.deleteTask = deleteTask;
