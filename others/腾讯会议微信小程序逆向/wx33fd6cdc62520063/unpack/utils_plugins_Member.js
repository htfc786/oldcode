define("utils/plugins/Member.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("../../@babel/runtime/helpers/classCallCheck"),
        a = require("../../@babel/runtime/helpers/createClass"),
        s = require("../../clients/WemeetClient"),
        t = (require("../util").clog, require("../util").getMicGrids),
        i = require("../../constants/LoadingStatus").LoadingStatus,
        r = require("../../configs/AppConfig").AvatarURL,
        o = require("../../stores/UserStore"),
        n = ["audio_on", "video_on", "share_on", "web_share_on", "audio_reason", "video_reason", "share_reason", "audio_pause", "video_pause", "share_pause", "share_start_time", "handsup", "raise_hand", "id", "is_creator", "is_host", "role_type", "nickname", "sub_associator", "members_seq", "avatar_type", "avatar_token", "local_record_on", "participation_status_stamp", "allow_speak", "user_invisible", "isSelf", "keyString"],
        _ = ["audio_on", "video_on", "share_on", "share_pause", "share_start_time", "web_share_on", "handsup", "raise_hand", "is_host", "role_type", "nickname", "members_seq", "local_record_on", "allow_speak"],
        u = function() {
            function u(a) {
                var t, _ = this;
                (e(this, u), n.forEach((function(e) {
                    "" !== a[e] && null !== a[e] && void 0 !== a[e] && (_[e] = a[e])
                })), this.sub_associator && (this.sub_associator.keyString = s.getKeyById(this.sub_associator)), this.isSelf) ? (this.header = (null === (t = o.getWXUserInfo()) || void 0 === t ? void 0 : t.avatarUrl) || "", this.avatar_type = 100) : 0 === a.avatar_type || 1 === a.avatar_type ? this.header = "" : a.avatar_token ? this.header = "".concat(r, "/").concat(a.avatar_token, "/small") : (this.header = "", console.error("".concat(a.nickname, "'s avatar_type is ").concat(a.avatar_type, ", but we got no avatar_token")));
                this.playURL = "", this.audio_grids = 0, this.is_video_lock = !1, this.loading_status = i.Closed, this.is_loading = !1, this.created_times = 0
            }
            return a(u, [{
                key: "update",
                value: function(e) {
                    var a = this;
                    _.forEach((function(s) {
                        var t = e[s],
                            i = a[s];
                        null != t && "" !== t && t !== i && (a[s] = t)
                    }))
                }
            }, {
                key: "updateAudioGrids",
                value: function(e) {
                    this.audio_grids = t(e)
                }
            }]), u
        }();
    module.exports = u;
});



// 定义一个名为 Member 的构造函数，用于创建和管理成员对象
function Member(memberData) {
    // 初始化成员属性
    this.initializeProperties(memberData);

    // 设置子关联者的密钥字符串（如果有的话）
    if (this.sub_associator) {
        this.sub_associator.keyString = WemeetClient.getKeyById(this.sub_associator);
    }

    // 设置头像信息
    this.setHeader(memberData);

    // 初始化其他默认属性
    this.playURL = "";
    this.audio_grids = 0;
    this.is_video_lock = false;
    this.loading_status = LoadingStatus.Closed;
    this.is_loading = false;
    this.created_times = 0;
}

// 初始化成员属性的方法
Member.prototype.initializeProperties = function(memberData) {
    const propertiesToSet = [
        "audio_on", "video_on", "share_on", "web_share_on", "audio_reason",
        "video_reason", "share_reason", "audio_pause", "video_pause", "share_pause",
        "share_start_time", "handsup", "raise_hand", "id", "is_creator", "is_host",
        "role_type", "nickname", "sub_associator", "members_seq", "avatar_type",
        "avatar_token", "local_record_on", "participation_status_stamp", "allow_speak",
        "user_invisible", "isSelf", "keyString"
    ];

    // 遍历属性列表并设置成员的初始属性值
    propertiesToSet.forEach((property) => {
        if (memberData[property] !== "" && memberData[property] !== null && memberData[property] !== undefined) {
            this[property] = memberData[property];
        }
    });
};

// 设置头像信息的方法
Member.prototype.setHeader = function(memberData) {
    if (this.isSelf) {
        // 如果是自己，则从用户存储中获取微信用户信息作为头像
        const wxUserInfo = UserStore.getWXUserInfo();
        this.header = wxUserInfo ? wxUserInfo.avatarUrl : "";
        this.avatar_type = 100;
    } else {
        // 根据 avatar_type 设置不同的头像逻辑
        switch (memberData.avatar_type) {
            case 0:
            case 1:
                this.header = "";
                break;
            default:
                if (memberData.avatar_token) {
                    this.header = `${AvatarURL}/${memberData.avatar_token}/small`;
                } else {
                    console.error(`${memberData.nickname}'s avatar_type is ${memberData.avatar_type}, but we got no avatar_token`);
                    this.header = "";
                }
        }
    }
};

// 更新成员状态的方法
Member.prototype.update = function(updatedData) {
    const updatableProperties = [
        "audio_on", "video_on", "share_on", "share_pause", "share_start_time",
        "web_share_on", "handsup", "raise_hand", "is_host", "role_type",
        "nickname", "members_seq", "local_record_on", "allow_speak"
    ];

    // 更新成员的状态信息
    updatableProperties.forEach((property) => {
        const newValue = updatedData[property];
        const oldValue = this[property];

        if (newValue !== undefined && newValue !== "" && newValue !== oldValue) {
            this[property] = newValue;
        }
    });
};

// 更新音频网格的方法
Member.prototype.updateAudioGrids = function(gridInfo) {
    this.audio_grids = getMicGrids(gridInfo);
};

// 导出 Member 构造函数以便在其他地方使用
module.exports = Member;