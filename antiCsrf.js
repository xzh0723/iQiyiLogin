authcookie = "6cl7rI86CtYqu4uKdz5zibCVSm1APOTAtSIW8UXebYzHdXcTVxWTxGyfcE9slzslgjXbf"

function m(a) {
    a = a.replace(/\x0d\x0a/g, "\n");
    for (var b = "", c = 0; c < a.length; c++) {
        var d = a.charCodeAt(c);
        128 > d ? b += String.fromCharCode(d) : d > 127 && 2048 > d ? (b += String.fromCharCode(192 | d >> 6),
            b += String.fromCharCode(128 | 63 & d)) : (b += String.fromCharCode(224 | d >> 12),
            b += String.fromCharCode(128 | 63 & d >> 6),
            b += String.fromCharCode(128 | 63 & d))
    }
    return b
}

function k(a) {
    for (var b, c = a.length, d = c + 8, e = (d - d % 64) / 64, f = 16 * (e + 1), g = Array(f - 1), h = 0, i = 0; c > i;)
        b = (i - i % 4) / 4,
            h = 8 * (i % 4),
            g[b] = g[b] | a.charCodeAt(i) << h,
            i++;
    return b = (i - i % 4) / 4,
        h = 8 * (i % 4),
        g[b] = g[b] | 128 << h,
        g[f - 2] = c << 3,
        g[f - 1] = c >>> 29,
        g
}

function g(d, e, f, g, h, i, j) {
    return d = b(d, b(b(c(e, f, g), h), j)),
        b(a(d, i), e)
}

function a(a, b) {
    return a << b | a >>> 32 - b
}

function b(a, b) {
    var c, d, e, f, g;
    return e = 2147483648 & a,
        f = 2147483648 & b,
        c = 1073741824 & a,
        d = 1073741824 & b,
        g = (1073741823 & a) + (1073741823 & b),
        c & d ? 2147483648 ^ g ^ e ^ f : c | d ? 1073741824 & g ? 3221225472 ^ g ^ e ^ f : 1073741824 ^ g ^ e ^ f : g ^ e ^ f
}

function c(a, b, c) {
    return a & b | ~a & c
}

function d(a, b, c) {
    return a & c | b & ~c
}

function e(a, b, c) {
    return a ^ b ^ c
}

function f(a, b, c) {
    return b ^ (a | ~c)
}

function h(c, e, f, g, h, i, j) {
    return c = b(c, b(b(d(e, f, g), h), j)),
        b(a(c, i), e)
}

function i(c, d, f, g, h, i, j) {
    return c = b(c, b(b(e(d, f, g), h), j)),
        b(a(c, i), d)
}

function j(c, d, e, g, h, i, j) {
    return c = b(c, b(b(f(d, e, g), h), j)),
        b(a(c, i), d)
}

function l(a) {
    var b, c, d = "", e = "";
    for (c = 0; 3 >= c; c++)
        b = 255 & a >>> 8 * c,
            e = "0" + b.toString(16),
            d += e.substr(e.length - 2, 2);
    return d
}

