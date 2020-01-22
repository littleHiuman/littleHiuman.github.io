<template>
  <div>
    <div class="alertMsg">
      <transition name="fade">
        <div @click="showHideKnow(1)" class="alertMsg-wrap" v-show="alertMsg.alertMsgKnowit">
          <div class="alertMsg-contain">
            <div
              class="alertMsg-info pad-lr-30"
              @click.stop="showHideKnow(2)"
              v-html="alertMsg.content"
            ></div>
            <div
              class="text-center alertMsg-iknow fs-16 retina-border rt-bd-t"
              @click.stop="showHideKnow(3)"
            >{{msg}}</div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: ["alertMsg"],
  data() {
    return {
      name: "alertMsg",
      msg: "知道了",
      info: ""
    };
  },
  methods: {
    showHideKnow: function(sign) {
      if (sign === 1 || sign === 3) {
        this.$set(this.alertMsg, "alertMsgKnowit", false);
      }
    }
  },
  mounted: function() {
    let time = 3;
    if (!this.alertMsg.autoHide) {
      this.$set(this.alertMsg, "autoHide", false);
    }
    if (this.alertMsg.autoHide) {
      this.msg = ` 知道了(${time})`;
      let timer = setInterval(() => {
        if (time > 0) {
          time -= 1;
          this.msg = ` 知道了(${time})`;
        } else {
          clearInterval(timer);
          this.$set(this.alertMsg, "alertMsgKnowit", false);
          this.$set(this.alertMsg, "autoHide", false);
          this.msg = "知道了";
        }

        if (this.alertMsg.alertMsgKnowit === false) {
          clearInterval(timer);
          this.$set(this.alertMsg, "autoHide", false);
          this.msg = "知道了";
        }
      }, 1000);
    }
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

.alertMsg-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}
.alertMsg-contain {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 84%;
  margin-top: -2.54rem;
  margin-left: -42%;
  background: #fff;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
  border: 1px solid #c6c6c6;
}
.alertMsg-iknow {
  color: #53a2ff;
  width: 100%;
  line-height: 0.9rem;
  height: 0.9rem;
}
</style>
