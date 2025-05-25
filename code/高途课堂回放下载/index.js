function decodeUrl(encodedUrl) {
    // 输入检查
    if (!encodedUrl) {
        return ''; 
    }
    // 协议前缀检查
    const protocol_prefix = "bjcloudvod://";
    if (!encodedUrl.startsWith(protocol_prefix)) {
        return encodedUrl;  // 如果输入字符串不以 "bjcloudvod://" 开头，直接返回原字符串
    }
    // 去除前缀并替换特殊字符
    let base64Str = encodedUrl.slice(protocol_prefix.length).replace(/-/g, '+').replace(/_/g, '/');
    // 补齐Base64字符串
    const modLength = base64Str.length % 4;
    if (modLength === 2) {
        base64Str += "==";
    } else if (modLength === 3) {
        base64Str += "=";
    }
    // 使用 atob 函数解码 Base64 字符串
    const decodedStr = atob(base64Str);
    // 计算偏移量并解码内容
    const offset = decodedStr.charCodeAt(0) % 8; // 计算偏移量
    const decodedContent = decodedStr.slice(1); // 去除第一个字符
    // 解码内容
    const result = [];
    for (let i = 0; i < decodedContent.length; i++) { // 遍历解码后的内容
        // 计算每个字符的偏移量 shift。
        //     i % 4 当前字符在解码字符串中的位置对 4 取模，得到一个介于 0 到 3 之间的值。
        //     i % 3 当前字符在解码字符串中的位置对 3 取模，得到一个介于 0 到 2 之间的值。
        //     offset 上一步计算得到的偏移量。
        //     + 1 最终加上 1，以确保 shift 不为零。
        // 具体我也不明白，源代码里就是这么写的
        const shift = (i % 4 * offset + i % 3 + 1);
        // 对当前字符的 Unicode 码值减去 shift，然后转换为字符。
        result.push(String.fromCharCode(decodedContent.charCodeAt(i) - shift));
    }

    return result.join('');
}

// console.log(decodeUrl(""))
// console.log(decodeUrl("bjcloudvod://RGl6f311QTg9Z3x9PHdvb3JxNYBzcX9reHtudG9xNWx9cDRrRjk8PHI6O0E-PDU-QGVnQW5nOjlCaTxDQTdqcUQ0aThEOWk8dTU2OzwyNzaGMHp6e3Bnbzx4cG1zcjQ8PzI8PEE5O0JtZT5AdDJrPkM7aEBAZGtucmY4QUQ2a21BNTtDQzg7QUVhXVp0S1yBh3U0eH02"))

const fs = require('fs');
const PATH = require('path');

const Cookie = '_gaotu_track_id_=d438055f-e4ed-5262-2efd-eb1084a57f8e; __track_id__=d438055f-e4ed-5262-2efd-eb1084a57f8e; GID=10ec27a8a45d2151f802e39818e358f6; gr_user_id=d437dd1a-c0d0-401a-acee-604dcd3fe8b0; _gaotu_track_id_=2bf5baf4-9a8f-58fe-395a-4010455451fa; be26a9c1d6166354_gr_last_sent_cs1=20005829993110; be26a9c1d6166354_gr_cs1=20005829993110; acw_tc=0bdd34ce17282298083918798e291188785e7ddff8ad5c97968c113d7ecd1c; sid=a7766cc6600cc77de64472e84c4a818c1c42c697f50086c0; userId=20005829993110; isSkipLogin=true; uid=20005829993110; _user_words_=%252F%252Fi.gsxcdn.com%252F1247705100_jz6eiz18.png%252Chtfc786%252C0; tfstk=gQBjmrOQuq0js3hV9REyO5jBbK91GNwUBctOxGHqXKpYC1shRhr0oFys6w8Puov27ApJjhdO3KSVPF_RAhk4mKe11wbI7CBw7OZ6WUX2unRwWA6hRArcgNocZwSK3tPDQA9DIdUU8JyemivMBDvUdIYc2gxT8cHmMXsDIdUrkmKycibpQ2n4fdEWeh-xkddxHuTJbUHvXxKtyutMydKv6hLJyHt6WmpOWgEWjULtMpMWqYYPcu4wQjtgUESvPAHOeRAXRihZBABWcI6ODUsP4TtXGedrqOvAHaSO3tAuGjpG46_16NVEZKsOMKKFm-MWpiCPC3WabfTvCEApApiTHg9XlBBXwDHdJgsOTQ6zvJvXHECwnGoQug6fuiX5bchJhK5WOt9LKqLNaM66fO4gFwshEatRJRaA48keRJE-10OnC3TUVuGis_Q_9qDv7DnyM3xy8uZSToOvq3TUVuGisIKkq0r7VXrf.'
//const Cookie = ''
const UserAgent = 'Mozilla / 5.0 (Windows NT 10.0.0; x86_64) AppleWebKit / 537.36 (KHTML, like Gecko) Chrome / 98.0.4758.102 Safari / 537.36 (WenZaiZhiBoClient-Windows7-tutuketang-10.0.12.5)';
const headers = { 
    'Connection': 'keep-alive', 
    'sec-ch-ua': '"Chromium";v="98"', 
    'Accept': 'application/json, text/plain, */*', 
    'sid': 'a7766cc6600cc77de64472e84c4a818c1c42c697f50086c0', // sid
    'sec-ch-ua-mobile': '?0', 
    'User-Agent': UserAgent, 
    'sec-ch-ua-platform': '"Windows"', 
    Cookie, 
    'Origin': 'https://interactive.gaotu100.com', 
    'Sec-Fetch-Site': 'same-origin', 
    'Sec-Fetch-Mode': 'cors', 
    'Sec-Fetch-Dest': 'empty', 
    'Referer': 'https://interactive.gaotu100.com/course/index.html', 
    'Accept-Language': 'zh-CN,zh;q=0.9' 
}
// 封装请求函数

