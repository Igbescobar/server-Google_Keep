"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = void 0;
const express_jwt_1 = require("express-jwt");
const isAuthenticated = (0, express_jwt_1.expressjwt)({
    secret: process.env.TOKEN_SECRET,
    algorithms: ['HS256'],
    requestProperty: 'payload',
    getToken: getTokenFromHeaders
});
exports.isAuthenticated = isAuthenticated;
// eslint-disable-next-line @typescript-eslint/space-before-function-paren
function getTokenFromHeaders(req) {
    var _a, _b;
    if (((_b = (_a = req === null || req === void 0 ? void 0 : req.headers) === null || _a === void 0 ? void 0 : _a.authorization) === null || _b === void 0 ? void 0 : _b.split(' ')[0]) === 'Bearer') {
        const token = req.headers.authorization.split(' ')[1];
        return token;
    }
    return null;
}
