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

var cookie = 'T00404=0ae8a1615e8fd47cd9fd8dd0b8e3ccec; QC005=a3685d72ec3cfee0e5f705d129bc9e93; QC006=foubah4bzxwiae1mp0ekv2v; __uuid=cc8ae52b-be23-5d39-2157-1b4ccc90dafa; QP001=1; QP0017=100; QP0018=100; QC173=0; QP0013=; QC159=%7B%22color%22%3A%22FFFFFF%22%2C%22channelConfig%22%3A1%2C%22hadTip%22%3A1%2C%22isOpen%22%3A0%2C%22speed%22%3A13%2C%22density%22%3A30%2C%22opacity%22%3A86%2C%22isFilterColorFont%22%3A1%2C%22proofShield%22%3A0%2C%22forcedFontSize%22%3A24%2C%22isFilterImage%22%3A1%7D; QC001=1; P00004=.1560332529.89a64e86bc; QC160=%7B%22u%22%3A%2218829040039%22%2C%22lang%22%3A%22%22%2C%22local%22%3A%7B%22name%22%3A%22%E4%B8%AD%E5%9B%BD%E5%A4%A7%E9%99%86%22%2C%22init%22%3A%22Z%22%2C%22rcode%22%3A48%2C%22acode%22%3A%2286%22%7D%2C%22type%22%3A%22p1%22%7D; app_server_fail_num=2; IQIYIH5_WEBP=1; QC176=%7B%22state%22%3A0%2C%22ct%22%3A1560388666296%7D; Hm_lvt_53b7374a63c37483e5dd97d78d9bb36e=1560342079,1560351039,1560353917,1560388667; Hm_lpvt_53b7374a63c37483e5dd97d78d9bb36e=1560388667; QC007=http%253A%252F%252Fwww.so.com%252Flink%253Fm%253Da7qrUu9w4zbwjTqX%25252BasX5Z7vy%25252FxHyVEAlhQdUe9nmiXNZ9KvZC8iPeMmxooWin7pPzIEG3hBHops5br0qbXdAFMbb09t9b111jRLvQzTz2xQ%25253D; QC008=1558660967.1560351039.1560388667.5; nu=0; IMS=IggQABj_5YnoBSokCiBjYjM3MjRkYmRiNDM2YWQzMWY3NGYzOGNmZTI1MDg1ZhAA; QC175=%7B%22upd%22%3Atrue%2C%22ct%22%3A%22%22%7D; QC010=141521651; __dfp=a0d1bdbc96f62749cfa9e4c501412f4d7775a3d9138883090bdc7cf105f7c3dc7c@1561081437511@1559785437511';

