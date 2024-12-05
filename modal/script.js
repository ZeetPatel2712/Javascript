// Get modal elements
const modal = document.getElementById("modal");
const openModalButton = document.getElementById("open-modal");
const closeModalButton = document.querySelector(".modal-close");
const modalActionButton = document.getElementById("modal-action");

// Open modal
openModalButton.addEventListener("click", () => {
	modal.style.display = "flex"; // Show modal
});

// Close modal on close button
closeModalButton.addEventListener("click", () => {
	modal.style.display = "none"; // Hide modal
});

// Close modal when clicking outside modal content
window.addEventListener("click", (event) => {
	if (event.target === modal) {
		modal.style.display = "none";
	}
});

// Action button (add functionality as needed)
modalActionButton.addEventListener("click", () => {
	alert("Action confirmed!");
	modal.style.display = "none";
});
