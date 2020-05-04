import { LimitValues } from 'db/config';

export const getTablePath = (path: Array<string>) => {
    return path.map(el => `\`${el}\``).join('.');
};

export const getLimitRequest = (params: { start?: number; length?: number }) => {
    const {
        start = LimitValues.DEFAULT_LIMIT_START,
        length = LimitValues.DEFAULT_LIMIT_LENGTH,
    } = params;

    return `LIMIT ${start}, ${length}`;
};

export const getNumbersList = (arr: number[]) => {
    return `(${arr.join(',')})`;
};
