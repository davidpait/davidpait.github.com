$('div.span12.name').hover(function() {
  $('.last').animate({
    'margin-top' : '+=30',
    'color' : '#ccc',
    'margin-left' : 60
  });
  $('.first').animate({
  'margin-left':40
  });
}, function() {
   $('.last').animate({
    'margin-top' : '0',
     'margin-left' : 100
    
  });
  $('.first').animate({
    'margin-left': 0
  });
});