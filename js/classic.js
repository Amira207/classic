/*global $, alert, console*/


$(document).ready(function () {
    "use strict";


    //adjust header height
    $(".header").height($(window).height());
    $(window).resize(function () {
        $(".header").height($(window).height());
        //adjust bx slider list item center
        $(".bxslider").each(function () {
            $(this).css("paddingTop", ($(window).height() - $(".bxslider li").height()) / 2);
        });
    });

    //add active class
    /* $(".links li").click(function () {
         $(this).addClass("active").siblings().removeClass("active");
     });
     $(".links2 div").click(function () {
         $(this).addClass("active").siblings().removeClass("active");
     });*/
    //adjust bx slider list item center
    $(".bxslider").each(function () {
        $(this).css("paddingTop", ($(window).height() - $(".bxslider li").height()) / 2);
    });

    //trigger the bx slider
    $('.bxslider').bxSlider({
        pager: false
    });

    $(".links li a ").click(function () {
        $("html, body").animate({
            scrollTop: $("#" + $(this).data("value")).offset().top
        }, 1000);
    });
    $(".links2 a").click(function () {
        $("html, body").animate({
            scrollTop: $("#" + $(this).data("value")).offset().top
        }, 1000);
    });

    (function autoSlider() {
        $(".slider .active").each(function () {
            if (!$(this).is(":last-child")) {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass("active").next().addClass("active").fadeIn();
                    autoSlider();
                });
            } else {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass("active");
                    $(".slider div").eq(0).addClass("active").fadeIn();
                    autoSlider();
                });
            }
        });
    }());

    //trigger mix it up
    $("#container").mixItUp();
    //adjust selected li
    $(".projects li").click(function () {
        $(this).addClass("selected").siblings().removeClass("selected");
    });

    //$("html").niceScroll({
    // zIndex: 9999999
    // });
    $(".fa-bars").on("click", function () {
            $(".links2").toggleClass("fading");
            $(".bx-next").fadeToggle();
            $(".bx-wrapper").toggleClass("fading1");
        }

    );

    //click bars

});