//o.crypto.md5
function getAnticsrf(a) {
    a += "";
    var c, d, e, f, n, o, p, q, r, s = Array(), t = 7, u = 12, v = 17, w = 22, x = 5, y = 9, z = 14, A = 20, B = 4,
        C = 11, D = 16, E = 23, F = 6, G = 10, H = 15, I = 21;
    for (a = m(a),
             s = k(a),
             o = 1732584193,
             p = 4023233417,
             q = 2562383102,
             r = 271733878,
             c = 0; c < s.length; c += 16)
        d = o,
            e = p,
            f = q,
            n = r,
            o = g(o, p, q, r, s[c + 0], t, 3614090360),
            r = g(r, o, p, q, s[c + 1], u, 3905402710),
            q = g(q, r, o, p, s[c + 2], v, 606105819),
            p = g(p, q, r, o, s[c + 3], w, 3250441966),
            o = g(o, p, q, r, s[c + 4], t, 4118548399),
            r = g(r, o, p, q, s[c + 5], u, 1200080426),
            q = g(q, r, o, p, s[c + 6], v, 2821735955),
            p = g(p, q, r, o, s[c + 7], w, 4249261313),
            o = g(o, p, q, r, s[c + 8], t, 1770035416),
            r = g(r, o, p, q, s[c + 9], u, 2336552879),
            q = g(q, r, o, p, s[c + 10], v, 4294925233),
            p = g(p, q, r, o, s[c + 11], w, 2304563134),
            o = g(o, p, q, r, s[c + 12], t, 1804603682),
            r = g(r, o, p, q, s[c + 13], u, 4254626195),
            q = g(q, r, o, p, s[c + 14], v, 2792965006),
            p = g(p, q, r, o, s[c + 15], w, 1236535329),
            o = h(o, p, q, r, s[c + 1], x, 4129170786),
            r = h(r, o, p, q, s[c + 6], y, 3225465664),
            q = h(q, r, o, p, s[c + 11], z, 643717713),
            p = h(p, q, r, o, s[c + 0], A, 3921069994),
            o = h(o, p, q, r, s[c + 5], x, 3593408605),
            r = h(r, o, p, q, s[c + 10], y, 38016083),
            q = h(q, r, o, p, s[c + 15], z, 3634488961),
            p = h(p, q, r, o, s[c + 4], A, 3889429448),
            o = h(o, p, q, r, s[c + 9], x, 568446438),
            r = h(r, o, p, q, s[c + 14], y, 3275163606),
            q = h(q, r, o, p, s[c + 3], z, 4107603335),
            p = h(p, q, r, o, s[c + 8], A, 1163531501),
            o = h(o, p, q, r, s[c + 13], x, 2850285829),
            r = h(r, o, p, q, s[c + 2], y, 4243563512),
            q = h(q, r, o, p, s[c + 7], z, 1735328473),
            p = h(p, q, r, o, s[c + 12], A, 2368359562),
            o = i(o, p, q, r, s[c + 5], B, 4294588738),
            r = i(r, o, p, q, s[c + 8], C, 2272392833),
            q = i(q, r, o, p, s[c + 11], D, 1839030562),
            p = i(p, q, r, o, s[c + 14], E, 4259657740),
            o = i(o, p, q, r, s[c + 1], B, 2763975236),
            r = i(r, o, p, q, s[c + 4], C, 1272893353),
            q = i(q, r, o, p, s[c + 7], D, 4139469664),
            p = i(p, q, r, o, s[c + 10], E, 3200236656),
            o = i(o, p, q, r, s[c + 13], B, 681279174),
            r = i(r, o, p, q, s[c + 0], C, 3936430074),
            q = i(q, r, o, p, s[c + 3], D, 3572445317),
            p = i(p, q, r, o, s[c + 6], E, 76029189),
            o = i(o, p, q, r, s[c + 9], B, 3654602809),
            r = i(r, o, p, q, s[c + 12], C, 3873151461),
            q = i(q, r, o, p, s[c + 15], D, 530742520),
            p = i(p, q, r, o, s[c + 2], E, 3299628645),
            o = j(o, p, q, r, s[c + 0], F, 4096336452),
            r = j(r, o, p, q, s[c + 7], G, 1126891415),
            q = j(q, r, o, p, s[c + 14], H, 2878612391),
            p = j(p, q, r, o, s[c + 5], I, 4237533241),
            o = j(o, p, q, r, s[c + 12], F, 1700485571),
            r = j(r, o, p, q, s[c + 3], G, 2399980690),
            q = j(q, r, o, p, s[c + 10], H, 4293915773),
            p = j(p, q, r, o, s[c + 1], I, 2240044497),
            o = j(o, p, q, r, s[c + 8], F, 1873313359),
            r = j(r, o, p, q, s[c + 15], G, 4264355552),
            q = j(q, r, o, p, s[c + 6], H, 2734768916),
            p = j(p, q, r, o, s[c + 13], I, 1309151649),
            o = j(o, p, q, r, s[c + 4], F, 4149444226),
            r = j(r, o, p, q, s[c + 11], G, 3174756917),
            q = j(q, r, o, p, s[c + 2], H, 718787259),
            p = j(p, q, r, o, s[c + 9], I, 3951481745),
            o = b(o, d),
            p = b(p, e),
            q = b(q, f),
            r = b(r, n);
    var J = l(o) + l(p) + l(q) + l(r);
    return J.toLowerCase()
}

console.log(getAnticsrf(authcookie))
