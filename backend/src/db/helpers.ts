export const getTablePath = (path: Array<string>) => {
    return path.map(el => `\`${el}\``).join('.');
};
