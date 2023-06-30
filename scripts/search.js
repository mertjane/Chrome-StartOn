// Get the input element
const input = document.querySelector(".form input");

// Add event listener for the 'keydown' event
input.addEventListener("keydown", function (event) {
  // Check if the pressed key is the Enter key (key code 13)
  if (event.keyCode === 13) {
    // Prevent the default form submission
    event.preventDefault();

    // Get the user input value
    const searchValue = input.value;

    // Construct the Google search URL
    const searchUrl =
      "https://www.google.com/search?q=" + encodeURIComponent(searchValue);

    // Open a new tab with the search results
    window.open(searchUrl, "_blank");

    // Clear the input field value
    input.value = "";
  }
});
