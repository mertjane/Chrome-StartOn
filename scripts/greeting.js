// Function to update the greeting
function updateGreeting() {
  // Get the current hour
  const currentHour = new Date().getHours();

  let greeting = "";

  // Determine the appropriate greeting based on the current hour
  if (currentHour >= 5 && currentHour < 12) {
    greeting = "Good Morning";
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = "Good Afternoon";
  } else if (currentHour >= 18 && currentHour < 22) {
    greeting = "Good Evening";
  } else {
    greeting = "Good Night";
  }

  // Update the content of the h1 element
  document.getElementById("greeting").textContent = `${greeting}, Mertcan.`;
}

// Initial invocation of the function
updateGreeting();

// Set interval to update greeting every hour
setInterval(updateGreeting, 3600000); // 1 hour = 3600000 milliseconds
