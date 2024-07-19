document.addEventListener("DOMContentLoaded", (event) => {
  const toggleButton = document.getElementById("navbar-toggle");
  const navbarContent = document.getElementById("navbar");
  const navbarIcon = document.getElementById("navbar-icon");
  const headerBox = document.querySelector(".header-box");

  const openIconSrc = "./assets/icon/navbar.svg"; // Replace with the path to your open icon image
  const closeIconSrc = "./assets/icon/close.svg"; // Replace with the path to your close icon image

  toggleButton.addEventListener("click", function () {
    navbarContent.classList.toggle("close");
    const isOpen = navbarContent.classList.toggle("open");
    headerBox.classList.toggle("hard-md-bg");
    navbarIcon.src = isOpen ? closeIconSrc : openIconSrc;
  });
});
