$doc = $(document)
/* MENU - NAVBAR */
$doc.scroll(function () {
  if($doc.scrollTop() >= 400) {
    $('nav.navbar').addClass('sticky-top animated slideInDown')
    $('body').addClass('with-stick')
  } else {
    $('nav.navbar').removeClass('sticky-top animated slideInDown')
    $('body').removeClass('with-stick')
  }
})