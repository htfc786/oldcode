function yo(e, t) {
    var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(e.charAt(t));
    if (-1 === n)
        throw "Cannot decode base64";
    return n
}

var mo = function(e) {
    var t, n, r = [0, e.length, []], i = r[0], o = r[1], a = r[2];

    if (e = String(e), 0 === o)
        return e;  // 如果字符串长度为0，直接返回原字符串

    if (o % 4 != 0)
        throw "Cannot decode base64";  // 如果字符串长度不是4的倍数，抛出异常

    // 处理字符串末尾的填充字符 '='
    for ("=" === e.charAt(o - 1) && (i = 1,
        "=" === e.charAt(o - 2) && (i = 2),
        o -= 4),
        t = 0; t < o; t += 4)
        n = yo(e, t) << 18 | yo(e, t + 1) << 12 | yo(e, t + 2) << 6 | yo(e, t + 3),
        a.push(String.fromCharCode(n >> 16, n >> 8 & 255, 255 & n));

    switch (i) {
    case 1:
        n = yo(e, t) << 18 | yo(e, t + 1) << 12 | yo(e, t + 2) << 6,
        a.push(String.fromCharCode(n >> 16, n >> 8 & 255));
        break;
    case 2:
        n = yo(e, t) << 18 | yo(e, t + 1) << 12,
        a.push(String.fromCharCode(n >> 16))
    }

    return a.join("");  // 将解码后的字符数组组合成字符串并返回
};

const decodeUrl = function(e) {
    if (!e) 
        return "";  // 如果输入字符串为空或未定义，返回空字符串

    var t = "bjcloudvod://";  // 定义协议前缀

    if (0 !== e.indexOf(t)) 
        return e;  // 如果输入字符串不以 "bjcloudvod://" 开头，直接返回原字符串

    var n = (e = e.slice(t.length, e.length).replace(/-/g, "+").replace(/_/g, "/")).length % 4;
    // 去除前缀并替换特殊字符（- 替换为 +，_ 替换为 /）
    // 计算去除前缀后的字符串长度对 4 取模的结果

    // 补齐Base64字符串
    if (2 === n) e += "==";
    else if (3 === n) e += "=";

    var r = (e = mo(e)).charCodeAt(0) % 8;
    // 使用 mo 函数处理字符串，并取处理后字符串第一个字符的 Unicode 码值对 8 取模

    e = e.slice(1, e.length);  // 去掉处理后的字符串的第一个字符

    // 解码过程
    for (var i = [], o = 0, a; a = e[o]; o++) {
        var s = o % 4 * r + o % 3 + 1;  // 计算偏移量
        i.push(String.fromCharCode(a.charCodeAt(0) - s));  // 对每个字符的 Unicode 码值减去偏移量
    }

    return i.join("");  // 将解码后的字符数组组合成字符串并返回
};

console.log(decodeUrl("bjcloudvod://RGl6f311QTg9Z3x9PHdvb3JxNYBzcX9reHtudG9xNWx9cDRrRjk8PHI6O0E-PDU-QGVnQW5nOjlCaTxDQTdqcUQ0aThEOWk8dTU2OzwyNzaGMHp6e3Bnbzx4cG1zcjQ8PzI8PEE5O0JtZT5AdDJrPkM7aEBAZGtucmY4QUQ2a21BNTtDQzg7QUVhXVp0S1yBh3U0eH02"))