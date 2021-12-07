import {IReporter} from "./Summary";

export class ConsoleReporter implements IReporter{
    print(data: string): void {
        console.log(data)
    }
}
