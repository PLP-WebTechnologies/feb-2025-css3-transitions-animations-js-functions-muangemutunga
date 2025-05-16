// Animate box on button click
document.getElementById("animateBtn").addEventListener("click", () => {
  const box = document.getElementById("animatedBox");
  box.classList.toggle("animate"); // Toggle animation class
});

// Save color to localStorage
document.getElementById("saveColorBtn").addEventListener("click", () => {
  const color = document.getElementById("colorPicker").value;
  localStorage.setItem("favColor", color);
  document.getElementById("colorFeedback").textContent = `✅ Color ${color} saved!`;
  document.body.style.backgroundColor = color;
});

// Load saved color on page load
window.addEventListener("load", () => {
  const savedColor = localStorage.getItem("favColor");
  if (savedColor) {
    document.body.style.backgroundColor = savedColor;
    document.getElementById("colorFeedback").textContent = `🎨 Loaded your favorite color: ${savedColor}`;
    document.getElementById("colorPicker").value = savedColor;
  }
});
