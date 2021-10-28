const pi = 3.14;

function get_sum(line) {
    hide();
    return line
        .split(/\s+/)
        .map(x => +x)
        .filter(x => x%2)
        .reduce((acc, cur) => acc + cur);
}

function hide() {
    console.log('hide');
}

// module.exports.get_sum_odd = get_sum;
// module.exports.pi = pi;
module.exports = {
    get_sum: get_sum,
    PI: pi
}
