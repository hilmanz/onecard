/*
Theme Name: VCARD
Author: Acit Jazz
Version: 1.0
*/

$(function(){
  $('.autoheight').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });
  $('.autoheights').css({ height: $(window).innerHeight() + 'px' });

  $(window).resize(function(){
	$('.autoheight').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });
  $('.autoheights').css({ height: $(window).innerHeight() + 'px' });
  });
});

$( "#header" ).mousemove(function( event ) {
  var msg = "Handler for .mousemove() called at ";
  msg += event.pageX + ", " + event.pageY;
    $("#headercontent").css('transform', 'translate(' + event.pageY /35 + 'px,' + -event.pageX /35+ 'px)');
});

var scene = document.getElementById('paralax');
var parallax = new Parallax(scene);

jQuery(document).ready(function($){
	$(function() {
	  // $('a[href*=#]:not([href=#])').click(function() {
	  $('a.scrolldown').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});
	$(window).stellar();
	//wizard
	 var owl = $("#step");
	  owl.owlCarousel({
		navigation : false, // Show next and prev buttons
		pagination :false,
		mouseDrag:false,
		touchDrag:false,
		singleItem : true,
		slideSpeed : 300,
    	autoHeight : true,
		paginationSpeed : 400,
		transitionStyle : "fadeUp"
	  });
	   $(".next,.start").click(function(){
	    owl.trigger('owl.next');
	  })
	  $(".prev").click(function(){
	    owl.trigger('owl.prev');
	  })
	  //form 
    $( "#trivia-1 .choose" ).click(function() {
        var answer = $(this).text();
        $("#question1").val(answer);
    });

    $( "#trivia-2 .choose" ).click(function() {
        var answer = $(this).text();
        $("#question2").val(answer);
    });
    $( "#trivia-3 .choose" ).click(function() {
        var answer = $(this).text();
        $("#question3").val(answer);
        //result
        var text = $('#name').val();
        $('#username').html(text);
    });
	//validation
    $('#btndata').click(function(e){
	    var error = false;
	    var name = $('#name').val();
	    var email = $('#email').val();
	    var nohp = $('#nohp').val();
	    if(name.length == 0){
	        var error = true;
	        $('#name_error').addClass("error");
	    }else{
	        $('#name_error').removeClass("error");
	    }
	    if(email.length == 0 || email.indexOf('@') == '-1'){
	        var error = true;
	        $('#email_error').addClass("error");
	    }else{
	        $('#email_error').removeClass("error");
	    }
	    if(nohp.length == 0){
	        var error = true;
	        $('#nohp_error').addClass("error");
	    }else{
	        $('#nohp_error').removeClass("error");
	    }
        if(error == false){
	    	owl.trigger('owl.next');
        }
    });
     $("#nohp").keypress(function (e) {
     if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
        $("#errmsg").html("Digits Only").show().fadeOut(2000);
               return false;
    }
   });

});
	  
$(window).load(function() {
	wow = new WOW(
	{
	  boxClass:     'wow',      // default
	  animateClass: 'animated', // default
	  offset:       0,          // default
	  mobile:       true,       // default
	  live:         true        // default
	})
	wow.init();
});

