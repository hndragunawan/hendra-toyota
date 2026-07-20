// ===========================================
// TOYOTA PREMIUM V3
// ===========================================

// Loader
window.addEventListener("load", () => {
    document.body.classList.add("loaded");

    const loader = document.getElementById("loader");

    if (loader) {
        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }
});

// ===========================================
// Sticky Header
// ===========================================

const header = document.querySelector(".header");

function stickyHeader() {
    if (!header) return;

    if (window.scrollY > 80) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
}

window.addEventListener("scroll", stickyHeader);
stickyHeader();

// ===========================================
// Mobile Menu
// ===========================================

const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {

    menuToggle.addEventListener("click", () => {

        navbar.classList.toggle("active");

        const icon = menuToggle.querySelector("i");

        if (icon) {

            if (navbar.classList.contains("active")) {
                icon.classList.remove("ri-menu-line");
                icon.classList.add("ri-close-line");
            } else {
                icon.classList.remove("ri-close-line");
                icon.classList.add("ri-menu-line");
            }

        }

    });

    document.querySelectorAll("#navbar a").forEach(link => {

        link.addEventListener("click", () => {

            navbar.classList.remove("active");

            const icon = menuToggle.querySelector("i");

            if (icon) {
                icon.classList.remove("ri-close-line");
                icon.classList.add("ri-menu-line");
            }

        });

    });

}

// ===========================================
// Back To Top
// ===========================================

const backToTop = document.getElementById("backToTop");

function toggleBackTop() {

    if (!backToTop) return;

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

}

window.addEventListener("scroll", toggleBackTop);

if (backToTop) {

    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

// ===========================================
// Reveal Animation
// ===========================================

const reveals = document.querySelectorAll(".reveal");

function revealElements() {

    const trigger = window.innerHeight * 0.85;

    reveals.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < trigger) {

            el.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealElements);
window.addEventListener("load", revealElements);

// ===========================================
// Counter Animation
// ===========================================

const counters = document.querySelectorAll("[data-count]");

let counterPlayed = false;

function startCounter() {

    if (counterPlayed) return;

    const stats = document.querySelector(".stats");

    if (!stats) return;

    const top = stats.getBoundingClientRect().top;

    if (top < window.innerHeight - 120) {

        counterPlayed = true;

        counters.forEach(counter => {

            const target = parseInt(counter.dataset.count);

            let current = 0;

            const increment = Math.max(1, Math.ceil(target / 80));

            const timer = setInterval(() => {

                current += increment;

                if (current >= target) {

                    current = target;

                    clearInterval(timer);

                }

                counter.textContent = current;

            }, 20);

        });

    }

}

window.addEventListener("scroll", startCounter);
window.addEventListener("load", startCounter);

// ===========================================
// Active Menu
// ===========================================

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll("#navbar a").forEach(link => {

    const href = link.getAttribute("href");

    if (href === currentPage || (currentPage === "" && href === "index.html")) {

        link.classList.add("active");

    }

});

// ===========================================
// Smooth Anchor
// ===========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});

// ===========================================
// Navbar Close Outside
// ===========================================

document.addEventListener("click", function (e) {

    if (!navbar || !menuToggle) return;

    if (
        navbar.classList.contains("active") &&
        !navbar.contains(e.target) &&
        !menuToggle.contains(e.target)
    ) {

        navbar.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        if (icon) {
            icon.classList.remove("ri-close-line");
            icon.classList.add("ri-menu-line");
        }

    }

});

// ===========================================
// Image Fade
// ===========================================

document.querySelectorAll("img").forEach(img => {

    img.addEventListener("load", () => {

        img.classList.add("fade-in");

    });

});

// ===========================================
// Console
// ===========================================

console.log("%cToyota Premium V3 Loaded 🚗",
"color:#EB0A1E;font-size:18px;font-weight:bold;");
