function squareCircle(r, n) {
    return (Math.PI*r**2).toFixed(n);
}

exports.squareCircle = squareCircle;

exports.get_square_circle = (r, n) => {
    return (Math.PI*r**2).toFixed(n);
}