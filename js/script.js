$(document).ready(
  function() {


    // quando passo col mouse sopra un elemento della lista che ha
    // classe 'dropdown' aggiungo la classe 'active' e il menu viene mostrato
    $('.with-dropdown').mouseenter(
      function() {
        $(this).children('.dropdown').addClass('active');
      }
    );


    // quando tolgo il mouse dall'elemento della lista che ha classe
    // 'dropdown' la classe 'active' viene rimossa e il menu viene nascosto
    $('.with-dropdown').mouseleave(
      function() {
        $(this).children('.dropdown').removeClass('active');
      }
    );

    // quando clicco su un elemento della lista che ha classe
    // 'dropdown' la classe 'active' viene rimossa e il menu viene nascosto
    $('.with-dropdown').click(
      function() {
        $(this).children('.dropdown').removeClass('active');
      }
    );

  }
);
