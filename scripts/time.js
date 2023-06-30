function updateTimeAndDate() {
  const currentDate = new Date();

  // Get the time in HH:MM:SS format
  const hours = String(currentDate.getHours()).padStart(2, "0");
  const minutes = String(currentDate.getMinutes()).padStart(2, "0");
  const time = `${hours}:${minutes}`;

  // Update the time and date elements
  document.querySelector(".time").textContent = time;
}

// Initial invocation of the function
updateTimeAndDate();

// Update time and date every second
setInterval(updateTimeAndDate, 1000);
