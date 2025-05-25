import { poker, pokerNum, pokerStr, type, pokerSuit, pokerSuitTable } from '../constant.js'

export function poker2num(p) {
  switch (p) {  // 为了兼容更多格式，写的有点长，不过别看这段代码又臭又长，但基本上都是AI写的hhhh
    case '3': case pokerStr.POKER_3: case poker.POKER_SPADE_3: case poker.POKER_HEART_3: case poker.POKER_CLUB_3: case poker.POKER_DIAMOND_3: return pokerNum.POKER_3;
    case '4': case pokerStr.POKER_4: case poker.POKER_SPADE_4: case poker.POKER_HEART_4: case poker.POKER_CLUB_4: case poker.POKER_DIAMOND_4: return pokerNum.POKER_4;
    case '5': case pokerStr.POKER_5: case poker.POKER_SPADE_5: case poker.POKER_HEART_5: case poker.POKER_CLUB_5: case poker.POKER_DIAMOND_5: return pokerNum.POKER_5;
    case '6': case pokerStr.POKER_6: case poker.POKER_SPADE_6: case poker.POKER_HEART_6: case poker.POKER_CLUB_6: case poker.POKER_DIAMOND_6: return pokerNum.POKER_6;
    case '7': case pokerStr.POKER_7: case poker.POKER_SPADE_7: case poker.POKER_HEART_7: case poker.POKER_CLUB_7: case poker.POKER_DIAMOND_7: return pokerNum.POKER_7;
    case '8': case pokerStr.POKER_8: case poker.POKER_SPADE_8: case poker.POKER_HEART_8: case poker.POKER_CLUB_8: case poker.POKER_DIAMOND_8: return pokerNum.POKER_8;
    case '9': case pokerStr.POKER_9: case poker.POKER_SPADE_9: case poker.POKER_HEART_9: case poker.POKER_CLUB_9: case poker.POKER_DIAMOND_9: return pokerNum.POKER_9;
    case '10': case '0': case pokerStr.POKER_10: case poker.POKER_SPADE_10: case poker.POKER_HEART_10: case poker.POKER_CLUB_10: case poker.POKER_DIAMOND_10: return pokerNum.POKER_10;
    case '11': case 'j': case 'J': case pokerStr.POKER_J: case poker.POKER_SPADE_J: case poker.POKER_HEART_J: case poker.POKER_CLUB_J: case poker.POKER_DIAMOND_J: return pokerNum.POKER_J;
    case '12': case 'q': case 'Q': case pokerStr.POKER_Q: case poker.POKER_SPADE_Q: case poker.POKER_HEART_Q: case poker.POKER_CLUB_Q: case poker.POKER_DIAMOND_Q: return pokerNum.POKER_Q;
    case '13': case 'k': case 'K': case pokerStr.POKER_K: case poker.POKER_SPADE_K: case poker.POKER_HEART_K: case poker.POKER_CLUB_K: case poker.POKER_DIAMOND_K: return pokerNum.POKER_K;
    case '1': case 'a': case 'A': case pokerStr.POKER_A: case poker.POKER_SPADE_A: case poker.POKER_HEART_A: case poker.POKER_CLUB_A: case poker.POKER_DIAMOND_A: return pokerNum.POKER_A;
    case '2': case pokerStr.POKER_2: case poker.POKER_SPADE_2: case poker.POKER_HEART_2: case poker.POKER_CLUB_2: case poker.POKER_DIAMOND_2: return pokerNum.POKER_2;
    case 's': case 'S': case pokerStr.POKER_S: case poker.POKER_S: return pokerNum.POKER_S;
    case 'x': case 'X': case pokerStr.POKER_X: case poker.POKER_X: return pokerNum.POKER_X;
    default: /* console.log('poker2num: Invalid poker', p); */ throw new Error('Invalid poker');
  }
}
export function num2poker(num) {
  switch (num) {
    case pokerNum.POKER_3: return pokerStr.POKER_3;
    case pokerNum.POKER_4: return pokerStr.POKER_4;
    case pokerNum.POKER_5: return pokerStr.POKER_5;
    case pokerNum.POKER_6: return pokerStr.POKER_6;
    case pokerNum.POKER_7: return pokerStr.POKER_7;
    case pokerNum.POKER_8: return pokerStr.POKER_8;
    case pokerNum.POKER_9: return pokerStr.POKER_9;
    case pokerNum.POKER_10: return pokerStr.POKER_10;
    case pokerNum.POKER_J: return pokerStr.POKER_J;
    case pokerNum.POKER_Q: return pokerStr.POKER_Q;
    case pokerNum.POKER_K: return pokerStr.POKER_K;
    case pokerNum.POKER_A: return pokerStr.POKER_A;
    case pokerNum.POKER_2: return pokerStr.POKER_2;
    case pokerNum.POKER_S: return pokerStr.POKER_S;
    case pokerNum.POKER_X: return pokerStr.POKER_X;
    default: /* console.log('num2poker: Invalid poker', num); */ throw new Error('Invalid poker');
  } 
}

