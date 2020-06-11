$(document).ready(
  function() {


    // quando passo col mouse sopra un elemento della lista che ha
    // classe 'dropdown' aggiungo la classe 'active' e il menu viene mostrato
    $('.with-dropdown').mouseenter(
      function() {
        $(this).children('.dropdown').addClass('active');
      }
    );

    // quando passo col mouse sopra un elemento della lista che ha
    // id 'lang' rimuovo la classe 'fa-angle-down' e aggiungo
    // la classe 'fa-angle-up'
    $('#lang').mouseenter(
      function() {
        $('i').removeClass('fa-angle-down');
        $('i').addClass('fa-angle-up');
      }
    );


    // quando tolgo il mouse dall'elemento della lista che ha classe
    // 'dropdown' la classe 'active' viene rimossa e il menu viene nascosto
    $('.with-dropdown').mouseleave(
      function() {
        $(this).children('.dropdown').removeClass('active');
      }
    );

    // quando passo col mouse sopra un elemento della lista che ha
    // id 'lang' rimuovo la classe 'fa-angle-up' e aggiungo
    // la classe 'fa-angle-down'
    $('#lang').mouseleave(
      function() {
        $('i').removeClass('fa-angle-up');
        $('i').addClass('fa-angle-down');
      }
    );

    // quando clicco su un elemento della lista che ha classe
    // 'dropdown' la classe 'active' viene rimossa o aggiunta a seconda
    // se la dropdown è visibile o meno
    $('.with-dropdown').click(
      function() {
        $(this).children('.dropdown').toggleClass('active');
      }
    );

    $('.with-dropdown-bm').click(
      function() {
        $(this).children('.dropdown-bm').slideToggle('active');
      }
    );

    // quando clicco su un elemento della lista che ha
    // id 'lang' rimuovo la classe 'fa-angle-up' e aggiungo
    // la classe 'fa-angle-down'
    $('#lang').click(
      function() {
        $('i').removeClass('fa-angle-up');
        $('i').addClass('fa-angle-down');
      }
    );


    // quando clicco sull'icone del burger menu compare la finestra
    $('.burger-menu a').click(
      function() {
        $('.menu-toggleable').slideDown();
      }
    );

    // quando clicco su un link del burger menu il testo cambia colore
    // aggiungendo la classe 'active'
    $('.menu a').click(
      function() {
        $(this).toggleClass('active');
      }
    );



    // quando clicco sull'icone della x scompare la finestra
    $('.close').click(
      function() {
        $('.menu-toggleable').slideUp();
      }
    );

  }
);
