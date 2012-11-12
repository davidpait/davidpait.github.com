$('div.span12.name').mouseover(function() {

  var lname = $('.last'),
      fname = $('.first');

  if (lname.css('margin-top') == '30px') {
      lname.animate({
        'margin-top' : '+=30',
        'color' : '#ccc',
        'margin-left' : 60
      });
      fname.animate({
      'margin-left':40
      });
    } else {
       lname.animate({
        'margin-top' : '0',
         'margin-left' : 100
        
      });
      fname.animate({
        'margin-left': 0
      });
    }
});