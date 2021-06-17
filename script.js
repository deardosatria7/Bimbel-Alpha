window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    var navbar = document.getElementById("navbar");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.classList.add("shadow");
        navbar.classList.add("bg-dark");
        navbar.classList.remove("mt-3");
    } else {
        navbar.classList.remove("shadow");
        navbar.classList.remove("bg-dark");
        navbar.classList.add("mt-0");
    }
}

AOS.init({
  once: true,
})