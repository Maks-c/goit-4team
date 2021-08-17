(() => {
    const refs = {
      openMenuBtn: document.querySelector("[data-arrow-down]"),
      closeMenuBtn: document.querySelector("[data-arrow-up]"),
      menu: document.querySelector("[data-arrow]"),
    };
  
    refs.openMenuBtn.addEventListener("click", toggleModal);
    refs.closeMenuBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.menu.classList.toggle("is-active");
    }
  })();