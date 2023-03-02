// open & close mobile menu
const mobile_menu_btn = document.querySelector("#menu_button");
const mobile_menu = document.querySelector("#mobile_menu");

// Toggle turn_to_x class, show menu
mobile_menu_btn.addEventListener("click", () => {
  mobile_menu_btn.classList.toggle("turn_to_x");
  mobile_menu.classList.toggle("flex");
  mobile_menu.classList.toggle("hidden");
});
