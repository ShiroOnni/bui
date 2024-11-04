function showLetter() {
    document.getElementById('letter').style.display = 'block';
}

function hideLetter(event) {
    event.stopPropagation(); // Empêche le clic de se propager
    document.getElementById('letter').style.display = 'none';
}
