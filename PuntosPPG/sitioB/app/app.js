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




/* METAS LOGIN */
$(document).ready(function () {
  $('.metasLogin').hide()
  $('.metasForm button').click(function () {
    $('.metasLogin').show()
    $('.metasForm').hide()
  })
})