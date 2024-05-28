function showLocation(place) {
    document.getElementById('popup-text').textContent = 'Location: ' + place;
    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

document.getElementById('sort-calendar').addEventListener('click', () => {
    alert('Sort by Calendar clicked!');
    // Implement sorting logic
});

document.getElementById('sort-location').addEventListener('click', () => {
    alert('Sort by Location clicked!');
    // Implement sorting logic
});

document.getElementById('sort-activity').addEventListener('click', () => {
    alert('Sort by Activity clicked!');
    // Implement sorting logic
});
