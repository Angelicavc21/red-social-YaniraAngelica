$(document).ready(begin);

function begin() {
  // materialize
  $('.carousel.carousel-slider').carousel({fullWidth: true});
  // Initialize Firebase
  var config = {
    apiKey: 'AIzaSyB6CEIO9s4qhe5MIIlGV0PLkVVdvguZVA4',
    authDomain: 'team-angelica-yanira-c5297.firebaseapp.com',
    databaseURL: 'https://team-angelica-yanira-c5297.firebaseio.com',
    projectId: 'team-angelica-yanira-c5297',
    storageBucket: 'team-angelica-yanira-c5297.appspot.com',
    messagingSenderId: '1074437310056'
  };
  firebase.initializeApp(config);
  //  login
  var provider = new firebase.auth.GoogleAuthProvider();
  $('#login').on('click', function() {
    firebase.auth().signInWithPopup(provider).then(function(result) {
      console.log(result.user);
      saveData(result.user);
      $('#login').hide();
      $('#root').append('<img src="' + result.user.photoURL + '">');
    });
    window.location.href = '../views/news.html';
  });
  //  Esta funcion guarda automaticamente los datos
  function saveData(user) {
    var realUser = {
      uid: user.uid,
      nombre: user.displayName,
      email: user.email,
      foto: user.photoURL
    };
    firebase.database().ref('team/' + user.uid).set(realUser);
  }

  //  Aquí estoy leyendo la Base de datos
  firebase.database().ref('team').on('child_added', function(data) {
    var user = data.val();
    $('#root').append('<img class="photo-url" src="' + user.foto + '">');
  });
  /*
  //   Escribir enla base de datos
  $('#save').on('click', function() {
    firebase.database().ref('test').set({
      nombre: 'Alia',
      edad: '14',
      sexo: 'masculino'
    });
  });*/
}
