"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const ScvFileReader_1 = require("./ScvFileReader");
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
class MatchReader extends ScvFileReader_1.ScvFileReader {
    mapRow(row) {
        return [
            ((date) => {
                const [d, m, y] = date.split('/');
                return new Date(parseInt(y), parseInt(m), parseInt(d));
            })(row[0]),
            row[1],
            row[2],
            parseInt(row[4]),
            parseInt(row[4]),
            row[5],
            row[6]
        ];
    }
}
exports.MatchReader = MatchReader;
