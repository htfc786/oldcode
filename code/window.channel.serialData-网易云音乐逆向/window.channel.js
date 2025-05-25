window.channel.serialData = function(list) {
    const eapiKey = 'e82ckenh8dichen8'
    const aesEncrypt = (text, mode, key, iv, format = 'base64') => {
        let encrypted = CryptoJS.AES.encrypt(
          CryptoJS.enc.Utf8.parse(text),
          CryptoJS.enc.Utf8.parse(key),
          {
            iv: CryptoJS.enc.Utf8.parse(iv),
            mode: CryptoJS.mode[mode.toUpperCase()],
            padding: CryptoJS.pad.Pkcs7,
          },
        )
        if (format === 'base64') {
          return encrypted.toString()
        }
      
        return encrypted.ciphertext.toString().toUpperCase()
      }

      const eapi = (url, object) => {
        const text = typeof object === 'object' ? JSON.stringify(object) : object
        const message = `nobody${url}use${text}md5forencrypt`
        const digest = CryptoJS.MD5(message).toString()
        const data = `${url}-36cd479b6b5-${text}-36cd479b6b5-${digest}`
        return {
          params: aesEncrypt(data, 'ecb', eapiKey, '', 'hex'),
        }
      }

      return eapi(list[0], list[1])
      
      
}


window.channel.deSerialData = function (list) {
    const eapiKey = 'e82ckenh8dichen8'
    const aesDecrypt = (ciphertext, key, iv, format = 'base64') => {
        let bytes
        if (format === 'base64') {
            bytes = CryptoJS.AES.decrypt(ciphertext, CryptoJS.enc.Utf8.parse(key), {
                iv: CryptoJS.enc.Utf8.parse(iv),
                mode: CryptoJS.mode.ECB,
                padding: CryptoJS.pad.Pkcs7,
            })
        } else {
            bytes = CryptoJS.AES.decrypt(
                { ciphertext: CryptoJS.enc.Hex.parse(ciphertext) },
                CryptoJS.enc.Utf8.parse(key),
                {
                    iv: CryptoJS.enc.Utf8.parse(iv),
                    mode: CryptoJS.mode.ECB,
                    padding: CryptoJS.pad.Pkcs7,
                },
            )
        }
        console.log("bytes",CryptoJS.enc.Utf8.stringify(bytes))
        return bytes.toString(CryptoJS.enc.Utf8)
    }
    const eapiResDecrypt = (encryptedParams) => {
        // 使用aesDecrypt解密参数
        const decryptedData = aesDecrypt(encryptedParams, eapiKey, '', 'hex')
        return JSON.parse(decryptedData)
    }
    // 转二进制 ¼1$B!<ü2fgÓ9G
    const encryptedParams = list
    // const encryptedParams = CryptoJS.enc.Utf8.parse(list).toString(CryptoJS.enc.Hex);
    console.log("before decrypt",encryptedParams)
    try {
        const decryptedData = eapiResDecrypt(encryptedParams)
        console.log("decryptedData",decryptedData)
        return decryptedData
    } catch (error) {
        console.log("error",error)
    }
}
