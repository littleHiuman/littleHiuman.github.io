<template>
  <div class="hm-part-lists" @scroll="scrollHandle">
    <div class="hm-part-fixed" v-if="datas.length" :style="fixedTopStyle">{{datas[actived].name}}</div>

    <ul class="hm-part-wrap" v-if="datas.length">
      <li v-for="(item,i) in datas" :key="i">
        <div class="hm-part-title">{{item.name}}</div>
        <div v-for="(obj,j) in item.data" :key="j">{{obj}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    datas: {
      type: Array,
      default: () => [
        {
          name: "A",
          data: [1, 2, 3, 4, 5]
        }
      ],
      validator: function(value) {
        if (!value.length) {
          return false;
        }
        return true;
      }
    }
  },
  data() {
    return {
      top: [],
      actived: 0,
      fixedTopStyle: ""
    };
  },
  mounted() {
    if (this.datas && this.datas.length) {
      this.init();
      this.calcTop();
    }
  },
  methods: {
    init() {
      // 把激活的标题“隐藏”
      this.fixedTopStyle = "top: -10000px";
      let partLists = document.querySelector(".hm-part-lists");
      // 固定的高度（可视高度-距离父组件顶部的距离）
      partLists.style.height =
        document.documentElement.clientHeight - partLists.offsetTop + "px";
    },
    calcTop() {
      // 计算标题距离顶部的距离
      let titles = document.querySelectorAll(".hm-part-title");
      let temp = [];
      for (let i of titles) {
        temp.push(i.offsetTop);
      }
      this.top = temp;
    },
    scrollHandle() {
      let partLists = document.querySelector(".hm-part-lists");
      // 滚动的距离+距离父组件顶部的距离
      let topV = partLists.scrollTop + partLists.offsetTop;

      let actived = 0;
      this.top.map((item, i) => {
        if (topV > item) {
          return (actived = i);
        }
      });
      // 激活的标题
      this.actived = actived;

      // 激活的标题的高度
      let height = document
        .querySelector(".hm-part-title")
        .getBoundingClientRect().height;

      // 激活的标题和下一个标题的距离
      let calc = this.top[actived + 1] - topV;
      // 区间
      let start = 0;
      let end = height - 1;

      let style = "";
      if (actived == 0 && topV == this.top[actived]) {
        // 距离为0时
        style = "top: -10000px";
      } else if (calc >= start && calc <= end) {
        // 下一个标题推当前标题上去的样式（需要减去距离父组件顶部的距离）
        style = "top: " + -(height - calc - partLists.offsetTop) + "px;";
      }
      this.fixedTopStyle = style;
    }
  }
};
</script>

<style scoped src="./style.css">
