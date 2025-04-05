function searchVideos() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase();
    const videoCards = document.querySelectorAll('.video-card');

    videoCards.forEach(card => {
        const videoTitle = card.querySelector('.video-title');
        if (videoTitle) {
            const titleText = videoTitle.textContent.toLowerCase();
            if (titleText.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        }
    });
}