// 判断牌的大小关系
//-1: p1>p2 0:p1=p2 1:p1<p2
export function comparePokers(p1, p2) {
  if (typeof p1 === 'number' || typeof p2 === 'number'){
    return Math.sign(p1 - p2);
  }
  return Math.sign(poker2num(p1) - poker2num(p2));
}
//判断牌是否合法
export function isPoker(p) {
  try {
    poker2num(p);
    return true;
  } catch (e) {
    if (e.message === 'Invalid poker') {
      return false;
    }
    throw e;
  }
}
//将牌格式化为正常格式
export function formatPokers(p) {
  return num2poker(poker2num(p));
}

// 判断是否为王炸
export function isSX(pL) {
  // 先排序
  pL.sort((p1, p2) => comparePokers(p1, p2));
  // 如果有2张牌，并且是大小王，那么就是王炸！
  return pL.length === 2 &&
    poker2num(pL[0]) === pokerNum.POKER_S &&
    poker2num(pL[1]) === pokerNum.POKER_X;
}

// 判断是否含有大小王
export function hasSX(pL) {
  // 先排序
  pL.sort((p1, p2) => comparePokers(p1, p2));
  // 最大的如果不是大王或小王，那就没有
  return poker2num(pL[pL.length-1]) === pokerNum.POKER_S ||
         poker2num(pL[pL.length-1]) === pokerNum.POKER_X;
}
// getSuit
export function getSuit(p) {
  if (typeof p !== 'number') {
    throw new TypeError('Must be Number!!!')
  }
  if (p === pokerStr.POKER_S || p === pokerStr.POKER_X){
    return null;
  }
  return pokerSuit[pokerSuitTable[p % 4]];
}
// number类型的牌转obj类型
export function poker2pokerObj(p) {
  if (typeof p !== 'number') {
    throw new TypeError('Must be Number!!!')
  }
  if (p === pokerStr.POKER_S || p === pokerStr.POKER_X){
    return { number: formatPokers(p) };
  }
  return { 
    number: formatPokers(p),
    suit: getSuit(p),
  };
}
// 把牌按照数量分组
// 返回 [count1List, count2List, count3List, count4List]
export function dividePoker(pokerList) {
 // 1.对牌进行排序
  pokerList.sort((p1, p2) => comparePokers(p1, p2));
  // 2.对牌进行归类，大小相同的在一个数组里
  let dividePoker = []; // 分类好的牌==>这一阶段的输出
  
  // 因为默认是排好序的，所以直接就可以取到最大的
  let curList = [pokerList[0]]; // 当前牌组
  for(let i=1; i<pokerList.length; i++){
    if(comparePokers(pokerList[i], pokerList[i-1]) === 0){
      // 如果本张牌与上张牌相同，把他放到当前排组里面
      curList.push(pokerList[i]);
    }else{
      //如果不同，把当前牌组放到总列表里，重置牌组
      dividePoker.push(curList);
      curList = [pokerList[i]];
    }
  }
  dividePoker.push(curList); // 把最后一组也放到总列表里
  // 3.把牌按连续出现次属分类归好类
  let count1List = []; // 连续出现1次的牌组
  let count2List = []; // 连续出现2次的牌组
  let count3List = []; // 连续出现3次的牌组
  let count4List = []; // 连续出现4次的牌组
  for(let i=0; i<dividePoker.length; i++){
    if (dividePoker[i].length === 1){
      count1List.push(dividePoker[i]);
    } else if (dividePoker[i].length === 2){
      count2List.push(dividePoker[i]);
    } else if (dividePoker[i].length === 3){
      count3List.push(dividePoker[i]);
    } else if (dividePoker[i].length === 4){
      count4List.push(dividePoker[i]);
    }
  } 
  return [count1List, count2List, count3List, count4List];
}

