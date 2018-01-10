$(document).ready(begin());
function begin() {
  //  Materialize
  $('#textarea1').val('New Text');
  $('#textarea1').trigger('autoresize');
  //  Habilitando post
  var newDate = new Date();
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
                '<i id="edit-btn" class="color-purple material-icons prefix">mode_edit</i>' +
                '<textarea id="text-edit" class="materialize-textarea" disabled>' + $textPost + '</textarea>' +
                '<div id="container-btn-save" class="row">' +
                  '<span id="like" class="col l2 left"><i class="likes material-icons">thumb_up</i></span>' +
                  '<span id="love" class="col l2 left"><i class="likes material-icons">favorite</i></span>' +
                  '<span id="force" class="col l2 left"><i class="likes material-icons">fitness_center</i></span>' +
                  '<span class="valign-wrapper col l2 right">' + newDate.getHours() + ':' + newDate.getMinutes() + '  ' + newDate.getFullYear() + '/' + (newDate.getMonth() + 1) + '/' + newDate.getDate() + '</span>' +
                '</div>' +
                '<div id="container-likes" class="text-purple col s2 l2">' +
                '</div>' +
                '<div id="container-love" class="text-purple col s2 l2">' +
                '</div>' +
                '<div id="container-force" class="text-purple col s2 l2">' +
                '</div>' +
              '</div>' +
            '</div>' +
          '</form>' +
        '</div>'
      );
      //  habilitando btn like
      var $like = $('#like');
      var numLike = 1;
      $like.on('click', function() {
        if (numLike === 1) {
          $('#container-likes').html('<b>' + numLike++ + ' like' + '</b>');
        } else {
          $('#container-likes').html('<b>' + numLike++ + ' likes' + '</b>');
        }
      });
      //  habilitando btn love
      var $love = $('#love');
      var numLove = 1;
      $love.on('click', function() {
        if (numLove === 1) {
          $('#container-love').html('<b>' + numLove++ + ' love' + '</b>');
        } else {
          $('#container-love').html('<b>' + numLove++ + ' loves' + '</b>');
        }
      });
      //  habilitando btn fuerza
      var $force = $('#force');
      var numForce = 1;
      $force.on('click', function() {
        if (numForce === 1) {
          $('#container-force').html('<b>' + numForce++ + ' force' + '</b>');
        } else {
          $('#container-force').html('<b>' + numForce++ + ' forces' + '</b>');
        }
      });
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
