document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu");
  const nav = document.querySelector(".navlinks");

  if (menu && nav) {
    menu.addEventListener("click", () => {
      const open = nav.classList.toggle("mobile-open");
      nav.setAttribute("aria-expanded", String(open));
    });
  }

  // Keep broken-image icons from looking awkward if an optional image is unavailable.
  document.querySelectorAll("img").forEach(img => {
    img.addEventListener("error", () => img.classList.add("image-error"), {once:true});
  });
});
