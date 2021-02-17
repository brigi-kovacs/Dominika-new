$(function() {
  $(".toggle").on("click", function() {
      if ($(".item").hasClass("active")) {
          $(".item").removeClass("active");
          $(this).find("a").html("<i class='fas fa-bars'></i>");
      } else {
          $(".item").addClass("active");
          $(this).find("a").html("<i class='fas fa-times'></i>");
      }
  });
});
window.addEventListener("DOMContentLoaded", event => {
  const audio = document.querySelector("audio");
  audio.volume = 0.2;
  audio.play();
});
