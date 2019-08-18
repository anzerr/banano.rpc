import { Api } from '../util/api';
export declare class Confirmation extends Api {
    active(): Promise<any>;
    history(): Promise<any>;
    info(root: string, option?: {
        json_block?: boolean;
        contents?: boolean;
        representatives?: boolean;
    }): Promise<any>;
    quorum(option?: {
        peer_details?: boolean;
        peers_stake_required?: boolean;
    }): Promise<any>;
}
