document.addEventListener("DOMContentLoaded", () => {
    initParticles();
    initPageTransitions();
    initContentAnimations();
    
    document.body.insertAdjacentHTML('afterbegin', '<div class="cyber-background"></div>');
});

function initParticles() {
    particlesJS("particles-js", {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#00ff7f"
            },
            shape: {
                type: "circle"
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#00ff7f",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "grab"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            }
        },
        retina_detect: true
    });
}

function initPageTransitions() {
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.hostname === window.location.hostname) {
                e.preventDefault();
                const href = this.href;
                
                const overlay = document.createElement('div');
                overlay.className = 'page-transition';
                document.body.appendChild(overlay);
                
                const content = document.querySelector('.content-wrapper');
                content.style.opacity = '0';
                content.style.transform = 'translateY(20px)';
                
                setTimeout(() => window.location.href = href, 600);
            }
        });
    });
}

function initContentAnimations() {
    document.querySelectorAll('.glass-card, .project-card, .skill-card').forEach((el, i) => {
        el.classList.add('fade-up');
        el.style.animationDelay = `${i * 0.1}s`;
    });

    const nav = document.querySelector('.main-nav');
    if (nav) {
        nav.classList.add('stagger-children');
    }
}
