"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
// const FRONTEND_URL = process.env.ORIGIN ?? 'http://localhost:3000'
exports.default = (app) => {
    app.set('trust proxy', 1);
    // app.use(
    //     cors({
    //         origin: [FRONTEND_URL]
    //     })
    // )
    app.use((0, morgan_1.default)('dev'));
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: false }));
};