// 判断牌的类型
export function getPokerType(pokerList, dividedPoker=null) {
  // 拿到分好类的牌
  if (!dividedPoker) { //如果不给就自己算一个
    dividedPoker = dividePoker(pokerList);
  }
  // 把牌按照数量分组
  const [count1List, count2List, count3List, count4List] = dividedPoker;
  // 提前算好各种列表的长度
  const pLen = pokerList.length,
        c1len = count1List.length,
        c2len = count2List.length,
        c3len = count3List.length,
        c4len = count4List.length;
  // 4.判断牌型
  if (pLen === 1){
    // a - 单 如果只有一张牌，那么毫无疑问一定是单
    return type.One;
  } else if (pLen === 2){
    if (c2len === 1){
      // aa - 对 如果两张牌，并且都一样，是对
      return type.Two;
    } else if (isSX(pokerList)){
      // 还有可能为王炸
      return type.SX;
    }
  } else if (pLen === 3 && c3len === 1){
    // aaa - 三个
    return type.Three;
  } else if (pLen === 4){
    if(c3len === 1 && c1len === 1){
      // aaab - 三带一
      return type.ThreeWithOne;
    } else if(c4len === 1){
      // aaaa - 炸弹
      return type.Four;
    }
  } else if (pLen === 5 && c3len === 1 && c2len === 1){
    // aaabb - 三带二
    return type.ThreeWithTwo;
  } else if (pLen === 6 && c4len === 1 && c1len === 2){
    // aaaabc - 四带二
    return type.FourWithOne;
  } else if (pLen === 8 && c4len === 1 && c2len === 2){
    // aaaabbcc - 四带两对
    return type.FourWithTwo;
  }

  if (
    pLen >= 5 && //至少5张牌
    !hasSX(pokerList) && //没有大王小王
    c1len === pLen &&  //单张牌数和总牌数相等，但是有可能不是连续的
    // 判段牌是否为连续，如果"第一张牌大小+牌的长度-1 === 最后一张牌大小"，那么为连续的牌
    // 刚才已经判断了，这里没有一张重复牌,并且从大到小排列，如果牌是连续的，那么没张牌之间都增加1，
    // 从第1张开始，每遇到一张牌就加1，加到最后，应该和最后一张大小相等
    // 由于第一张牌不用增加所以长度-1，所以第一张牌+牌长度-1就一定等于最后一张牌，如果不等于，那就是不连续
    poker2num(pokerList[0]) + pLen - 1 === poker2num(pokerList[pLen - 1])
  ) {
    // abcde - 顺子
    return type.OneList;
  } else if (
    pLen >=6 && pLen % 2 === 0 && // 至少3对，6张牌，长度为2的倍数
    !hasSX(pokerList) && //没有大王小王
    c2len === pLen / 2 && // 两张牌数和总牌数相等
    poker2num(count2List[0][0]) + c2len - 1 === poker2num(count2List[c2len-1][0]) // 判段牌是否为连续的
  ){
    // aabbcc - 连对
    return type.TwoList;
  } else if (
    pLen >=6 && pLen % 3 === 0 && // 至少2张三个，6张牌，长度为3的倍数
    !hasSX(pokerList) && //没有大王小王
    c3len === pLen / 3 && // 两张牌数和总牌数相等
    poker2num(count3List[0][0]) + c3len - 1 === poker2num(count3List[c3len-1][0]) // 判段牌是否为连续的
  ){
    // aaabbb - 飞机(不带翅膀)
    return type.ThreeList;
  } else if (
    c3len >= 2 && // 至少2组三个
    !hasSX(count3List[c3len-1]) && //没有大王小王
    poker2num(count3List[0][0]) + c3len - 1 === poker2num(count3List[c3len-1][0]) // 判段三个部分是否为连续的
  ){
    if (pLen - c3len * 3 === c1len){
      // aaabbbcd - 飞机(带翅膀)
      // 总长度-三个部分长度=一个部分长度，说明剩余都是一个，那么就是飞机
      return type.ThreeWithOneList;
    } else if (pLen - c3len * 3 === c2len * 2){
      // aaabbbccdd - 飞机(带翅膀)
      // 总长度-三个部分长度=二个部分长度，说明剩余都是二个，那么就是飞机
      return type.ThreeWithTwoList;
    }
  }
  // 全部牌型都匹配不上，那么就说明牌型不合法
  return type.None;
}

