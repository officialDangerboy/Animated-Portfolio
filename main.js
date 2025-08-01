const hamburger = document.querySelector('.hamburger');
const sideBar = document.querySelector('.sideBar');
const h1 = document.querySelector('.animation');
const splitText = h1.textContent.split('');

const tl = gsap.timeline()
const tl2 = gsap.timeline()



function spanSplit() {
  let span = ''; 
  splitText.forEach((ele, idx) => {
  let half = Math.floor(splitText.length / 2);
   if (idx < half) {
    span += `<span class='first'>${ele}</span>`;
   } else {
     span += `<span class='last'>${ele}</span>`;
   }
  });
  h1.innerHTML = span;
}




tl.to(sideBar, {
  right: '0%',
  duration: 0.3,
})

tl.from('.sideBar h1',{
  x:100,
  duration:0.3,
  stagger:0.05,
  opacity:0,
})

tl.pause()

hamburger.addEventListener('click', () => {

  if (hamburger.classList.contains('bi-list')) {
    hamburger.classList.remove('bi-list')
    hamburger.classList.add('bi-x-lg')
    tl.play()
  } else {
    hamburger.classList.remove('bi-x-lg')
    hamburger.classList.add('bi-list')
    tl.reverse()
  }
});


spanSplit()


gsap.from('header .hamburger, header .logo, header .nav li', {
  y: '-100%',
  duration: 1,
  stagger: 0.2,
  opacity:0,
  ease: 'power2.out'
});


let lastY = 0;
let currentDirection = 'none';

function scrollLeft() {
  if (currentDirection !== 'left') {
    gsap.to('.marquee', {
  x: '-200%',
  ease: 'none',
  duration: 10,
  repeat: -1,
});
    gsap.to('.marquee i', { rotate: 180});
   currentDirection = 'left';
 }
}

function scrollRight() {
  if (currentDirection !== 'right') {
    gsap.to('.marquee', {
  x: '00%',
  ease: 'none',
  duration: 10,
  repeat: -1,
});
    gsap.to('.marquee i', { rotate: 0 });
    currentDirection = 'right';
  }
}

window.addEventListener('wheel', (e) => {
  if (e.deltaY > 0) {
  scrollLeft();
  } else if (e.deltaY < 0) {
    scrollRight();
  }
});

window.addEventListener('touchstart', (e) => {
  lastY = e.touches[0].clientY;
});

window.addEventListener('touchmove', (e) => {
  const currentY = e.touches[0].clientY;
  const deltaY = lastY - currentY;

  if (deltaY > 0) {
    scrollLeft();
  } else if (deltaY < 0) {
    scrollRight();
  }

  lastY = currentY;
});


tl2.from('.hey',{
  x:150,
  opacity:0,
  duration:1,
})

tl2.from('.str',{
  x:-150,
  opacity:0,
  delay:0.8,
  duration:1,
})

tl2.from('.btns .button',{
  y:-50,
  opacity: 0,
  duration: 0.8,
})

tl2.from('.social-icons',{
  y: 50,
  opacity: 0,
  duration: 0.8,
  stagger:0.2
})

gsap.from('.first',{
  y:120,
  duration:0.8,
  opacity:0,
  stagger:0.2,
  delay:0.5
})

gsap.from('.last',{
  y:120,
  duration:0.8,
  opacity:0,
  stagger:-0.2,
  delay:0.5
})

gsap.from(".image", {
  scale: 0,
  opacity: 0,
  ease: "power3.out",
  duration: 1.2,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".image",
    scroller: "body",
    start: "bottom 80%",
    end: "bottom 40%",
    scrub: 2,
  },
});

gsap.from(".h1 h1", {
  y: 50,
  opacity: 0,
  ease: "power3.out",
  duration: 1,
  scrollTrigger: {
    trigger: ".image",
    scroller: "body",
    start: "bottom 80%",
    end: "bottom 40%",
    scrub: 2,
  },
});

gsap.from(".about", {
  scale: 0.4,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "#about",
    scroller: "body",
    start: "top 80%",
    end: "top 40%",
    scrub: 2,
  },
});


gsap.from(".section-title h1", {
  x: 120,
  opacity:0,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "#projects",
    scroller: "body",
    start: "top 70%",
    end: "top 30%",
    scrub: 2,
  },
});

gsap.from(".mySwiper", {
  opacity:0,
  scale:0,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "#projects",
    scroller: "body",
    start: "top 60%",
    end: "top 20%",
    scrub: 2,
  },
});

gsap.from(".join-wrapper", {
  scale:0.8,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "#contact",
    scroller: "body",
    start: "top 60%",
    end: "top 20%",
    scrub: 2,
  },
});

function about() {
  document.getElementById("about").scrollIntoView({
    behavior: "smooth"
  });
}

function home() {
  document.getElementById("home").scrollIntoView({
    behavior: "smooth"
  });
}

function projects() {
  document.getElementById("projects").scrollIntoView({
    behavior: "smooth"
  });
}

function contact() {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });
}


const swiper = new Swiper('.mySwiper', {
  loop: true,
  speed: 800,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets:true
  },
});
