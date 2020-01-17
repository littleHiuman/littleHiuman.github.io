<template>
  <div class="page-test">
    <part-lists :fixedTitle="true">
      <div class="page-test-title">这里是里面的标题！！！标题咯随便写这里就是写标题的啦不知道写什么了哦就这样吧</div>
    </part-lists>
  </div>
</template>

<script>
import hmPartLists from "./hmPartLists2";
export default {
  components: {
    "part-lists": hmPartLists,
  },
  data() {
    return {};
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
