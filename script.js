/* ==========================================
   SCRIPT.JS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // LOADER
    // ==========================================

    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {
        if (loader) {
            loader.style.opacity = "0";

            setTimeout(() => {
                loader.style.display = "none";
            }, 500);
        }
    });

    // ==========================================
    // STICKY HEADER
    // ==========================================

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

    // ==========================================
    // MOBILE MENU
    // ==========================================

    const menuToggle = document.getElementById("menu-toggle");
    const navbar = document.getElementById("navbar");

    if (menuToggle && navbar) {

        menuToggle.addEventListener("click", () => {

            navbar.classList.toggle("show");
            menuToggle.classList.toggle("active");

        });

        navbar.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                navbar.classList.remove("show");
                menuToggle.classList.remove("active");

            });

        });

    }

    // ==========================================
    // SMOOTH SCROLL
    // ==========================================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });

    // ==========================================
    // SCROLL REVEAL
    // ==========================================

    const revealItems = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                }

            });

        }, {
            threshold: 0.15
        });

        revealItems.forEach(item => observer.observe(item));

    } else {

        revealItems.forEach(item => item.classList.add("active"));

    }

    // ==========================================
    // COUNTER
    // ==========================================

    const counters = document.querySelectorAll("[data-count]");

    function startCounter(el) {

        const target = Number(el.dataset.count);

        let current = 0;

        const step = Math.max(1, Math.ceil(target / 100));

        const timer = setInterval(() => {

            current += step;

            if (current >= target) {

                current = target;

                clearInterval(timer);

            }

            el.textContent = current;

        }, 20);

    }

    if ("IntersectionObserver" in window) {

        const counterObserver = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting && !entry.target.dataset.started) {

                    entry.target.dataset.started = "true";

                    startCounter(entry.target);

                }

            });

        });

        counters.forEach(counter => {

            counterObserver.observe(counter);

        });

    }

    // ==========================================
    // BACK TO TOP
    // ==========================================

    const backToTop = document.getElementById("backToTop");

    if (backToTop) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 400) {

                backToTop.classList.add("show");

            } else {

                backToTop.classList.remove("show");

            }

        });

        backToTop.addEventListener("click", () => {

            window.scrollTo({

                top: 0,
                behavior: "smooth"

            });

        });

    }

    // ==========================================
    // ACTIVE MENU
    // ==========================================

    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll("nav a").forEach(link => {

        const href = link.getAttribute("href");

        if (href === currentPage || (currentPage === "" && href === "index.html")) {

            link.classList.add("active");

        }

    });

});
