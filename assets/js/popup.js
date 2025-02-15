window.onload = function() {
    showPopup(); // Show the popup when the page loads
};

function showPopup() {
    document.getElementById('overlay').style.display = 'block';
    setTimeout(() => {
        document.getElementById('popup').classList.add('active');
    }, 10);
}

function hidePopup() {
    document.getElementById('popup').classList.remove('active');
    setTimeout(() => {
        document.getElementById('overlay').style.display = 'none';
    }, 300); // wait for the animation to finish
}

function handleSubmit(event) {
    event.preventDefault();
    alert('Offer claimed!');
    hidePopup(); // Hide the popup when form is submitted
}