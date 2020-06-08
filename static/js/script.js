// 


$(document).ready(function(){


    var typed = new Typed(".typed", {
        strings: ["I'm Prashant Rawat","Student.", "Coder.", "Web Developer.", "Andriod Developer.", "Content Creator."],
        typeSpeed : 70,
        loop: true,
        startDelay: 1000,
        showCursor: false 

    });


    $('.chart').easyPieChart({
        //your options goes here
    });


    $("#navigation li a").click(function(e){

        e.preventDefault();

        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html, body").animate({ scrollTop: targetPosition - 30 }, "slow"); 
    });




    // const nav = $("#navigation");
    // 8562605
    // const navTop = nav.offset().top;

    // $(window).on("scroll", stickyNavigation);

    // function stickyNavigation() {
    //      var body = $("body");
    //      if($(window).scrollTop() >= navTop){
    //         body.css("padding-top", nav.outerHeight() + "px");
    //         body.addclass("fixedNav");
    //      }
    //      else
    //      {
    //         body.css("padding-top", 0);
    //         body.removeClass("fixedNav");
    //      }
    // }


});