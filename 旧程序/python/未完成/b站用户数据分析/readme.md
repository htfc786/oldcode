b站用户分析：
https://api.bilibili.com/x/space/acc/info?mid=UID&jsonp=jsonp
JSON.data.mid  ==>  uid
JSON.code ==0!!!!!!
JSON.data.name  ==> 昵称
JSON.data.face  ==>  头像 "http://i0.hdslb.com/bfs/face/member/noface.jpg" tf
JSON.data.sign  ==>  个性签名 tf
JSON.data.level  ==>  lvx
JSON.data.fans_badge  ==>  粉丝徽章 tf
JSON.data.official.role  ==> up
JSON.data.vip.label.text  ==>  大会员
JSON.data.live_room.roomStatus ==>  直播间是否开启 tf

pa.py=>爬b站数据
db-ls.py=>打包