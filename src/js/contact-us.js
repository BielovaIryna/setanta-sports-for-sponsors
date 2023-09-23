(() => {
	const bodyScrollLock = require('body-scroll-lock');
		const disableBodyScroll = bodyScrollLock.disableBodyScroll;
    const enableBodyScroll = bodyScrollLock.enableBodyScroll;
	const refs = {
	  openModalBtn: document.querySelectorAll('[data-modal-open]'),
	  closeModalBtn: document.querySelector('[data-modal-close]'),
	  modal: document.querySelector('[data-modal]'),
	};
	refs.openModalBtn.forEach(el => {
	  el.addEventListener('click', toggleModal);
	  
	});
	refs.closeModalBtn.addEventListener('click', toggleModal);
	function toggleModal() {
	  refs.modal.classList.toggle('is-hidden');
	  document.body.classList.toggle("no-scroll");
	
	  if(refs.modal.classList.contains('is-hidden')){
		enableBodyScroll(document.body);
	  } else{disableBodyScroll(document.body)}
		
	
	}
  })();