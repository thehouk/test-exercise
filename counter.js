let count = 0;

module.exports = {
    getCounter: () => JSON.stringify(count),
    increment: () => JSON.stringify(++count)
}
