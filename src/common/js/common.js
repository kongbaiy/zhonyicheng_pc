(function(win, doc) {
	/**
	 * 监听鼠标滑动方向
	 * @param {object} obj
	 *  @param {Function} up
	 *  @param {Function} down
	 *  @param {Function} pause
	 * */
	function WindowAddMouseWheel(obj) {
		var timeout = null;
		var scrollFunc = function(e) {
			e = e || window.event;

			if (e.wheelDelta) { //判断浏览器IE，谷歌滑轮事件
				if (e.wheelDelta > 0) { //当滑轮向上滚动时
					obj.up();
				}

				if (e.wheelDelta < 0) { //当滑轮向下滚动时
					obj.down();
				}
			} else if (e.detail) { //Firefox滑轮事件
				if (e.detail > 0) { //当滑轮向上滚动时
					obj.up();
				}

				if (e.detail < 0) { //当滑轮向下滚动时
					obj.down();
				}
			}
			

			if(timeout) {
				clearTimeout(timeout);
				timeout = null;
			}
			timeout = setTimeout(() => {
				if(obj.pause) {
					obj.pause();
				}
			}, 200);
			
		}

		if (document.addEventListener) {
			document.addEventListener('DOMMouseScroll', scrollFunc, false);
		}

		window.onmousewheel = document.onmousewheel = scrollFunc;
	}


	/**
	 * @param {object} options
	 *  @param {Element} videoEl
	 *  @param {Element} playEl
	 *  @param {Element} pauseEl
	 * */
	function Video(options) {
		var video_el = options.videoEl,
			play_el = options.playEl,
			pause_el = options.pauseEl;

		try {
			video_el.onClick = function() {
				if (!this.paused) {
					this.pause();
				}
			}

			video_el.onPlaying = function() {
				if (play_el) {
					play_el.style.display = 'none';
				}

				if (pause_el) {
					pause_el.style.display = ' ';
				}
			}

			video_el.onPause = function() {
				if (play_el) {
					play_el.style.display = ' ';
				}

				if (pause_el) {
					pause_el.style.display = 'none';
				}
			}
		} catch (err) {
			// console.error(err);
			throw new Error(err);
		}
	}
	
	/**
	 * 禁止页面滑动
	 * @param {boolean} status
	 * */ 
	function ForbidWindowSliding(status) {
		if(status){
			document.body.parentNode.style.overflow = "hidden";  
		}else {
			document.body.parentNode.style.overflow = "auto";
		}
	}
	
	win._common = {
		windowAddMouseWheel: WindowAddMouseWheel,
		video: Video,
		forbidWindowSliding: ForbidWindowSliding
	};
})(window, document);
