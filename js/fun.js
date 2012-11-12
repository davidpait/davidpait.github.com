$('div.span12.name').hover(function() {
  $('.last').animate({
    'margin-top' : '+=30',
    'color' : '#ccc'
  });
  $('.first').animate({
  'margin-left':80
  });
}, function() {
   $('.last').animate({
    'margin-top' : '0px',
     left : 0
    
  });
  $('.first').animate({
    'margin-left':0
  });
});