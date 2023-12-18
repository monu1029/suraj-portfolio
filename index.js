let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

console.log(sections)
console.log(navLinks)

window.onscroll= () =>{
    sections.forEach( sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id =sec.getAttribute('id');
        


        if (top >= offset && top < offset+height){
            navLinks.forEach(Links=>{
                Links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }

    });

    let header = document.querySelector('header')
    header.classList.toggle('sticky' , window.scrollY>100)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active')
}


let menuIcon = document.getElementById('menu-icon')
let navbar = document.querySelector('.navbar')


menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}

ScrollReveal({ 
    // reset: true,
    distance: '80px',
    delay: 200,
    duration: 2000 
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});

ScrollReveal().reveal('.home-img, .Portfolio-box , .service-container , .contact form', {origin: 'bottom'});

ScrollReveal().reveal('.home-content h1 , .about-img', {origin: 'left'});

ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});


const typed = new Typed('.multiple-text' , {
    strings: ['Frontend Developer' , 'Tutor' , 'Investor',"Mentor" ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop : true

})