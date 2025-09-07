 
    // Active link highlight on scroll
    const sections = document.querySelectorAll('main[id], section[id]');
    const navLinks = document.querySelectorAll('nav a');
    const setActive = () => {
      let current = '';
      sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 120;
        const height = sec.offsetHeight;
        if(top >= offset && top < offset + height){ current = '#' + sec.getAttribute('id'); }
      });
      navLinks.forEach(a => { a.classList.toggle('active', a.getAttribute('href') === current); });
    };
    window.addEventListener('scroll', setActive);
    setActive();

    // Year
    document.getElementById('yr').textContent = new Date().getFullYear();
