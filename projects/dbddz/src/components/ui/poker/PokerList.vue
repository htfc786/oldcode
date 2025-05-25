<script>
import PokerCard from "./PokerCard.vue";
export default {
  props: {
    cardList: Array,
    modelValue: Array, // 选中的牌
    height: { default: 112.5 },
    maxCol: Number,
  },
  emits: ['update:modelValue'],
  components: { PokerCard },
  data() {
    return {
      selectedCards: [], // 选中的牌
      _selectingCards: [], // 正在选的牌
      _mouseDowned: false, // 鼠标是否按下
      _mouseLeaveElement: null, // 鼠标离开的元素
      _touched: false, // 是否触摸
      _lastTouchPoker: null, // 上一次触摸的牌
      _lastTouchElement: { lastOne: null, lastTwo: null }, // 上两次触摸的元素
    }
  },
  methods: {
    // 选中牌
    mergeSelected(cards) {
      if (!this.canSelect) return;
      // 合并选中的牌
      for (let i=0; i<cards.length; i++){
        if (this.selectedCards.includes(cards[i])) {  // 移除
          this.selectedCards = this.selectedCards.filter(c => c !== cards[i]);
        } else { // 添加
          this.selectedCards.push(cards[i]);
        }
      }
      // 触发事件
      this.$emit('update:modelValue', this.selectedCards);
    },
    // 选择牌
    _selectingCards_pushCard(card) {
      // 添加牌或移除牌
      // 如果牌不存在，添加；如果牌已经存在，则移除
      if (this._selectingCards.includes(card)) {
        this._selectingCards = this._selectingCards.filter(c => c !== card);
      } else {
        this._selectingCards.push(card);
      }
    },
    _pokerMousedown(card, notEvent) { 
      if (!this.canSelect) return;
      // 鼠标按下，开始选择牌
      this._mouseDowned = true;
      window.addEventListener('mouseup', this._pokerMouseup); // 监听鼠标松开事件
      // 如果是从window的事件里过来，是在其他地方点击，card值为MouseEvent，
      // 如果是从pokerCard的事件里过来，是在pokerCard上点击，card值为牌的值，并且会手动传递notEvent过来
      if (notEvent){
        this._selectingCards_pushCard(card);
      }
    },
    _pokerMouseenter(card) {
      if (!this.canSelect) return;
      if (!this._mouseDowned) return; // 鼠标未按下，不处理 
      // 鼠标进入，选择牌
      this._selectingCards_pushCard(card);
    },
    _PokerMouseleave(event, card) {
      if (!this.canSelect) return;
      // 为了解决牌被选中时，鼠标移出牌想取消选择，牌仍然保持选中状态的问题
      // 根据鼠标离开方向进行判断
      // 如果鼠标移出方向和进入方向相同，可能是用户吧鼠标往回挪了，
      //  说明可能要改变前面牌的状态，由此推测这张牌的状态可能也应该改变，则改变状态
      // 如果鼠标移出方向和进入方向不同，说明用户是想选中其他牌，不改变状态
      if (!this._mouseDowned) return; // 鼠标未按下，不处理 
      // console.log('mouseleave',event);
      // 可是，我发现什么的思路好像麻烦了啊！通过在控制台输出event，发现鼠标事件自带fromElement和toElement
      // 每次鼠标移出时记录鼠标移出的元素，
      // 然后拿本次toElement和上次fromElement比较，如果相同，则说明是用户把鼠标往回挪了，则改变状态，
      // 如果不同，则说明用户是想选中其他牌，不改变状态
      // 判断鼠标移出方向
      if (event.toElement === this._mouseLeaveElement) {
        // 鼠标移出方向和进入方向相同，可能是用户吧鼠标往回挪了，
        // 由此推测这张牌的状态可能也应该改变，则改变状态
        this._selectingCards_pushCard(card);
      }
      // 记录鼠标移出的元素
      this._mouseLeaveElement = event.fromElement;
    },
    _pokerMouseup() {
      if (!this.canSelect) return;
      // 鼠标松开，结束选择牌
      this._mouseDowned = false;
      window.removeEventListener('mouseup', this._pokerMouseup); // 移除鼠标松开事件
      this._mouseLeaveElement = null;
      // 处理选中的牌
      if (this._selectingCards.length === 0) return; // 没有选中的牌，不处理
      // 选中的牌
      this.mergeSelected(this._selectingCards)
      this._selectingCards = []; 
    },
    _pokerTouch(event) {
      if (!this.canSelect) return;
      if (event.type === 'touchstart') {
        // 触摸开始
        window.addEventListener('touchmove', this._pokerTouch);
        window.addEventListener('touchend', this._pokerTouchend);
        this._touched = true;
      }
      if (!this._touched) return; // 没有触摸，不处理
      // 判断触摸区域是否在牌元素内部
      // 获取点击位置
      const touchPoints = Array.from(event.changedTouches);
      touchPoints.forEach((touch) => {
        let touchDom = null // 触摸的dom元素
        let _maxZIndex = -1; // 记录最大z-index的牌元素
        // 获取全部子元素
        const pokerListDom = Array.from(this.$refs.pokerList.children); 
        // 由于.children最后获取到的是假数组HTMLCollection，使用使用Array.from()执行一下浅拷贝
        // 遍历子元素，判断触摸位置是否在子元素内部
        pokerListDom.forEach((dom)=>{
          // 获取子元素的边界信息
          const rect = dom.getBoundingClientRect();
          // 判断触摸位置是否在子元素内部
          if (touch.clientX >= rect.left && touch.clientX <= rect.right &&
              touch.clientY >= rect.top && touch.clientY <= rect.bottom){
            // 触摸位置在子元素内部
            const { zIndex } = window.getComputedStyle(dom);
            // 子元素在选中的牌中，更新最大z-index
            if (parseInt(zIndex) > _maxZIndex) {
              _maxZIndex = parseInt(zIndex);
              // 更新最大z-index的牌元素
              touchDom = dom;
            }
          }
        });
        if (!touchDom) return; // 没有触摸到牌元素，不处理
        // 获取牌
        const pokerIndex = parseInt(touchDom.dataset.index);
        const poker = this.cardList[pokerIndex];
        // 如果短时间选中一个牌，就不用重复加入
        if (poker === this._lastTouchPoker) return;
        // 加入
        this._selectingCards_pushCard(poker);
        // 移动端也要解决牌被选中时，移出牌想取消选择，牌仍然保持选中状态的问题
        if (this._lastTouchElement.lastTwo === touchDom){
          this._selectingCards_pushCard(this._lastTouchPoker);
        }
        this._lastTouchElement.lastTwo = this._lastTouchElement.lastOne;
        this._lastTouchElement.lastOne = touchDom;

        this._lastTouchPoker = poker;
      });
    },
    _pokerTouchend(event) {
      if (event.cancelable) event.preventDefault();
      if (!this.canSelect) return;
      // 复位
      window.removeEventListener('touchmove', this._pokerTouch);
      window.removeEventListener('touchend', this._pokerTouchend);
      this._touched = false;
      this._lastTouchPoker = null;
      this._lastTouchElement = { lastOne: null, lastTwo: null };
      // 处理选中的牌
      if (this._selectingCards.length === 0) return; // 没有选中的牌，不处理
      // 选中的牌
      this.mergeSelected(this._selectingCards)
      this._selectingCards = []; 

    },
  },
  watch: {
    modelValue(newVal) {
      // 监听外部对props modelValue的变更，并同步到组件内的selectedCards状态中
      this.selectedCards = newVal;
    }
  },
  computed: {
    canSelect() {
      // 是否可以选牌
      // 如果modelValue有值，可以选牌
      return !!this.modelValue;
    }
  },
  mounted() {
    this.selectedCards = this.modelValue ? this.modelValue : [];
    if (!this.canSelect) return;
    window.addEventListener('mousedown', this._pokerMousedown);
    window.addEventListener('touchstart', this._pokerTouch);
  },
  unmounted() {
    if (!this.canSelect) return;
    window.removeEventListener('mousedown', this._pokerMousedown);
    window.removeEventListener('touchstart', this._pokerTouch);
  },
}
</script>

