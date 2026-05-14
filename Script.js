const navbar = document.getElementById('navbar');
const onScroll = () => {
    if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
});

const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                io.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.15 }
);
revealEls.forEach((el) => io.observe(el));

const form = document.getElementById('newsletterForm');
const status = document.getElementById('formStatus');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.email.value.trim();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) {
        status.textContent = 'Please enter a valid email address.';
        status.style.color = '#ffd2d2';
        return;
    }
    status.textContent = `Thanks! Your first sip of news is on its way to ${email}.`;
    status.style.color = '#ffffff';
    form.reset();
});

const bottle = document.querySelector('.bottle');
if (bottle && window.matchMedia('(pointer: fine)').matches) {
    document.querySelector('.hero').addEventListener('mousemove', (e) => {
        const { innerWidth: w, innerHeight: h } = window;
        const x = (e.clientX / w - 0.5) * 20;
        const y = (e.clientY / h - 0.5) * 20;
        bottle.style.transform = `translate(${x}px, ${y}px)`;
    });
}
