import {MatchData} from "./types";

export interface IAnalyzer {
    run(data: MatchData[]): number
    getTeam(): string;
}

export interface IReporter {
    print(data: string): void
}

export class Summary {
    private analyzer: IAnalyzer;
    private reporter: IReporter;

    constructor(analyzer: IAnalyzer, reporter: IReporter) {
        this.analyzer = analyzer;
        this.reporter = reporter;
    }

    buildAndReport(data: MatchData[]) {
        this.reporter.print(`Team ${this.analyzer.getTeam()} won ${this.analyzer.run(data)} count`)
    }
}
