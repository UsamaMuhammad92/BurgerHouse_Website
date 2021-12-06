const navSlide = () => {
    const navbarBars = document.querySelector('#navbar_bars');
    const nav = document.querySelector('.navLinks');
    const navLinks = document.querySelectorAll('.navLinks li');

    navbarBars.addEventListener('click', () => {
        
        // toggle nav
        nav.classList.toggle('nav-active');

        //animate links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
    });
}

navSlide();