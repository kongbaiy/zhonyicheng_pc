import '../scss/yatian.scss';
import '../css/case.css';

$(function(){
  $('.nav-item').on('click', function() {
    var index = $(this).index();

    $('.nav-item').removeClass('nav-item_active');
    $(this).addClass('nav-item_active');
    $('.nav-view').hide();
    $('.nav-view').eq(index).show();
  });
});
