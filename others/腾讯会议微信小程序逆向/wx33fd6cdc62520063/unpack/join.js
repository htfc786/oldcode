joinMedia: function(e) {
    var self = this;
    return new Promise(function(resolve, reject) {
        var timeoutId, originalOnError = self.onError;

        // 设置超时定时器，10秒后如果没有成功加入媒体房间，则调用拒绝回调
        timeoutId = setTimeout(function() {
            if (timeoutId > 0) clearTimeout(timeoutId);
            C.warn("join media room time out");
            reject("timeout");
        }, 10000);

        // 重写 onError 方法以处理错误情况
        self.onError = function(error) {
            var data = (error || {}).data || {},
                errorCode = data.code,
                errorMessage = data.message;

            // 如果错误码不是 10004 或 10003，则清除定时器并恢复原始的 onError 方法
            if (errorCode !== 10004 && errorCode !== 10003) {
                if (timeoutId > 0) clearTimeout(timeoutId);
                timeoutId = 0;
                self.onError = originalOnError;

                // 处理错误代码和消息
                var numericErrorCode = isNaN(errorCode) ? -1 : errorCode;
                var fullErrorMessage = "".concat(errorMessage || "unknown error", "(").concat(numericErrorCode, ")");
                C.warn("进房失败：".concat(fullErrorMessage));
                reject(fullErrorMessage);
            }
        };

        // 重写 onLocalJoin 方法以处理成功加入的情况
        self.onLocalJoin = function(event) {
            if (timeoutId > 0) clearTimeout(timeoutId);
            timeoutId = 0;

            // 恢复原始的 onLocalJoin 方法
            self.onLocalJoin = function() {
                C.assert("LOCAL_JOIN should not be fired before you call MeetingAction.joinMedia");
            };

            // 恢复原始的 onError 方法
            self.onError = originalOnError;

            // 记录成功的类事件
            C.reportCls("cls_join_media_success");

            // 忽略由于电话呼叫引起的 5001 错误
            if (!l.getTimerFor5001CausedByPhoneCall()) {
                self.joinMediaRoomSucc();
            }

            // 解析成功回调
            resolve();
        };

        // 断言 trtc_token 中包含 set_flag 属性
        if (!(e.trtc_token && e.trtc_token.set_flag)) {
            C.assert("'set_flag' is expected but got null. roomInfo: ".concat(JSON.stringify(e)));
            C.reportEvent("xmpp_set_flag_is_supposed_to_be_in_join_resp");
        }

        // 获取 TRTC 环境配置
        var trtcEnv = M.trtcEnv === "default" ? undefined : M.trtcEnv;

        // 加入媒体房间
        // ******
        var pusherData = l.getTRTCInstance().joinMediaRoom({
            roomInfo: e,
            mediaState: {
                mic: l.getAudioEnable(),
                cam: l.getCameraEnable()
            },
            expCloudenv: trtcEnv
        });

        // 记录开始加入媒体房间的类事件
        C.reportCls("cls_join_media_starts");

        // 触发 PUSHER_CHANGE 事件
        l.emit(f.PUSHER_CHANGE, {
            data: pusherData
        });

        // 在开发工具中模拟成功加入媒体房间（仅用于调试）
        var devtoolsTimeoutId = 0;
        if (T.isDevtools()) {
            devtoolsTimeoutId = setTimeout(function() {
                C.warn("运行于IDE中，为方便调试，代码主动触发<live-pusher>1018以模拟媒体入会成功。");
                self.onLocalJoin();
            }, 2000);
        }
    });
}