$doc = $(document)
/* MENU - NAVBAR */
$doc.scroll(function () {
  if($doc.scrollTop() >= 200) {
    $('nav.navbar').addClass('sticky-top animated slideInDown')
  } else {
    $('nav.navbar').removeClass('sticky-top animated slideInDown')
  }
})