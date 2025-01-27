// FAQ Accordion
document.addEventListener('DOMContentLoaded', () => {
    const faqContainer = document.querySelector('.faq-content');
    
    faqContainer.addEventListener('click', (e) => {
        const groupHeader = e.target.closest('.faq-group-header');
        
        if (!groupHeader) return;
        
        const group = groupHeader.parentElement;
        const groupBody = group.querySelector('.faq-group-body');
        const icon = groupHeader.querySelector('i');
        
        // Toggle icon
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');
        
        // Toggle visibility of body
        groupBody.classList.toggle('open');
        
        // Close other open FAQ bodies
        const otherGroups = faqContainer.querySelectorAll('.faq-group');
        
        otherGroups.forEach((otherGroup) => {
            if (otherGroup !== group) {
                const otherGroupBody = otherGroup.querySelector('.faq-group-body');
                const otherIcon = otherGroup.querySelector('.faq-group-header i');
                
                otherGroupBody.classList.remove('open');
                otherIcon.classList.remove('fa-minus');
                otherIcon.classList.add('fa-plus');
            }
        });
    });
});

// Mobile Menu
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    hamburgerButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('active')
    });
});

// https://www.youtube.com/watch?v=qE8mG_pMOl4
let sp = document.querySelectorAll("span.star");
setInterval(() => {
    let no = Math.floor(Math.random() * sp.length);
    let h = Math.floor(Math.random() * 100);
    let w = Math.floor(Math.random() * 100);
    sp[no].style.top = `${h}%`;
    sp[no].style.left = `${w}%`;
    sp[no].style.opacity = "1";

    setTimeout(() => {
        sp[no].style.opacity = "0";
        sp[no].style.top = `${h}%`;
        sp[no].style.left = `${w}%`;
    }, 2000);
}, 500);
