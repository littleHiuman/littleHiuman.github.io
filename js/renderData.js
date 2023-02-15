let blogs = [
  {
    title: 'my first non-technical log',
    time: '2017-02-21',
    content: `(My English is not good,hahahahhh....) I'm happy to make this page, although it just div + css without any javaScript .. Before, I wrote my log on other blog, no one knows me, but sometimes someone copied my log to other blog, without my permission, I also happy, I help others, just a little.`
  },
  {
    title: 'canvas写的广州地铁图',
    time: '2017-03-06',
    content: `<div>根据的是百度提供的坐标，canvas的坐标是大的坐标在后面，所以跟实际生活方向相反。所以canvas里的北方在下方，实际生活中北方在上方。 因为根据的是真实坐标，所以跟广州地铁提供的地图不一样。 左侧地图一种写法，右侧地图另一种写法。左侧可以下拉菜单选择线路查看路线，还可以查询站名属于哪个路线；右侧是全地图。</div>
              求star呀~~~<br>
              查看项目地址<a href="https://github.com/littleHiuman/GZsubway-canvas">点击这里</a><br>
              查看效果<a href="https://littlehiuman.github.io/GZsubway-canvas/">点击这里</a><br>
              效果图：<img style="display:block;width:100%;height:100%;" src="./graphs/0201.png"/>`
  },
  {
    title: '菜单栏和内容以及它的改进版',
    time: '2017-03-09',
    content: `查看网页<a href="./01-menuAndContent/index.html">点击这里</a><br>
              效果图：<br>
              <img style="display:block;width:100%;height:100%;" src="./graphs/0101.png"/><br>
              <div> = = = = = = = = 2017-3-10 = = = = = = =</div><br>
              <div>改进了：菜单栏的样式，菜单栏自动更新宽度、响应window窗口大小，菜单栏内元素超出长度隐藏……</div><br>
              <div>查看网页<a href="./01-menuAndContent/index2.html">点击这里</a></div><br>
              效果图：<br>
              <img style="display:block;width:100%;height:100%;" src="./graphs/0102.png"/>`
  },
  {
    title: 'js生成当前日期起，一周内的日期+周几/今日（生成周历）',
    time: '2016-09-08',
    content: `js生成当前日期起，一周内的日期+周几/今日<br>
              <a href="./04-WeeklyCalendar/index.html">点击这里</a><br>
              效果图：<br>
              <img style="display:block;width:100%;height:100%;" src="./graphs/0401.png"/><br>
              <img style="display:block;width:100%;height:100%;" src="./graphs/0402.png"/><br>`
  },
  {
    title: 'js实现输入框搜索提示功能',
    time: '2016-09-12',
    content: `<a href="./05-SearchList/index.html">点击这里</a><br>
              效果图：<br>
              <img style="display:block;width:100%;height:100%;" src="./graphs/0501.jpg"/>`
  },
  {
    title: 'javascript 实现简单拖拽',
    time: '2016-09-24',
    content: `<a href="./06-Dragable/index.html">点击这里</a><br>
              效果图：<br>
              <img style="display:block;width:100%;height:100%;" src="./graphs/0601.png"/><br>
              （转自：http://www.cnblogs.com/NNUF/archive/2012/04/02/2430132.html）`
  },
  {
    title:
      ' JavaScript实现多个菜单的显示隐藏（JavaScript实现二级/三级菜单的显示隐藏）',
    time: '2016-10-12',
    content: `点击各个菜单（自助餐、中山二三路、智能排序）会显示/隐藏二级菜单<br>
              （二级菜单可能既有左侧内容也有右侧内容（三级菜单），也可能只有左侧内容）<br>
              <a href="./07-menus/index.html">点击这里</a><br>
              效果图：<br>
              <img style="display:block;width:100%;height:100%;" src="./graphs/0701.png"/>`
  },
  {
    title: 'JavaScript写的轮播图',
    time: '2016-11-07',
    content: `<a href="./08-Carousel/index.html">index.html</a><br>
              <a href="./08-Carousel/index-2.html">index-2.html</a><br>
              区别: 按钮组、左箭头、右箭头的实现是一样的。<br>
              index.html   通过改变left的值来进行图片轮播，所以布局上有两个外容器<br>
              index-2.html 通过获取索引来进行图片轮播，布局上只需要一个外容器<br>
              效果图：<br>
              <img style="display:block;width:100%;height:100%;" src="./graphs/0801.png"/>`
  },
  {
    title: 'loading图',
    time: '2017-01-01',
    content: `<a href="./10-Loading/loading.html">loading.html</a><br>
              <a href="./10-Loading/loading2.html">loading2.html</a><br>
              效果图：<br>
              <img style="display:block;width:364px;height:200px;" src="./graphs/1001.png"/><br>
              <img style="display:block;width:128px;height:112px;" src="./graphs/1002.png"/>`
  },
  {
    title: 'JavaScript实现日历选择器 datePicker',
    time: '2017-01-17',
    content: `<a href="./09-DatePicker/index.html">index.html</a>`
  },
  {
    title: '点击图片查看大图效果',
    time: '2017-08-29',
    content: `<a href="./11-ViewPicture/index.html">index.html</a><br>
              需要更多功能的话推荐：https://www.npmjs.com/package/vue-photoswipe<br>
              效果图：<br>
              <img style="display:block;width:100%;height:100%;" src="./graphs/1101.png"/>`
  },
  {
    title: '加载完页面后，跳转至页面某个位置',
    time: '2017-09-05',
    content: `进入页面就跳转至某个位置。跳转过程中，如果触发了鼠标滚动事件，则取消跳转事件。<br>
              只需要给某个位置的元素加上id为guidance-grade即可。<br>
              <a href="./12-JumpTo/index.html">index.html</a><br>`
  },
  {
    title: 'LoadMore加载更多',
    time: '2017-09-05',
    content: `<a href="./13-LoadMore/index.html">index.html</a><br>
              使用方法：loadMore('wrapper', getData);<br>
              其中，wrapper是容器的类名，getData是请求接口的函数`
  },
  {
    title: 'AlertMsg提示框',
    time: '2017-09-05',
    content: `文件在 /14-AlertMsg<br>
              <br>
              使用方法：<br>
              <br>
              <pre><code>
              // 引入<br>
              import alertMsg from './AlertMsg.vue'<br>
              <br>
              // 注册<br>
              components: {<br>
                <span class="tab"></span><span class="tab"></span>alertMsg<br>
              }<br>
              <br>
              // 初始化数据<br>
              data () {<br>
                <span class="tab"></span>return {<br>
                  <span class="tab"></span><span class="tab"></span>alertsth: {<br>
                    <span class="tab"></span><span class="tab"></span><span class="tab"></span>alertMsgKnowit: false,<br>
                    <span class="tab"></span><span class="tab"></span><span class="tab"></span>content: '测试222', // content可以加标签<br>
                    <span class="tab"></span><span class="tab"></span><span class="tab"></span>// autoHide: false, //是否自动隐藏，选填。<br>
                  <span class="tab"></span><span class="tab"></span>}<br>
                  <span class="tab"></span>}<br>
              }<br>
              <br>
              // 定义组件。（自行去掉空格）<br>
              < alertMsg :alertMsg="alertsth">< / alertMsg><br>
              <br>
              // 使用组件<br>
              this.alertsth.alertMsgKnowit = true // 只需要将该值更改为true即可。<br>
              </code></pre>
              `
  },
  {
    title: 'Toast提示框',
    time: '2017-09-05',
    content: `有vue版本和JavaScript版本。<br>
              Toast的vue版本 比 Toast的JavaScript版本 较复杂，两者效果一致，只是两者的实现和对应的使用不同<br>
              Toast的vue版本 相对于 AlertMsg 较复杂<br>
              简单来说：<br>
              <span class="tab"></span>以上三个都是有淡入淡出效果的提示框<br>
              <span class="tab"></span>AlertMsg是第一行是文字提示，第二行是我知道了<br>
              <span class="tab"></span>Toast是第一行是图，第二行是文字提示<br>
              <br>
              Toast的vue版本用法如下：<br>
              <pre><code>
              // 导入<br>
              import toast from '../Toast.vue'<br>
              <br>
              // 注册<br>
              components: {<br>
                <span class="tab"></span>toast<br>
              }<br>
              <br>
              // 定义组件（自行把空格去掉）<br>
              < toast :toast="title">< / toast ><br>
              <br>
              // 初始化数据<br>
              data () {<br>
                <span class="tab"></span>return {<br>
                  <span class="tab"></span><span class="tab"></span>title: {<br>
                    <span class="tab"></span><span class="tab"></span><span class="tab"></span>isToastErrorShow: false, // 错误提示<br>
                    <span class="tab"></span><span class="tab"></span><span class="tab"></span>isToastSuccessShow: false,  // 成功提示<br>
                    <span class="tab"></span><span class="tab"></span><span class="tab"></span>isToastLoadShow: false, // 加载提示<br>
                    <span class="tab"></span><span class="tab"></span><span class="tab"></span>isToastWaitingShow: false // 等待提示<br>
                    <span class="tab"></span><span class="tab"></span>}<br>
                  <span class="tab"></span>}<br>
              }<br>
              <br>
              // 使用组件<br>
              this.title.isToastErrorShow = !this.title.isToastErrorShow // 将需要使用的提示框的显示与否 取反<br>
              this.title.toastText = '金额输入不正确' // 提示框内的内容<br>
              setTimeout(() => { // 何时消失<br>
                <span class="tab"></span>this.title.isToastErrorShow = !this.title.isToastErrorShow<br>
              }, 2000)<br>
              </code></pre>
              <br>
              <br>
              Toast的JavaScript版本用法如下：<br>
              <a href="./15-Toast/test.html">test.html</a><br>
              <pre><code>
              // 导入（自行把空格去掉）<br>
              < script type="text/javascript" src="./Toast.js">< / script><br>
              用法：<br>
              <span class="tab"></span>修改配置：<br>
              <span class="tab"></span>toast.setOptions({<br>
                <span class="tab"></span><span class="tab"></span>width: '120px', // toast的宽度，可以不传，默认是100px<br>
                <span class="tab"></span><span class="tab"></span>position: 'middle', // toast出现的位置，可以不传，默认值为bottom；可选值为bottom, top, middle<br>
                <span class="tab"></span><span class="tab"></span>time: 3000, // 等待多久后消失，可以不传，默认值为2000<br>
                <span class="tab"></span><span class="tab"></span>fadeTime: 50 // 淡入淡出效果的时间，即每隔多久更新透明度，可以不传，默认值为100<br>
              <span class="tab"></span>})<br>
              <span class="tab"></span>使用：<br>
              <span class="tab"></span>传入的字符串就是文字提示的内容，而loading、success、error、waiting函数则是展示不同图标的toast<br>
              <span class="tab"></span>toast.loading('loading')<br>
              <span class="tab"></span>toast.success('success')<br>
              <span class="tab"></span>toast.error('error')<br>
              <span class="tab"></span>toast.waiting('waiting')<br>
              </code></pre>
              <br>
              效果图：<br>其中，loading和waiting的图标是有动画效果的
              <img style="display:block;width:120px;height:100%;" src="./graphs/1501.png"/><br>
              <img style="display:block;width:120px;height:100%;" src="./graphs/1502.png"/><br>
              <img style="display:block;width:120px;height:100%;" src="./graphs/1503.png"/><br>
              <img style="display:block;width:120px;height:100%;" src="./graphs/1504.png"/><br>
              <br>
            `
  },
  {
    title: 'addressList通讯录',
    time: '2019-03-27',
    content: `文件在 /16-addressList<br>
              效果图：<img style="display:block;width:300px;height:100%;" src="./graphs/1601.png"/>
              使用该组件的前提<br>
              样式中要有：<br>
              <pre><code>
              * {<br>
                <span class="tab"></span>box-sizing: border-box;<br>
                <span class="tab"></span>margin: 0;<br>
                <span class="tab"></span>padding: 0;<br>
                <span class="tab"></span>list-style-type: none;<br>
              }<br>
              </code></pre>
              <br>
              hmPartLists.vue 的例子在 test.vue<br>
              hmPartLists2.vue 的例子在 test2.vue<br>
              hmPartLists3.vue 的例子在 test3.vue<br>
              <br>
              三者之间的区别：<br>
              <br>
              1. hmPartLists的容器是固定高度的。<br>
                hmPartLists2、hmPartLists3的容器不定高。<br>
                <br>
              2. hmPartLists2可以将标题传入slot，另外还有固定标题/不固定标题的选项。 （不支持组件外的标题）<br>
                hmPartLists的标题写在组件外。<br>
                hmPartLists3二者都可以实现，**PS** 组件外的标题不能被固定。<br>
                <br>
              3. hmPartLists有下一个标题把上一个标题往上推的效果。<br>
                hmPartLists2只有在固定标题的时候有这个效果，不固定标题的时候(fixedTitle为false时)没有往上推的效果。<br>
                hmPartLists3有下一个标题把上一个标题盖住的效果。<br>
                <br>
              4. hmPartLists3已将css改成可配置。<br>
            `
  },
  {
    title: '其他内容(横屏问题、判断页面是否属于顶部、判断浏览器）',
    time: '2017-09-05',
    content: `### 横屏问题<br>
              <pre><code>
              window.addEventListener('orientationchange', function(event){<br>
                <span class="tab"></span>if( window.orientation == 90 || window.orientation == -90 ) {<br>
                  <span class="tab"></span><span class="tab"></span>toast.error('请不要转为横屏');<br>
                  <span class="tab"></span>}<br>
              });<br>
              </code></pre>
              <br>
              ### 判断页面是否属于顶部<br>
              <pre><code>
              if ($(window).scrollTop()) {<br>
                <span class="tab"></span>if (top > 0){<br>
                  <span class="tab"></span><span class="tab"></span>$('.header').addClass('under-shadow')<br>
                  <span class="tab"></span>} else {<br>
                    <span class="tab"></span><span class="tab"></span>$('.header').removeClass('under-shadow')<br>
                    <span class="tab"></span>}<br>
              }<br>
              <br>
              $(window).scroll(function () {<br>
                <span class="tab"></span>var top = $(window).scrollTop()<br>
                <span class="tab"></span>if (top > 0){<br>
                  <span class="tab"></span><span class="tab"></span>$('.header').addClass('under-shadow')<br>
                  <span class="tab"></span>} else {<br>
                    <span class="tab"></span><span class="tab"></span>$('.header').removeClass('under-shadow')<br>
                    <span class="tab"></span>}<br>
              })<br>
              </code></pre>
              <br>
              ### 判断浏览器<br>
              <pre><code>
              var browser=navigator.appName<br>
              var b_version=navigator.appVersion<br>
              var version=b_version.split(";");<br>
              var trim_Version=version[1].replace(/[ ]/g,"");<br>
              if(browser=="Microsoft Internet Explorer"){<br>
                <span class="tab"></span>if (trim_Version=="MSIE6.0" || trim_Version=="MSIE7.0" || trim_Version=="MSIE8.0"){<br>
                  <span class="tab"></span><span class="tab"></span>alert("您当前IE版本过低")<br>
                  <span class="tab"></span>}<br>
              }<br>
              </code></pre>
            `
  },
  {
    title: 'css3实现菜单栏选中时的过渡效果',
    time: '2016-10-14',
    content: `<a href="./07-menus/index-2.html">index-2.html</a><br>
              点击后的效果过程图：<br>
              <img style="display:block;width:100%;height:100%;" src="./graphs/0702.png"/><br>
              <img style="display:block;width:100%;height:100%;" src="./graphs/0703.png"/><br>
              <img style="display:block;width:100%;height:100%;" src="./graphs/0704.png"/><br>
              <img style="display:block;width:100%;height:100%;" src="./graphs/0705.png"/><br>`
  },
  {
    title: '选项卡效果的菜单栏',
    time: '2016-11-07',
    content: `<a href="./17-tabMenu/tabOne.html">tabOne.html</a><br>
              <a href="./17-tabMenu/tab1.html">tab1.html</a><br>
              区别：<br>
              tabOne.html：多个html文件之间的跳转。（多个html文件）<br>
              tab1.html：  显示隐藏某个元素。（一个html文件）<br>
              样式效果是一样的：<br>
              <img style="display:block;width:100%;height:100%;" src="./graphs/1702.png"/><br>`
  },
  {
    title: 'css3实现图片划过一束光闪过效果',
    time: '2016-09-13',
    content: `<a href="./00-cssEffect/flashLightPic.html">flashLightPic.html</a>`
  },
  {
    title: 'JavaScript+CSS+HTML 编写手风琴效果',
    time: '2020-01-13',
    content: `<a href="./03-Accordion/index.html">点击这里预览</a><br>
              效果图：<img style="display:block;width:100%;height:100%;" src="./graphs/0301.png"/><br>`
  },
  {
    title: 'CSS 清除浮动的五个办法',
    time: '2020-01-22',
    content: `在子元素都设置了浮动后，父元素会失去高度。<br>
              而且会影响下面的元素，这时候就需要清除浮动：<br>
              <img src="https://img2018.cnblogs.com/i-beta/1011163/202001/1011163-20200122102346098-1962582473.png"/><br>
              <br>
              这时候就需要清除浮动：<br>
              1. 在这些子元素的最后加一个元素来清除浮动<br>
              <a href="./20-ClearFloat/index.html">点击预览</a><br>
              <img src="https://img2018.cnblogs.com/i-beta/1011163/202001/1011163-20200122102624086-1045511895.png"/><br>
              <br>
              2. 通过父类的伪元素:after来清除浮动<br>
              <a href="./20-ClearFloat/index2.html">点击预览</a><br>
              <img src="https://img2018.cnblogs.com/i-beta/1011163/202001/1011163-20200122103034570-1081114432.png"/><br>
              <br>
              3. 给接下来的第一个元素增加 clear:both; 样式（即不希望受到影响的元素）<br>
              <a href="./20-ClearFloat/index3.html">点击预览</a><br>
              <img src="https://img2020.cnblogs.com/blog/1011163/202012/1011163-20201224161812907-1240835898.jpg"/><br>
              <br>
              4. 父元素增加overflow属性： overflow: auto; <br>
              <a href="./20-ClearFloat/index4.html">点击预览</a><br>
              对于超出父元素范围的内容，父元素会进行调整，它的高度就会变得正常。<br>
              5. 父元素增加height属性，使父元素高度正常即可。（能包住所有子元素）<br>
              <a href="./20-ClearFloat/index5.html">点击预览</a><br>
              <br>
              PS:<br>
              其中<br>
              wrapper没有样式<br>
              fl的样式内容 float:left; <br>
              rect-1和rect-2和rect-3的样式内容只是宽、高、背景色<br>
              `
  },
  {
    title: 'JavaScript 获取随机整数',
    time: '2019-07-22',
    content: `<a href="./21-Random/index.html">点击预览</a><br>
              使用说明：<br>
              获取不重复的随机整数：（参数：length 随机数个数，min 最小值，max 最大值）<br>
              默认值 length 5， min 2，max 32<br>
              <br>
              简单介绍：<br>
              Math.random()方法会返回介于 0（包含） ~ 1（不包含） 之间的一个随机数<br>
              假如想要拿到0-10之间的数，只需要将该方法的值*10 即Math.random()*10；<br>
              假如想要拿到0-20之间的数，同理，只需要将该方法的值*20  即Math.random()*20；<br>
              那么，想要拿到0-n之间的数，n是整十倍的数，即Math.random()*n。<br>
              <br>
              <br>
              想要拿到1-11之间的数呢？就是在0-10的基础上，加上1  即Math.random()*10+1；<br>
              即 想要拿到m-n+m之间的数，n是整十倍的数，即Math.random()*n+m。<br>
              <br>
              <br>
              拿到1-10之间的数呢？就是在0-9的基础上，加上1  即Math.random()*9+1；<br>
              即 想要拿到m-n之间的数，即Math.random()*(n-m)+m<br>
              <br>
              <br>
              此时，拿到的数值都是小数，而且都是大于m小于n的值。
              <br>
              舍掉小数点后的数值的方法有很多，如parseInt()，Math.ceil()，Math.floor()，Math.round()<br>
              如果使用parseInt()或Math.floor()，如在0-1之间，永远拿不到1的情况，不满足<br>
              如果使用Math.ceil()，如在0-1之间，除非拿到的值是0，否则都是拿到1的情况，虽然满足，但是概率不平均<br>
              使用Math.round()是最合适的，如在0-1之间，0.5及以上的值会返回1，0.5以下的值返回0。概率平均。<br>
              所以，拿到m-n之间的数，m不等于n，Math.round(Math.random()*(n-m)+m)<br>
              `
  },
  {
    title: 'vue项目中遇到的一些问题',
    time: '2017-06-22',
    content: `或访问：<a href="https://github.com/littleHiuman/experiences-about-vue">https://github.com/littleHiuman/experiences-about-vue</a><br>
              求点star呀~~<br>
              欢迎补充！<br>
              `
  },
  {
    title: '收集的无版权图片网站',
    time: '2020-03-07',
    content: `收集的无版权图片网站（欢迎补充）<br>
              共131个<br>
              我存在github上了，欢迎收藏、star、补充、分享阿~~~<br>
              <br>
              地址在这里：<a href="https://github.com/littleHiuman/Copyright-free-picture-website/blob/master/README.md">https://github.com/littleHiuman/Copyright-free-picture-website/blob/master/README.md</a>
              `
  },
  {
    title: 'JavaScript中数组去重、对象去重的方法 ',
    time: '2020-10-28',
    content: `ES6提供了新的数据结构：Set 和 Map，在写去重代码时方便了很多人，可以用更少的代码去实现去重。<br>
              这两者都是构造函数，需要通过new去生成。<br>
              这两者的区别就是：Set类似于数组，Map类似于对象<br>
              <br>
              ### 数组去重
              <pre><code>
              const array = [1, 2, 3, 4, 5, 5, 5, 5]
              const set = new Set(array)
              const result = [...set] // Array.from(set)

              // 简写
              const result = [...new Set(array)] // Array.from(new Set(array))
              </code></pre>
              <br>
              除此之外，数组去重方式还有：<br>
              1. 两个for循环遍历比较，需要使用两个变量，搭配splice<br>
              2. indexOf / lastIndexOf / includes<br>
              　　2.1 搭配for循环，存入新数组<br>
              　　2.2 搭配filter，返回新数组<br>
              3. 利用对象，那么同时也可以利用Map<br>
              4. ……<br>
              <br>
              <br>
              ### 对象去重（对象数组去重）<br>
              <pre><code>
              function unique(arr) {
                const res = new Map()
                return arr.filter((arr) => !res.has(arr.key) && res.set(arr.key, 1))
              }
              </code></pre>
              <br>
              例子：<br>
              <pre><code>
              var arr = [
                {
                  key: 111,
                  value: 111,
                },
                {
                  key: 111,
                  value: 222,
                },
                {
                  key: 222,
                  value: 333,
                },
                {
                  key: 333,
                  value: 444,
                },
              ]
              function unique(arr) {
                const res = new Map()
                return arr.filter((arr) => !res.has(arr.key) && res.set(arr.key, 1))
              }
              var temArr1 = unique(arr)
              console.log(temArr1)
              </code></pre>
              <br>
              得到的结果：<br>
              <pre><code>
              [
              　　{key: 111, value: 111},
              　　{key: 222, value: 333},
              　　{key: 333, value: 444},
              ]
              </code></pre>
              <br>
              如果想要以后添加的数据为最新内容，只需要将数组翻转即可：<br>
              <pre><code>
              var temArr2 = unique(arr.reverse()).reverse()
              console.log(temArr2)
              </code></pre>
              得到的结果：<br>
              <pre><code>
              [
              　　{key: 111, value: 222},
              　　{key: 222, value: 333},
              　　{key: 333, value: 444},
              ]
              </code></pre>
              <br>
              除此之外，数组去重方式还有：<br>
              1. Map可以实现，那么当然对象也可以实现（通过判断key）<br>
              2. 两个for循环遍历比较<br>
              　　2.1 通过标识符来添加到新数组中<br>
              　　2.2 使用两个变量，搭配splice<br>
              3. ……<br>
              <br>
              <br>
              欢迎补充！欢迎纠正！
              `
  },
  {
    title: '【工具】根据后端提供的swagger生成前端的axios请求配置文件/api',
    time: '2020-11-30',
    content: `根据后端提供的 swagger 生成配置文件（JavaScript 文件）【简单的说，就是生成 api 目录】<br>
              旧标题：【工具】根据后端提供的swagger生成前端的axios请求配置文件/api<br>
              github 地址在这里：<a href="https://github.com/littleHiuman/GenerateRequestFiles">https://github.com/littleHiuman/GenerateRequestFiles</a><br>
              <br>
              ## 小插曲<br>
              之前还有发在掘金，已经删了。<br>
              转载麻烦附上原文出处链接！！<br>
              如果觉得有用，麻烦给一个免费的star，谢谢！！<br>
              `
  },
  {
    title: 'JavaScript判断变量的类型',
    time: '2020-12-23',
    content: `<a href="./22-checkType/index.html">点击预览</a><br>
              1. 通过typeof来判断<br>
              2. 通过instanceof来判断 或 通过constructor来判断<br>
              3. null直接全等判断即可<br>
              4. 万能判断方式：Object.prototype.toString.call()<br>
              `
  },
  {
    title: '用JS创建10个＜a＞标签，点击的时候弹出来对应的序号',
    time: '2020-12-23',
    content: `1. 利用闭包的方式<br>
              <pre><code>
              for (var i = 0; i < 10; i++) {
                var aObj = document.createElement('a')
                aObj.innerText = 'a标签' + i + ' 点击我。'
                aObj.onclick = (function (i) {
                  return function () {
                    alert(i)
                  }
                })(i)
                document.body.appendChild(aObj)
              }
              </code></pre>
              2. 利用块级作用域的方式<br>
              <pre><code>
              for (let i = 0; i < 10; i++) {
                let aObj = document.createElement('a')
                aObj.innerText = 'a标签' + i + ' 点击我。'
                aObj.onclick = function () {
                  alert(i)
                }
                document.body.appendChild(aObj)
              }
              </code></pre>
              `
  },
  {
    title: 'RGB颜色值与十六进制颜色码转换（在线）',
    time: '2021-03-31',
    content: `RGB颜色值与十六进制颜色码转换工具：<a href="https://littlehiuman.github.io/19-ColorValueChange/">点击预览</a><br>
              <br>
              可以根据RGB颜色值转换成16进制颜色码，<br>
              也可以根据16进制颜色码转换成RGB颜色值<br>
              <br>
              页面UI比较粗糙，但是能实现想要的功能。<br>
              <hr>
              <img src="https://img-blog.csdnimg.cn/202103310827458.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2hpdW1hbkNodW5n,size_16,color_FFFFFF,t_70"/>
              `
  },
  {
    title: '放大镜效果',
    time: '2020-01-22',
    content: '<a href="./18-Magnifier/fangdajing.html">点击预览</a>'
  },
  {
    title: 'JavaScript获取css的值',
    time: '2020-12-25',
    content: `1. 拿到元素的内联样式：elem.style.xxx<br>
              2. 拿到元素的位置信息：getComputedStyle(elem)<br>
              3. 拿到元素的计算样式：elem.getBoundingClientRect()<br>
              <img src="https://img-blog.csdnimg.cn/20201225114129631.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2hpdW1hbkNodW5n,size_16,color_FFFFFF,t_70"/><br>
              <img src="https://img-blog.csdnimg.cn/20201225114223407.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2hpdW1hbkNodW5n,size_16,color_FFFFFF,t_70"/>
              `
  },
  {
    title: 'CSS 超出的文字显示省略号（单行、多行）',
    time: '2016-09-06',
    content: `如图<br>
              <img src="https://img2018.cnblogs.com/i-beta/1011163/202001/1011163-20200122100814205-1603058413.png"/><br>
              <br>
              单行超出隐藏：<br>
              <pre><code>
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              </code></pre>
              <br>
              多行超出隐藏：（会有兼容性问题，使用的是-webkit-的属性，如：火狐浏览器不支持）<br>
              <pre><code>
              overflow : hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2; /* 2行 */
              -webkit-box-orient: vertical;
              </code></pre>
              <br>
              另外：<br>
              除了以上的方法，还可以<br>
              1）使用css中 :after/::after 来实现"..."的效果，将高度height改为对应行数*对应的line-height，超出隐藏overflow: hidden;。不过还需要判断字符是否真的超出对应高度的内容，否则未超过仍会有...的效果<br>
              2）使用JavaScript来截取内容，将超出的内容替换为"..."
              `
  },
  {
    title: '用css控制table td内文字超出隐藏',
    time: '2016-10-09',
    content: `效果图：<br>
              <img src="http://dl2.iteye.com/upload/attachment/0120/4840/b94f5b87-ccbd-3c69-9e0f-7b79b9d0c0bb.png"/><br>
              <br>
              <br>
              重点是把table设置为table-layout: fixed;<br>
              超出的文字隐藏的效果才有。<br>
              p标签超出的文字隐藏的效果不需要设置这个内容就可以有效果。<br>
              <pre><code>
              <table border="1">
                <tbody>
                  <tr><td>1</td><td>fdsfsdafdsafsafdsfsdafdsafsafdsfsdafdsafsajghjgkghfjgfjgfjfgaa</td><td>1</td></tr>
                  <tr><td>1</td><td>1</td><td>1</td></tr>
                </tbody>
              </table>
              </code></pre>
              <pre><code>
              body{
                margin: 0;
                padding: 0;
                width: 100%;
              }
              table{
                border-collapse: collapse;
                width: 96%;
                margin: 0 2%;
                table-layout: fixed;
              }
              tr{
                width: 100%;
              }
              tr td{
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                word-wrap: break-word;
              }
              tr td:nth-child(1),tr td:nth-child(3){
                width: 20%;
              }
              tr td:nth-child(2){
                width: 56%;
              }
              </code></pre>
              `
  },
  {
    title: '使用div实现progress进度条',
    time: '2016-11-07',
    content: `可以在CSS里改样式，可以JS里改进度。<br>
              <pre><code>
              <div class="timepro">
                <div class="timepro-go" style="width:10%"></div>
              </div>
              </code></pre>
              <pre><code>
              .timepro{
                height:5px;
                background:#ccc;
                width:95%;
                border-radius:10px;
                -webkit-border-radius:10px;
                position: relative;
              }
              .timepro-go{
                width:0%;
                background:#000;
                height:5px;
                border-radius:10px;
                -webkit-border-radius:10px;
                position: relative;
                transition: all 10s;
                -webkit-transition: all 10s;
              }
              </code></pre>
              `
  },
  {
    title: 'JavaScript正则表达式-零宽断言',
    time: '2020-10-29',
    content: `<a href="https://www.cnblogs.com/hiuman/p/13895953.html">详情</a><br>
              <a href="https://blog.csdn.net/hiumanChung/article/details/111225542">详情</a>`
  },
  {
    title: 'Mac定制终端：iTerm2 + zsh + powerline',
    time: '2019-12-11',
    content: `<a href="https://www.cnblogs.com/hiuman/p/12024429.html">详情</a><br>
              <a href="https://blog.csdn.net/hiumanChung/article/details/111225497">详情</a>`
  },
  {
    title: '常见问题 解决合集',
    time: '2018-09-14',
    content: `<a href="https://www.cnblogs.com/hiuman/p/9636182.html">详情</a><br>
              包含但不限于：（更多可以去详情看）
              HTML: 跳转页面某个位置<br>
              HTML: 标签内可编辑<br>
              HTML: 启用/关闭自动完成功能<br>
              HTML: video标签相关<br>
              HTML: input file的accept类型<br>
              CSS: IE透明度<br>
              CSS: 过渡效果<br>
              CSS: 两个行内元素不对齐的问题解决<br>
              CSS: 垂直居中或水平居中一些问题<br>
              CSS: 垂直居中<br>
              CSS: 水平居中<br>
              CSS: 垂直 + 水平居中<br>
              CSS: （平均）占满位置<br>
              CSS: 使用CSS伪元素模拟float:center效果<br>
              CSS: 置顶页脚（Sticky Footer）<br>
              CSS: html高度塌陷问题解决<br>
              CSS: flex布局<br>
              CSS: 修改placeholder样式<br>
              CSS: HTML5 进度条样式<br>
              CSS: 遮罩层<br>
              CSS: 滚动条样式<br>
              JavaScript: 获取本周的日期<br>
              JavaScript: 格式化日期<br>
              JavaScript: 得到某个子元素是父元素第几个元素（获取索引index）<br>
              JavaScript: 使用let解决遍历添加事件index错误的问题<br>
              JavaScript: 使用let解决定时器遍历问题<br>
              JavaScript: 获取窗口/屏幕的宽/高信息（比较全的屏幕信息）<br>
              JavaScript: 获取上传的文件对象<br>
              JavaScript: 获取当前访问的浏览器<br>
              JavaScript: 获取当前访问的终端<br>
              JavaScript: 本地上传图片文件后，本地预览图片<br>
              JavaScript: 上传到服务器后，预览图片<br>
              JavaScript: 表情<br>
              JavaScript: 过滤emoji<br>
              JavaScript: 页面位置跳转<br>
              JavaScript: 获取浏览器系统语言<br>
              JavaScript: 阻止冒泡 & 阻止默认行为<br>
              JavaScript: 获取非行间样式<br>
              JavaScript: echarts图表自适应，当窗口变化时<br>
              JavaScript: 离开页面的执行函数 onbeforeunload事件与onunload事件<br>
              Git: 删除本地Git保存的账号密码<br>
              Git: 查看git登陆用户名、邮箱<br>
              Git: 删除git账号密码<br>
              `
  },
  {
    title: '构造函数、原型对象prototype、实例、隐式原型__proto__的理解',
    time: '2018-08-28',
    content: `<a href="https://www.cnblogs.com/hiuman/p/9543792.html">详情</a>`
  },
  {
    title: '得到两数相除的百分数',
    time: '2016-12-20',
    content: `原理：<br>
              Math.ceil()   //向上取整<br>
              Math.floor()  //向下取整<br>
              Math.round()  //四舍五入取整<br>
              <br>
              ### 第一种：得到的是整数<br>
              <pre><code>
              function percentNum(num, num2) {
                return Math.ceil(num / num2 * 100) + '%';
              }

              alert(percentNum(2,3)); // 67%
              </code></pre>
              <br>
              ### 第二种：得到的是整十数<br>
              <pre><code>
              function percentNum(num, num2) {
                return (Math.floor(num / num2 * 10))*10 +'%';
              }

              alert(percentNum(2,3)); // 60%
              </code></pre>
              <br>
              ### 第三种：得到的是保留两位小数的数<br>
              <pre><code>
              function percentNum(num, num2) {
                return Math.round(num / num2 * 10000 ) / 100 + '%';
              }

              alert(percentNum(2,3)); // 66.67%
              </code></pre>
              `
  },
  {
    title: 'javascript 实现购物车页面',
    time: '2017-02-06',
    content: `<a href="https://www.cnblogs.com/hiuman/p/7347386.html">详情</a><br>
              <a href="https://blog.csdn.net/hiumanChung/article/details/84854801">详情</a>`
  },
  {
    title: '使用正则表达式 匹配 HTML 标签内的内容',
    time: '2022-04-08',
    content: `<a href="https://blog.csdn.net/hiumanChung/article/details/124024111">详情</a><br>
              正则表达式如下
              /(?<=((<[a-zA-Z-]+?){0,1}>))([\s\S]+)(?=([\s]{0,1}<\/[a-zA-Z-]+(>{0,1})))/g`
  },
  {
    title: '拿到今天往后 最近的 多个 周几',
    time: '2022-04-08',
    content: `<a href="https://blog.csdn.net/hiumanChung/article/details/124042731">详情</a>`
  },
  {
    title: '6 位验证码输入框（vue）',
    time: '2023-02-15',
    content: `<a href="https://littlehiuman.github.io/29-verifyCode/">查看效果</a>`
  }
]
// 排序
blogs = blogs.sort(
  (a, b) => new Date(a.time).getTime() - new Date(b.time).getTime()
)
// 渲染页面
let str = ''
for (let i = blogs.length - 1; i >= 0; i--) {
  str += `<div class="view">
<div class="infomation">
  <h2 class="title">${blogs[i].title}</h2>
  <p class="date msg">${blogs[i].time}</p>
  <div class="log">
    ${blogs[i].content}
  </div>
</div>
</div>`
}
document.getElementsByClassName('blogs-content')[0].innerHTML = str
