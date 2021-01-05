import '../scss/yatian.scss';
import '../css/news.css';

$(function(){
  $('.news-nav-item').on('click', function() {
    $('.news-nav-item').removeClass('news-nav-item_active');
    $(this).addClass('news-nav-item_active');
  });

  $('.news-list-item').on('click', function() {
    window.location.href = 'news-detail.html';
  });
});
