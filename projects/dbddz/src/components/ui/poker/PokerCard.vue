<script>
import { pokerStr, pokerSuit } from "../../../constant.js";
import * as pokerMethod from "../../../ddz/poker.js";
// 引入图片
import IMG_RED_J from "../../../assets/poker/j_red.png";  // 红J
import IMG_BLACK_J from "../../../assets/poker/j_black.png";  // 黑J
import IMG_RED_Q from "../../../assets/poker/q_red.png";  // 红Q
import IMG_BLACK_Q from "../../../assets/poker/q_black.png";  // 黑Q
import IMG_RED_K from "../../../assets/poker/k_red.png";  // 红K
import IMG_BLACK_K from "../../../assets/poker/k_black.png";  // 黑K
import IMG_BIG_JOKER from "../../../assets/poker/big_joker.png";  // 大王
import IMG_SMALL_JOKER from "../../../assets/poker/small_joker.png";  // 小王

export default {
  props: {
    card: { required: true },
    height: { default: 112.5 },
  },
  data() {
    return {
      // 各种图案的svg
      // 感谢以下链接提供图片
      // 黑桃 ♠：https://www.emojiall.com/images/svg/microsoft-teams-flat/2660-fe0f.svg https://www.emojiall.com/zh-hans/image/%E2%99%A0%EF%B8%8F
      ICON_SPADE: `M28.6185 14.9654L18.9002 3.34952C17.3896 1.55016 14.6101 1.55016 13.0995 3.34952L3.38128 14.9654C0.168729 18.804 2.91803 24.6219 7.94331 24.6219C10.2696 24.6219 12.3845 23.2624 13.3513 21.1632L13.9958 19.7537V22.9225C13.9958 25.0218 12.3039 26.7212 10.1991 26.7612H10.1186C9.22229 26.7612 8.48711 27.4909 8.48711 28.3806C8.48711 29.2703 9.22229 30 10.1186 30H10.1286H10.2092H14.9022H17.1077H21.8006H21.8812H21.8912C22.7875 30 23.5227 29.2703 23.5227 28.3806C23.5227 27.4909 22.7875 26.7612 21.8912 26.7612H21.8107C19.7059 26.7212 18.014 25.0218 18.014 22.9225V19.7537L18.6585 21.1632C19.6152 23.2724 21.7301 24.6219 24.0665 24.6219C29.0817 24.6219 31.831 18.804 28.6185 14.9654Z`,
      // 红桃 ♥：https://www.emojiall.com/images/svg/microsoft-teams-flat/2665-fe0f.svg https://www.emojiall.com/zh-hans/image/%E2%99%A5
      ICON_HEART: `M21.0084 5.16227C18.1675 5.67067 15.9969 9.06675 15.9969 9.06675C15.9969 9.06675 13.8162 5.67067 10.9854 5.16227C3.97328 3.91162 1.08242 10.1547 2.25277 14.8015C3.98329 21.6648 12.3058 27.8164 15.0866 29.7178C15.6367 30.0941 16.357 30.0941 16.9171 29.7178C19.708 27.8164 28.0304 21.6648 29.7509 14.8015C30.9113 10.1547 28.0204 3.91162 21.0084 5.16227Z`,
      // 方片 ♦：https://www.emojiall.com/images/svg/microsoft-teams-flat/2666-fe0f.svg https://www.emojiall.com/zh-hans/image/%E2%99%A6
      ICON_DIAMOND: `M14.3784 2.77202L4.52279 14.5547C3.82574 15.3841 3.82574 16.6134 4.52279 17.4528L14.3784 29.2355C15.2303 30.2548 16.7697 30.2548 17.6216 29.2355L27.4772 17.4528C28.1743 16.6234 28.1743 15.3941 27.4772 14.5547L17.6216 2.77202C16.7697 1.74266 15.2303 1.74266 14.3784 2.77202Z`,
      // 梅花 ♣：https://www.emojiall.com/images/svg/microsoft-teams-flat/2663-fe0f.svg https://www.emojiall.com/zh-hans/image/%E2%99%A3
      ICON_CLUB: `M23.6195 23.4264C27.0671 23.2563 29.8619 20.4848 29.9945 17.1029C30.1475 13.3309 27.0773 10.2292 23.2727 10.2292H23.2625C22.8851 10.2292 22.6097 9.90902 22.6607 9.54883C22.7219 9.1386 22.7423 8.71835 22.7219 8.27811C22.5485 4.87625 19.723 2.13477 16.255 2.0047C12.4198 1.86462 9.26794 4.87626 9.26794 8.59829C9.26794 8.91847 9.28834 9.23866 9.33934 9.54883C9.39034 9.90902 9.09454 10.2092 8.73754 10.2092H8.72734C4.92271 10.2092 1.85248 13.3109 2.00548 17.0829C2.13808 20.4748 4.93291 23.2363 8.38053 23.4064C10.3798 23.5064 12.2056 22.746 13.501 21.4653C13.6744 21.2952 13.96 21.4153 13.96 21.6454V22.9061C13.96 25.0072 12.2464 26.7182 10.1043 26.7582H10.0737C9.16594 26.7582 8.38053 27.4586 8.36013 28.3491C8.33973 29.2596 9.09454 30 10.0125 30H10.0227H10.1043H14.8678H17.1016H21.8651H21.9467H21.9569C22.6709 30 23.3237 29.5598 23.5277 28.8994C23.8847 27.7788 23.0381 26.7582 21.9569 26.7582H21.8753C19.7434 26.7182 18.0196 25.0072 18.0196 22.9061V21.6454C18.0196 21.4053 18.3154 21.2952 18.4786 21.4653C19.8046 22.7661 21.6202 23.5265 23.6195 23.4264Z`,
      // 扑克中用到的图片
      // 感谢游戏：夺宝斗地主 提供图片素材
      IMG_RED_J, IMG_BLACK_J, IMG_RED_Q, IMG_BLACK_Q, IMG_RED_K, IMG_BLACK_K, IMG_BIG_JOKER, IMG_SMALL_JOKER,
      // 下方是程序用数据了
      isShow: true, // 是否显示
    }
  },
  computed: {
    pokerCard(){ // 扑克牌 注：将来做参数归一化用到
      // 格式化扑克牌
      // 扑克牌格式：{ number: 'A', suit: 'D' }
      if (typeof this.card === 'number') {
        return pokerMethod.poker2pokerObj(this.card);
      };
      const number = this.card?.number || '';
      const suit = this.card?.suit || '';
      if (number === '' || suit === '') {
        this.isShow = true;
      };
      return { number, suit };
    },
    cardNum(){ // 扑克牌数字
      return pokerMethod.formatPokers(this.pokerCard.number);
    },
    cardSuit(){ // 扑克牌花色
      if (this.isJoker){
        return '';
      }
      return this.pokerCard.suit;
    },
    // ^^^上面的参数只在js代码中使用
    number(){ // 扑克牌显示的数字
      if (this.cardNum === pokerStr.POKER_S || this.cardNum === pokerStr.POKER_X) {
        return 'JOKER';
      }
      return this.cardNum;
    },
    isJoker(){ // 是否是大小王
      return this.cardNum === pokerStr.POKER_S || this.cardNum === pokerStr.POKER_X;
    },
    isRed(){ // 是否是红
      // 为红情况：红桃H，方片D，大王X
      return this.cardNum === pokerStr.POKER_X || this.cardSuit === pokerSuit.SuitHeart || this.cardSuit === pokerSuit.SuitDiamond;
    },
    isBlack(){ // 是否是黑
      // 为黑情况：黑桃S，梅花C，小王S
      return this.cardNum === pokerStr.POKER_S || this.cardSuit === pokerSuit.SuitSpade || this.cardSuit === pokerSuit.SuitClub;
    },
    isTen(){ // 是否是10
      return this.cardNum === pokerStr.POKER_10;
    },
    isShowSuitIcon(){ // 是否显示扑克牌的花色图标
      // 如果是大小王，就不显示
      return !this.isJoker;
    },
    suitIcon(){ // 扑克牌的花色图标
      if (!this.isShowSuitIcon) {
        return '';
      }
      const list = { [pokerSuit.SuitSpade]: 'ICON_SPADE', [pokerSuit.SuitHeart]: 'ICON_HEART', [pokerSuit.SuitDiamond]: 'ICON_DIAMOND', [pokerSuit.SuitClub]: 'ICON_CLUB' };
      return this[list[this.cardSuit]]; // 返回花色图标
    },
    suitIconFillColor(){ // 扑克牌的花色图标填充颜色
      return this.isRed ? 'rgb(192, 25, 27)' : 'rgb(33, 35, 33)';
    },
    isShowImg(){ // 扑克牌是否显示图片
      // J，Q，K，大小王 可以显示图片
      if (this.cardNum === pokerStr.POKER_J || this.cardNum === pokerStr.POKER_Q || this.cardNum === pokerStr.POKER_K || this.isJoker) {
        return true;
      }
      // 其余为svg
      return false;
    },
    imgSrc(){ // 扑克牌图片
      if (!this.isShowImg) {
        return '';
      }
      if (this.isRed){
        // (红) J，Q，K，大王X
        const list = {[pokerStr.POKER_J]: 'IMG_RED_J', [pokerStr.POKER_Q]: 'IMG_RED_Q', [pokerStr.POKER_K]: 'IMG_RED_K', [pokerStr.POKER_X]: 'IMG_BIG_JOKER'};
        return this[list[this.cardNum]]; // 返回图片
      } else {
        // (黑) J，Q，K，小王S
        const list = {[pokerStr.POKER_J]: 'IMG_BLACK_J', [pokerStr.POKER_Q]: 'IMG_BLACK_Q', [pokerStr.POKER_K]: 'IMG_BLACK_K', [pokerStr.POKER_S]: 'IMG_SMALL_JOKER'};
        return this[list[this.cardNum]]; // 返回图片
      }
    },
  }
}
</script>
 
