"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.get('/.well-known/microsoft-identity-association.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.sendFile(path_1.default.join(__dirname, 'public', '.well-known', 'microsoft-identity-association.json'));
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
