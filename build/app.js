"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config"));
const routes_1 = __importDefault(require("./routes"));
require("./db");
const app = (0, express_1.default)();
(0, config_1.default)(app);
app.use('/api', routes_1.default);
exports.default = app;
