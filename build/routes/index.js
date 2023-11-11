"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const taskRoutes_routes_1 = __importDefault(require("./taskRoutes.routes"));
const authRoutes_routes_1 = __importDefault(require("./authRoutes.routes"));
const categoryRoutes_routes_1 = __importDefault(require("./categoryRoutes.routes"));
const verifyToken_middleware_1 = require("../middlewares/verifyToken.middleware");
const router = express_1.default.Router();
router.use('/auth', authRoutes_routes_1.default);
router.use('/category', verifyToken_middleware_1.isAuthenticated, categoryRoutes_routes_1.default);
router.use('/tasks', verifyToken_middleware_1.isAuthenticated, taskRoutes_routes_1.default);
exports.default = router;
