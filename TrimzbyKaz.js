// JavaScript to add interactivity to the "Buy Now" button

// Select the Buy Now button using its ID
document.getElementById('buyNowButton').addEventListener('click', function(event) {
    // Prevent the default action of the link (which is to navigate to another page)
    event.preventDefault();
    
    // Display an alert message when the button is clicked
    alert("Thank you for your interest in TrimzbyKaz! Your purchase is on the way.");
});
