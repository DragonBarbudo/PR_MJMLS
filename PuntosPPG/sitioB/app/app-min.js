$doc=$(document),$doc.scroll(function(){$doc.scrollTop()>=400?($("nav.navbar").addClass("sticky-top animated slideInDown"),$("body").addClass("with-stick")):($("nav.navbar").removeClass("sticky-top animated slideInDown"),$("body").removeClass("with-stick"))});