import player from './player'
export default class Game {
    constructor() {
        this.state = 'waiting'; // 游戏状态，waiting | send | jiaofen | playing | finished 
        this.players = []; // 玩家列表
        //this.pokerList = {}; // 玩家牌堆
        this.bPoker = []; // 最终给地主的拿3张牌
        this.currentPlayer = null; // 当前操作的玩家
    }

    initGame() { // 初始化游戏
        // --->> 这是一个测试用的临时用函数
        // 1. 玩家入场
        this.creatPlayer();

        this.state = 'playing';
    }

    creatPlayer() { // 创建玩家
        this.players.push(new player('p1'));
        this.players.push(new player('p2'));
        this.players.push(new player('p3'));
    }

    //分牌
    dividePoker() {
        
    }

}