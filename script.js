// Hamburger toggle (if using mobile nav)
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');

if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
  });
}

// Load more button (for blog posts)
const loadMoreBtn = document.querySelector('.load-more');
const allPosts = document.querySelectorAll('.blog-grid article');
let visiblePosts = 6;

if (loadMoreBtn && allPosts.length) {
  loadMoreBtn.addEventListener('click', () => {
    for (let i = visiblePosts; i < visiblePosts + 3 && i < allPosts.length; i++) {
      allPosts[i].style.display = 'block';
    }
    visiblePosts += 3;
    if (visiblePosts >= allPosts.length) {
      loadMoreBtn.style.display = 'none';
    }
  });

  // Hide posts beyond first 6
  for (let i = 6; i < allPosts.length; i++) {
    allPosts[i].style.display = 'none';
  }
}
