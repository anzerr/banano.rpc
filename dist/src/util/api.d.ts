export declare class Api {
    private _host;
    private _options;
    constructor(host: string, options?: {
        [key: string]: any;
    });
    host: string;
    handle(res: any): any;
    request(payload: any): Promise<any>;
}
