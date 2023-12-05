const thumbnails = document.querySelectorAll('.thumbnail');
const largeImage = document.getElementById('selectedImage');
const overlay = document.querySelector('.overlay');
const selectedCaption = document.getElementById('selectedCaption');

let currentImageIndex; // Variable to store the currently selected image index

const captions = [
    "1967 Ferrari 412P Berlinetta - $30.3 million",
    "1957 Ferrari 335S Scaglietti - $35.7 million",
    "1962 Ferrari 250 GTO - $38.1 million",
    "1962 Ferrari 250 GTO - $48.4 million",
    "1955 Mercedes-Benz 300 SLR Uhlenhaut Coupe - (estimated) $142 million",
];

function selectImage(index) {
    // Remove the 'selected' class from all thumbnails
    thumbnails.forEach(thumbnail => thumbnail.classList.remove('selected'));

    // Add the 'selected' class to the clicked thumbnail
    thumbnails[index].classList.add('selected');

    // Update the current image index
    currentImageIndex = index;

    // Display the selected image in the large image area
    const imagePath = `imgs/car${index + 1}.jpg`; // Change the file path accordingly
    largeImage.src = imagePath;

    // Display the caption for the selected image
    displayCaption(index);

    // Show the overlay with selected caption
    overlay.style.display = 'block';
    selectedCaption.textContent = captions[index];
}

function displayCaption(index) {
    // Display the caption for the selected image
    const thumbnailCaption = document.getElementById(`caption${index}`);
    thumbnailCaption.textContent = captions[index];
}

function hideCaption() {
    // Hide the caption when the mouse is not over a thumbnail
    captions.forEach((_, index) => {
        const thumbnailCaption = document.getElementById(`caption${index}`);
        thumbnailCaption.textContent = '';
    });
}

// Set the default image when the page loads
window.onload = function () {
    // If currentImageIndex is undefined, set it to 0 (default to the first image)
    if (currentImageIndex === undefined) {
        selectImage(0);
    }
};
