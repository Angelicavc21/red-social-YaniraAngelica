$(document).ready(begin());

function begin() {
  //  Materialize
  $('.button-collapse').sideNav();
  $('.dropdown-button').dropdown({
    inDuration: 300,
    outDuration: 225,
    constrainWidth: false, // Does not change width of dropdown to that of the activator
    hover: true, // Activate on hover
    gutter: 0, // Spacing from edge
    belowOrigin: false, // Displays dropdown below the button
    alignment: 'left', // Displays dropdown with edge aligned to the left of button
    stopPropagation: false // Stops event propagation
  });
  $('#textarea1').val('New Text');
  $('#textarea1').trigger('autoresize');

  //  Capturando etiquetas con jquery
  var $textarea = $('#icon_prefix2');
  var $containerPost = $('#container-post');
  var $btnPost = $('#btn-post');
  $btnPost.on('click', function() {
    var $textPost = $textarea.val();
    if ($textPost.length > 0) {
      $containerPost.append(
        '<div class="border-post row">' +
          '<form class="col l10 offset-l1 offset-s1 s10">' +
            '<div class="row">' +
              '<div class="input-field col l11 s11">' +
                '<i id="edit-btn" class="material-icons prefix">mode_edit</i>' +
                '<textarea id="text-edit" class="materialize-textarea" disabled>' + $textPost + '</textarea>' +
                '<div id="container-btn-save" class="row">' +
                  '<span class="col l2 left"><i class="material-icons">thumb_up</i></span>' +
                  '<span class="col l2 left"><i class="material-icons">favorite</i></span>' +
                  '<span class="col l2 left"><i class="material-icons">fitness_center</i></span>' +
                '</div>' +
              '</div>' +
            '</div>' +
          '</form>' +
        '</div>'
      );
      var $editBtn = $('#edit-btn');
      $editBtn.on('click', function() {
        $('#text-edit').removeAttr('disabled');
        $('#container-btn-save').append(
          '<a id="btn-save" class="waves-effect waves-light btn">guardar</a>'
        );
        $('#btn-save').on('click', function() {
          $('#text-edit').attr('disabled', true);
          $('#btn-save').remove();
        });
      });
    }
  });
}
