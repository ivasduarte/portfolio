function fillProgress(duration, waitForPageLoad) {
  return new Promise((resolve) => {
    const bar = document.getElementById("progressBar");
    const MAX_WAIT = 5000;
    const startTime = performance.now();
    let shown = 0;
    let last = startTime;
    bar.style.transform = "scaleX(0)";

    function frame(now) {
      const elapsed = now - startTime;
      const ready =
        !waitForPageLoad ||
        document.readyState === "complete" ||
        elapsed >= MAX_WAIT;

      const eased = 1 - Math.pow(1 - Math.min(elapsed / duration, 1), 3);
      const target = ready ? eased : Math.min(eased, 0.9);

      const dt = Math.min(now - last, 34);
      shown += (target - shown) * (1 - Math.exp(-dt / 45));
      last = now;
      if (ready && elapsed >= duration && shown > 0.985) shown = 1;
      bar.style.transform = "scaleX(" + shown + ")";

      if (shown < 1) requestAnimationFrame(frame);
      else resolve();
    }
    requestAnimationFrame(frame);
  });
}

function hideLoader(done, delay = 200) {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
      if (done) done();
    }, 600); // wait for the fade out transition
  }, delay);
}

document.addEventListener("DOMContentLoaded", () => {
  fillProgress(1600, true).then(() => {
    // Start typewriter after the loader disappears
    hideLoader(() => setTimeout(typeLine, 300));
  });
});

// Dark/Light Mode
function toggleTheme() {
  const body = document.body;
  const themeIcon = document.getElementById("themeIcon");

  if (body.getAttribute("data-theme") !== "light") {
    body.setAttribute("data-theme", "light");
    themeIcon.className = "fas fa-sun";
  } else {
    body.setAttribute("data-theme", "dark");
    themeIcon.className = "fas fa-moon";
  }
}
// Open Book Mode
let openBookScrollY = 0;

function setOpenBook(on, restoreScroll = true) {
  const body = document.body;
  const btn = document.getElementById("openBookToggleBtn");

  if (!btn) return;
  if (on === body.classList.contains("open-book-on")) return;

  btn.classList.toggle("is-open", on);
  btn.setAttribute("aria-pressed", String(on));
  btn.title = on ? "Book: Open" : "Book: Closed";

  if (!on) {
    body.classList.remove("open-book-on");
    if (restoreScroll) {
      window.scrollTo({ top: openBookScrollY, behavior: "instant" });
    }
    return;
  }

  // Ativação imediata sem acionar o loader
  openBookScrollY = window.scrollY;
  body.classList.add("open-book-on");
  window.scrollTo({ top: 0, behavior: "instant" });
}

function toggleOpenBook() {
  setOpenBook(!document.body.classList.contains("open-book-on"));
}

// Navbar links and Esc also leave the detailed view
document.querySelectorAll('nav a[href^="#"]').forEach((link) => {
  link.addEventListener("click", () => setOpenBook(false, false));
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") setOpenBook(false);
});

// Typewriter
const lines = [
  "Hello! Nice to meet you :)",
  "I'm an Engineering Student @ ISEP,",
  "a backend developer currently learning frontend,",
  "and a cybersecurity enthusiast!",
  "Welcome to my portfolio :D",
];

let lineIndex = 0;
let charIndex = 0;

function typeLine() {
  if (lineIndex < lines.length) {
    const currentLineElement = document.getElementById("line" + lineIndex);
    let currentCursor = document.getElementById("cursor" + lineIndex);

    if (!currentLineElement) return;

    if (!currentCursor) {
      currentCursor = document.createElement("span");
      currentCursor.className = "cursor";
      currentCursor.id = "cursor" + lineIndex;
      currentLineElement.parentNode.appendChild(currentCursor);
    }

    if (charIndex < lines[lineIndex].length) {
      currentLineElement.textContent += lines[lineIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeLine, 40);
    } else {
      if (lineIndex < lines.length - 1) {
        currentCursor.classList.add("hidden-cursor");
      }
      lineIndex++;
      charIndex = 0;
      setTimeout(typeLine, 500);
    }
  }
}

// Scroll Animations
document.addEventListener("DOMContentLoaded", () => {
  // Fallback in case loader script fails
  if (!document.getElementById("loader")) {
    setTimeout(typeLine, 800);
  }

  const reveals = document.querySelectorAll(".reveal");
  const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px",
  };

  const revealOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("active");
      observer.unobserve(entry.target);
    });
  }, revealOptions);

  reveals.forEach((reveal) => {
    revealOnScroll.observe(reveal);
  });
});