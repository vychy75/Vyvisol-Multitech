/* ==========================================
            NAVBAR SCROLL
========================================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links li");

const pill = document.querySelector(".nav-pill");

function movePill(element){

    pill.style.width = element.offsetWidth + "px";

    pill.style.height = element.offsetHeight + "px";

    pill.style.left = element.offsetLeft + "px";

    pill.style.top = element.offsetTop + "px";

}

// Initial position
movePill(navLinks[0]);

// Click
navLinks.forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.forEach(item=>item.classList.remove("active"));

        link.classList.add("active");

        movePill(link);

    });

});

// Scroll spy
window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-160;

        const height=section.offsetHeight;

        if(scrollY>=top){

            current=section.id;

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.querySelector("a").getAttribute("href")==="#"+current){

            link.classList.add("active");

            movePill(link);

        }

    });

});

/* ==========================================
        ACTIVE NAVBAR LINK
========================================== */

const navLinks=document.querySelectorAll(".nav-links li");

navLinks.forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.forEach(item=>{

            item.classList.remove("active");

        });

        link.classList.add("active");

    });

});

/* ==========================================
        SCROLL REVEAL
========================================== */

const reveals=document.querySelectorAll(

".hero,.service-card,.sample-card,.about,.contact-card"

);

const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{

threshold:.2

});

reveals.forEach(item=>{

    observer.observe(item);

});

/* ==========================================
        HERO COUNTER
========================================== */

const counters=document.querySelectorAll(".stats h2");

let started=false;

function runCounter(){

    if(started) return;

    started=true;

    counters.forEach(counter=>{

        const target=counter.innerText;

        const number=parseInt(target);

        const suffix=target.replace(number,"");

        let current=0;

        const speed=number/80;

        const interval=setInterval(()=>{

            current+=speed;

            if(current>=number){

                counter.innerText=number+suffix;

                clearInterval(interval);

            }

            else{

                counter.innerText=Math.floor(current)+suffix;

            }

        },18);

    });

}

window.addEventListener("scroll",()=>{

    const stats=document.querySelector(".stats");

    const top=stats.getBoundingClientRect().top;

    if(top<window.innerHeight-100){

        runCounter();

    }

});

/* ==========================================
        BUTTON RIPPLE
========================================== */

const buttons=document.querySelectorAll(".primary,.secondary,.nav-btn");

buttons.forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

const size=Math.max(

this.clientWidth,

this.clientHeight

);

circle.style.width=size+"px";

circle.style.height=size+"px";

circle.style.left=e.offsetX-size/2+"px";

circle.style.top=e.offsetY-size/2+"px";

circle.classList.add("ripple");

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});

/* ==========================================
        PARALLAX GLOW
========================================== */

const glow1=document.querySelector(".glow1");

const glow2=document.querySelector(".glow2");

document.addEventListener("mousemove",(e)=>{

const x=e.clientX/window.innerWidth;

const y=e.clientY/window.innerHeight;

glow1.style.transform=

`translate(${x*35}px,${y*35}px)`;

glow2.style.transform=

`translate(${-x*35}px,${-y*35}px)`;

});

/* ==========================================
        CARD TILT
========================================== */

const cards=document.querySelectorAll(

".service-card,.sample-card"

);

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*12;

const rotateX=((y/rect.height)-0.5)*-12;

card.style.transform=

`perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-8px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform=

"perspective(900px) rotateX(0) rotateY(0) translateY(0)";

});

});

/* ==========================================
        DASHBOARD FLOAT
========================================== */

const dashboard=document.querySelector(".dashboard");

let angle=0;

function floatDashboard(){

angle+=0.02;

dashboard.style.transform=

`translateY(${Math.sin(angle)*10}px)`;

requestAnimationFrame(floatDashboard);

}

floatDashboard();

/* ==========================================
        SMOOTH PAGE LOAD
========================================== */

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});