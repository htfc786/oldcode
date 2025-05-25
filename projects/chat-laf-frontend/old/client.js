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
					var contentDiv = '<div>'+data.content+'</div>';
					var usernameDiv = '<span>'+data.username+'</span>';
					
					var section = document.createElement('section');
					if(isme){
						section.className = 'user';
						section.innerHTML = contentDiv + usernameDiv;
					} else {
						section.className = 'service';
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
			};
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
})();