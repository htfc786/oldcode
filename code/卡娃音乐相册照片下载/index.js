const fs = require('fs')
const { pipeline } = require('stream/promises');

const bookid = process.argv[2]
const bookname = process.argv[3]
const bookurl = `https://ex03.executioner.cn/kphoto/photosshow2.php?wxid=manmiaodianzixiangce&bookid=${bookid}&fm=woam&onmake=true&olwxid=haomeixiangce`

async function getBook() {
    // const fetch = (await import('node-fetch')).default
    const res = await fetch(bookurl)
    const html = await res.text()
    // console.log(html)
    return html
}

function getImgList(html) {
    // 写正则
    // console.log(html)
    const regex = /slider_images_url\.push\('(.*)'\);/g
    const matches = html.match(regex)
    // console.log(matches)
    if (matches) {
        return matches.map(match => {
            // const imgUrl = match.replace(regex, '$1')
            // console.log(match)
            //去除？后面的参数
            return match.split('\'')[1].split('?')[0]
        })
    }
}

async function downloadImg(imgUrl,path) {
    // const fetch = (await import('node-fetch')).default
    const res = await fetch(imgUrl,{
        "headers": {
          "accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "accept-language": "zh-CN,zh;q=0.9",
          "cache-control": "no-cache",
          "pragma": "no-cache",
          "priority": "i",
          "sec-ch-ua": "\"Not A(Brand\";v=\"8\", \"Chromium\";v=\"132\", \"Google Chrome\";v=\"132\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Windows\"",
          "sec-fetch-dest": "image",
          "sec-fetch-mode": "no-cors",
          "sec-fetch-site": "cross-site",
          "Referer": "https://ex03.executioner.cn/",
          "Referrer-Policy": "strict-origin-when-cross-origin"
        },
    })
    await pipeline(
        res.body, 
        fs.createWriteStream(path)
    );
}

function downloadList(urlList) {
    for (const url of urlList) {
        const imgName = url.split('/')[url.split('/').length - 1]
        const path = `./${bookname?bookname:'img'}/${imgName}.jpg`
        downloadImg(url, path).then(() => {
            console.log(`下载完成：${imgName}`)
        })
    }
}

(async () => {
    // 创建文件夹
    if (!fs.existsSync(`./${bookname?bookname:'img'}`)) {
        fs.mkdirSync(`./${bookname?bookname:'img'}`)
    }

    const html = await getBook()
    const imgList = getImgList(html)
    downloadList(imgList)
})()
