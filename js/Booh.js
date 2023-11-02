$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 60) {
      $("header").addClass("active");
    } else {
      $("header").removeClass("active");
    }
  });
  $(".fa-bars").click(function () {
    $(".navList").toggleClass("active");
  });
});