<template>
  <div class="pokerCard" :style="{ '--card-height': (height?height:112.5) + 'px' }" v-if="isShow">
    <div class="card-number">
      <p :class="{ 'red': isRed, 'black': isBlack, 'joker': isJoker, 'ten': isTen }">{{ number }}</p>
      <svg style="display: block;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" v-if="isShowSuitIcon"><path :d="suitIcon" :fill="suitIconFillColor" /></svg>
    </div>
    <div class="card-suit">
      <img :src="imgSrc" v-if="isShowImg" />
      <svg style="display: block;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" v-else><path :d="suitIcon" :fill="suitIconFillColor" /></svg>
    </div>
  </div>
</template>

<style scoped>
.pokerCard {
  --card-width: calc(var(--card-height) * 2 / 3);
  /* --card-height: calc(var(--card-width) * 3 / 2);  2:3 */
  width: var(--card-width);
  height: var(--card-height);
  border-radius: calc(var(--card-width) / 10);
  background-color: rgb(244, 246, 244);
  box-shadow: 0px 0px 2px rgb(0, 0, 0);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  cursor: context-menu;
  user-select: none;
}
.pokerCard .card-number {
  width: calc(var(--card-width) * 1.25 / 4); /* 1.25:4 */
  z-index: 1;
}
.pokerCard .card-number > p {
  --number-color-black: rgb(33, 35, 33);
  --number-color-red: rgb(192, 25, 27);
  margin: 0;
  margin-top: calc(var(--card-width) / 20);
  font-weight: bold;
  text-align: center;
  line-height: calc(var(--card-height) * 1 / 5);
  font-size: calc(var(--card-width) * 20 / 75); /* 75：20 */
  font-family: "Microsoft YaHei";
  color: var(--number-color, --number-color-black);
}
.pokerCard .card-number > p.ten {
  margin-left: -1px;
}
.pokerCard .card-number > p.black {
  color: var(--number-color-black);
}
.pokerCard .card-number > p.red {
  color: var(--number-color-red);
}
.pokerCard .card-number > p.joker {
  word-break: break-all;
  line-height: calc(var(--card-width) * 14 / 75);
  font-size: calc(var(--card-width) * 16 / 75);
  width: calc(var(--card-width) * 0.95 / 4);
  margin-right: auto;
  margin-left: auto;
}
.pokerCard .card-number > svg{
  display: block;
  margin-left: calc(var(--card-width) / 75);
}
.pokerCard .card-suit {
  width: calc(var(--card-width) * 2.75 / 4); /* 3:4 */
  position: relative;
}
.pokerCard .card-suit > svg {
  display: block;
  position: absolute;
  bottom: calc(var(--card-height) / 9);
}
.pokerCard .card-suit > img {
  display: block;
  position: absolute;
  bottom: calc(var(--card-height) * 3 / 25);
  height: calc(var(--card-height) * 18 / 25);
  margin-left: calc(-1 * var(--card-width) * 1 / 5);
  z-index: 0;
  user-select: none;
  pointer-events:none;
}
</style>