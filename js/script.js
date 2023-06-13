var navOff = $('#menu').offset().top;

$(window).scroll(function(){
  var scrolling = $(this).scrollTop();
  if(scrolling > navOff){
$('#menu').addClass('new_menu')
  }

  else{
    $('#menu').removeClass('new_menu')
  }
})