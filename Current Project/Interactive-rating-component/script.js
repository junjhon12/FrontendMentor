document.addEventListener("DOMContentLoaded", function() {
    let selectedNumber = null;
    const numberButtons = document.querySelectorAll(".feedback-number");
    const submitButton = document.getElementById("submit");
    const ratingContainer = document.querySelector(".rating-container");
    const thankYouContainer = document.querySelector(".thankYou-container");
    const userSelectionContainer = document.getElementById("selected-rating");

    numberButtons.forEach(button => {
        button.addEventListener("click", function() {
            // Remove active state from all buttons
            numberButtons.forEach(btn => btn.classList.remove("active"));

            // Set active state for the clicked button
            this.classList.add("active");
            selectedNumber = this.textContent;
            
        });
    });

    submitButton.addEventListener("click", function() {
        if (selectedNumber) {
            ratingContainer.style.display = "none"; // Hide the rating container
            thankYouContainer.style.display = "flex"; // Show the thank you container
            userSelectionContainer.textContent = selectedNumber;
        } else {
            alert("Please select a rating before submitting.");
        }
    });
});
