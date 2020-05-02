import { config } from 'configs';
import { DOMAINS, ENDPOINT } from 'enums';

const { environment } = config;

export function getNetworkRequestPath(endpoint: ENDPOINT) {
    return DOMAINS[environment].concat(endpoint);
}
