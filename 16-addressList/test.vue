<template>
  <div class="page-test">
    <div class="page-test-title">标题咯随便写这里就是写标题的啦不知道写什么了哦就这样吧</div>
    <part-lists :datas="list"></part-lists>
  </div>
</template>

<script>
import hmPartLists from "./hmPartLists";
export default {
  components: {
    "part-lists": hmPartLists,
  },
  data() {
    return {
      list: [
        {
          name: "A",
          data: [1, 2, 3, 4, 5],
        },
        {
          name: "B",
          data: [1, 2, 3, 4, 5, 6, 7],
        },
        {
          name: "C",
          data: [1, 2, 3, 4, 5],
        },
      ],
    };
  },
};
</script>

<style scoped>
.page-test {
  background-color: #fff;
}
.page-test-title {
  position: relative;
  z-index: 2;
  line-height: 26px;
  background-color: #fff;
  padding: 0 15px;
}
</style>
