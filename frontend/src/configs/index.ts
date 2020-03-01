import { ENVIRONMENTS } from 'enums';

export const APP_ENV = process.env.APP_ENV;

export const config = {
    environment: APP_ENV as ENVIRONMENTS,
};
