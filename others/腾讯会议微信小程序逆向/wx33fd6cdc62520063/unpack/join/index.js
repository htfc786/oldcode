var Strophe = require("strophe.js").Strophe;
var $pres = Strophe.$pres;
var $msg = Strophe.$msg;
var $iq = Strophe.$iq;

const SERVER_URL = "wss://ws.wemeet.tencent.com/websocket/connection"

// 配置信息
const appUid = "o-JR35O-dz6ks1OpNwSpn22eMZq8" // l.getOpenID(); // 获取OpenID 
const appXMPPToken = "eJxUUl1zmzAQ-C96TekIgYVhpg*uY7dObWzHYabJC6NKB1UdQJYE9GP63zMmYmzrTbt3t6s9-UNP68NHxnnT1ja3fxSgBE3RhwGWAmorCwkaJajxHh6DydYTf*nR*FuV9gdVEwKbl9NYz5SSImc2D7RACcIONuKYDxRKEMHuOE5AJznkA*cgDaVs6rMN6hD4raSGnBV2cBJFEb1MMJbZ1lzJvTalrMen9FAB2LyStTx7cCUdaPOuQTAJ8ZSEGGPfkVZW504-CiKMw5iSUUiWKEGbRTZf7e-T583r-onOvuJ7utv*6neFeGah*emv*-V2xvr5vJj8WHcPeDlblav9fpGy7HNW3dFlVk77LzZLX5YHM6Xfu92JL7L022N-uDvOy09XmV2HcpIVyIBeAKUb0XJ7U2SGSxDEIQhWeJj7zAsjGntxgLkXTxjhUMQTXPiXhvdVjQt0-4A3Wt1Mbg3oMVL0-y0AAP--WDaoAQ__" // l.getXMPPToken(); // 获取XMPP Token

const loginParams = {
    app_id: "200000000", // g.getSdkAppId() production_config
    app_uid: appUid,
    app_token: appXMPPToken,
    token_obj: {
        device_id: "",
        network_type: "network_type",
        app_version: "4.1.6.0", // h.MP_WEMEET_VERSION 8760 AppConfig.js
    },
    auth_type: 2, // self.constants.AuthType.AUTH_TYPE_VISITOR (43789行)
    instance_id: 8, // self.constants.InstanceType.INSTANCE_MP  327 wemeet.js
    sdk_version: "v2.2.1", // "v2.2.1" 353 wemeet.js
    instance_id: 8, // l.INSTANCE_ID  43785行
    env_id: ""
};


const connection = new Strophe.Connection(SERVER_URL);

// JID（Jabber ID）字符串 认证token XML字符串
var jid = loginParams.app_uid + "/" + loginParams.instance_id.toString();
var tokenXml = '<token xmlns="wemeet:auth" ' +
    'wemeet-auth:app_id="' + loginParams.app_id + '" ' +
    'wemeet-auth:device_id="' + loginParams.token_obj.device_id + '" ' +
    'wemeet-auth:network_type="' + loginParams.token_obj.network_type + '" ' +
    'wemeet-auth:app_version="' + loginParams.token_obj.app_version + '" ' +
    'wemeet-auth:sdk_version="' + loginParams.sdk_version + '" ' +
    'wemeet-auth:sdk_id="' + loginParams.sdk_id + '" ' +
    'wemeet-auth:instance_id="' + loginParams.instance_id + '" ' +
    'wemeet-auth:auth_type="' + loginParams.auth_type + '" ' +
    'wemeet-auth:env_id="' + loginParams.env_id + '">' +
    btoa(loginParams.app_token) + "</token>";

// console.log(tokenXml)

