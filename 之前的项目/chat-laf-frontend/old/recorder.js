function blobToDataURI(blob, callback) {
  var reader = new FileReader();
  reader.onload = function (e) {
    callback(e.target.result);
  }
  reader.readAsDataURL(blob);
}

const recordBtn = document.querySelector(".record-btn");
const player = document.querySelector(".audio-player");

if (navigator.mediaDevices.getUserMedia) {
  var chunks = [];
  navigator.mediaDevices.getUserMedia({ audio: true }).then(
    (stream) => {
      alert("麦克风授权成功，可以使用语音！");

      let mediaRecorder = new MediaRecorder(stream);
	  
	  console.log(mediaRecorder)
	  //visualize(stream);
	  
	  recordBtn.onmousedown = () => {
        mediaRecorder.start();
        console.log("录音中...");
        recordBtn.textContent = "stop";
		console.log("录音器状态：", mediaRecorder.state);
      }
	  
      recordBtn.onmouseup = () => {
        mediaRecorder.stop();
        recordBtn.textContent = "record";
        console.log("录音结束");
        console.log("录音器状态：", mediaRecorder.state);
      };

      mediaRecorder.ondataavailable = e => {
        chunks.push(e.data);
		console.log(chunks)
      };

      mediaRecorder.onstop = e => {
        var blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
        chunks = [];
		
		blobToDataURI(blob,function(e){
		  console.log(e)
		})
        var audioURL = window.URL.createObjectURL(blob);
        player.src = audioURL;
		
      };
	  
    },
    () => {
      alert("麦克风授权失败！");
    }
  );
} else {
  alert("浏览器不支持 getUserMedia");
}