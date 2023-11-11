"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userSchema = new mongoose_1.Schema({
    username: {
        type: String,
        required: [true, 'Username is required.'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required.'],
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        trim: true,
        required: [true, 'Password is required.']
    }
}, {
    timestamps: true
});
userSchema.pre('save', function (next) {
    const saltRounds = 10;
    const salt = bcrypt_1.default.genSaltSync(saltRounds);
    const hashedPassword = bcrypt_1.default.hashSync(this.password, salt);
    this.password = hashedPassword;
    next();
});
userSchema.methods.validatePassword = function (plainPassword) {
    return bcrypt_1.default.compareSync(plainPassword, this.password);
};
userSchema.methods.signToken = function () {
    const { _id, username } = this;
    const payload = { _id, username };
    const authToken = jsonwebtoken_1.default.sign(payload, process.env.TOKEN_SECRET, { algorithm: 'HS256', expiresIn: '6h' });
    return authToken;
};
const User = (0, mongoose_1.model)('User', userSchema);
exports.default = User;
