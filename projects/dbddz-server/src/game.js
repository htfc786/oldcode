import { pokerList } from "./constant.js";

class Game{
  ioSocket = null; // socket
  groupId = null; // 房间号
  state = 'waiting'; // 游戏状态 waiting | ready | jiaofen | playing | over
  playerList = [];  // 玩家列表
  playerInfo = [];  // 玩家详细信息
  dizhuPokers = [];  // 地主牌
  // 0. 创建游戏
  constructor(groupId, ioSocket){
    this.groupId = groupId;
    this.ioSocket = ioSocket;
  }
  // 工具函数
  // 广播到房间
  broadcast(event, data){
    console.log('向小组',this.groupId,'广播',event,'事件，数据：', data);
    // this.ioSocket.to(this.groupId).emit(event, data);
  }
  //单独给某玩家发送消息
  send(player, event, data){
    console.log('向',player,'发送',event,'事件，数据：', data);
    // const playerIndex = this.playerList.indexOf(player);
    // if (playerIndex === -1) {
    //   return '该玩家不存在';
    // }
    // this.playerInfo[playerIndex].socket.emit(event, data);
  }
  // 1,玩家入场
  playerJoin(name, socket){
    if (this.state !== 'waiting') {
      return '游戏已开始';
    }
    if (this.playerList.length > 3) {
      return '房间已满';
    }
    if (this.playerList.indexOf(name) !== -1) {
      return '该玩家已存在';
    }
    // 玩家加入
    this.playerList.push(name);
    this.playerInfo.push({
      name, // 用户名
      socket, // 用户socket
      score: 1000, // 分数 初始1000分
      isReady: false, // 是否准备好
      jiaofen: null,  // 叫的分
      pokers: [], // 牌列表
      isDizhu: null,  // 是否地主
    });
    // 向其他玩家广播事件
    this.broadcast('join', this.playerList);
  }
  // 2, 玩家准备
  playerReady(name){
    if (this.state !== 'waiting') {
      return '游戏已开始';
    }
    const playerIndex = this.playerList.indexOf(name);
    if (playerIndex === -1) {
      return '该玩家不存在';
    }
    if (this.playerInfo[playerIndex].isReady) {
      return '该玩家已准备';
    }
    this.playerInfo[playerIndex].isReady = true;
    this.broadcast('ready', this.playerList[playerIndex]);
    if (this.playerInfo.every(player => player.isReady)) {
      // 初始化游戏
      this.initGame();
    }
  }
  // 3, 初始化游戏
  initGame(){
    this.state = 'ready';
    // 生成牌组
    this.initPokers();
    // 单独给每个玩家发送自己的牌
    for (let i = 0; i < this.playerInfo.length; i++) {
      const player = this.playerInfo[i];
      this.send(player.name, 'pokers', player.pokers);
    }
    //开始叫分
    this.gameJiaoFen();
  }
  // 生成牌组
  initPokers(){
    let pokers = pokerList;
    // 洗牌
    pokers.sort(() => Math.random() - 0.5);
    pokers.sort(() => Math.random() - 0.5);
    // 发牌 先轮流发牌一人一张 最后剩3张做地主牌
    for (let i = 0; i < pokers.length; i++) {
      if (i === pokers.length - 3) {
        // 最后3张做地主牌
        this.dizhuPokers = pokers.slice(i);
        break;
      }
      const playerIndex = i % this.playerList.length;
      this.playerInfo[playerIndex].pokers.push(pokers[i]);
    }
  }
  //4, 叫分
  gameJiaoFen(){
    this.state = 'jiaofen';
    // 广播：开始叫分
    this.broadcast('start_jiaofen', null);

  }
}

// export default Game;
const g = new Game('001', 'ioSocket');
g.playerJoin('test1', 'test1Socket');
g.playerJoin('test2', 'test2Socket');
g.playerReady('test2');
g.playerJoin('test3', 'test3Socket');
g.playerReady('test3');
g.playerReady('test1');

