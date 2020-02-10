(function($) {
$(function() {
     
    $('ul.product-tab_list').on('click', 'li:not(.active)', function() {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tab-wrap').removeClass('active').eq($(this).index()).addClass('active');
    });
     
});
})(jQuery);

$(document).ready(function(){
  $('.slider-wrap').slick({
  	slidesToShow: 4,
  	slidesToScroll: 1,
  	responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 501,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }
  ]
  });
});