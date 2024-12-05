const badge = document.querySelector(".badge");
const notificationBtn = document.querySelector(".notification-btn");

const maxNotification = 100;
let notificationCounter = 0;

const setNotification = () => {
	if (notificationCounter <= 0) {
		badge.style.display = "none";
	} else {
		badge.style.display = "block";
		badge.textContent = Math.min(notificationCounter, maxNotification);
	}
};

notificationBtn.addEventListener("click", () => {
	notificationCounter++;
	setNotification();
});

setNotification();
