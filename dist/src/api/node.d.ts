import { Api } from '../util/api';
export declare class Node extends Api {
    stats(type?: string): Promise<any>;
    version(): Promise<any>;
    uptime(): Promise<any>;
}
