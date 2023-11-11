"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-misused-promises */
const express_1 = __importDefault(require("express"));
const auth_controllers_1 = require("../controllers/auth.controllers");
const verifyToken_middleware_1 = require("../middlewares/verifyToken.middleware");
const router = express_1.default.Router();
router.post('/signup', auth_controllers_1.signup);
router.post('/login', auth_controllers_1.login);
router.get('/verify', verifyToken_middleware_1.isAuthenticated, auth_controllers_1.verify);
exports.default = router;
