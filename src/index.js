// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let H, Q, D, N, P, rem, result = {};
    if (currency <= 0) return {};
    if (currency > 10000) return { error: "You are rich, my friend! We don't have so much coins for exchange" };
    H = Math.floor(currency / 50);
    rem = currency % 50;
    Q = Math.floor(rem / 25);
    rem = rem % 25;
    D = Math.floor(rem / 10);
    rem = rem % 10;
    N = Math.floor(rem / 5);
    rem = rem % 5;
    P = rem / 1;

    if (H != 0)
        result['H'] = H;
    if (Q != 0)
        result['Q'] = Q;
    if (D != 0)
        result['D'] = D;
    if (N != 0)
        result['N'] = N;
    if (P != 0)
        result['P'] = P;

    return result;
}