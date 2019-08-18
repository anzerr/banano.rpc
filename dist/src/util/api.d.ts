export declare class Api {
    private _host;
    constructor(host: string);
    host: string;
    handle(res: any): any;
    request(payload: any): any;
}
