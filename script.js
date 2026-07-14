/* ==========================================
   LOADER
========================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if(loader){

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        },500);

    }

});

/* ==========================================
   STICKY HEADER
========================================== */

const header = document.querySelector(".header");

window.addEventListener("scroll",()=>{

    if(header){

        if(window.scrollY > 80){

            header.classList.add("scrolled");

        }else{

            header.classList.remove("scrolled");

        }

    }

});

/* ==========================================
   MOBILE MENU
========================================== */

const menuBtn = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

if(menuBtn && navbar){

    menuBtn.addEventListener("click",()=>{

        navbar.classList.toggle("show");

    });

}

/* ==========================================
   BACK TO TOP
========================================== */

const backTop = document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

    if(backTop){

        if(window.scrollY > 500){

            backTop.classList.add("show");

        }else{

            backTop.classList.remove("show");

        }

    }

});

if(backTop){

    backTop.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}

/* ==========================================
   REVEAL ANIMATION
========================================== */

const reveals = document.querySelectorAll(".reveal");

function revealElements(){

    const trigger = window.innerHeight * 0.85;

    reveals.forEach(item=>{

        const top = item.getBoundingClientRect().top;

        if(top < trigger){

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll",revealElements);

revealElements();

/* ==========================================
   COUNTER
========================================== */

const counters = document.querySelectorAll("[data-count]");

let counterRun = false;

function startCounter(){

    if(counterRun) return;

    counters.forEach(counter=>{

        const target = Number(counter.dataset.count);

        let count = 0;

        const speed = target / 100;

        const update = ()=>{

            count += speed;

            if(count < target){

                counter.innerText = Math.floor(count);

                requestAnimationFrame(update);

            }else{

                counter.innerText = target + "+";

            }

        }

        update();

    });

    counterRun = true;

}

window.addEventListener("scroll",()=>{

    const stats = document.querySelector(".stats");

    if(stats){

        const top = stats.getBoundingClientRect().top;

        if(top < window.innerHeight){

            startCounter();

        }

    }

});

/* ==========================================
   SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/* ==========================================
   ACTIVE MENU
========================================== */

const links = document.querySelectorAll("#navbar a");

links.forEach(link=>{

    link.addEventListener("click",()=>{

        links.forEach(item=>item.classList.remove("active"));

        link.classList.add("active");

    });

});

/* ==========================================
   FLOAT ANIMATION
========================================== */

document.querySelectorAll(".float").forEach(img=>{

    img.animate([

        {transform:"translateY(0px)"},

        {transform:"translateY(-15px)"},

        {transform:"translateY(0px)"}

    ],{

        duration:3000,

        iterations:Infinity

    });

});

/* ==========================================
   FOOTER YEAR
========================================== */

const year = document.getElementById("year");

if(year){

    year.textContent = new Date().getFullYear();

}
