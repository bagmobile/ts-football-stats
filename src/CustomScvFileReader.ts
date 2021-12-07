import fs from "fs";

export interface IDataReader {
    read(): string[][]
}

export class CustomScvFileReader implements IDataReader {

    constructor(public path:string) {
    }

    read(): string[][] {
        return fs.readFileSync(this.path, {
            encoding: 'utf8'
        }).split('\n')
            .map((item: string): string[] => item.split(','))
    }

}
