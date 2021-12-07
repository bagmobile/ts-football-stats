import {IAnalyzer} from "./Summary";
import {MatchData} from "./types";

export class WinsAnalysis implements IAnalyzer{

    constructor(public team: string) {
    }
    run(data: MatchData[]): number{
        let count = 0;
        data.forEach(match => {
            if ((this.team === match[1] && match[3]> match[4])
            || (this.team === match[2] && match[3]< match[4]))    {
                count++;
            }
        });
        return count;
    }

    getTeam(): string {
        return this.team;
    }

}
