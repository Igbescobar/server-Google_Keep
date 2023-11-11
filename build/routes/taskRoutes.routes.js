"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-misused-promises */
const express_1 = __importDefault(require("express"));
const tasks_controllers_1 = require("../controllers/tasks.controllers");
const router = express_1.default.Router();
router.get('/allTasks', tasks_controllers_1.getAllTasks);
router.post('/createTask', tasks_controllers_1.createTask);
router.put('/updateTask', tasks_controllers_1.updatedTask);
router.delete('/:id/deleteTask', tasks_controllers_1.deleteTask);
exports.default = router;
