function getMax(a, b) {
    if (a>b)
        return a;
    else
        return b;
}

function get_max(a, b) {
    return (a>b)? a: b;
}

module.exports.getMax = getMax;
module.exports.get_max = get_max;
