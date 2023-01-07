function getBase64(blob,callfun) {
	const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onload = () => {
		callfun(reader.result)
	};
    reader.onerror = error => console.log(error);
}
function dataURItoBlob(base64Data) {
	let byteString;

	if (base64Data.split(',')[0].indexOf('base64') >= 0) {
		byteString = atob(base64Data.split(',')[1]);
	} else {
		byteString = unescape(base64Data.split(',')[1]);
	}
	const mimeString = base64Data.split(',')[0].split(':')[1].split(';')[0];
	const ia = new Uint8Array(byteString.length);
	for (let i = 0; i < byteString.length; i++) {
		ia[i] = byteString.charCodeAt(i);
	}
	const blob = new Blob([ia], {
		type: mimeString,
	});
	return blob;
}
(function () {
	var dd = document.documentElement,
	db = document.body,
	dc = document.compatMode == 'CSS1Compat',
	dx = dc ? dd: db,
	ec = encodeURIComponent;
	
	
	window.CHAT = {
		msgObj:document.getElementById("message"),
		screenheight:window.innerHeight ? window.innerHeight : dx.clientHeight,
		username:null,
		userid:null,
		socket:null,
		isclose:true,
		mediaRecorder:null,
		videoChunks:[],
		//让浏览器滚动条保持在最低部
		scrollToBottom:function(){
			window.scrollTo(0, this.msgObj.clientHeight);
		},
		//退出，本例只是一个简单的刷新
		logout:function(){
			//this.socket.disconnect();
			location.reload();
		},
		//提交聊天消息内容
		submit:function(){
			if(this.isclose){
				alert("当前未连接服务器")
				return;
			}
			var content = document.getElementById("content").value;
			if(content != ''){
				var obj = {
					uid: this.userid,
					username: this.username,
					type: "text",
					content: content
				};
				this.socket.send(JSON.stringify({
					"mode": "message",
					"data": obj,
				}));
				document.getElementById("content").value = '';
			}
			return false;
		},
		submitRadio:function(content){
			if(this.isclose){
				alert("当前未连接服务器")
				return;
			}
			var obj = {
				uid: this.userid,
				username: this.username,
				type: "radio",
				content: content
			};
			this.socket.send(JSON.stringify({
				"mode": "message",
				"data": obj,
			}));
			return false;
		},
		//更新系统消息，本例中在用户加入、退出的时候调用
		updateSysMsg:function(o, action){
			//当前在线用户列表
			var onlineUsers = o.onlineUsers;
			console.log(onlineUsers)
			//当前在线人数
			var onlineCount = 0;
			//新加入用户的信息
			var user = o.user;
				
			//更新在线人数
			var userhtml = '';
			var separator = '';
			
			for(key in onlineUsers) {
				onlineCount++;
		        if(onlineUsers.hasOwnProperty(key)){
					userhtml += separator+onlineUsers[key];
					separator = '、';
				}
		    }
			document.getElementById("onlinecount").innerHTML = '当前共有 '+onlineCount+' 人在线，在线列表：'+userhtml;
			//document.getElementById("onlinecount").innerHTML = '前端代码感谢 https://github.com/plhwin/nodejs-socketio-chat';
			document.querySelector("#message").style.marginTop = document.querySelector("#chatbox > div:nth-child(1)").offsetHeight+"px";
			
			//添加系统消息
			var html = '';
			html += '<div class="msg-system">';
			html += user;
			html += (action == 'login') ? ' 加入了聊天室' : ' 退出了聊天室';
			html += '</div>';
			var section = document.createElement('section');
			section.className = 'system J-mjrlinkWrap J-cutMsg';
			section.innerHTML = html;
			this.msgObj.appendChild(section);	
			this.scrollToBottom();
		},
		//第一个界面用户提交用户名
		usernameSubmit:function(){
			var username = document.getElementById("username").value;
			if(username != ""){
				//自动登录
				const isAutoLogin = document.querySelector("#loginbox > div > input[type=checkbox]:nth-child(6)").checked
				if (isAutoLogin) {
					//存localStorage
					localStorage.setItem('autoLoginUsername', username);
				}
				
				document.getElementById("username").value = '';
				document.getElementById("loginbox").style.display = 'none';
				document.getElementById("chatbox").style.display = 'block';
				this.username = username;
				this.init(username);
			}
			return false;
		},
		recon:function(){
			if (this.isclose){
				this.socket.close();
				this.init();
			}
		},
		closeAutoLogin:function(){
			if (confirm("确定要关闭自动登录吗？")){
				localStorage.removeItem('autoLoginUsername');
				alert("已关闭自动登录");
				document.getElementById("showusername").innerHTML = this.username;
			}
		},
		init:function(username){
			/*
			客户端根据时间和随机数生成uid,这样使得聊天室用户名称可以重复。
			实际项目中，如果是需要用户登录，那么直接采用用户的uid来做标识就可以
			*/
			let closeAutoLoginHtml = ""
			if (localStorage.getItem("autoLoginUsername") != null) {
				closeAutoLoginHtml = '<a href="javascript:;" onclick="CHAT.closeAutoLogin()" style="color:#fff;">关闭自动登录</a> ';
			}
			
			document.getElementById("showusername").innerHTML = closeAutoLoginHtml + this.username;
			//this.msgObj.style.minHeight = (this.screenheight - db.clientHeight + this.msgObj.clientHeight) + "px";
			this.scrollToBottom();
			document.querySelector("#server").innerText = "服务器地址："+serverHost
			//连接websocket后端服务器
			this.socket = new WebSocket(window.serverHost);
			
			//告诉服务器端有用户登录
			this.socket.onopen = (socket) => {
				console.log("connected");
				this.isclose = false;
				this.socket.send('{"mode":"login","data":{"username":"'+this.username+'"}}');
				console.log("login");
			};
			
			this.socket.onmessage = (res) => {
				console.log("收到了新的信息......")
				console.log(res.data);
				
				const dataList = JSON.parse(res.data)
				//console.log(data)
				const mode = dataList["mode"];
				const data = dataList["data"];
				//this.userid
				if (mode === "login") {
					this.userid = data["uid"];
				}
				//监听用户登录退出
				if (mode === "onlineUsers") {
					CHAT.updateSysMsg(data, data.type);	
				}
				//监听消息发送
				if (mode === "message") {
					var isme = (data.uid == CHAT.userid) ? true : false;
					if (data.type === "radio"){
						blob = dataURItoBlob(data.content)
						var audioURL = window.URL.createObjectURL(blob);
						//player.src = audioURL;
						var usernameDiv = '<div class="name">'+data.username+" ip:"+data.userip+'</div>';
						var contentDiv = '<div class="content"><audio src="'+ audioURL +'" class="audio-player" controls></audio></div>';
						//var contentDiv = '<audio src="'+ audioURL +'" class="audio-player" controls style="display: block !important;"></audio>'
					} else {
						var usernameDiv = '<div class="name">'+data.username+" ip:"+data.userip+'</div>';
						var contentDiv = '<div class="content">'+data.content+'</div>';
					}
					var section = document.createElement('div');
					if(isme){
						section.className = 'cright cmsg';
						section.innerHTML = usernameDiv + contentDiv;
					} else {
						section.className = 'cleft cmsg';
						section.innerHTML = usernameDiv + contentDiv;
					}
					CHAT.msgObj.appendChild(section);
					CHAT.scrollToBottom();
				}
			}
			this.socket.onclose = () => {
				this.isclose = true;
				//断开连接
				var section = document.createElement('section');
				section.className = 'system J-mjrlinkWrap J-cutMsg';
				section.innerHTML = '<div class="msg-system">当前已经断开连接 <a href="javascript:;" onclick="CHAT.recon()" style="color:skyblue;">重新连接</a></div>';
				this.msgObj.appendChild(section);	
				this.scrollToBottom();
				
				document.getElementById("onlinecount").innerHTML = "当前已经断开连接";
				document.querySelector("#message").style.marginTop = document.querySelector("#chatbox > div:nth-child(1)").offsetHeight+"px";
				
				//recon
				this.recon()
				
			};
			//语音
			let recordBtn = document.querySelector("#chat > div.input-box > div:nth-child(1) > button")
			/* recordBtn.onmousedown = () => {
				this.mediaRecorder.start();
				console.log("录音中...");
				recordBtn.textContent = "松开发送";
				console.log("录音器状态：", this.mediaRecorder.state);
			}
			recordBtn.onmouseup = () => {
				this.mediaRecorder.stop();
				recordBtn.textContent = "按住说话";
				console.log("录音结束");
				console.log("录音器状态：", this.mediaRecorder.state);
			}; */
			recordBtn.onclick = () => {
				if (this.mediaRecorder.state == "recording"){
					this.mediaRecorder.stop();
					recordBtn.textContent = "点击说话";
					console.log("录音结束");
					console.log("录音器状态：", this.mediaRecorder.state);
				} else {
					this.mediaRecorder.start();
					console.log("录音中...");
					recordBtn.textContent = "点击发送";
					console.log("录音器状态：", this.mediaRecorder.state);
				}
			}
			
		},
	};
	//通过“回车”提交用户名
	document.getElementById("username").onkeydown = function(e) {
		e = e || event;
		if (e.keyCode === 13) {
			CHAT.usernameSubmit();
		}
	};
	//通过“回车”提交信息
	document.getElementById("content").onkeydown = function(e) {
		e = e || event;
		if (e.keyCode === 13) {
			CHAT.submit();
		}
	};
	if (localStorage.getItem("autoLoginUsername") != null) {
        const autoLoginUsername = localStorage.getItem("autoLoginUsername")
		document.getElementById("username").value = autoLoginUsername;
		CHAT.usernameSubmit();
    }
	//麦克风
	if (navigator.mediaDevices.getUserMedia) {
		navigator.mediaDevices.getUserMedia({ audio: true }).then(
			(stream) => {
				alert("麦克风授权成功，可以使用语音！");
				CHAT.mediaRecorder = new MediaRecorder(stream);
				
				CHAT.mediaRecorder.ondataavailable = (e)	=> {
					CHAT.videoChunks.push(e.data);
					console.log(CHAT.videoChunks)
				};
				CHAT.mediaRecorder.onstop = (e) => {
					var blob = new Blob(CHAT.videoChunks, { type: "audio/ogg; codecs=opus" });
					CHAT.videoChunks = [];
					console.log(blob);
					
					var audioURL = window.URL.createObjectURL(blob);
					getBase64(blob,function(base64){
						CHAT.submitRadio(base64)
					});
					//player.src = audioURL;
					
				};
			},
			() => {
				alert("麦克风授权失败！");
			}
		);
	} else {
	  alert("浏览器不支持 getUserMedia ，无法使用语音");
	}
	
})();