// 解析url地址参数
function parseUrlParams(url) {
    const params = {};
    const queryString = url.split('?')[1];
    if (queryString) {
        const pairs = queryString.split('&');
        for (let i = 0; i < pairs.length; i++) {
            const pair = pairs[i].split('=');
            params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
        }
    }
    return params;
}

async function getVideoData(pcUrl) {
    const params = parseUrlParams(pcUrl);
    // 构建查询字符串
    const queryParams = new URLSearchParams({
        room_id: params.room_id, //'61050604420167781',
        partner_id: params.partner_id, //'49752473',
        user_number: params.user_number, //'20005829993110',
        expires_in: params.expires_in, //'12600',
        user_role: params.user_role, //'0',
        timestamp: params.timestamp, //'1725075539',
        is_encrypted: params.is_encrypted, //'1',
        session_id: params.session_id, //'0',
        sign: params.sign, //'76495ba8f0ffa64349cfd3e40779fd94',
        use_https: '1', // 恒
        end_type: '0', // 恒
        ev: '0', // 恒
        check: '' // 恒
    });

    const url = "https://api.wenzaizhibo.com/web/playback/getPlaybackInfoV3";
    const response = await fetch(url+'?'+queryParams.toString(), { method: 'GET' });
    const data = await response.json();
    return data;
}

async function getPcUrl(liveId) {
    const url = 'https://interactive.gaotu100.com/live/api/live/zplan/playbackWeb';
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded', ...headers },
        body: new URLSearchParams({
            sessionId: 0,
            liveId, //6919137642878926,
            roleType: 0
        }).toString()
    };
    const response = await fetch(url, options);
    const data = await response.json();
    return data.data.signinLivePlayback.pcUrl;
}

async function getLiveList(clazzNumber) {
    const url = 'https://interactive.gaotu100.com/live/api/studyCenter/v1/user/pc/clazz/detail?os=h5-pc&p_client=2';
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...headers },
        body: JSON.stringify({ clazzNumber /*: '6919137642878912'*/, platformType: 3 })
    };
    const response = await fetch(url, options);
    const data = await response.json();
    
    var result = [];
    let zi = 1; // 正课index
    let fi = 1; // 非正课index
	if (!data?.data?.lessonCardList) {
		console.log(data)
		return;
	}
    const lessonCardList = data.data.lessonCardList;
    for (let i = 0; i < lessonCardList.length; i++) {
        const lessonCard = lessonCardList[i];

        const CardType = lessonCard?.lessonCardType || 2
        const liveId =  lessonCard?.userClazzLessonBaseVO?.livingId || ''
        const liveNameO = lessonCard?.userClazzLessonBaseVO?.clazzLessonName || ''
        const liveHoursDesc = lessonCard?.userClazzLessonBaseVO?.clazzLessonHoursDesc || ''

        // 去除非法字符串
        // \n / \ : , * ? " < > |
        const liveName = liveNameO.replace(/\\/g, ' ').replace(/\//g, ' ').replace(/:/g, ' ').replace(/,/g, ' ').replace(/\*/g, ' ').replace(/\?/g, ' ').replace(/\"/g, ' ').replace(/</g, ' ').replace(/>/g, ' ').replace(/\|/g, ' ');
        // const liveName = liveNameO;

        const name = `${CardType==2?'非正课：':''}${CardType==2 ? fi++ : zi++ }.${liveName}`
        
        result.push({liveId,name})
        // if(CardType==1)break;
    }
    return result;
}

