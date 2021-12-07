import path from "path";
import {CustomMatchReader} from "./CustomMatchReader";
import {CustomScvFileReader} from "./CustomScvFileReader";
import {Summary} from "./Summary";
import {WinsAnalysis} from "./WinsAnalysis";
import {ConsoleReporter} from "./ConsoleReporter";


/*const matches = new MatchReader(path.resolve(__dirname, 'football.csv'))
    .read()
console.log(matches)*/
const matches = new CustomMatchReader(new CustomScvFileReader(path.resolve(__dirname, 'football.csv')))
    .get();
//console.log(matches);
new Summary(new WinsAnalysis('Liverpool'), new ConsoleReporter()).buildAndReport(matches);
