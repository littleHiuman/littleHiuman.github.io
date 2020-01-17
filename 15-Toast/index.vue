<template>
  <div class="toast">
    <transition name="fade">
      <div class="toast-error" v-show="toast.isToastErrorShow">
        <div class="toast-wrap">
          <img class="toast-img" :src="images.error " />
          <div class="toast-para">{{toast.toastText}}</div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="toast-success" v-show="toast.isToastSuccessShow">
        <div class="toast-wrap">
          <img class="toast-img" :src="images.success" />
          <div class="toast-para">{{toast.toastText}}</div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="toast-load" v-show="toast.isToastLoadShow">
        <div class="toast-wrap">
          <img class="toast-img" :src="images.load" />
          <div class="toast-para">{{toast.toastText}}</div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="toast-success" v-show="toast.isToastWaitingShow">
        <div class="toast-wrap">
          <img class="toast-img" :src="images.waiting" />
          <div class="toast-para">{{toast.toastText}}</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["toast"],
  data() {
    return {
      images: {
        error: require("./toast-error.png"),
        success: require("./toast-success.png"),
        load: require("./toast-load.gif"),
        waiting: require("./toast-hourglass.svg")
      },
      toastText: ""
    };
  }
};
</script>

<style lang="less">
.fade-enter-active,
.fade-leave-active {
  -webkit-transition: opacity 0.7s;
  transition: opacity 0.7s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.toast-error,
.toast-success,
.toast-load,
.toast-waiting,
.toast-ques {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
}
.toast-wrap {
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: 280px;
  margin: 5px auto;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.7);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.toast-img {
  display: block;
  margin: 0 auto;
  width: 35px;
}
.toast-para {
  color: #fff;
}
</style>
