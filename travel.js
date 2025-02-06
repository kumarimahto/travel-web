// Get the button and form elements
const bookNowBtn = document.getElementById('bookNowBtn');
const bookingForm = document.getElementById('bookingForm');

// Function to open the form
bookNowBtn.onclick = function() {
    bookingForm.style.display = 'block'; // Show the form when the button is clicked
};

// Function to close the form
function closeForm() {
    bookingForm.style.display = 'none'; // Hide the form when the "Close" button is clicked
}
