/*==================toggle icon navbar=================*/



// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// };
/*==================scroll section active link=================*/
let section = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

const menuIcon = document.getElementById('menu-icon')
const navbar = document.querySelector('.navbar')

let isOpen = false
function Burger() {
    if (isOpen == true) {
        navbar.classList.add('close')
        menuIcon.className= 'bx bx-menu'
        isOpen = false
    }else {
        navbar.classList.remove('close')
        menuIcon.className = 'bx bx-x'
        isOpen = true
    }
}

menuIcon.onclick = Burger

window.onscroll = () =>{
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top>= offset && top <offset+height) {
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*==================scroll section active link=================*/

    let header = document.querySelector('header')

    header.classList.toggle('sticky' , window.scrollY >100);
};

 /*==================typed js=================*/

const typed = new Typed('.multiple-text',{
    strings:['Frontend Developer' , 'Graphic designer', 'Treyder',],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});


/*========================  gsap  ==========================*/
gsap.registerPlugin(ScrollTrigger);

const content = document.querySelector(".home-content");
const img = document.querySelector('.home-img');
const header = document.querySelector('.header');
const aboutText = document.querySelectorAll('.gsap-text');
const projectCards = document.querySelectorAll(".gsap-card");
const serviceCards = document.querySelectorAll(".gsap-card-second");

gsap.defaults({ ease: 'bounce' })
gsap.registerPlugin(ScrollTrigger)

if (window.innerWidth < 769) {
    gsap.from(content, {
        duration: 1.7,
        yPercent: -100,
        opacity: 0,
        delay: .7
    })
    gsap.from (img, {
        duration: 1.7,
        yPercent: 90,
        opacity: 0,
        delay: .7
    })
} else {
    gsap.from(content, {
        duration: 1.7,
        xPercent: -100,
        opacity: 0,
        delay: .7
    })
    gsap.from (img, {
        duration: 1.7,
        xPercent: 90,
        opacity: 0,
        delay: .7
    })
}

const tl = gsap.timeline();

tl.fromTo(header, {
    duration: .7,
    yPercent: -100,
    height: '0',
}, {
    duration: .7,
    yPercent: 0,
    height: '200px',
    ease: 'none'
})

tl.to(header, {
    duration: 1,
    height: 'auto',
    ease: 'back'
})

gsap.from(aboutText, {
    scrollTrigger: {
        trigger: aboutText,
        toggleActions: 'restart none none play'
    },
    duration: .5,
    opacity: 0,
    y: '40px',
    ease: 'none',
    stagger: .25
})


gsap.from(projectCards, {
    scrollTrigger: {
        trigger: projectCards,
        toggleActions: 'restart none none play'
    },
    duration: .3,
    opacity: 0,
    xPercent: -20,
    ease: 'none',
    stagger: .3
})