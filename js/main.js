$(document).ready(function () {
  $(".fancybox-media").fancybox({
    openEffect: "none",
    closeEffect: "none",
    helpers: {
      media: {},
    },
  });
  var mySwiper = new Swiper(".swiper-container", {
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev",
    },
  });

  let submit = document.querySelectorAll(".submit");
  let modal = document.querySelector(".modal");
  let cross = document.querySelector(".cross");
  let office = document.querySelector(".office");
  let officeList = document.querySelector(".office-list");
  let arrow = document.querySelector('.header-arrow')

  office.addEventListener("mouseover", (e) => {
    officeList.classList.remove('hide')
    arrow.src = 'img/arrow_up.svg'
  });

  office.addEventListener("mouseout", (e) => {
    officeList.classList.add('hide')
    arrow.src = 'img/arrow.svg'
  });

  officeList.addEventListener("mouseover", (e) => {
    const target = event.target.closest(".office-list");
    if (target) {
      officeList.classList.remove('hide')
      arrow.src = 'img/arrow_up.svg'
    }
  });

  officeList.addEventListener("mouseout", (e) => {
    const target = event.target.closest(".office-list");
    if (target) {
      officeList.classList.add('hide')
      arrow.src = 'img/arrow.svg'
    }
  });

  submit.forEach((e) => {
    e.addEventListener("click", (e) => {
      e.preventDefault();
      modal.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  modal.addEventListener("click", (e) => {
    const target = event.target;
    if (target.closest(".cross") || target.classList.contains("modal")) {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
});
