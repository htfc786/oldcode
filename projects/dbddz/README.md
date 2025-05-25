# 夺宝斗地主
- 这里随便写一些文档

## 如何实现一个斗地主？
1. 确定牌的大小关系：
   `3 < 4 < 5 < 6 < 7 < 8 < 9 < 10 < J < Q < K < A < 2 < 小王 < 大王`
   这里，可以写出判断牌大小关系的函数
   花色:`♠`黑桃Spade、`♥`红桃Heart、`♣`梅花Club、`♦`方片(方块)Diamond
2. 牌型
- `a` `one` - 单个牌
- `aa` `two` - 对
- `aaa` `three` - 三个
- `aaab` `threeWithOne` - 三带一
- `aaabb` `threeWithTwo` - 三带二
- `abcde` `oneList` - 顺子 - 五张或更多连续的单牌，不包括大小王
- `aabbcc` `twoList` - 连对 - 三对或更多连续的对牌，不包括大小王
- `aaabbb` `threeList` - 飞机(不带翅膀) - 二个或更多连续的三张牌
- `aaabbbcd` `threeWithOneList`
- `aaabbbccdd` `threeWithTwoList` - 飞机(带翅膀) - 二个或更多连续的三张牌+同数量的单或双牌
- `aaaabc` `fourWithOne` - 四带二 - 四张牌+任意两张单牌
- `aaaabbcc` `fourWithTwo` - 四带两对 - 四张牌+任意两对牌
----
- `aaaa` `four` - 炸弹 - 除火箭和比自己大的炸弹外，什么牌型都可打
- `SX` `sx` - 王炸(火箭) - 什么牌型都可打，是最大的牌
3. 一局游戏可能包含的数据
state = 'waiting' 游戏状态，waiting | send | jiaofen | playing | finished 
players = []; 玩家列表
pokerList = {}; 玩家牌堆
bPoker = []; 最终给地主的拿3张牌
currentPlayer = null; 当前操作的玩家