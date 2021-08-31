(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-slider-open]'),
      closeModalBtn: document.querySelector('[data-slider-close]'),
      modal: document.querySelector('[data-slider]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden-slider');
    }
  })();