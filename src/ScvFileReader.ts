import fs from "fs";

export abstract class ScvFileReader<T> {

    constructor(public path: string) {
    }

    read(): T[] {
        return fs.readFileSync(this.path, {
            encoding: 'utf8'
        }).split('\n')
            .map((item: string): string[] => item.split(','))
            .map(this.mapRow)
    }


    abstract mapRow(row: string[]): T
}
