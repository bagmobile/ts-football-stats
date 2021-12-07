"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
class WinsAnalysis {
    constructor(team) {
        this.team = team;
    }
    run(data) {
        let count = 0;
        data.forEach(match => {
            if ((this.team === match[1] && match[3] > match[4])
                || (this.team === match[2] && match[3] < match[4])) {
                count++;
            }
        });
        return count;
    }
    getTeam() {
        return this.team;
    }
}
exports.WinsAnalysis = WinsAnalysis;
