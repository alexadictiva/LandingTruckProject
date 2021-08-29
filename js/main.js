/*Menu Button*/
function toggleMenu() {
  var menu = document.querySelector("#menu");
  menu.classList.toggle("show");
}
/*Banner Slider */

var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

/*FAQs Acordeon JQuery*/
$(".faqsContainer").on("click", "button", function () {
  var t = $(this);
  var tp = t.next();
  var p = t.parent().siblings().find("p");
  tp.slideToggle();
  p.slideUp();
});