connection.connect(jid, tokenXml, function(status, condition) {
    // var loginHandler = self.getEventHandler("login");

    switch (status) {
        case Strophe.Status.CONNFAIL:
            console.log("connection failed:", condition);
            break;

        case Strophe.Status.AUTHFAIL:
            console.log("authentication failed:", condition);
            break;

        case Strophe.Status.DISCONNECTED:
            console.log("disconnected:", condition);
            // self.jid = null;
            // if (typeof condition === 'object') console.log("condition:", JSON.stringify(condition));
            // clearInterval(self.meetingPingTimer);
            // self.meetingPingTimer = null;
            // self.connected = false;

            // var logoutHandler = self.getEventHandler("logout");
            // var disconnectInfo = {
            //     msg: "disconnected",
            //     code: "DISCONNECTED",
            //     ecode: 99900,
            //     condition: condition
            // };

            // if (condition && condition.code !== undefined) {
            //     disconnectInfo.ecode = condition.code;
            // } else if (self.connFailed) {
            //     disconnectInfo.ecode = 98888;
            //     self.connFailed = false;
            // }

            // logoutHandler(self.userLogoutFlag, disconnectInfo);
            // self.userLogoutFlag = false;
            break;

        case Strophe.Status.CONNECTED:
            console.log("connect success:", condition);
            // self.connected = true;

            // // 添加IQ消息处理器
            // self.connection.addHandler(function(stanza) {
            //     var type = stanza.getAttribute("type");
            //     if (type === "result" || type === "set") {
            //         var childNode = stanza.childNodes[0];
            //         if (childNode && 
            //             ["tencent:wemeet:push", "tencent:wemeet:breakoutroom:push"].includes(childNode.getAttribute("xmlns"))) {
            //             self.serverToClientMsgParser(stanza, childNode.nodeName);
            //         }
            //     }
            //     return true;
            // }, null, "iq", null, null, null);

            // // 发送初始IQ包
            // self.connection.send(k().tree());

            // // 设置JID并延迟调用成功回调
            // self.jid = jid;
            // setTimeout(function() {
            //     loginHandler(true, {
            //         code: "CONNECTED",
            //         msg: "connect success"
            //     });
            // }, 10);
            break;
    }
});


/*
function establishConnection(jid, successCallback, authParams) {
        // 尝试连接到XMPP服务器
        this.connection.connect(jid, tokenXml, function(status, condition) {
            var loginHandler = self.getEventHandler("login");

            switch (status) {
                case w.Status.CONNFAIL:
                    console.log("connection failed:", condition);
                    self.jid = null;
                    self.connFailed = true;
                    self.getEventHandler("connfailed")(true, {
                        code: "CONNFAIL",
                        msg: "disconnected",
                        data: condition
                    });
                    break;

                case w.Status.AUTHFAIL:
                    console.log("authentication failed:", condition);
                    loginHandler(false, {
                        code: "AUTHFAIL",
                        msg: "authentication failed"
                    });
                    break;

                case w.Status.DISCONNECTED:
                    console.log("disconnected:", condition);
                    self.jid = null;
                    if (typeof condition === 'object') console.log("condition:", JSON.stringify(condition));
                    clearInterval(self.meetingPingTimer);
                    self.meetingPingTimer = null;
                    self.connected = false;

                    var logoutHandler = self.getEventHandler("logout");
                    var disconnectInfo = {
                        msg: "disconnected",
                        code: "DISCONNECTED",
                        ecode: 99900,
                        condition: condition
                    };

                    if (condition && condition.code !== undefined) {
                        disconnectInfo.ecode = condition.code;
                    } else if (self.connFailed) {
                        disconnectInfo.ecode = 98888;
                        self.connFailed = false;
                    }

                    logoutHandler(self.userLogoutFlag, disconnectInfo);
                    self.userLogoutFlag = false;
                    break;

                case w.Status.CONNECTED:
                    console.log("connect success:", condition);
                    self.connected = true;

                    // 添加IQ消息处理器
                    self.connection.addHandler(function(stanza) {
                        var type = stanza.getAttribute("type");
                        if (type === "result" || type === "set") {
                            var childNode = stanza.childNodes[0];
                            if (childNode && 
                                ["tencent:wemeet:push", "tencent:wemeet:breakoutroom:push"].includes(childNode.getAttribute("xmlns"))) {
                                self.serverToClientMsgParser(stanza, childNode.nodeName);
                            }
                        }
                        return true;
                    }, null, "iq", null, null, null);

                    // 发送初始IQ包
                    self.connection.send(k().tree());

                    // 设置JID并延迟调用成功回调
                    self.jid = jid;
                    setTimeout(function() {
                        loginHandler(true, {
                            code: "CONNECTED",
                            msg: "connect success"
                        });
                    }, 10);
                    break;
            }
        });
    }*/
