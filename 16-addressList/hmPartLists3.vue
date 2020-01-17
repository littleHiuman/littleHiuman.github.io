<template>
  <div class="hm-part-lists">

    <div class="slot-wrap"
         :class="{fixed: fixedTitle && show}">
      <slot></slot>
    </div>

    <div class="hm-part-fixed"
         :class="[hmPartFixedCustom]"
         v-if="datas.length"
         :style="fixedTopStyle">{{datas[actived].name}}</div>

    <ul class="hm-part-wrap"
        :class="[hmPartWrapCustom]"
        v-if="datas.length">
      <li v-for="(item,i) in datas"
          :class="[hmPartList]"
          :key="i">
        <div :class="[hmPartTitle]">{{item.name}}</div>
        <div :class="[hmPartContent]"
             v-for="(obj,j) in item.data"
             :key="j">{{obj}}</div>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  props: {
    fixedTitle: {
      type: Boolean,
      dafault: true,
    },
    datas: {
      type: Array,
      default: () => [
        {
          name: "A",
          data: [1, 2, 3, 4, 5],
        },
        {
          name: "B",
          data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        },
        {
          name: "C",
          data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        },
        {
          name: "D",
          data: [1, 2, 3, 4, 5],
        },
      ],
      validator: function(value) {
        if (!value.length) {
          return false;
        }
        return true;
      },
    },
    hmPartFixedCustom: {
      type: String,
      default: () => "hm-part-fixed-custom",
    },
    hmPartWrapCustom: {
      type: String,
      default: () => "hm-part-wrap-custom",
    },
    hmPartList: {
      type: String,
      default: () => "hm-part-list",
    },
    hmPartContent: {
      type: String,
      default: () => "hm-part-content",
    },
    hmPartTitle: {
      type: String,
      default: () => "hm-part-title",
    },
  },
  data() {
    return {
      top: [],
      actived: 0,
      fixedTopStyle: "top: -10000px",
      show: false,
      slotWrapTopTemp: 0,
    };
  },
  watch: {
    datas(cur, old) {
      this.toTop();
      this.init();
    },
    fixedTitle(cur, old) {
      this.toTop();
      this.init();
    },
  },
  mounted() {
    this.toTop();
    this.init();
  },
  updated() {
    this.init();
  },
  methods: {
    toTop() {
      setTimeout(() => {
        document.documentElement.scrollTop = 0;
      }, 100);
    },
    init() {
      if (this.datas && this.datas.length) {
        this.calcTop();
        window.onscroll = e => this.scrollHandle(e);
        if (this.fixedTitle && this.show) {
          document.querySelector(".hm-part-wrap").style.padding =
            document.querySelector(".slot-wrap").getBoundingClientRect()
              .height + "px 0 0";
        }
      }
    },
    calcTop() {
      // 计算标题距离顶部的距离
      let titles = document.querySelectorAll(".hm-part-title");
      let temp = [];
      for (let i of titles) {
        temp.push(i.offsetTop);
      }
      if (this.top.toString() == temp.toString()) {
        return;
      }
      this.top = temp.slice(0, this.datas.length);
    },
    scrollTitleHandle(event) {
      // 标题位置
      let wrapTopV = event.target.scrollingElement.scrollTop;
      let slotWrap = document.querySelector(".slot-wrap");
      let slotWrapTop = slotWrap.offsetTop;
      if (slotWrapTop > 0) {
        this.slotWrapTopTemp = slotWrapTop;
      }
      this.show = wrapTopV > this.slotWrapTopTemp ? true : false;
      slotWrap.style = wrapTopV > this.slotWrapTopTemp ? "top: 0;" : "";
      document.querySelector(".hm-part-wrap").style.padding =
        this.fixedTitle && this.show
          ? slotWrap.getBoundingClientRect().height + "px 0 0"
          : 0;
    },
    scrollHandle(event) {
      if (this.fixedTitle) {
        this.scrollTitleHandle(event);
      }
      let wrapLists = document.querySelector(".hm-part-wrap");
      let slotWrap = document.querySelector(".slot-wrap");
      let slotWrapHeight = slotWrap.getBoundingClientRect().height;
      // 滚动的距离+距离父组件顶部的距离
      let wrapTopV = event.target.scrollingElement.scrollTop;
      let wrapOffsetTop = wrapLists.offsetTop;
      let actived = 0;
      // 激活的标题的高度;
      let titleHeight = document
        .querySelector(".hm-part-title")
        .getBoundingClientRect().height;
      let topV = this.fixedTitle ? slotWrapHeight : 0;

      this.top.map((item, i) => {
        let val = wrapTopV;
        if (this.fixedTitle) {
          val = val + this.top[0];
        }
        if (this.show) {
          val = val - (this.top[0] - topV);
        }
        if (val > item) {
          return (actived = i);
        }
      });
      // 激活的标题
      this.actived = actived;

      // 激活的标题和下一个标题的距离;
      let calc = this.top[actived + 1] - wrapTopV;
      // 区间;
      let start = 0;
      let end = titleHeight - 1;
      if (this.fixedTitle) {
        start += slotWrapHeight;
        end += slotWrapHeight;
      }

      let style = "top: 0;";
      if (this.fixedTitle) {
        style = "top: " + slotWrapHeight + "px";
      }
      if (actived == 0 && wrapTopV == 0) {
        style = "top: -10000px";
      } else if (actived == 0 && wrapOffsetTop > wrapTopV) {
        style = "top: -10000px";
      } else if (calc >= start && calc <= end) {
        let heightV = this.fixedTitle ? calc - slotWrapHeight : calc;
        style =
          "top: " +
          topV +
          "px;" +
          "height: " +
          heightV +
          "px;overflow: hidden;";
      }
      this.fixedTopStyle = style;
    },
  },
};
</script>

<style scoped src="./style3.css">
