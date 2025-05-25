<template>
  <div class="game" v-resize-ob="setPokerHeight">
    <div class="main">
      <div class="left">
        <div class="player left-player">
          <!-- 左玩家 -->
          <Player username="01曹博潇" />
          <div class="info">
            <Status status="nongmin" />
            <PokerNumShow :num="17" />
          </div>
        </div>
        <div class="player myself-player">
          <!-- 玩家自己 -->
          <Player username="test" />
          <div class="info">
            <Status status="nongmin" />
          </div>
        </div>
      </div>
      <div class="center">
        <!-- 中间区域 -->
        <div class="dizhu-poker">
          <!-- 地主牌区域 -->
          <div class="dizhuPokerList" ref="dizhuPokerRef">
            <span v-for="poker in dizhuPokerList">
              <PokerCard :card="poker" :height="dizhuPokerHeight" />
            </span>
          </div>
        </div>
        <div class="player-poker">
          <div class="left-poker">
            <!-- 左玩家出牌区域 -->
            <!-- <PokerList :card-list="dizhuPokerList" :max-col="10" :height="playerPokerHeight" /> -->
            <d-text>不出</d-text>
          </div>
          <div class="right-poker">
            <!-- 右玩家出牌区域 -->
            <!-- <PokerList :card-list="cardList" :max-col="10" :height="playerPokerHeight" /> -->
            <d-clock>20</d-clock> 
          </div>
        </div>
        <div class="myself-poker" ref="myselfPokerRef">
          <!-- 玩家自己出牌区域 -->
          <!-- <PokerList :card-list="cardList" :height="playerPokerHeight" /> -->
          <div class="control" v-if="false">
            <!-- 按钮区域 -->
            <d-clock>20</d-clock> 
            <d-button>不叫</d-button>
            <d-button>1分</d-button>
            <d-button>2分</d-button>
            <d-button>3分</d-button>    
          </div>
          <div class="control" v-if="true">
            <d-clock>20</d-clock> 
            <d-button yellow>出牌</d-button>
            <d-button>不出</d-button>
            <d-button disable>提示</d-button>   
          </div>
          <div class="message">
            <d-text>不符合出牌规则！</d-text>
          </div>
        </div>
        <div class="select-poker" ref="selectPokerRef">
          <!-- 选择牌区域 -->
          <PokerList 
            :card-list="cardList" 
            v-model="selectedPoker" 
            :height="pokerListHeight" 
          />
        </div>
      </div>
      <div class="right">
        <div class="player right-player">
          <!-- 右玩家 -->
          <Player username="测试1" :presenter="true" />
          <div class="info">
            <Status status="dizhu" />
            <PokerNumShow :num="20" />
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      bottom
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import vResizeOb from "../utils/vResizeObserver.js";
import Game from "../ddz/game.js"
import * as p from "../ddz/poker.js"
import { poker } from "../constant.js";

import Player from "./ui/player/Player.vue"
import Status from "./ui/player/Status.vue"
import PokerNumShow from "./ui/player/PokerNumShow.vue"
import PokerCard from "./ui/poker/PokerCard.vue"
import PokerList from "./ui/poker/PokerList.vue"
import dButton from "./ui/public/dButton.vue"
import dClock from "./ui/public/dClock.vue"
import dText from "./ui/public/dText.vue"

const game = new Game()

console.log(p.isCanOutPoker(["K","K","A","A","2","2"],["4","4","5","5","6","6"]))
console.log(p.isPoker("g"))

const cardList = ref([]);
// 随机生成牌组
for (let i = 0; i < 17; i++) {
  // 已经存在
  const randint = Math.floor(Math.random() * 54)
  if (cardList.value.includes(randint)) { i--; continue; }
  if (randint == 0) { cardList.value.push(54); continue; }
  cardList.value.push(randint)
}
cardList.value.sort((p1, p2) => p.comparePokers(p1, p2));
cardList.value.reverse();
console.log(cardList.value);

const selectedPoker = ref([]);

const dizhuPokerList = ref([3,10,36]);

// pokerList高度
const pokerListHeight = ref(0);
const playerPokerHeight = ref(0);
const dizhuPokerHeight = ref(0);
const selectPokerRef = ref(null);
const myselfPokerRef = ref(null);
const dizhuPokerRef = ref(null);
const setPokerHeight = () => {
  pokerListHeight.value = parseInt(window.getComputedStyle(selectPokerRef.value).height) - 20;
  playerPokerHeight.value = parseInt(window.getComputedStyle(myselfPokerRef.value).height);
  dizhuPokerHeight.value = parseInt(window.getComputedStyle(dizhuPokerRef.value).height);
}

onMounted(() => {
  setPokerHeight();
})

</script>

<style lang="scss" scoped>
.game {
    // transform: rotate(-90deg) translate(-50%, -10%);
    // --game-height: 100vw;
    // --game-width: 100vh;
  --game-height: 100vh;
  --game-width: 100vw;
  display: flex;
  flex-direction: column;
  height: var(--game-height);
  width: var(--game-width);
  background-color: rgb(100, 160, 180);
  .main {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: calc(var(--game-width) * 3 / 170 );
    padding-bottom: calc(var(--game-height) * 1 / 45 );
    padding-top: 0;
    .left,.right {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: calc(var(--game-width) * 24 / 170 );
      .player {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        margin-top: calc(var(--game-height) * 4 / 45 );
        .player-info-area {
          --person-height: calc(var(--game-height) * 8 / 45 );
          --person-width: calc(var(--game-width) * 15 / 170 );
          --person-userimage-size: calc(var(--person-width) * 3 / 4 );
        }
      }
      .right-player {
        flex-direction: row-reverse !important;
      }
    }
    .center {
      width: calc(var(--game-width) * 110 / 170 );
      margin: 0 calc(var(--game-width) * 3 / 170 );
      .dizhu-poker {
        height: calc(var(--game-height) * 6 / 45 );
        .dizhuPokerList {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: calc(var(--game-height) * 0.5 / 45 );
          // width: 100%;
          height: calc(var(--game-height) * 8 / 45 );
          padding: calc(var(--game-height) * 0.5 / 45 );
        }
      }
      .player-poker {
        height: calc(var(--game-height) * 12 / 45 );
        display: flex;
        flex-direction: row;
        .left-poker{
          width: 100%;
          display: flex;
          flex-direction: row;
        }
        .right-poker{
          width: 100%;
          display: flex;
          flex-direction: row-reverse;
        }
      }
      .myself-poker {
        height: calc(var(--game-height) * 8 / 45 );
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        .control {
          height: calc(var(--game-height) * 5 / 45 );
        }
        .message {
          .d-text {
            --d-text-height: calc(var(--game-height) * 2.75 / 45 );
          }
        }
      }
      .select-poker {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        height: calc(var(--game-height) * 13 / 45 ); // 45:13
        .pokerList {
          margin: 0 auto;
        }
      }
    }
  }
  .bottom {
    height: calc(var(--game-height) * 5 / 45 ); // 45:5
    border-top: 2px solid #888;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  
  .d-button, .d-clock, .d-text{
    --d-button-height: calc(var(--game-height) * 3 / 45 );
    --d-clock-height: calc(var(--game-height) * 5 / 45 );
    --d-text-height: calc(var(--game-height) * 5 / 45 );
  }
}
</style>