$(document).ready(function() {
  $('p').text('Змінений текст');
  $('#task1').addClass('highlight');
  $('li').addClass('list-item');
  $('.highlight').css('color', 'red');
  $('.list-item').css('background-color', 'lightgrey');

  $('#animateButton').click(function() {
    $('.highlight').slideDown(500).slideUp(500);
  });

  $('#task1 p:last-child').text('Новий останній текст');
});
