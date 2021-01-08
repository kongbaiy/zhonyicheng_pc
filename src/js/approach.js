import '../scss/yatian.scss';
import '../css/approach.css';

$(function(){
  $('.nav-item').on('click', function() {
    var index = $(this).index();

    $('.nav-item').removeClass('nav-item_active');
    $(this).addClass('nav-item_active');
    $('.nav-view').hide();
    $('.nav-view').eq(index).show();
  });

  // 发展历程
  var developmentHistoryIndex = 0;
	var developmentHistory = new Swiper('.development-history-swiper', {
		spaceBetween: 0,
    slidesPerView: 5,
	  centeredSlides : true,
		freeMode: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		observer:true,
		observeParents:true,
		navigation: {
			nextEl: '.development-history-swiperNext',
			prevEl: '.development-history-swiperPrev'
		},
		on: {
			slideChangeTransitionEnd() {
        developmentHistoryIndex = this.realIndex;
        $('.development-history-swiper .swiper-slide').removeClass('development-history-swiperSlide_active');
        $('.development-history-swiper .swiper-slide').eq(developmentHistoryIndex).addClass('development-history-swiperSlide_active');
      },

      click() {
        var index = this.clickedIndex;
        $('.development-history-swiper .swiper-slide').removeClass('development-history-swiperSlide_active');
        $('.development-history-swiper .swiper-slide').eq(index).addClass('development-history-swiperSlide_active');
        developmentHistory.slideTo(index);
      }
    },
		a11y: {
			prevSlideMessage: 'Previous slide',
			nextSlideMessage: 'Next slide',
			firstSlideMessage: 'This is the first slide',
			lastSlideMessage: 'This is the last slide',
			paginationBulletMessage: 'Go to slide ' + (developmentHistoryIndex + 1),
			notificationClass: 'swiper-notification',
			containerMessage: 'This is a swiper',
			containerRoleDescriptionMessage: 'banner', //aria-role-description
			itemRoleDescriptionMessage: 'slider',
		}
	});
});