// 解码数据
function decodeData(name, data) {
    console.log(name)
    const result = [];
    // console.log(data)
    // console.log(data.in_class[0].play_info['720p'].cdn_list)
    // 课前回放 pre_class  直播核心课 in_class  课后回放 post_class
    const KEYLIST = {
        'pre_class': '课前回放',
        'in_class': '直播核心课',
        'post_class': '课后回放'
    }
    const keys = Object.keys(data);
    for (let i = 0; i < keys.length; i++) {
        key = keys[i];
        if (data[key]===null){
            continue
        }
        let info = data[key];
        if (Array.isArray(info)) {
            info = info[0];
        }
		if(!info) {
			continue;
		}
        const play_info = info.play_info;
        // 找到清晰度最大的 (size最大)
        const super_cdn_list = Object.keys(play_info)
            .map(key => play_info[key])
            .sort((a, b) => b.size - a.size)[0].cdn_list;
        const enc_url = super_cdn_list[0].enc_url;
        const url = decodeUrl(enc_url);
        
        const filename = `${name} - ${KEYLIST[key]}.${url.split('.').pop()}`;

        // 新建文件夹
        const path = `.\\download\\${name}\\`;
        if (!fs.existsSync('.\\download')) {
            fs.mkdirSync('.\\download');
        }
        if (!fs.existsSync(path)) {
            fs.mkdirSync(path, { recursive: true });
        }

        result.push({
            path: `\\${name}\\${filename}`,
            url
        })
    }
    return result;
}

function downloadFile(url, filePath) {
    return new Promise((resolve, reject) => {
        const https = require('https');
        const http = require('http');
        const fs = require('fs');
        const p = url.startsWith('https') ? https : http;
        const writeStream = fs.createWriteStream(filePath);
        p.get(url, (res) => {
          res.pipe(writeStream);
          writeStream.on('finish', function() {
            writeStream.close();
            resolve();
          });
        }).on('error', (err) => {
          fs.unlink(filePath, () => {
            reject(err);
            console.error(`Error downloading ${url} `, err);
          })
        });
    })
}

function limitDownloads(downloadList, maxNum) {
    return new Promise((resolve, reject) => {
        if (downloadList.length === 0){
            resolve([]);
        }
        let index = 0;
        let count = 0;
        const result = [];
        async function request() {
            const url = downloadList[index].url;
            const path = downloadList[index].path;
            index++;
            try {
                // console.log(`下载：${path.split("\\")[1]}...`);
                await downloadFile(url, `.\\download${path}`);
                result.push(path);
                const pathS = path.split('\\')
                const fileN = pathS[pathS.length - 1]
                console.log(`已完成${count + 1}/${downloadList.length}(${Math.floor((count + 1) / downloadList.length * 100)}%): ${fileN} 下载完成！`);
            } catch (error) {
                console.error(`Error downloading ${url} `, error);
            } finally {
                count++;
                if (count === downloadList.length) {
                    resolve(result); // 所有文件下载完成
                }
                if (index < downloadList.length) {
                    request();
                }
            }
        }
        for (let i = 0; i < Math.min(maxNum, downloadList.length); i++) {
            request();
        }
    })
}

(async () => {
    const clazzNumber = '6919137642878912';
    const liveList = await getLiveList(clazzNumber);
    const downloadList = [];
    for (let i = 0; i < liveList.length; i++) {
        const live = liveList[i];
        const pcUrl = await getPcUrl(live.liveId);
        const videoData = await getVideoData(pcUrl);
        const list = decodeData(live.name, videoData.data)
        list.forEach(item => downloadList.push(item) )
    }
    // 创建下载任务
    // console.log(downloadList)
    console.log('开始下载...')
    await limitDownloads(downloadList, 4);
    console.log('下载成功！')
})();

