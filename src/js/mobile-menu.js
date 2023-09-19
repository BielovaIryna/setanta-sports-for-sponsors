import * as basicLightbox from 'basiclightbox';
const mobMenuOpen = document.querySelector(".js-open-menu");
const mobMenuEl = document.querySelector(".js-menu-container");
const mobMenuClose=document.querySelector(".js-close-menu");


const mobMenuClickOpen =()=>{
const headerMobMenuBox = basicLightbox.create(mobMenuEl.classList.toggle("is-open"));
headerMobMenuBox.show()
mobMenuOpen.removeEventListener("click", handlerClickClose);
const mobMenuCloseEsc =(event)=>{
	if(event.key === "Escape"){
		mobMenuEl.classList.toggle("is-open");
		headerMobMenuBox.close();
		document.removeEventListener("keydown", mobMenuCloseEsc);
	}
	
}
document.addEventListener("keydown", mobMenuCloseEsc);
}

const mobMenuClickClose =()=>{
	mobMenuEl.classList.toggle("is-open");
	headerMobMenuBox.close()

	mobMenuClose.removeEventListener("click", mobMenuClickClose)
}
mobMenuOpen.addEventListener("click", mobMenuClickOpen)
mobMenuClose.addEventListener("click", mobMenuClickClose)
