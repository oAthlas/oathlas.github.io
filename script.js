document.addEventListener('DOMContentLoaded', function() {
    // Loader
    setTimeout(function() {
        document.querySelector('.loader').classList.add('hidden');

        // Hero content animation (mover para dentro do setTimeout)
        gsap.fromTo('.hero-content',
            { y: 50, opacity: 0 },
            { duration: 1, y: 0, opacity: 1, ease: 'power3.out' }
        );
    }, 1500);
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Accordion functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const accordionItem = this.parentElement;
            const accordionContent = this.nextElementSibling;
            
            // Close all other accordion items
            document.querySelectorAll('.accordion-item').forEach(item => {
                if (item !== accordionItem) {
                    item.classList.remove('active');
                    item.querySelector('.accordion-content').style.maxHeight = null;
                }
            });
            
            // Toggle current item
            accordionItem.classList.toggle('active');
            
            if (accordionItem.classList.contains('active')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null;
            }
        });
    });
    
    // Back to top button
    const backToTopBtn = document.createElement('div');
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(backToTopBtn);
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);
    
    // Plant animations
    gsap.from('.plant-1', {
        duration: 1.5,
        x: 100,
        opacity: 0,
        delay: 0.5,
        ease: 'elastic.out(1, 0.5)'
    });
    
    gsap.from('.plant-2', {
        duration: 1.5,
        x: -100,
        opacity: 0,
        delay: 0.8,
        ease: 'elastic.out(1, 0.5)'
    });
    
    gsap.from('.plant-3', {
        duration: 1.5,
        y: 100,
        opacity: 0,
        delay: 1.1,
        ease: 'elastic.out(1, 0.5)'
    });
    
    // Section animations
    gsap.utils.toArray('section').forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });
    });
    
    // Feature cards animation
    gsap.utils.toArray('.feature-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: i * 0.1,
            ease: 'back.out(1.7)'
        });
    });
    
    // Benefit cards accordion - expand/retract all at once
    let benefitsExpanded = false;
    const benefitCards = document.querySelectorAll('.benefit-card');

    benefitCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Evita conflito com links internos, caso existam
            if (e.target.tagName === 'A') return;

            benefitsExpanded = !benefitsExpanded;
            benefitCards.forEach(c => {
                if (benefitsExpanded) {
                    c.classList.add('active');
                } else {
                    c.classList.remove('active');
                }
            });
        });
    });
    
    // Remover animação GSAP dos benefit-cards
    // (comente ou remova este bloco)
    /*
    gsap.utils.toArray('.benefit-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: i * 0.1,
            ease: 'back.out(1.7)'
        });
    });
    */
    
    // Gallery items animation
    gsap.utils.toArray('.gallery-item').forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: i * 0.1,
            ease: 'back.out(1.7)'
        });
    });
    
    // Timeline items animation
    gsap.utils.toArray('.timeline-item').forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            x: i % 2 === 0 ? 50 : -50,
            opacity: 0,
            duration: 0.8,
            delay: i * 0.1,
            ease: 'back.out(1.7)'
        });
    });
    
    // Precaution cards animation
    gsap.utils.toArray('.precaution-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: i * 0.1,
            ease: 'back.out(1.7)'
        });
    });
    
    // Explore button animation
    const exploreBtn = document.getElementById('explore-btn');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const aboutSection = document.querySelector('#about');
            window.scrollTo({
                top: aboutSection.offsetTop - 80,
                behavior: 'smooth'
            });
        });
        
        // Pulse animation
        gsap.to(exploreBtn, {
            scale: 1.05,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut'
        });
    }
});