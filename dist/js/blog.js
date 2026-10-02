// Blog listing page: filter post cards by category
const filterButtons = document.querySelectorAll('.blog-filter-btn');
const blogCards = document.querySelectorAll('.blog-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');

    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    blogCards.forEach(card => {
      const matches = filter === 'all' || card.getAttribute('data-category') === filter;
      card.classList.toggle('is-hidden', !matches);
    });
  });
});
