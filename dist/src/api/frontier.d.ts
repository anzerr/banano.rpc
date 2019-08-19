import { Api } from '../util/api';
export declare class Frontier extends Api {
    count(): Promise<any>;
    get(option?: {
        account?: string;
        count?: number;
    }): Promise<any>;
}