var A = {
    initialized: !1,
    md5: 29,
    hmac: function (t) {
        var e = new s("SHA-1", "TEXT");
        return e.setHMACKey("eade56028e252b77f7a0b8792e58b9cc", "TEXT"),
            e.update(t),
            e.getHMAC("HEX")
    },
    init: function () {
        this.nitialized || (this.initialized = !0,
            n())
    },
    getRandom: function (t, e) {
        e || (e = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
            h = (new Date).getTime() + Math.ceil(10 * Math.random() * e.length);
        for (var r = "", n = 0; n < t; n++) {
            var i = o(e.length) - 1;
            r += e[i] || e[0]
        }
        return r
    },
    getMainDomain: function (t) {
        t = t || {
            prefix: "."
        };
        var e, r = t.prefix, n = window.location.hostname, i = /^\w+$/, o = /[\w|-]+\.+[\w|-]+$/,
            s = /^\d{1,3}.\d{1,3}.\d{1,3}.\d{1,3}$/;
        if (i.test(n) || s.test(n))
            e = n;
        else {
            if (!o.test(n))
                return this.error("Error: your page not in a validate host"),
                    "";
            e = r + n.match(o)[0]
        }
        return e
    },
    getDomain: function (t) {
        var e = t || window.location.host
            , r = /:\/\/[a-z|A-Z|0-9|.|:]*[\/|?|&|#]?/
            , n = /[a-zA-Z0-9|.|:]*\//
            , i = /:\/\/|[\/|?|&|#]/g;
        return r.test(e) ? e = e.match(r)[0].replace(i, "") : n.test(e) && (e = e.match(n)[0].replace(i, "")),
            e
    },
    guid: function () {
        function t() {
            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
        }

        return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
    },
    getStringByIndex: function (t) {
        for (var e = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789._-:/".split(""), r = "", n = t.length, i = 0; i < n; i++) {
            var o = t[i];
            r += e[o]
        }
        return r
    },
    getCNStringByIndex: function (t) {
        for (var e = "最爱湖东行不足绿杨阴里白沙堤水光潋滟晴方好山色空蒙雨亦奇方知此艺不可有人间万事凭双手隐隐飞桥隔野烟石矶西畔问渔船大弦嘈嘈如急雨小弦切切如私语溟濛便恨豪家惜浓暖深为政笔驱策勋十二转赏赐百千强".split(""), r = "", n = t.length, i = 0; i < n; i++) {
            var o = t[i];
            r += e[o]
        }
        return r
    },
    setCookie: function (t, e, r, n) {
        var i = new Date;
        i.setTime(i.getTime() + 24 * r * 60 * 60 * 1e3);
        var o = "expires=" + i.toGMTString();
        cookie = t + "=" + e + "; " + o + (n ? "; domain=" + n : "")
    },
    getCookie: function (t) {
        for (var e = t + "=", r = cookie.split(";"), n = 0; n < r.length; n++) {
            for (var i = r[n]; " " == i.charAt(0);)
                i = i.substring(1);
            if (0 == i.indexOf(e))
                return i.substring(e.length, i.length)
        }
        return ""
    }
}

// console.log(A.getCookie())

function n(t) {
    var e, r, n, i, o, s;
    for (n = t.length,
             r = 0,
             e = ""; r < n;) {
        if (i = 255 & t.charCodeAt(r++),
        r == n) {
            e += a.charAt(i >> 2),
                e += a.charAt((3 & i) << 4),
                e += "==";
            break
        }
        if (o = t.charCodeAt(r++),
        r == n) {
            e += a.charAt(i >> 2),
                e += a.charAt((3 & i) << 4 | (240 & o) >> 4),
                e += a.charAt((15 & o) << 2),
                e += "=";
            break
        }
        s = t.charCodeAt(r++),
            e += a.charAt(i >> 2),
            e += a.charAt((3 & i) << 4 | (240 & o) >> 4),
            e += a.charAt((15 & o) << 2 | (192 & s) >> 6),
            e += a.charAt(63 & s)
    }
    return e
}
function i(t) {
    var e, r, n, i, o, s, a;
    for (s = t.length,
             o = 0,
             a = ""; o < s;) {
        do
            e = h[255 & t.charCodeAt(o++)];
        while (o < s && e == -1);
        if (e == -1)
            break;
        do
            r = h[255 & t.charCodeAt(o++)];
        while (o < s && r == -1);
        if (r == -1)
            break;
        a += String.fromCharCode(e << 2 | (48 & r) >> 4);
        do {
            if (n = 255 & t.charCodeAt(o++),
            61 == n)
                return a;
            n = h[n]
        } while (o < s && n == -1);
        if (n == -1)
            break;
        a += String.fromCharCode((15 & r) << 4 | (60 & n) >> 2);
        do {
            if (i = 255 & t.charCodeAt(o++),
            61 == i)
                return a;
            i = h[i]
        } while (o < s && i == -1);
        if (i == -1)
            break;
        a += String.fromCharCode((3 & n) << 6 | i)
    }
    return a
}
function o(t) {
    var e, r, n, i;
    for (e = "",
             n = t.length,
             r = 0; r < n; r++)
        i = t.charCodeAt(r),
            i >= 1 && i <= 127 ? e += t.charAt(r) : i > 2047 ? (e += String.fromCharCode(224 | i >> 12 & 15),
                e += String.fromCharCode(128 | i >> 6 & 63),
                e += String.fromCharCode(128 | i >> 0 & 63)) : (e += String.fromCharCode(192 | i >> 6 & 31),
                e += String.fromCharCode(128 | i >> 0 & 63));
    return e
}
function s(t) {
    var e, r, n, i, o, s;
    for (e = "",
             n = t.length,
             r = 0; r < n;)
        switch (i = t.charCodeAt(r++),
        i >> 4) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
                e += t.charAt(r - 1);
                break;
            case 12:
            case 13:
                o = t.charCodeAt(r++),
                    e += String.fromCharCode((31 & i) << 6 | 63 & o);
                break;
            case 14:
                o = t.charCodeAt(r++),
                    s = t.charCodeAt(r++),
                    e += String.fromCharCode((15 & i) << 12 | (63 & o) << 6 | (63 & s) << 0)
        }
    return e
}
var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
, h = new Array((-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),62,(-1),(-1),(-1),63,52,53,54,55,56,57,58,59,60,61,(-1),(-1),(-1),(-1),(-1),(-1),(-1),0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,(-1),(-1),(-1),(-1),(-1),(-1),26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,(-1),(-1),(-1),(-1),(-1))
, u = {
    encode: function (t) {
        return n(o(t))
    },
    decode: function (t) {
        return s(i(t))
    }
}

function stringify(t, e, r) {
    var n;
    if (gap = "",
        indent = "",
    "number" == typeof r)
        for (n = 0; n < r; n += 1)
            indent += " ";
    else
        "string" == typeof r && (indent = r);
    if (rep = e,
    e && "function" != typeof e && ("object" != typeof e || "number" != typeof e.length))
        throw new Error("JSON.stringify");
    return str("", {
        "": t
    })
}

function l(t) {
    return null ? (t && t(null),
        null) : void (new w).get(function (e, r) {
        r.push({
            key: "au",
            value: 'true'
        });
        var n = A.setCookie(M);
        n || (n = A.guid(),
            A.setCookie(M, n, 3650)),
            r.push({
                key: "mi",
                value: n
            }),
            r.push({
                key: "cl",
                value: k
            }),
            r.push({
                key: "sv",
                value: P
            });
        var i = A.getCookie("QC005");
        i && r.push({
            key: "jg",
            value: i
        });
        var o = A.getCookie("QC006");
        o && r.push({
            key: "fh",
            value: o
        });
        for (var s = {}, a = 0; a < r.length; a++)
            "wr" === r[a].key || "wg" === r[a].key ? s[r[a].key] = A.md5(r[a].value) : s[r[a].key] = r[a].value;
        var h = _.detectIframeInfo();
        if (s.ifm = h && [h.isInIframe, h.iframeWidth, h.iframeHeight, h.referrer],
            s.ex = _.detectExecEnv(),
            U) {
            var u = A.getCNStringByIndex([1, 27, 31, 42, 68, 81, 84])
                ,
                c = A.getStringByIndex([7, 19, 19, 15, 65, 66, 66, 22, 22, 22, 62, 8, 16, 8, 24, 8, 62, 2, 14, 12, 66, 2, 14, 12, 12, 14, 13, 66, 18, 4, 2, 17, 4, 19, 62, 7, 19, 12, 11])
                , f = u + ": " + c;
            s.dv = _.detectDevMode({
                logInfo: f
            })
        }
        _.detectPrivacyMode(function (e) {
            s.pv = e,
                F = u.encode(stringify(s)),
            t && t(F)
        }, {
            excPri: j
        })
    })
}

console.log(l({}))

function arguments(e) {
    t({
        code: "E00001"
    }),
        r.warn("调用dfp.getEnvAndDfp" + e)
}

var t = [].slice.call(arguments);

function y(t) {
    var e, r, n;
    switch (t = "[object Array]" === Object.prototype.toString.call(t) ? t : [],
        t.length) {
        case 0:
            break;
        case 1:
            "string" == typeof t[0] ? e = t[0] : "function" == typeof t[0] && (r = t[0]);
            break;
        case 2:
            "string" == typeof t[0] ? (e = t[0],
            "function" == typeof t[1] && (r = t[1])) : "function" == typeof t[0] && (r = t[0],
            "function" == typeof t[1] && (n = t[1]));
            break;
        default:
            "string" == typeof t[0] ? (e = t[0],
            "function" == typeof t[1] && (r = t[1],
            "function" == typeof t[2] && (n = t[2]))) : "function" == typeof t[0] && (r = t[0],
            "function" == typeof t[1] && (n = t[1]))
    }
    return {
        host: e,
        successHandler: r,
        failHandler: n
    }
}

function getEnv() {
    return y(t)
}

console.log(getEnv())

function getEncryptPostData(x) {
    return {
        cryptSrcData: e(x),
        cryptVersion: u[_0x551f("0x1b48")](),
        platform: c[_0x551f("0xaa7")]()
    }
}

!function(x, f) {
    !function(f) {
        for (; --f; )
            x.push(x.shift())
    }(++f)
}(_0x5ec0, 368);

var _0x551f = function(x, f) {
    x -= 0;
    var n = _0x5ec0[x];
    _0x551f.SRdOns === undefined && (!function() {
        var x = function() {
            var x;
            try {
                x = Function('return (function() {}.constructor("return this")( ));')()
            } catch (f) {
                x = window
            }
            return x
        }();
        x.atob || (x.atob = function(x) {
            for (var f, n, t = String(x).replace(/=+$/, ""), e = 0, _ = 0, c = ""; n = t.charAt(_++); ~n && (f = e % 4 ? 64 * f + n : n,
            e++ % 4) ? c += String.fromCharCode(255 & f >> (-2 * e & 6)) : 0)
                n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(n);
            return c
        }
        )
    }(),
    _0x551f.qqFMQe = function(x) {
        for (var f = atob(x), n = [], t = 0, e = f.length; t < e; t++)
            n += "%" + ("00" + f.charCodeAt(t).toString(16)).slice(-2);
        return decodeURIComponent(n)
    }
    ,
    _0x551f.wZLYgf = {},
    _0x551f.SRdOns = !![]);
    var t = _0x551f.wZLYgf[x];
    return t === undefined ? (n = _0x551f.qqFMQe(n),
    _0x551f.wZLYgf[x] = n) : n = t,
    n
}

function getToken() {
    return this[_0x551f("0x69d")][_0x551f("0xaa1")]
}

//console.log(getToken())

_ = {
    getSecure: e[_0x551f("0x16b7")],
    init: e[_0x551f("0x3a9")],
    encrypt: e[_0x551f("0x12ff")],
    decrypt: e[_0x551f("0x12d5")],
    getVersion: e[_0x551f("0x16b8")],
    aesEnc: e[_0x551f("0x16b9")],
    aesDec: e.aesDec
}

var x = {
    'clientVersion': '1',
    'dfp': "a0d1bdbc96f62749cfa9e4c501412f4d7775a3d9138883090bdc7cf105f7c3dc7c",
    'platform': "web",
    'riskData': '{"click_times":1,"arrive_time":1560519545646,"click_frequency":0.6377551020408163,"spend_time":1568,"speed_and_aspeed":[{"x":116,"y":284,"date":1560519544289,"v":0.8333333333333333,"aspeed":-0.005208333333333329},{"x":132,"y":284,"date":1560519544304,"v":1.3958333333333335,"aspeed":0.0023384353741496672},{"x":149,"y":286,"date":1560519544319,"v":1.0714285714285714,"aspeed":0.014668367346938771},{"x":162,"y":288,"date":1560519544333,"v":0.8660714285714286,"aspeed":-0.0005952380952380931},{"x":177,"y":289,"date":1560519544349,"v":0.8636363636363636,"aspeed":-0.02900717703349283},{"x":194,"y":289,"date":1560519544364,"v":1.7916666666666665,"aspeed":0.043308080808080816},{"x":209,"y":291,"date":1560519544379,"v":0.6746031746031746,"aspeed":0.016865079365079368},{"x":219,"y":291,"date":1560519544392,"v":0.7857142857142857,"aspeed":0.016483516483516484},{"x":227,"y":291,"date":1560519544406,"v":0.5357142857142857,"aspeed":-0.007142857142857147},{"x":237,"y":293,"date":1560519544421,"v":0.7785714285714285,"aspeed":-0.010084033613445375},{"x":248,"y":295,"date":1560519544435,"v":0.75,"aspeed":0.03214285714285714},{"x":255,"y":296,"date":1560519544450,"v":0.3392857142857143,"aspeed":0.008333333333333333},{"x":260,"y":296,"date":1560519544465,"v":0.2857142857142857,"aspeed":0.015164399092970524},{"x":262,"y":297,"date":1560519544481,"v":0.2222222222222222,"aspeed":-0.007407407407407407},{"x":266,"y":297,"date":1560519544501,"v":0.13392857142857142,"aspeed":0.00798160173160173},{"x":267,"y":298,"date":1560519544516,"v":0.14285714285714285,"aspeed":-0.008290816326530611},{"x":270,"y":298,"date":1560519544537,"v":0.08571428571428572,"aspeed":0.0011904761904761886},{"x":272,"y":298,"date":1560519544552,"v":0.1625,"aspeed":0.003983516483516485},{"x":274,"y":298,"date":1560519544574,"v":0.06904761904761905,"aspeed":0.0022372742200328405},{"x":275,"y":299,"date":1560519544670,"v":0,"aspeed":0.00016920473773265651}]}',
    'staticVerifyValue': '160',
    't': 1560519545647,
    'token': "f88c6733f8d04266bbb18dbf3d53a7bf"
}

function runInContext(x, f) {
    function n(x) {
        if (c[_0x551f("0x8fc")](n[x], V))
            return n[x];
        var t;
        if (c[_0x551f("0x8fd")](x, c[_0x551f("0x8fe")]))
            t = "a" != "a"[0];
        else if (c[_0x551f("0x8ff")](x, c.bQlkL))
            t = c[_0x551f("0x900")](n, c[_0x551f("0x901")]) && c[_0x551f("0x902")](n, c[_0x551f("0x903")]);
        else {
            var e, _ = c[_0x551f("0x904")];
            if (c[_0x551f("0x905")](x, "json-stringify")) {
                var r = f[_0x551f("0x8f2")]
                    , u = c.TBtuz(typeof r, _0x551f("0x1")) && g;
                if (u) {
                    (e = function () {
                            return 1
                        }
                    )[_0x551f("0x597")] = e;
                    try {
                        u = c[_0x551f("0x906")](c.uIzdb(r, 0), "0") && "0" === r(new i) && '""' == r(new a) && c[_0x551f("0x907")](r, v) === V && r(V) === V && c.ETSMh(r(), V) && "1" === c.nDIWx(r, e) && "[1]" == r([e]) && r([V]) == c[_0x551f("0x908")] && c.bEGGs(r, null) == c[_0x551f("0x909")] && c.TBtuz(r([V, v, null]), _0x551f("0x90a")) && c[_0x551f("0x905")](r({
                            a: [e, !![], ![], null, c[_0x551f("0x90b")]]
                        }), _) && "1" === c[_0x551f("0x90c")](r, null, e) && c[_0x551f("0x90d")](r([1, 2], null, 1), _0x551f("0x90e")) && c[_0x551f("0x90f")](r, new s(-864e13)) == c[_0x551f("0x910")] && c[_0x551f("0x90d")](r(new s(864e13)), _0x551f("0x911")) && r(new s(-621987552e5)) == c[_0x551f("0x912")] && r(new s(-1)) == _0x551f("0x913")
                    } catch (d) {
                        u = ![]
                    }
                }
                t = u
            }
            if (x == c[_0x551f("0x903")]) {
                var o = f[_0x551f("0x7bf")];
                if (typeof o == c[_0x551f("0x914")])
                    try {
                        if (c[_0x551f("0x906")](o("0"), 0) && !c[_0x551f("0x90f")](o, ![])) {
                            e = c[_0x551f("0x915")](o, _);
                            var b = 5 == e.a[_0x551f("0x22f")] && c[_0x551f("0x916")](e.a[0], 1);
                            if (b) {
                                try {
                                    b = !o(c[_0x551f("0x917")])
                                } catch (l) {
                                }
                                if (b)
                                    try {
                                        b = 1 !== c[_0x551f("0x915")](o, "01")
                                    } catch (h) {
                                    }
                                if (b)
                                    try {
                                        b = 1 !== c[_0x551f("0x918")](o, "1.")
                                    } catch (p) {
                                    }
                            }
                        }
                    } catch (m) {
                        b = ![]
                    }
                t = b
            }
        }
        return n[x] = !!t
    }
}

var a_ = function () {
    this.parse = JSON.parse();
    this.runInContext = runInContext();
    this.stringify = JSON.stringify()
}

function encryptSrcData(x) {
    //return _[_0x551f("0x12ff")](JSON.stringify(x))[_0x551f("0x279")]
    return _[_0x551f("0x12ff")](a_[_0x551f("0x8f2")](x))[_0x551f("0x279")]
}

console.log(encryptSrcData(x))