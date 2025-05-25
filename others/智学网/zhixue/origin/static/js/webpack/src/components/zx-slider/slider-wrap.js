import Vue from 'vue';
function toArray (arraylike) {
  return Array.prototype.slice.call(arraylike);
}
// @transitionend="transitionend"
// @webkitTransitionEnd="transitionend"
Vue.component('slider-wrap', {
  template: `
		<div class="fiy-swiper-container" @touchmove="fn">
    	<div class="fiy-default-swiper-box"
				:style="{'transform': swiperStyle.transform, '-webkit-transform': swiperStyle.transform, 'transition-duration': swiperStyle.transitionDuration, '-webkit-transition-duration': swiperStyle.transitionDuration}"
				:ref="refname"
				@touchstart="thstart"
				@touchmove="thmove"
				@touchend="thend"
				@mousedown="thstart"
				@mousemove="thmove"
				@mouseup="thend"
			>
				<slot></slot>
			</div>
      <slot name="pagination">
				<!-- 默认提供了一个 pagination -->
				<div class="fiy-pagination" v-if="pagination">
					<div class="fiy-dot"
						v-for="(value, key) in reallySlidesNumber"
						:key="key"
						:class="{'fiy-dot-active': currentSlide== key}"></div>
				</div>
			</slot>
			<!-- 这两个就不默认提供了 -->
			<slot name="arrowLeft"/>
			<slot name="arrowRight"/>

			<!-- 当你需要在全局的内容里面加一些玩意的时候 -->
			<slot name="g"/>
    </div>
	`,

  props: {
    /*一次滑动的默认时间 */
    duration: {
      default: 300
    },
    /* 两次滑动的间隔时间*/
    interval: {
      default: 3000
    },
    /*是否自动播放 */
    autoplay: {
      default: true
    },
    /*用户滑动多少距离, 翻页 */
    therehold: {
      default: 60
    },
    defaultSlide: {
      default: 0
    },
    pagination: {
      default: true
    },
    /* 有时候全屏滚动, 的确想要禁用垂直方向的滚动的时候 */
    vLock: {
      default: false
    }
  },
  data () {
    return {
      swiper: null,
      swiperWidth: 0,
      slides: null,
      slidesNumber: 0,
      reallySlidesNumber: 0,
      currentSlide: 0,
      timer: null,
      userDuration: 200,
      offsetX: 0, // 记录初始位移
      pos: {
        startX: 0,
        moveX: 0,
        endX: 0,
        local: 0,
        distance: 0
      },
      moving: false,
      unlock: false,
      activeId: '',
      mousedown: false,
      refname: 'swiper' + String(Math.random()).substr(2, 5),
      isOnly: false,
      swiperStyle: {
        transform: '',
        transitionDuration: ''
      }
    }
  },
  mounted () {
    // 防止用户初始化，疯狂点击
    setTimeout(() => {
      this.init();

      if (this.isOnly) {
        return;
      }

      this.cloneSlide(); // 多个 item 进行 clone
      this.setDefaultSlide();

      if (this.autoplay) {
        this.play();
      }
    }, 100);
  },
  methods: {
    // 初始化参数
    init () {
      this.swiper = this.$refs[this.refname];
      this.swiperWidth = this.swiper.clientWidth;
      this.slides = toArray(this.swiper.children);

      if (!this.slides.length) {
        // throw new Error('[fiy-swiper:Error]: Must contain a display content in <slider-wrap>');
        return;
      }

      this.slidesNumber = this.slides.length;
      this.reallySlidesNumber = this.slides.length; // 实际的 slide 个数, 因为 slidesNumber 会在后面重新赋值
      this.isOnly = this.reallySlidesNumber === 1; // 1 个 slider 直接 show

      // 获取偏移量
      this.offsetX = this.swiper.getBoundingClientRect().left;
    },
    fn (e) { // 阻止容器的上下滚动, 并且只有在水平方向上面滚动超过 10px 才可以阻止
      if (this.vLock || Math.abs(this.pos.startX - this.pos.moveX) > 10) {
        e.preventDefault();
      }
    },
    /**
		 * clone slide dom
		 */
    cloneSlide () {
      let head = this.slides[0].cloneNode(this.slides[0], true);
      let tail = this.slides[this.slidesNumber - 1].cloneNode(this.slides[this.slidesNumber - 1], true);
      this.swiper.appendChild(head);
      this.swiper.insertBefore(tail, this.slides[0]);
      // 克隆节点之后, 需要重置一些属性
      this.slides = toArray(this.swiper.children);
      this.slidesNumber = this.slides.length;
    },

    /* 根据用户给定的 defaultSlide 设置 init slide 的值 */
    setDefaultSlide () {
      /*
				一切用户给定的值, 都是从 0 - x 开始, 比如用户数据里面有 6个数据
				那么给定的就是 0 - 5
				但是我们内部运算的时候, 实际上我们的索引能到 0 - 7
				0 是实际的 5 的拷贝, 7 实际上是实际的0的拷贝
				所以当用户给定的 defaultSlide =0, 我们实际上是要让展示内部索引为 1 的元素
			*/

      /* 如果用户设置了一个非法值, 直接抛出异常 */
      if (this.defaultSlide < 0 || this.defaultSlide > this.slidesNumber - 2 - 1) {
        throw new Error('[fiy-swiper:Error]: You have set a wrong defaultSlide value with defaultSlide = ' + this.defaultSlide);
      }
      this.translateX(-this.swiperWidth * (this.defaultSlide + 1));
    },

    /**
		 * start slider
		 */
    play () {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.moving = true;
        this.unlock = false;
        this.transitionDuration(this.duration);
        this.translateX(-(this.swiperWidth + Math.abs(this.left())));

				 setTimeout(() => {
				  	this.transitionend();
				 }, this.duration);
      }, this.interval);
    },

    /**
		 * 设置过渡时间
		 * @param {Number} ms - 过渡时间
		 */
    transitionDuration (ms) {
      this.swiperStyle.transitionDuration = ms + 'ms';
    },

    /**
		 * 设置 3D 位移
		 * @param {Number} xval - x 轴位移
		 */
    translateX (xval) {
      this.swiperStyle.transform = 'translate3d(' + xval + 'px, 0, 0)';
    },

    /**
		 * 过渡动画结束回调
		 */
    transitionend () {
      this.transitionDuration(0);
      /*
				一次滑动结束之后, 通过计算, 实际上我们可以拿到当前处于内部索引的第几个 slide
				拿到这个 currentSlide 我们就知道当前是不是滚动到最后一个了
			*/
      let currentSlide = Math.round(Math.abs(this.left()) / this.swiperWidth);

      this.currentSlide = currentSlide - 1;
      /* 如果滚动到最后一个, 那么就要瞬间跳转一下, 到外部看起来的第一个, 内部的 */
      if (currentSlide >= this.slidesNumber - 1) {
        this.translateX(-this.swiperWidth);
        this.currentSlide = 0;
      }
      if (currentSlide == 0) {
        this.translateX(-this.swiperWidth * (this.slidesNumber - 2))
        this.currentSlide = this.slidesNumber - 3;
      }

      this.$emit('transitionend', this.currentSlide);
      /*
				防止极限操作, 用户在滑动结束之后事件还没发送出去又滑动导致计算
				结果错误, 所以等事件发出去之后再解开
			*/
      this.moving = false;

      if (this.autoplay) {
        this.play();
      }
    },

    /**
		 * touchstart handler
		 */
    thstart (e) {
      if (this.isOnly) {
        return;
      }

      if (e.type === 'mousedown' && !this.moving) {
        this.mousedown = true;
        this.pos.startX = e.pageX;
        this.pos.local = this.left();
        clearTimeout(this.timer);
        this.transitionDuration(0);
      } else {
        this.activeId = toArray(e.changedTouches)[0].identifier;
        if (!this.moving) {
          let active = e.touches.length - 1;
          clearTimeout(this.timer);
          this.transitionDuration(0);
          this.unlock = true;
          this.pos.startX = e.touches[active].clientX;
          /* 一次 touch 的 起始local 点, 是固定的 */
          this.pos.local = this.left();
        }
      }
    },

    left () {
      // 临时解决偏移bug，待研究是否可以在外部调整
      return this.swiper.getBoundingClientRect().left - this.offsetX;
    },

    /**
		 * toushmove handler
		 */
    thmove (e) {
      if (this.isOnly) {
        return;
      }

      if (e.type === 'mousemove' && this.mousedown && !this.moving) {
        this.pos.moveX = e.pageX;
        this.pos.distance = this.pos.moveX - this.pos.startX;
        this.translateX(this.pos.local + this.pos.distance);
      } else {
        if (!this.moving && this.unlock) {
          let active = e.touches.length - 1;
          this.pos.moveX = e.touches[active].clientX;
          this.pos.distance = this.pos.moveX - this.pos.startX;
          // 滑到边界
          if (this.pos.moveX < 0 || this.pos.moveX > this.swiperWidth) {
            this.unlock = false;
            this.recover();
          } else {
            this.translateX(this.pos.local + this.pos.distance);
          }
        }
      }
    },

    /**
		 * toushend handler
		 */
    thend (e) {
      if (this.isOnly) {
        return;
      }

      if (e.type === 'mouseup' && this.mousedown && !this.moving) {
        this.mousedown = false;
        this.pos.endX = e.pageX;
        this.pos.distance = this.pos.endX - this.pos.startX;
        this.recover();
      } else {
        let curId = toArray(e.changedTouches)[0].identifier;
        if (!this.moving && this.unlock && (curId == this.activeId)) {
          this.unlock = false;
          this.pos.endX = e.changedTouches[0].clientX;
          this.pos.distance = this.pos.endX - this.pos.startX;
          this.recover();
        }
      }
    },

    /**
		 * 响应用户滚动行为
		 */
    recover () {
      this.transitionDuration(this.userDuration);
      let distance = Math.abs(this.left()) % this.swiperWidth;
      let point = [];
      let direction = ''
      /*
				主要是为了拿到当前状态下面, swiper 距离正常状态的, 左右移动的距离分别是多少.
			*/
      if (this.left() > 0) {
        point = [distance, this.swiperWidth - distance];
      } else {
        point = [this.swiperWidth - distance, distance];
      }
      if (this.pos.distance > 0) {
        direction = 'to-right';
      } else if (this.pos.distance < 0) {
        direction = 'to-left';
      } else {
        direction = 'none';
      }
      if (direction === 'none') {
        if (this.autoplay) {
          this.play();
        }
      }
      if (direction === 'to-right') {
        this.moving = true;
        /* 说明需要向右边移动*/
        if (point[0] > this.therehold) {
          this.translateX(this.left() + point[1]);
          let next = (this.left() + point[1]) / this.swiperWidth;
          if (Math.abs(next) === 0) {
            this.unlock = false;
          }
        } else {
          this.translateX(this.left() - point[0]);
        }
      }
      if (direction === 'to-left') {
        this.moving = true;
        if (point[1] > this.therehold) {
          this.translateX(this.left() - point[0]);
          let next = (this.left() - point[0]) / this.swiperWidth;
          if (Math.abs(next) === this.slidesNumber - 1) {
            this.unlock = false;
          }
        } else {
          this.translateX(this.left() + point[1]);
        }
      }

			 setTimeout(() => {
			 	this.transitionend();
			 }, this.duration);
    },

    /**
		 * 滑动到指定的页面
		 * @param {Number} index - 指定页索引
		 */
    slideTo (index) {
      if (!this.moving) {
        let currentSlide = Math.round(Math.abs(this.left()) / this.swiperWidth);
        /* 如果索引值不合法 或者和目前的值相等 */
        if (index > this.slidesNumber - 2 - 1 || index < 0 || currentSlide == index + 1) {
          return;
        }
        this.moving = true;
        clearTimeout(this.timer);
        /*
					说明要往右边滑动
					注意这里不管需要滑动多少个, duration 都是 300, 这个如果需要, 可以
					自己根据起点/终点计算出一个合适的值.
				*/
        this.transitionDuration(300);

        this.translateX(-this.swiperWidth * (index + 1));
      }
    },
    next () {
      if (!this.moving) {
        clearTimeout(this.timer);
        this.moving = true;
        this.transitionDuration(this.userDuration)
        this.translateX(this.left() - this.swiperWidth);
      }
    },
    previous () {
      if (!this.moving) {
        clearTimeout(this.timer);
        this.moving = true;
        this.transitionDuration(this.userDuration)
        this.translateX(this.left() + this.swiperWidth);
      }
    },
    refresh () {
      this.init();

      if (this.isOnly) {
        return;
      }

      this.cloneSlide(); // 多个 item 进行 clone
      this.setDefaultSlide();

      if (this.autoplay) {
        this.play();
      }
    }
  }
});



// WEBPACK FOOTER //
// ./src/components/zx-slider/slider-wrap.js