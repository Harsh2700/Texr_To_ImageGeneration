function generateImage() {
    const prompt = document.getElementById('prompt').value.toLowerCase();
    const outputDiv = document.getElementById('output');

    // Mapping of keywords to local image paths
    const imageMap = {
        dog: './img/i1.webp',
        house: './img/i2.webp',
        car: './img/i3.webp',
        bus: './img/i4.webp',
        airplane: './img/i5.webp',
        buildings: './img/i3.webp',
        animals: './img/i6.webp'
    };

    // Check if the prompt matches any key
    if (imageMap[prompt]) {
        outputDiv.innerHTML = `<img src="${imageMap[prompt]}" alt="${prompt}">`;
    } else {
        outputDiv.innerHTML = '<p style="color: red;">Oops!!! Out of Tokens.</p>';
    }
}

// Automatically hide the welcome screen after 3 seconds
window.onload = () => {
    const welcomeScreen = document.getElementById('welcomeScreen');
    setTimeout(() => {
        welcomeScreen.style.display = 'none';
    }, 3000);
};
