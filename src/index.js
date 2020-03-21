module.exports = function reverse (n) {
    n = Math.abs(n);
    
    if (n < 10) return n;

    let first = Math.floor(n / 10);
    let last = n % 10; 
    let length = Math.pow(10, n.toString().length - 1);

    return last * length + reverse(first);
}
