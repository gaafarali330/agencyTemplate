let mainNav = document.getElementById("menu");
let navBarToggle = document.getElementById("js-navbar-toggle");
let icon = document.querySelector('.navbar-toggle i');

navBarToggle.addEventListener("click", function() {
    mainNav.classList.toggle("active");
    if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars')
        icon.classList.add('fa-close')
    } else {
        icon.classList.add('fa-bars')
    }

});
