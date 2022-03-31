from flask import *


app = Flask(__name__)

@app.errorhandler(404)
def page_not_found(error):

    headers = request.headers
    headers = str(headers)
    
    return headers

app.run('0.0.0.0','80')

"""
GET //static/hy/front-win-client/index.html?os=stuwin&versionCode=370&isMvp=1&timestamp=1625308482561 HTTP/1.1" 200 -
Host: localhost Connection: keep-alive Upgrade-Insecure-Requests: 1 User-Agent: Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.2623.110 Safari/537.36 a_irclass_vc/370 a_irclass_vcname/7.4.0 Sec-Fetch-Dest: document Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9 Sec-Fetch-Site: none Sec-Fetch-Mode: navigate Sec-Fetch-User: ?1 Accept-Encoding: gzip, deflate, br Accept-Language: zh-CN
"""