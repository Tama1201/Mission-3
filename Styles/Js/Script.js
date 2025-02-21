document.addEventListener("DOMContentLoaded", function () {
  const navbarNav = document.querySelector(".navbar-nav");
  const hamburgerMenu = document.querySelector("#hamburger-menu");

  // Pastikan elemen ditemukan sebelum menambahkan event listener
  if (hamburgerMenu && navbarNav) {
    // Toggle class active ketika hamburger menu di klik
    hamburgerMenu.addEventListener("click", function () {
      navbarNav.classList.toggle("active");
    });

    // Klik di luar sidebar untuk menghilangkan nav
    document.addEventListener("click", function (e) {
      if (!navbarNav.contains(e.target) && !hamburgerMenu.contains(e.target)) {
        navbarNav.classList.remove("active");
      }
    });
  }
});
