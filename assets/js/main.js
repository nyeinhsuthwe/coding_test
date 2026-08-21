const nav = document.querySelector(".main-nav");
const scrollTopButton = document.querySelector(".scroll-top");

function updateScrollState() {
  const isScrolled = window.scrollY > 24;
  nav?.classList.toggle("is-scrolled", isScrolled);
  scrollTopButton?.classList.toggle("show", window.scrollY > 500);
}

document.querySelectorAll(".navbar-nav .nav-link, .navbar-nav .btn").forEach((link) => {
  link.addEventListener("click", () => {
    const menu = document.querySelector(".navbar-collapse.show");
    if (!menu || !window.bootstrap) return;

    window.bootstrap.Collapse.getOrCreateInstance(menu).hide();
  });
});

scrollTopButton?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

updateScrollState();
window.addEventListener("scroll", updateScrollState, { passive: true });
