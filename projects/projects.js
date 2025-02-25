// Get all skill tags and project cards
const skillTags = document.querySelectorAll('.skill-tag');
const cards = document.querySelectorAll('.card');

// Add hover effect for project cards
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const tags = card.dataset.tags.split(', ');

        // Highlight matching skill tags
        skillTags.forEach(skillTag => {
            if (tags.includes(skillTag.dataset.tag)) {
                skillTag.classList.add('highlight');
            }
        });
    });

    card.addEventListener('mouseleave', () => {
        // Remove highlights from skill tags
        skillTags.forEach(skillTag => skillTag.classList.remove('highlight'));
    });
});
