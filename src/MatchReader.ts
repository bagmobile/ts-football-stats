import {ScvFileReader} from "./ScvFileReader";

enum MatchResult {
    HomeWin = 'H',
    AwayWin = 'A',
    Draw = 'D'
}

type MatchData = [Date, string, string, number, number, MatchResult, string]

export class MatchReader extends ScvFileReader<MatchData> {

    mapRow(row: string[]): MatchData {
        return [
            ((date) => {
                const [d, m, y] = date.split('/')
                return new Date(parseInt(y), parseInt(m), parseInt(d));
            })(row[0]),
            row[1],
            row[2],
            parseInt(row[4]),
            parseInt(row[4]),
            row[5] as MatchResult,
            row[6]
        ];
    }
}
