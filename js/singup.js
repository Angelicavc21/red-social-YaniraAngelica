$('#First-name').keyup(function() {
  if ($('#First-name').val().length < 3) {
    $('#next3').addClass('disabled');
    $('#next3').removeClass('btn-next');
  } else if ($('#First-name').val().length == 3) {
    $('#next3').removeClass('grey lighten-2 disabled');
    $('#next3').addClass('btn-next');
  }
});
$('#test5').click(function() {
  if ($('input[type="checkbox"]:checked+label:before')) {
    $('#next3').removeClass('grey lighten-2 disabled');
    $('#next3').addClass('btn-next');
    $('#next3').attr('href', 'news.html');
  }
});