// 比较两组牌的大小
export function comparePoker(thisPoker, lastPoker,
    thisType=null, lastType=null, thisDivide=null, lastDivide=null){
  // 如果不给，就现场算一个出来
  if (!thisType) { thisType = getPokerType(thisPoker); }
  if (!lastType) { lastType = getPokerType(lastPoker); }
  if (!thisDivide) { thisDivide = dividePoker(thisPoker); }
  if (!lastDivide) { lastDivide = dividePoker(lastPoker); }
  // 还是简单的判断一下以免后期出错
  if (thisType === type.None || thisType !== lastType){
    return false;
  }
  // 解包
  const [thisC1List, thisC2List, thisC3List, thisC4List] = thisDivide;
  const [lastC1List, lastC2List, lastC3List, lastC4List] = lastDivide;
  // 如果List类牌型需要判断牌数是否相同
  if (thisType === type.OneList || thisType === type.TwoList || thisType === type.ThreeList ||
      thisType === type.ThreeWithOneList || thisType === type.ThreeWithTwoList) {
    if (thisPoker.length !== lastPoker.length) { 
      return false;
    }
  }
  // 开始比较！
  if (thisType === type.One || thisType === type.OneList) {  // 单 / 顺子
    return poker2num(thisC1List[0][0]) > poker2num(lastC1List[0][0]);
  } else if (thisType === type.Two || thisType === type.TwoList) {  // 对子 / 连对
    return poker2num(thisC2List[0][0]) > poker2num(lastC2List[0][0]);
  } else if (thisType === type.Three || thisType === type.ThreeWithOne || thisType === type.ThreeWithTwo || 
             thisType === type.ThreeList  || thisType === type.ThreeWithOneList  || thisType === type.ThreeWithTwoList) {
    // 三个 / 三带一 / 三带一对 / 飞机
    return poker2num(thisC3List[0][0]) > poker2num(lastC3List[0][0]);
  } else if (thisType === type.Four || thisType === type.FourWithOne || thisType === type.FourWithTwo) {
    // 炸弹 / 四带二 / 四带二对
    return poker2num(thisC4List[0][0]) > poker2num(lastC4List[0][0]);
  }
  //解释一下：为什么判断顺子可以和判断单的代码写在一起？
  //        因为，既然已经判定了顺子，那么数列一定是连续的，
  //        所以，只要判断新数列第一个或最后一个比旧数列的大就可以，无需全部判断
  //        其他同理

  return false; // 兜个底吧
}

// 出牌是否合法
export function isCanOutPoker(thisPoker, lastPoker){
  // 上两人不出，本人出，一定合法
  if (!lastPoker && thisPoker){
    return true;
  }
  // 上两人不出，本人不出，不合法，本人一定要出
  if (!lastPoker && !thisPoker){
    // 提示：您必须要出牌
    return false;
  }
  // 上两人出，本人不出，可以，合法
  if (lastPoker && !thisPoker){
    return true;
  }
  // 上两人出，本人也出，那么就要判断了
  // 解释一下：这里为了节约资源，由于下面比较大小也要用到牌按照数量分组的数据，
  //          所以我在这里先算好，通过参数传过去，避免重复计算，浪费性能
  //          当然，函数里有判断，如果没有传，那边会自行去算的
  const thisDivide = dividePoker(thisPoker);
  const lastDivide = dividePoker(lastPoker);
  // 比较类型
  const thisPokerType = getPokerType(thisPoker, thisDivide);
  const lastPokerType = getPokerType(lastPoker, lastDivide);
  if (thisPokerType !== type.None && thisPokerType === lastPokerType){
    // 没有类型错误且类型相同，比较大小
    if(comparePoker(thisPoker, lastPoker, thisPokerType, lastPokerType, thisDivide, lastDivide)){
      // 大小没问题，通过
      return true;
    } else { // 大小不对，不通过
      // 提示：您出的牌太小，管不上对方出的！
      return false;
    }
  } else {
    // 类型不同
    if (thisPokerType === type.SX){
      // 如果是王炸，直接放行通过
      return true;
    } else if (thisPokerType === type.Four && lastPokerType !== type.SX){
      // 是炸弹，并且上一局不是王炸
      // 判断炸弹大小，是否可以制衡
      if(comparePoker(thisPoker, lastPoker,
        thisPokerType, lastPokerType, thisDivide, lastDivide)){
        // 大小没问题，通过
        return true;
      }else { // 大小不对，不通过
        // 提示：您出的牌太小，管不上对方出的！
        return false;
      }
    }
    // 最后，如果不是炸弹，牌型就不对！
    // 提示：牌型不正确！
    return false;
  }
  return false; // 兜个底吧，防止出问题
}

