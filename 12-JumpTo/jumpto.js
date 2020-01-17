window.onload = function(){
  var offsetTopVal = document.getElementById('guidance-grade').offsetTop;
  function clearScroll(timering){
      var agent = navigator.userAgent;
      if (/.*Firefox.*/.test(agent)) {
          document.addEventListener("DOMMouseScroll", function(e) {
              e = e || window.event;
              var detail = e.detail;
              if (detail) {
                  clearInterval(timer)
              }
          });
      } else {
          document.onmousewheel = function(e) {
              e = e || window.event;
              var wheelDelta = e.wheelDelta;
              if (wheelDelta) {
                  clearInterval(timering)
              }
          }
      }
  }
  setTimeout(function () {
      if (document.body){
          var timer = setInterval(function () {
              clearScroll(timer)
              if (offsetTopVal - document.body.scrollTop>10){
                  document.body.scrollTop += 10
              } else if (offsetTopVal - document.body.scrollTop>0) {
                  document.body.scrollTop +=(offsetTopVal - document.body.scrollTop)
                  clearInterval(timer)
              }
              if (offsetTopVal - document.body.scrollTop<-10){
                  document.body.scrollTop -= 10
              } else if (offsetTopVal - document.body.scrollTop<0) {
                  document.body.scrollTop -= (offsetTopVal - document.body.scrollTop)
                  clearInterval(timer)
              }
          },1)
      }
      if (document.documentElement){
          var timer2 = setInterval(function () {
              clearScroll(timer2)
              if (offsetTopVal - document.documentElement.scrollTop>10){
                  document.documentElement.scrollTop += 10
              } else if (offsetTopVal - document.documentElement.scrollTop>0) {
                  document.documentElement.scrollTop +=(offsetTopVal - document.documentElement.scrollTop)
                  clearInterval(timer2)
              }
              if (offsetTopVal - document.documentElement.scrollTop<=-10){
                  document.documentElement.scrollTop -= 10
              } else if (offsetTopVal - document.documentElement.scrollTop<0) {
                  document.documentElement.scrollTop -= (offsetTopVal - document.documentElement.scrollTop)
                  clearInterval(timer2)
              }
          },1)
      }
  },10)
}
