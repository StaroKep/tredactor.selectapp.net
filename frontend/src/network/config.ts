import { config } from 'configs';
import { DOMAINS, ENDPOINTS } from 'enums';

const { environment } = config;

export function getNetworkRequestPath(endpoint: ENDPOINTS) {
    return DOMAINS[environment].concat(endpoint);
}
