"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.CustomMatchReader = void 0;

class CustomMatchReader {
    constructor(reader) {
        this.reader = reader;
    }

    get() {
        return this.reader.read().map((row) => {
            return [
                ((date) => {
                    const [d, m, y] = date.split('/');
                    return new Date(parseInt(y), parseInt(m), parseInt(d));
                })(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                row[6]
            ];
        });
    }
}

exports.CustomMatchReader = CustomMatchReader;
