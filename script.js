// Navigation function
function navigateTo(page) {
  window.location.href = page;
}

// Notification icon click handler
function goToNotifications() {
  alert("Redirecting to Notifications page...");
  // You can later redirect using:
  // window.location.href = 'notifications.html';
}

// Profile icon click handler
function goToProfile() {
  alert("Redirecting to Profile page...");
  // You can later redirect using:
  // window.location.href = 'profile.html';
}

// Group join button handler
function joinGroup(groupName) {
  alert(`You have joined the group: ${groupName}`);
}
function interested(eventName) {
  alert(`You marked "${eventName}" as Interested!`);
}

function registerEvent(eventName) {
  alert(`You are registered for "${eventName}"!`);
}
function updateProfile() {
  alert("Your profile has been updated!");
}

function deleteAccount() {
  const confirmDelete = confirm("Are you sure you want to delete your account?");
  if (confirmDelete) {
    alert("Your account has been deleted.");
    // Logic to actually delete the account goes here
  }
}
function submitVote() {
  const options = document.getElementsByName("poll");
  let selected = null;

  for (let option of options) {
    if (option.checked) {
      selected = option.value;
      break;
    }
  }

  if (selected) {
    alert("You voted for: " + selected);
    // Logic to save vote to backend goes here
  } else {
    alert("Please select an option before voting.");
  }
}
function markInterested(eventId) {
  alert(`You've marked interest in event: ${eventId}`);
  // Store in backend if needed
}

function registerEvent(eventId) {
  alert(`You've registered for event: ${eventId}`);
  // Store in backend if needed
}
let currentChatUser = '';

function loadChat(user) {
  currentChatUser = user;
  document.getElementById('chatTitle').innerText = `Chat with ${user}`;
  document.getElementById('chatMessages').innerHTML = '';
}

function sendMessage() {
  const input = document.getElementById('messageInput');
  const message = input.value.trim();
  if (message === '' || currentChatUser === '') return;

  const messageEl = document.createElement('div');
  messageEl.classList.add('message', 'self');
  messageEl.innerText = message;

  document.getElementById('chatMessages').appendChild(messageEl);
  input.value = '';

  // Auto scroll
  const chatMessages = document.getElementById('chatMessages');
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function goToNotifications() {
  alert("Redirecting to notifications...");
}

function goToProfile() {
  window.location.href = 'profile.html';
}

function navigateTo(page) {
  window.location.href = page;
}
const calendarEl = document.getElementById("calendar");
const daysInMonth = 30;
const events = {
  2: "Orientation",
  5: "Coding Contest",
  14: "Workshop",
  21: "Hackathon",
  27: "Club Meetup"
};

for (let i = 1; i <= daysInMonth; i++) {
  const day = document.createElement("div");
  day.className = "day";

  const date = document.createElement("div");
  date.className = "date";
  date.textContent = `May ${i}`;
  day.appendChild(date);

  if (events[i]) {
    const event = document.createElement("div");
    event.className = "event";
    event.textContent = events[i];
    day.appendChild(event);
  }

  calendarEl.appendChild(day);
}

function goToNotifications() {
  alert("Redirecting to notifications...");
}

function goToProfile() {
  window.location.href = 'profile.html';
}

function navigateTo(page) {
  window.location.href = page;
}
