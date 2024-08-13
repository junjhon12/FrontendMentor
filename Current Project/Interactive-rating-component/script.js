document.addEventListener("DOMContentLoaded", function() {
    let selectedNumber = null; // To keep track of the number the user selects

    const numberButtons = document.querySelectorAll(".feedback-number"); // All the number buttons
    const submitButton = document.getElementById("submit"); // The submit button
    const ratingContainer = document.querySelector(".rating-container"); // The container for the rating system
    const thankYouContainer = document.querySelector(".thankYou-container"); // The container for the thank you message
    const userSelectionContainer = document.getElementById("selected-rating"); // The place to show the selected rating

    numberButtons.forEach(button => {
        button.addEventListener("click", function() {
            // Remove the active state from all buttons
            numberButtons.forEach(btn => btn.classList.remove("active"));

            // Add the active state to the clicked button
            this.classList.add("active");
            selectedNumber = this.textContent; // Save the selected number
        });
    });

    submitButton.addEventListener("click", function() {
        if (selectedNumber) {
            // Hide the rating container and show the thank you container
            ratingContainer.style.display = "none";
            thankYouContainer.style.display = "flex";

            // Show the selected rating in the thank you message
            userSelectionContainer.textContent = selectedNumber;
        } else {
            // Alert the user to select a rating before submitting
            alert("Please select a rating before submitting.");
        }
    });
});
