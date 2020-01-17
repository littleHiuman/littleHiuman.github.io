<template>
  <div class="hm-part-lists">

    <div class="slot-wrap"
         :class="{fixed: fixedTitle}">
      <slot></slot>
    </div>

    <div class="hm-part-fixed"
         v-if="datas.length"
         :style="fixedTopStyle">{{datas[actived].name}}</div>

    <ul class="hm-part-wrap"
        v-if="datas.length">
      <li v-for="(item,i) in datas"
          :key="i">
        <div class="hm-part-title">{{item.name}}</div>
        <div v-for="(obj,j) in item.data"
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
  },
  data() {
    return {
      top: [],
      actived: 0,
      fixedTopStyle: "top: -10000px",
    };
  },
  watch: {
    datas(cur, old) {
      setTimeout(() => {
        document.documentElement.scrollTop = 0;
      }, 100);
      this.init();
    },
    fixedTitle(cur, old) {
      setTimeout(() => {
        document.documentElement.scrollTop = 0;
      }, 100);
      this.init();
    },
  },
  mounted() {
    setTimeout(() => {
      document.documentElement.scrollTop = 0;
    }, 100);
    this.init();
  },
  updated() {
    this.init();
  },
  methods: {
    init() {
      if (this.datas && this.datas.length) {
        this.calcTop();
        window.onscroll = e => this.scrollHandle(e);
        if (this.fixedTitle) {
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
    scrollHandle(event) {
      let wrapLists = document.querySelector(".hm-part-wrap");
      let slotWrap = document.querySelector(".slot-wrap");
      let slotWrapHeight = slotWrap.getBoundingClientRect().height;
      // 滚动的距离+距离父组件顶部的距离
      let wrapTopV = event.target.scrollingElement.scrollTop;
      let wrapOffsetTop = wrapLists.offsetTop;
      let actived = 0;
      this.top.map((item, i) => {
        let val = wrapTopV;
        if (this.fixedTitle) {
          val = val + this.top[0];
        }
        if (val > item) {
          return (actived = i);
        }
      });

      // 激活的标题
      this.actived = actived;
      // 激活的标题的高度;
      let titleHeight = document
        .querySelector(".hm-part-title")
        .getBoundingClientRect().height;
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
        style = "top: " + (calc - titleHeight) + "px;";
      }
      this.fixedTopStyle = style;
    },
  },
};
</script>

<style scoped src="./style.css">
