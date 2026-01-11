// Mobile navigation toggle (for future use)
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.querySelector('.site-nav ul');
  if (navToggle) {
    navToggle.addEventListener('click', function() {
      siteNav.classList.toggle('nav-open');
    });
  }
});

// Smooth scroll for anchor links (optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Example: Card hover effect (optional, if you want animation)
document.querySelectorAll('.articles-grid article').forEach(card => {
  card.addEventListener('mouseenter', function() {
    card.style.transform = 'scale(1.03)';
    card.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)';
  });
  card.addEventListener('mouseleave', function() {
    card.style.transform = 'scale(1)';
    card.style.boxShadow = '';
  });
});