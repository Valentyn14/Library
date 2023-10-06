// Byrger header
(function () {
  const burgerItem = document.querySelector(".burger");
  const menu = document.querySelector(".nav_header");
  const menuExitItem = document.querySelector(".nav_header_exit");
  const menuLink = document.querySelectorAll(".js_link");
  const page = document.querySelector(".main_page")

  burgerItem.addEventListener("click", () => {
    menu.classList.add("nav_header_active");
  });

  menuExitItem.addEventListener("click", () => {
    menu.classList.remove("nav_header_active");
  });

  page.addEventListener('click', () => {
    menu.classList.remove('nav_header_active');
  })

  for (let i = 0; i < menuLink.length; i += 1) {
    menuLink[i].addEventListener("click", () => {
      menu.classList.remove("nav_header_active");
    });
  }

})();

