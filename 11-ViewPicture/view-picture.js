var closeBtn = document.querySelector(".see-big-photo-close");
var wrapper = document.querySelector('.see-big-photo-wrap');
var album = document.querySelector('.swiper-container-album');
var seephoto = document.getElementById('seephoto');

// 隐藏
closeBtn.onclick = function () {
  wrapper.style.visibility = "hidden"
}
// 显示
album.onclick = function (e) {
  e = e||window.event;
  if(e.target.tagName === 'IMG'){
    wrapper.style.visibility = 'visible'
    seephoto.src = e.target.src
    seephoto.onload = function () {
      // 清空样式
      seephoto.style.marginTop = 0;
      seephoto.style.marginLeft = 0;
      seephoto.style.width = '';
      seephoto.style.height = '';
      // 判断比例
      var photoWidth = this.width;
      var photoHeight = this.height;
      var windowWidth = window.innerWidth;
      var windowHeight = window.innerHeight;
      if (photoWidth > windowWidth || photoHeight > windowHeight) {
        if (photoWidth / photoHeight < windowWidth / windowHeight) {
          this.newWidth = windowHeight * photoWidth / photoHeight
          seephoto.style.height = '100%';
          seephoto.style.marginLeft = ((windowWidth - this.newWidth) * 0.5) + 'px';
        } else {
          this.newHeight = windowWidth * photoHeight / photoWidth
          seephoto.style.width = '100%';
          seephoto.style.marginTop = ((windowHeight - this.newHeight) * 0.5) + 'px'
        }
      } else {
        seephoto.style.marginTop = ((windowHeight - photoHeight) * 0.5) + 'px'
        seephoto.style.marginLeft = ((windowWidth - photoWidth) * 0.5) + 'px'
      }
    }
  }
}
