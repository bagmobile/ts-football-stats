"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
class Summary {
    constructor(analyzer, reporter) {
        this.analyzer = analyzer;
        this.reporter = reporter;
    }
    buildAndReport(data) {
        this.reporter.print(`Team ${this.analyzer.getTeam()} won ${this.analyzer.run(data)} count`);
    }
}
exports.Summary = Summary;
