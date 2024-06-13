$('#button-right').click(function() {
    $('.slider').children().addClass('left').removeClass('right').first().appendTo('.slider');
  });
  
  $('#button-left').click(function() {
    $('.slider').children().addClass('right').removeClass('left').last().prependTo('.slider');
  });
  
      $(document).ready(function() {
          $('img.thumbnail').click(function() {
              window.location.href = this.id + '.html';
          });
      });