<template>
  <div class="pokerList" ref="pokerList" 
    :style="{ '--h': height, '--l': maxCol ? (cardList.length<maxCol ? cardList.length : maxCol) : cardList.length, '--cl': maxCol ? Math.floor(cardList.length / maxCol) + 1 : 1 , '--addHeight': canSelect ? '20px' : '0px' }"
    >
    <span 
      v-for="(card, index) in cardList"
      @mousedown="_pokerMousedown(card, true)" @mouseenter="_pokerMouseenter(card)" @mouseleave="_PokerMouseleave($event, card)"
      :data-index="index"
      :class="{ 'selecting': canSelect && _selectingCards.includes(card), 'selected': canSelect && selectedCards.includes(card)}"
      :style="{ '--i': index, '--ir': maxCol ? Math.floor(index / maxCol) : 0, '--ic': maxCol ? index % maxCol : index }"
      >
      <PokerCard :card="card" :height="height" />
    </span>
  </div>
</template>

<style scoped>
.pokerList {
  position: relative;
  --card-width: calc(var(--h, 112.5) * 2 / 3); /* 一张牌的宽 */
  --gap: calc(var(--card-width) * 1.35 / 4); /* 牌间隔 */
  height: calc(var(--h, 112.5) / 2 * (var(--cl, 1) + 1) * 1px + var(--addHeight)); /* 高 */
  width: calc(((var(--l) - 1) * (var(--gap)) + var(--card-width)) * 1px); /* 使宽和内部一致 */
}
.pokerList>span {
  position: absolute; /* 迫不得已，其他定位方式都试过，都不好用，只能使用绝对定位了，我太垃圾了，只有杨乐童最强了！！！ */
  z-index: var(--i, 0); /* 层叠顺序 */
  top: calc((var(--ir) * var(--h) / 2 * 1px) + var(--addHeight));
  left: calc(var(--ic, 0) * var(--gap) * 1px); /* 位置 */
}
.pokerList>span::before {
  content: ' ';
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: calc(var(--i) + 1);
  border-radius: calc(var(--card-width) / 10 * 1px);
  background-color: transparent;
}
.pokerList>span.selecting::before {
  background-color: rgba(0,0,0,.4);
}
.pokerList>span.selected {
  top: calc((var(--ir) * var(--h) / 2 * 1px));
}
</style>

