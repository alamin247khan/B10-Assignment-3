// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
mobileMenuBtn && mobileMenu && (
  mobileMenuBtn.onclick = () => mobileMenu.style.display = mobileMenu.style.display === 'none' ? 'block' : 'none',
  document.addEventListener('click', e => {
    !mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target) && (mobileMenu.style.display = 'none');
  })
);

// Book Consult button scrolls to contact form
const bookConsultBtn = document.getElementById('bookConsultBtn');
const contactForm = document.getElementById('contactForm');
bookConsultBtn && contactForm && (
  bookConsultBtn.onclick = e => {
    e.preventDefault();
    contactForm.scrollIntoView({ behavior: 'smooth' });
    contactForm.querySelector('input,textarea,select')?.focus();
  }
);

// Hero View Details button scrolls to portfolio
const heroViewDetailsBtn = document.getElementById('heroViewDetailsBtn');
const portfolioSection = document.getElementById('portfolio');
heroViewDetailsBtn && portfolioSection && (
  heroViewDetailsBtn.onclick = () => portfolioSection.scrollIntoView({ behavior: 'smooth' })
);

// All View Details buttons scroll to portfolio
document.querySelectorAll('.view-details-btn').forEach(btn =>
  btn.onclick = e => {
    e.preventDefault();
    portfolioSection && portfolioSection.scrollIntoView({ behavior: 'smooth' });
  }
);

// Contact form submission
contactForm && contactForm.addEventListener('submit', e => {
  e.preventDefault();
  const d = new FormData(contactForm);
  alert(
    `Submitted!\nSearch: ${d.get('search')}\nEmail: ${d.get('email')}\nUsername: ${d.get('username')}\nPassword: ${d.get('password')}`
  );
  contactForm.reset();
});
