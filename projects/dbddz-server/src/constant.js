/*
牌在代码里出现的形式：
3~9 => 3~9 => 牌3~9
10\0 => 10 => 牌10
11\J\j => 11 => 牌J
12\Q\q => 12 => 牌Q
13\K\k => 13 => 牌K
1\A\a => 14 => 牌A
2 => 15 => 牌2
s\S => 16 => 小王
x\X => 17 => 大王
花色：
黑桃 => S
红桃 => H
方片 => D
梅花 => C
(大小王) => SX
*/

export const pokerStrList = ["3","4","5","6","7","8","9","10","J","Q","K","A","2","S","X"];
export const pokerStr = { POKER_3: "3", POKER_4: "4", POKER_5: "5", POKER_6: "6", POKER_7: "7", POKER_8: "8", POKER_9: "9", POKER_10: "10", POKER_J: "J", POKER_Q: "Q", POKER_K: "K", POKER_A: "A", POKER_2: "2", POKER_S: "S", POKER_X: "X"};
export const pokerNum = { POKER_3: 3, POKER_4: 4, POKER_5: 5, POKER_6: 6, POKER_7: 7, POKER_8: 8, POKER_9: 9, POKER_10: 10, POKER_J: 11, POKER_Q: 12, POKER_K: 13, POKER_A: 14, POKER_2: 15, POKER_S: 16, POKER_X: 17};
export const pokerSuit = { SuitSpade: "S", SuitHeart: "H", SuitClub: "C", SuitDiamond: "D" };
export const pokerSuitTable = ["SuitDiamond","SuitSpade","SuitHeart","SuitClub"];
export const poker = { POKER_SPADE_3: 1, POKER_HEART_3: 2, POKER_CLUB_3: 3, POKER_DIAMOND_3: 4, POKER_SPADE_4: 5, POKER_HEART_4: 6, POKER_CLUB_4: 7, POKER_DIAMOND_4: 8, POKER_SPADE_5: 9, POKER_HEART_5: 10, POKER_CLUB_5: 11, POKER_DIAMOND_5: 12, POKER_SPADE_6: 13, POKER_HEART_6: 14, POKER_CLUB_6: 15, POKER_DIAMOND_6: 16, POKER_SPADE_7: 17, POKER_HEART_7: 18, POKER_CLUB_7: 19, POKER_DIAMOND_7: 20, POKER_SPADE_8: 21, POKER_HEART_8: 22, POKER_CLUB_8: 23, POKER_DIAMOND_8: 24, POKER_SPADE_9: 25, POKER_HEART_9: 26, POKER_CLUB_9: 27, POKER_DIAMOND_9: 28, POKER_SPADE_10: 29, POKER_HEART_10: 30, POKER_CLUB_10: 31, POKER_DIAMOND_10: 32, POKER_SPADE_J: 33, POKER_HEART_J: 34, POKER_CLUB_J: 35, POKER_DIAMOND_J: 36, POKER_SPADE_Q: 37, POKER_HEART_Q: 38, POKER_CLUB_Q: 39, POKER_DIAMOND_Q: 40, POKER_SPADE_K: 41, POKER_HEART_K: 42, POKER_CLUB_K: 43, POKER_DIAMOND_K: 44, POKER_SPADE_A: 45, POKER_HEART_A: 46, POKER_CLUB_A: 47, POKER_DIAMOND_A: 48, POKER_SPADE_2: 49, POKER_HEART_2: 50, POKER_CLUB_2: 51, POKER_DIAMOND_2: 52, POKER_S: 53, POKER_X: 54 };
export const pokerList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54];
export const type = { One: 'one', Two: 'two', Three: 'three', ThreeWithOne: 'threeWithOne', ThreeWithTwo: 'threeWithTwo', Four: 'four', FourWithOne: 'fourWithOne', FourWithTwo: 'fourWithTwo', OneList: 'oneList', TwoList: 'twoList', ThreeList: 'threeList', ThreeWithOneList: 'threeWithOneList', ThreeWithTwoList: 'threeWithTwoList', SX: 'sx', None: 'none' };
