// TODO: Объединить это решение для frontendа и backendа
module.exports.decode = (str) => {
    const result = {};

    str.split(',').forEach(field => {
        const [key, value] = field.split(':');
        result[key] = value;
    });

    return result;
};