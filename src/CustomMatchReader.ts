import {MatchData, MatchResult} from "./types";
import {IDataReader} from "./CustomScvFileReader";

export class CustomMatchReader {
    reader: IDataReader;

    constructor(reader: IDataReader) {
        this.reader = reader;
    }

    get(): MatchData[] {
        return this.reader.read().map((row: string[]): MatchData => {
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
        });
    }
}
