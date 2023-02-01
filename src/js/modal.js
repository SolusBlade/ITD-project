(() => {
    const refs = {
      openModalBtn: document.querySelectorAll("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };
    for(let button of refs.openModalBtn){
      button.addEventListener("click", toggleModal);
    }
    
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      document.body.classList.toggle("modal-open")
      refs.modal.classList.toggle("is-hidden");
    }
  })();