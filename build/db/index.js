"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const MONGO_URI = (_a = process.env.MONGODB_URI) !== null && _a !== void 0 ? _a : 'mongodb://127.0.0.1:27017/todo-app';
mongoose_1.default.connect(MONGO_URI)
    .then((x) => {
    const dbName = x.connections[0].name;
    console.log(`Connected to Mongo! Database name: "${dbName}"`);
})
    .catch((err) => {
    console.error('Error connecting to mongo: ', err);
});
