// 异步函数 S，用于处理 HTTP 请求
async function S(context, options) {
    // 初始化变量
    var result;

    // 等待初始化操作完成
    await x();

    // 复制选项对象，避免直接修改传入的参数
    const requestOptions = { ...options };

    // 提取并删除 URL、isAPI 和 ignoreErrCode 属性
    let { url, isAPI, ignoreErrCode } = requestOptions;
    delete requestOptions.url;
    delete requestOptions.isAPI;
    delete requestOptions.ignoreErrCode;

    // 处理 URL，确保它是完整的
    if (url.indexOf("//") < 0) {
        url = url.startsWith("/") 
            ? `${y.a.apiDomain}${url}` 
            : `${y.a.apiDomain}/${url}`;
    }

    // 处理请求体数据
    let data = requestOptions.data;
    if (typeof data !== 'string') {
        data = JSON.stringify(data);
    }
    data = encodeURIComponent(data);

    // 获取 Content-Type 头
    const contentType = requestOptions.headers ? requestOptions.headers['Content-Type'] : null;

    // 处理 Content-Type 为 application/x-www-form-urlencoded 的情况
    if (contentType === 'application/x-www-form-urlencoded' || contentType === null) {
        let query = '';

        // 加密响应标志
        data.e_r = !!y.a.encryptResponse; //true

        // 处理 API 请求
        if (M(url) || isAPI) {
            let path = url.substring(y.a.apiDomain.length);
            const queryStringIndex = path.indexOf('?'); // -1
            const queryParams = queryStringIndex >= 0 
                ? JSON.parse(decodeURIComponent(path.substring(queryStringIndex + 1))) 
                : {};
            if (queryStringIndex >= 0) {
                path = path.substring(0, queryStringIndex);
            }
            data = { ...queryParams, ...data };

            // 检查路径是否需要 token 验证
            const pathCheckResult = checkPath(path);
            if (pathCheckResult) {
                const token = await getToken(pathCheckResult);
                data.checkToken = token;
                requestOptions.checkedToken = true;
                requestOptions.headers = {
                    ...requestOptions.headers,
                    'X-antiCheatToken': token
                };
            }

            // 处理 Nginx 缓存
            if (options.checkToken || requestOptions.checkToken) {
                window.WM; // 假设 WM 是一个全局对象，用于某些操作
            }
            if (requestOptions.nginxCache) {
                data.e_r = data.e_r || false;
                data.cache_key = await generateCacheKey(data);
                query = `?cache_key=${encodeURIComponent(data.cache_key)}`;
                requestOptions.method = 'POST';
                url = path.startsWith('/api/batch/') || path.startsWith('/batch/')
                    ? `${y.a.apiDomain}/api/batch`
                    : `${y.a.apiDomain}/api/${path.substring(5)}`;
            }

            // 处理设备信息和客户端签名
            if (y.a.encrypt && y.a.deviceId && (y.a.os === 'osx' || y.a.clientSign) && y.a.appver) {
                const deviceInfo = {
                    ...(y.a.clientSign ? { clientSign: y.a.clientSign } : {}),
                    os: y.a.os,
                    appver: y.a.appver,
                    deviceId: y.a.deviceId,
                    requestId: 0,
                    osver: y.a.osver
                };
                requestOptions.method = 'POST';
                requestOptions.e_r = data.e_r;
                if (data.e_r) {
                    delete data.e_r;
                }
                if (path.startsWith('/api/batch/') || path.startsWith('/batch/')) {
                    const keys = Object.keys(data);
                    data = { params: await encryptParams(path, data, deviceInfo, keys) };
                    url = `${y.a.apiDomain}/eapi/batch`;
                } else {
                    data = { params: await encryptParams(path, data, deviceInfo) }; //window.channel.serialData
                    url = `${y.a.apiDomain}/eapi/${path.substring(5)}`;
                }
            }

            // 强制使用 HTTPS
            if (requestOptions.forceHttps || isHttpUrl(url)) {
                url = ensureHttps(url);
            }
        }

        // 处理 Nginx 缓存
        if (requestOptions.nginxCache) {
            url += query;
        }
    }

    // 处理请求方法
    if (requestOptions.method && requestOptions.method !== 'GET') {
        if (requestOptions.method === 'POST') {
            requestOptions.headers = requestOptions.headers || {};
            requestOptions.headers['Content-Type'] = 'application/x-www-form-urlencoded';
            requestOptions.body = data;
            delete requestOptions.data;
        }
    } else {
        url += `?${data}`;
    }

    // 设置凭证
    requestOptions.credentials = 'include';

    // 检查本地缓存
    const { isHit, cacheData } = await checkLocalCache(url, requestOptions.body, requestOptions.skipLocalRpcCache);
    delete requestOptions.skipLocalRpcCache;

    // 发送请求
    try {
        result = isHit ? cacheData : await context.fetch(url, requestOptions);
    } catch (error) {
        handleFetchError(error, options);
    }

    // 处理响应
    const { body } = result;
    if (!result.ok) {
        throw new Error({ name: 'fetchStatusError', ...result });
    }

    const { code } = body;
    let parsedCode = code;
    if (typeof code === 'string' && code) {
        parsedCode = parseInt(code, 10);
        body.code = parsedCode;
    }

    // 检查响应状态码
    if (parsedCode === 200 || ignoreErrCode) {
        return body;
    }

    // 记录错误
    logRequestError(url, body);
    throw new Error({
        name: 'responseError',
        msg: body.msg || body.message || '',
        code: body.code,
        ...result,
        option: options
    });
}

// 辅助函数：检查路径是否需要 token 验证
function checkPath(path) {
    // 实现路径检查逻辑
    // 返回 businessId 或 false
}

// 辅助函数：获取 token
async function getToken(businessId) {
    // 实现获取 token 的逻辑
    // 返回 token
}

// 辅助函数：生成缓存键
async function generateCacheKey(data) {
    // 删除 checktoken 字段
    if (data.checktoken) {
        delete data.checktoken;
    }
    const sortedKeys = Object.keys(data).sort();
    const sortedQuery = sortedKeys.map(key => `${key}=${encodeURIComponent(data[key])}`).join('&');
    return await a.EncryptData.serialKey(sortedQuery);
}

// 辅助函数：加密参数
async function encryptParams(path, data, deviceInfo, keys = []) {
    // 实现参数加密逻辑
    // 返回加密后的参数
}

// 辅助函数：检查 URL 是否为 HTTP
function isHttpUrl(url) {
    return url.startsWith('http://');
}

// 辅助函数：确保 URL 使用 HTTPS
function ensureHttps(url) {
    return url.replace('http://', 'https://');
}

// 辅助函数：检查本地缓存
async function checkLocalCache(url, body, skipLocalRpcCache) {
    // 实现本地缓存检查逻辑
    // 返回 { isHit: boolean, cacheData: any }
}

// 辅助函数：处理 fetch 错误
function handleFetchError(error, options) {
    if (w.has(error?.message)) {
        throw new Error({
            name: 'fetchNetworkError',
            errMsg: error.message,
            errStack: error.stack,
            option: options
        });
    }
    if (error?.message?.includes('frontEndEncrypt verification failed')) {
        throw new Error({
            name: 'fetchFrontEndEncryptError',
            errMsg: error.message,
            errStack: error.stack,
            option: options
        });
    }
    throw new Error({
        name: 'fetchError',
        errMsg: error.message,
        errStack: error.stack,
        option: options
    });
}

// 辅助函数：记录请求错误
function logRequestError(url, body) {
    g.a.warn('request response error', { url, body });
    if (window.corona) {
        window.corona.warn('request response error', { url, body });
    }
}