// Get elements
const chatbotIcon = document.getElementById('chatbotIcon');
const chatbox = document.getElementById('chatbox');
const closeBtn = document.getElementById('closeBtn');

// Show chatbox when clicking on chatbot icon
chatbotIcon.addEventListener('click', () => {
  chatbox.style.display = 'block';
});

// Hide chatbox when clicking on close button
closeBtn.addEventListener('click', () => {
  chatbox.style.display = 'none';
});
