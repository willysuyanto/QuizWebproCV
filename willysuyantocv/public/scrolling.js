$("#abt").click(function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $("#about-me").offset().top
    }, 2000);
});
$("#skl").click(function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $("#mySkill").offset().top
    }, 2000);
});
$("#edu").click(function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $("#education").offset().top
    }, 2000);
});