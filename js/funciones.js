$(document).ready(function(){
  // deslizar entre secciones a partir de un link.
  $('a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
        .animate({scrollTop: targetOffset}, 700);
       return false;
      }
    }
  });
  // deslizar.

  // Codigo para el up & down del boton del header.
  function loop() {
    $('.bouncer').animate({'top': '30'}, {
        duration: 1000,
        complete: function() {
            $('.bouncer').animate({top: 0}, {
                duration: 1000,
                complete: loop});
        }});
  }
  loop();
  // up & down.

  //lineas para el dialog.
  var dialog = document.querySelector('dialog');
  var showModalButton = document.querySelector('.show-modal');
  if (! dialog.showModal) {
    dialogPolyfill.registerDialog(dialog);
  }
  //evento click listener del dialog.
  showModalButton.addEventListener('click', function() {
    //leo los datos para el correo.
    var email = $("#email").val();
    var nombre = $("#nombre").val();
    var textmail = $("#textmail").val();
    //valido que cargue todo.
    if(email == '' || nombre == '' || textmail == ''){
      //si no carga todo, muestro dialog.
      dialog.showModal();
    }else{
      //si carga todo, invoco servicio de mail.
      $.ajax({
          type: "POST",
          data: "email=" + email + "&nombre=" + nombre + "&textmail=" + textmail,
          url : 'https://nortiaapp.herokuapp.com/mail',
          success: function(enviado)
          {
              $("#email").val("");
              $("#nombre").val("");
              $("#textmail").val("GRACIAS POR ESCRIBIRNOS!");
          }
      });
    }
  });
  //CERRAR DIALOGO.
  dialog.querySelector('.close').addEventListener('click', function() {
    dialog.close();
  });//CERRAR DIALOGO.

  });
