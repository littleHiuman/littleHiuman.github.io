;(function (global,factory) {
	global.toast = factory();
	global.toast.init();
})(window, function () {
	var addTimer=null;
	var decreaseTimer=null;
	var time = 2000;
	var fadeTime = 100;
	var Toast = function () {
	}
	Toast.prototype = {
		options: {
			opacity: 0,
			type: null,
			inTimer: null,
			outTimer: null,
			width: '100px',
			position: 'bottom', // bottom top middle
		},
		setOptions: function(options){
			var newOptions = {
				width: options.width,
				position: options.position,
			}
			time = options.time||time;
			fadeTime = options.fadeTime||fadeTime;
			this.options = Object.assign({},this.options,newOptions)
			var wrapper = document.getElementsByClassName('toast-wrapper')[0]
			if('type' in options){
				var pics = {
					loading: "toast-load.gif",
					success: "toast-success.png",
					error: "toast-error.png",
					waiting: "toast-hourglass.svg"
				};

				var imgObj = wrapper.children[0]
				var src = imgObj.src.split('/').slice(0,-1)
				if(!pics[options.type]){
					return alert('type错误')
				}
				src.push(pics[options.type])
				imgObj.src = src.join('/')
			}
			if('width' in options){
				wrapper.style.width = this.options.width
			}
			if('msg' in options){
				var paraObj = wrapper.children[1]
				paraObj.innerText = options.msg
			}
			if('position' in options){
				var classNames = wrapper.className.split(' ')
				for(var i = 0;i<classNames.length;i++){
					var idx = classNames[i].indexOf('toast-wrapper-')
					if(idx!=-1){
						classNames[i] = 'toast-wrapper-'+options.position
						break;
					}
				}
				wrapper.className = classNames.join(' ')
			}
		},
		init: function () {
			var styles = document.createElement('style');
			styles.type = 'text/css'
			var options = Toast.prototype.options
			styles.innerHTML = `
				.toast-wrapper{
					position: fixed;
					background-color: rgba(0,0,0,0.5);
					left: 50%;
					width: ${options.width};
					min-height: 90px;
					text-align: center;
					border-radius: 10px;
				}
				.toast-wrapper-bottom{
					bottom: 100px;
					translate(-50%,0);
				}
				.toast-wrapper-middle{
					top:50%;
					transform: translate(-50%,-50%);
				}
				.toast-wrapper-top{
					top:100px;
					translate(-50%,0);
				}
				.toast-img{
					margin:10px auto;
					display: block;
					width:35px;
				}
				.toast-para{
					color: #eee;
					font-size: 14px;
				}
				.toast-hidden{
					visibility: hidden;
					opacity: 0;
					z-index: -99;
				}
			`
			var header = document.getElementsByTagName('head')[0];
			header.appendChild(styles)
			var wrapper = document.createElement('div');
			wrapper.className = 'toast-wrapper toast-hidden toast-wrapper-'+this.options.position;
			wrapper.innerHTML = `
				<img class="toast-img" src="./toast-load.gif"/>
				<p class="toast-para">文字</p>
			`
			var body = document.getElementsByTagName('body')[0];
			body.appendChild(wrapper)
		},
		loading: function(msg){
			this.setOptions({type: 'loading',opacity: 0,msg})
			this.fadeIn()
		},
		success: function (msg) {
			this.setOptions({type: 'success',opacity: 0,msg})
			this.fadeIn()
		},
		error: function (msg) {
			this.setOptions({type: 'error',opacity: 0,msg})
			this.fadeIn()
		},
		waiting: function (msg) {
			this.setOptions({type: 'waiting',opacity: 0,msg})
			this.fadeIn()
		},
		fadeIn: function (type) {
			var wrapper = document.getElementsByClassName('toast-wrapper')[0]
			var val = +wrapper.style.opacity;
			wrapper.className = wrapper.className.replace(' toast-hidden', '');
			if(!type){
				clearTimeout(addTimer)
				clearTimeout(decreaseTimer)
				this.fadeIn.call(this,'continue')
				wrapper.style.opacity = 0;
			}
			if(val >= 1){
				wrapper.style.opacity = 1
				clearTimeout(addTimer);
				clearTimeout(decreaseTimer)
				decreaseTimer = setTimeout(this.fadeOut.bind(this), +time);
			}else{
				wrapper.style.opacity = val + 0.1
				addTimer = setTimeout(this.fadeIn.bind(this,'add'), +fadeTime);
			}
		},
		fadeOut: function () {
			var wrapper = document.getElementsByClassName('toast-wrapper')[0]
			var val = +wrapper.style.opacity;
			if(val <= 0){
				wrapper.style.opacity = 0
				clearTimeout(decreaseTimer);
				wrapper.className += ' toast-hidden'
			}else{
				wrapper.style.opacity = val - 0.1
				decreaseTimer = setTimeout(this.fadeOut.bind(this), +fadeTime);
			}
		}
	}
	return new Toast();
});