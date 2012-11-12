$('div.span12.name').mouseover(function() {

  var lname = $('.last'),
      fname = $('.first');

  if (lname.css('margin-top') == '0px') {
      lname.animate({
        'margin-top' : '30px',
        'color' : '#ccc',
        'margin-left' : '60px'
      });
      fname.animate({
      'margin-left': '40px'
      });
    } else {
       lname.animate({
        'margin-top' : '0px',
         'margin-left' : '100px'
        
      });
      fname.animate({
        'margin-left': '0px'
      });
    }
});