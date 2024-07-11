document.addEventListener("DOMContentLoaded", (event) => {
  const menuList = document.getElementById("menu-list");
  const hideDiscktopMenu = document.getElementById("hide-discktop-menu");
  const closeDiscktopMenu = document.getElementById("close-discktop-menu");

  menuList.onclick = function () {
    hideDiscktopMenu.classList.add("show-menu-mobile");
  };
  closeDiscktopMenu.onclick = function () {
    hideDiscktopMenu.classList.remove("show-menu-mobile");
    // window.document.classList.remove("show-menu-mobile");
  };
});


window.addEventListener('load', function() {
  var loader = document.getElementById('loader');
  // var content = document.getElementById('content');
  loader.style.display = 'none';
  // content.style.display = 'block';
});
