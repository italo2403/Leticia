document.addEventListener('DOMContentLoaded', () => {
    const artworks = [
        { title: 'Sunset Bliss', artist: 'Anna Doe', imgSrc: 'images/sunset.jpg' },
        { title: 'Abstract Thought', artist: 'John Smith', imgSrc: 'images/abstract.jpg' },
        { title: 'Nature\'s Harmony', artist: 'Eva Johnson', imgSrc: 'images/nature.jpg' }
    ];

    const gallery = document.getElementById('artworks');

    artworks.forEach(art => {
        const artItem = document.createElement('div');
        artItem.classList.add('art-item');
        artItem.innerHTML = `
            <img src="${art.imgSrc}" alt="${art.title}">
            <h3>${art.title}</h3>
            <p>By ${art.artist}</p>
        `;
        gallery.appendChild(artItem);
    });
});
