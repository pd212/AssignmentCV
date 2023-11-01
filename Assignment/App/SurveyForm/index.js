document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("survey-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        if (validateForm()) {
            displayResults();
        }
    });

    form.addEventListener("reset", function () {
        resetForm();
    });

    function validateForm() {
        // Add your validation logic here
        return true; // For demonstration purposes, always returns true
    }

    function displayResults() {
        // Display survey results in a popup
        const formData = new FormData(form);
        let results = "Survey Results:\n";
        for (const [key, value] of formData.entries()) {
            results += `${key}: ${value}\n`;
        }
        alert(results);
        resetForm();
    }

    function resetForm() {
        form.reset();
    }
});
