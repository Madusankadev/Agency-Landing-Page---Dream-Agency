var navLinkls = document.querySelector(" .navLinks");
var navItemLinks = document.querySelectorAll(".navItemLinks");

function changeNavBar(x) {
    if (x == 0) {
        navLinkls.style .height = "12rem";
        navLinkls.style.opacity = "1";
    }

    if (x == 1) {
        navLinkls.style .height = "0";
        navLinkls.style.opacity = "0";
        navItemLinks.style.opacity = "0";
    }

}