"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomScvFileReader = void 0;
const fs_1 = __importDefault(require("fs"));
class CustomScvFileReader {
    constructor(path) {
        this.path = path;
    }
    read() {
        return fs_1.default.readFileSync(this.path, {
            encoding: 'utf8'
        }).split('\n')
            .map((item) => item.split(','));
    }
}
exports.CustomScvFileReader = CustomScvFileReader;
