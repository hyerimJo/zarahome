$(function () {
  $(".menubar").click(function () {
    $("p.menu1").toggleClass("active");
    $("p.menu2").toggleClass("active");
    $("p.menu3").toggleClass("active");
    $(".back").toggleClass("active");
    $(".nav").fadeToggle();
    $(".search2").fadeToggle();
  });
});
