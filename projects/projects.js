// projects.js - Handles skill tag filtering for projects

document.addEventListener('DOMContentLoaded', function () {
  const skillTags = document.querySelectorAll('.skill-tag');
  const projectCards = document.querySelectorAll('.projects .card');
  let activeTag = null;

  skillTags.forEach(tag => {
    tag.style.cursor = 'pointer';
    tag.addEventListener('click', function () {
      // Toggle tag selection
      if (activeTag === tag) {
        tag.classList.remove('active');
        activeTag = null;
        showAllProjects();
      } else {
        skillTags.forEach(t => t.classList.remove('active'));
        tag.classList.add('active');
        activeTag = tag;
        filterProjectsByTag(tag.dataset.tag);
      }
    });
  });

  function filterProjectsByTag(tag) {
    let found = false;
    projectCards.forEach(card => {
      const tags = card.getAttribute('data-tags') || '';
      if (tags.split(',').map(t => t.trim()).includes(tag)) {
        card.style.display = '';
        found = true;
      } else {
        card.style.display = 'none';
      }
    });
    // Optionally, show a 'no results' message if nothing is found
    const noResults = document.querySelector('.no-results');
    if (noResults) {
      noResults.style.display = found ? 'none' : '';
    }
  }

  function showAllProjects() {
    projectCards.forEach(card => {
      card.style.display = '';
    });
    const noResults = document.querySelector('.no-results');
    if (noResults) {
      noResults.style.display = 'none';
    }
  }
});
