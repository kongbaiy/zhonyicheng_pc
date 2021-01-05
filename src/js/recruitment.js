import '../scss/yatian.scss';
import '../css/recruitment.css';

$(function(){
  $('.nav-item').on('click', function() {
    var index = $(this).index();

    $('.nav-item').removeClass('nav-item_active');
    $(this).addClass('nav-item_active');
    $('.nav-view').hide();
    $('.nav-view').eq(index).show();
  });

  // 社会招聘
  $('.social-recruitment_talent-concept .social-recruitment_form-position-listItemBox').on('click', function() {
    var class_name = $(this).attr('class');
    var index = $(this).index();

    $(this).addClass('social-recruitment_form-position-listItemBox_active');
    if(class_name.indexOf('social-recruitment_form-position-listItemBox_active') > -1) {
      $('.social-recruitment_talent-concept .social-recruitment_form-position-listItemBox').eq(index).removeClass('social-recruitment_form-position-listItemBox_active');
    }
  });

  // 校园招聘
  $('.campus-recruitmen-navItem').on('click', function() {
    var index = $(this).index();

    $('.campus-recruitmen-navItem').removeClass('campus-recruitmen-navItem_active');
    $(this).addClass('campus-recruitmen-navItem_active');
  });

  var campusRecruitmentSwiperIndex = 0;
	var campusRecruitmentSwiper = new Swiper('.campus-recruitment-swiper', {
		spaceBetween: 20,
		slidesPerView: 4,
		freeMode: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		observer:true,
		observeParents:true,
		navigation: {
			nextEl: '.campus-recruitment-swiperNavigationNext',
			prevEl: '.campus-recruitment-swiperNavigationPrev'
		},
		on: {
			slideChangeTransitionEnd() {
        campusRecruitmentSwiperIndex = this.realIndex;
      }
    },
		a11y: {
			prevSlideMessage: 'Previous slide',
			nextSlideMessage: 'Next slide',
			firstSlideMessage: 'This is the first slide',
			lastSlideMessage: 'This is the last slide',
			paginationBulletMessage: 'Go to slide ' + (campusRecruitmentSwiperIndex + 1),
			notificationClass: 'swiper-notification',
			containerMessage: 'This is a swiper',
			containerRoleDescriptionMessage: 'banner', //aria-role-description
			itemRoleDescriptionMessage: 'slider',
		}
  });

  $('.campus-recruitment-formBox .social-recruitment_form-position-listItemBox').on('click', function() {
    var class_name = $(this).attr('class');
    var index = $(this).index();

    $(this).addClass('social-recruitment_form-position-listItemBox_active');
    if(class_name.indexOf('social-recruitment_form-position-listItemBox_active') > -1) {
      $('.campus-recruitment-formBox .social-recruitment_form-position-listItemBox').eq(index).removeClass('social-recruitment_form-position-listItemBox_active');
    }
  });
});
