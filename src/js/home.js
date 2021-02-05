import '../scss/yatian.scss';
import '../css/home.css';

$(function(){
  // banner
  var bannerIndex = 0;
	var banner = new Swiper('.banner', {
    direction: 'vertical',
		autoplay: 5000,
		loop: true,
		pagination: {
			el: '.banner-pagination',
			clickable: true,
		},
		on: {
			slideChangeTransitionEnd() {
        bannerIndex = this.realIndex;
        $('.banner-num').text(bannerIndex + 1);
        $('.banner-total').text(5);
			}
		},
		a11y: {
			prevSlideMessage: 'Previous slide',
			nextSlideMessage: 'Next slide',
			firstSlideMessage: 'This is the first slide',
			lastSlideMessage: 'This is the last slide',
			paginationBulletMessage: 'Go to slide ' + (bannerIndex + 1),
			notificationClass: 'swiper-notification',
			containerMessage: 'This is a swiper',
			containerRoleDescriptionMessage: 'banner', //aria-role-description
			itemRoleDescriptionMessage: 'slider',
		}
  });

  // 关于我们
  $('.video-play-icon').on('click', function() {
	$('.popup-bg, .popup').show();
	$('.popup-video').trigger('play');
  });
  $('.popup-bg, .popup-video-close').on('click', function() {
	  console.log($('.popup-video'));
	$('.popup-bg, .popup').hide();
	$('.popup-video').trigger('pause');
  });

  // 经典案例
  var classicCaseIndex = 0;
	var classicCase = new Swiper('.classic-case-listBox', {
		autoplay: 5000,
		loop: true,
		on: {
			slideChangeTransitionEnd() {
				classicCaseIndex = this.realIndex;
			}
    },
    navigation: {
			nextEl: '.classic-case-swiperNavigationNext',
			prevEl: '.classic-case-swiperNavigationPrev',
		},
		a11y: {
			prevSlideMessage: 'Previous slide',
			nextSlideMessage: 'Next slide',
			firstSlideMessage: 'This is the first slide',
			lastSlideMessage: 'This is the last slide',
			paginationBulletMessage: 'Go to slide ' + (classicCaseIndex + 1),
			notificationClass: 'swiper-notification',
			containerMessage: 'This is a swiper',
			containerRoleDescriptionMessage: 'banner', //aria-role-description
			itemRoleDescriptionMessage: 'slider',
		}
  });

  $('.classic-case-li').on('click', function()  {
    var index = $(this).index();

    $('.classic-case-li').removeClass('classic-case-li_active');
    $(this).addClass('classic-case-li_active');
  });

  // 公司业务
  var companybusinessIndex = 0;
	var companybusiness = new Swiper('.company-business-list', {
		autoplay: 5000,
		loop: true,
		on: {
			slideChangeTransitionEnd() {
				companybusinessIndex = this.realIndex;
			}
    },
    navigation: {
			nextEl: '.company-business-swiperNavigationNext',
			prevEl: '.company-business-swiperNavigationPrev',
		},
		a11y: {
			prevSlideMessage: 'Previous slide',
			nextSlideMessage: 'Next slide',
			firstSlideMessage: 'This is the first slide',
			lastSlideMessage: 'This is the last slide',
			paginationBulletMessage: 'Go to slide ' + (companybusinessIndex + 1),
			notificationClass: 'swiper-notification',
			containerMessage: 'This is a swiper',
			containerRoleDescriptionMessage: 'banner', //aria-role-description
			itemRoleDescriptionMessage: 'slider',
		}
  });

  // 公司优势
  $('.company-advantage-listItem').on('click', function() {
    var title = $(this).find('.company-advantage-listItemTtitle').text();
    var text = $(this).find('.company-advantage-listItemText').text();

    $('.company-advantage-listItem').removeClass('company-advantage-listItem_active');
    $(this).addClass('company-advantage-listItem_active');
    $('.company-advantage-swiperSlideTitle').text(text);
  });

  var companyAdvantageIndex = 0;
	var companyAdvantage = new Swiper('.company-advantage-swiper', {
		autoplay: 5000,
		loop: true,
		on: {
			slideChangeTransitionEnd() {
				companyAdvantageIndex = this.realIndex;
			}
    },
    navigation: {
			nextEl: '.company-advantage-navigationNext',
			prevEl: '.company-advantage-navigationPrev',
		},
		a11y: {
			prevSlideMessage: 'Previous slide',
			nextSlideMessage: 'Next slide',
			firstSlideMessage: 'This is the first slide',
			lastSlideMessage: 'This is the last slide',
			paginationBulletMessage: 'Go to slide ' + (companyAdvantageIndex + 1),
			notificationClass: 'swiper-notification',
			containerMessage: 'This is a swiper',
			containerRoleDescriptionMessage: 'banner', //aria-role-description
			itemRoleDescriptionMessage: 'slider',
		}
  });

  // 荣誉墙
  var honorWallIndex = 0;
	var honorWall = new Swiper('.honor-wall-swiper', {
		autoplay: 5000,
		loop: true,
		on: {
			slideChangeTransitionEnd() {
				honorWallIndex = this.realIndex;
			}
    },
    navigation: {
			nextEl: '.honor-wall-navigationNext',
			prevEl: '.honor-wall-navigationPrev',
		},
		a11y: {
			prevSlideMessage: 'Previous slide',
			nextSlideMessage: 'Next slide',
			firstSlideMessage: 'This is the first slide',
			lastSlideMessage: 'This is the last slide',
			paginationBulletMessage: 'Go to slide ' + (honorWallIndex + 1),
			notificationClass: 'swiper-notification',
			containerMessage: 'This is a swiper',
			containerRoleDescriptionMessage: 'banner', //aria-role-description
			itemRoleDescriptionMessage: 'slider',
		}
  });

  // 新闻
  $('.news-nav-item').on('click', function() {
    $('.news-nav-item').removeClass('news-nav-item_active');
    $(this).addClass('news-nav-item_active');
  });
});
