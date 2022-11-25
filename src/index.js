module.exports = function reverse (n) {
    n = n.toString().split('');
    for (let i = 0; i < n.length; i++) {
        if (n[i] === '-' || n[n.length] === '0'){
            n[i] = '';
        }
    }
    n = n.reverse().join('');
    return +n;
}
