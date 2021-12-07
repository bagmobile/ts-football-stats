"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const CustomMatchReader_1 = require("./CustomMatchReader");
const CustomScvFileReader_1 = require("./CustomScvFileReader");
const Summary_1 = require("./Summary");
const WinsAnalysis_1 = require("./WinsAnalysis");
const ConsoleReporter_1 = require("./ConsoleReporter");
/*const matches = new MatchReader(path.resolve(__dirname, 'football.csv'))
    .read()
console.log(matches)*/
const matches = new CustomMatchReader_1.CustomMatchReader(new CustomScvFileReader_1.CustomScvFileReader(path_1.default.resolve(__dirname, 'football.csv')))
    .get();
//console.log(matches);
new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Liverpool'), new ConsoleReporter_1.ConsoleReporter()).buildAndReport(matches);
