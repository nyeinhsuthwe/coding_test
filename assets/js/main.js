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

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function setupLoopingCarousel(railSelector, buttonSelector, directionDataKey) {
  const rail = document.querySelector(railSelector);
  const buttons = document.querySelectorAll(buttonSelector);
  let isMoving = false;

  async function rotateItems(direction) {
    if (!rail || isMoving || rail.children.length < 2) return;

    isMoving = true;
    buttons.forEach((button) => {
      button.disabled = true;
    });

    const items = [...rail.children];
    const startingPositions = new Map(
      items.map((item) => [item, item.getBoundingClientRect()])
    );

    if (direction === "next") {
      rail.append(items[0]);
    } else {
      rail.prepend(items[items.length - 1]);
    }

    if (!prefersReducedMotion.matches) {
      const animations = items.map((item) => {
        const start = startingPositions.get(item);
        const end = item.getBoundingClientRect();

        return item.animate(
          [
            { translate: `${start.left - end.left}px ${start.top - end.top}px` },
            { translate: "0 0" },
          ],
          {
            duration: 450,
            easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          }
        );
      });

      await Promise.allSettled(animations.map((animation) => animation.finished));
    }

    buttons.forEach((button) => {
      button.disabled = false;
    });
    isMoving = false;
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.add("is-clicked");
      rotateItems(button.dataset[directionDataKey]).finally(() => {
        button.classList.remove("is-clicked");
      });
    });
  });
}

setupLoopingCarousel(".project-rail", ".project-carousel-btn", "projectDirection");
setupLoopingCarousel(".skill-cards", ".skill-carousel-btn", "skillDirection");