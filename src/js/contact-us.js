import * as basicLightbox from 'basiclightbox';
const contactUsOpenBtn = document.querySelector(".contact-us");
const contactUsSubmitBtn = document.querySelector(".contact-form-submit-btn");
const contacUsClose = document.querySelector("[data-modal-close]");
const contactUsEl = document.querySelector("[data-modal]")
console.log(contactUsOpenBtn);

const contactUsClickOpen = () => {
	const contactUsBox = basicLightbox.create(contactUsEl.classList.toggle("is-hidden"));
	contactUsBox.show();
	contactUsOpenBtn.removeEventListener("click", contactUsClickOpen);
	const contactUsEscClose = (event) => {
		if (event.key === "Escape") {
			contactUsEl.classList.toggle("is-hidden");
			document.removeEventListener("keydown", contactUsEscClose)
		}
		document.addEventListener("keydown", contactUsEscClose)
	}
}
const contactUsClickClose = () => {
	contactUsEl.classList.toggle("is-hidden");
}
contactUsOpenBtn.addEventListener("click", contactUsClickOpen);
contacUsClose.addEventListener("click", contactUsClickClose)
