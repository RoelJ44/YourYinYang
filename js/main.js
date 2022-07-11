$(document).ready(function () {
  if ($(window).width() > 676) {
    let elemHeight = $("#wie-ben-ik").height();
    $("#specialisaties").height(elemHeight);
  }
  if ($(window).width() > 1023) {
    let elemHeight = $("#page_content").height();
    $("#page_image").height(elemHeight + 100);
  }

  // Navbar animations
  const btn = document.querySelector(".mobile-menu-button");
  const nav = document.querySelector(".navbar");

  btn.addEventListener("click", () => {
    nav.classList.toggle("animate");
    if (nav.classList.contains("animate")) {
      animateNavbarIn();
    } else {
      animateNavbarOut();
    }
  });

  function animateNavbarIn() {
    let aaa = $(".mobile-menu-button");
    aaa.prop("disabled", true);
    const tl = gsap.timeline();
    tl.add(function () {
      animateNavbarOpen();
      burgerMenuOpen();
    });

    tl.add(function () {
      aaa.prop("disabled", false);
    });
  }

  function animateNavbarOut() {
    let aaa = $(".mobile-menu-button");
    aaa.prop("disabled", true);
    const tl = gsap.timeline();
    tl.add(function () {
      animateNavbarClose();
      burgerMenuClose();
    });
    tl.add(function () {
      aaa.prop("disabled", false);
    });
  }

  function animateNavbarOpen() {
    const tl = gsap.timeline();
    tl.to(".navbar", { height: "100vh", duration: 1 });
    tl.add(function () {
      document.querySelectorAll(".mobile-menu ul li").forEach(function (node) {
        tl.to(node, { opacity: 1, duration: 0.25 }, "-=0.15");
      }, "-=0.9");
    });
  }

  function animateNavbarClose() {
    const tl = gsap.timeline();
    tl.call(function () {
      tl.to(".navbar", { height: 0, duration: 0.6 });
    });
  }

  function burgerMenuOpen() {
    topBarOpen();
    bottomBarOpen();
    menuLabelOpen();
  }

  function burgerMenuClose() {
    topBarClose();
    bottomBarClose();
    menuLabelClose();
  }

  function topBarOpen() {
    const tl = gsap.timeline();
    tl.to(".mobile-menu-button .icon-top", {
      transform: "translateY(0px) rotate(0deg)",
      duration: 0,
    });
    tl.to(".mobile-menu-button .icon-top", {
      transform: "translateY(-8px) rotate(0deg)",
      duration: 0.1,
    });
    tl.to(".mobile-menu-button .icon-top", {
      transform: "translateY(16px) rotate(45deg)",
      duration: 0.4,
    });
  }

  function topBarClose() {
    const tl = gsap.timeline();
    tl.to(".mobile-menu-button .icon-top", {
      transform: "translateY(17px) rotate(45deg)",
      duration: 0,
    });
    tl.to(".mobile-menu-button .icon-top", {
      transform: "translateY(-8px) rotate(-4deg)",
      duration: 0.35,
    });
    tl.to(".mobile-menu-button .icon-top", {
      transform: "translateY(10px) rotate(3deg)",
      duration: 0.18,
    });
    tl.to(".mobile-menu-button .icon-top", {
      transform: "translateY(-6px) rotate(0deg)",
      duration: 0.17,
    });
    tl.to(".mobile-menu-button .icon-top", {
      transform: "translateY(-2px)",
      duration: 0.3,
    });
  }

  function bottomBarOpen() {
    const tl = gsap.timeline();
    tl.to(".mobile-menu-button .icon-bottom", {
      transform: "translateY(0px) rotate(0deg)",
      duration: 0,
    });
    tl.to(".mobile-menu-button .icon-bottom", {
      transform: "translateY(-8px) rotate(0deg)",
      duration: 0.1,
    });
    tl.to(".mobile-menu-button .icon-bottom", {
      transform: "translateY(0px) rotate(-45deg)",
      duration: 0.4,
    });
  }

  function bottomBarClose() {
    const tl = gsap.timeline();
    tl.to(".mobile-menu-button .icon-bottom", {
      transform: "translateY(-8px) rotate(-45deg)",
      duration: 0,
    });
    tl.to(".mobile-menu-button .icon-bottom", {
      transform: "translateY(-18px) rotate(6deg)",
      duration: 0.35,
    });
    tl.to(".mobile-menu-button .icon-bottom", {
      transform: "translateY(0px) rotate(-3deg)",
      duration: 0.18,
    });
    tl.to(".mobile-menu-button .icon-bottom", {
      transform: "translateY(-7px) rotate(0deg)",
      duration: 0.17,
    });
    tl.to(".mobile-menu-button .icon-bottom", {
      transform: "translateY(0px) rotate(0deg)",
      duration: 0.3,
    });
  }

  function menuLabelOpen() {
    const tl = gsap.timeline();
    tl.to(".mobile-menu-button .text", {
      transform: "translateY(0px)",
      opacity: 1,
      duration: 0,
    });
    tl.to(".mobile-menu-button .text", {
      transform: "translateY(-10px)",
      duration: 0.2,
    });
    tl.to(".mobile-menu-button .text", {
      transform: "translateY(22px)",
      opacity: 0,
      duration: 0.25,
    });
    tl.to(".mobile-menu-button .text", {
      transform: "translateY(10px)",
      opacity: 0,
      duration: 0.1,
    });
  }

  function menuLabelClose() {
    const tl = gsap.timeline();
    tl.to(".mobile-menu-button .text", {
      transform: "translateY(30px)",
      opacity: 0,
      duration: 0,
    });
    tl.to(".mobile-menu-button .text", {
      transform: "translateY(25px)",
      opacity: 1,
      duration: 0.05,
    });
    tl.to(".mobile-menu-button .text", {
      transform: "translateY(-30px)",
      duration: 0.2,
    });
    tl.to(".mobile-menu-button .text", {
      transform: "translateY(-22px)",
      duration: 0.2,
    });
    tl.to(".mobile-menu-button .text", {
      transform: "translateY(8px) rotate(-10deg)",
      duration: 0.13,
    });
    tl.to(".mobile-menu-button .text", {
      transform: "translateY(-6px) rotate(0deg)",
      duration: 0.25,
    });
    tl.to(".mobile-menu-button .text", {
      transform: "translateY(0px)",
      duration: 0.17,
    });
  }
});
