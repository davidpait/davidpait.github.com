$('div.name').hover(function() {
  $('.last').animate({
    top : '+=30',
    'color' : '#ccc'
  });
  $('.first').animate({
  'margin-left':80
  });
}, function() {
   $('.last').animate({
    top : 0,
     left : 0
    
  });
  $('.first').animate({
    'margin-left':0
  });
});