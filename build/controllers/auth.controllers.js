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
exports.verify = exports.login = exports.signup = exports.StatusError = void 0;
const User_model_1 = __importDefault(require("../model/User.model"));
class StatusError extends Error {
    // eslint-disable-next-line @typescript-eslint/space-before-function-paren
    constructor(message, statusCode) {
        super(message);
        this.name = 'StatusError';
        this.statusCode = statusCode;
    }
}
exports.StatusError = StatusError;
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userName, email, password } = req.body;
    try {
        const createUser = yield User_model_1.default.create({ userName, email, password });
        if (createUser === null) {
            throw new StatusError('Error: Unable to create user', 422);
        }
        else {
            res.status(201).json({ message: 'User created' });
        }
    }
    catch (error) {
        res.status(400).json({ success: false, error });
    }
});
exports.signup = signup;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const foundUser = yield User_model_1.default.findOne({ email });
        if (foundUser === null) {
            throw new StatusError('User not found', 401);
        }
        if (foundUser.validatePassword(password)) {
            const authToken = foundUser.signToken();
            res.status(200).json({ authToken });
        }
        else {
            res.status(401).json({ errorMessages: ['Unable to authenticate the user'] });
        }
    }
    catch (error) {
        res.status(400).json({ success: false, error });
    }
});
exports.login = login;
const verify = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json(req.payload);
});
exports.verify = verify;
