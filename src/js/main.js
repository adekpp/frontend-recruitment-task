const button = document.querySelector(".button");
const closeButton = document.querySelector(".close-btn");
const modal = document.querySelector(".modal-wrapper");
const backdrop = document.querySelector(".backdrop");
const counter = document.querySelector(".counter");
const resetButton = document.querySelector(".btn-reset");

let clickCounter = localStorage.getItem("clickCounter");

const increaseCounter = () => {
  clickCounter++;
  localStorage.setItem("clickCounter", clickCounter);
  counter.innerHTML = clickCounter;
};

const resetCounter = () => {
  localStorage.setItem("clickCounter", (clickCounter = 0));
  counter.innerHTML = clickCounter;
  resetButton.classList.remove("--active");
};

const openModal = () => {
  modal.classList.toggle("--open");
  increaseCounter();

  if (clickCounter > 5) {
    resetButton.classList.toggle("--active");
  }
};

const closeModal = () => {
  modal.classList.toggle("--open");
  resetButton.classList.remove("--active");
};

const handleClickOutside = (e) => {
  if (e.target === backdrop) {
    closeModal();
  }
};

modal.addEventListener("click", handleClickOutside);
button.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
resetButton.addEventListener("click", resetCounter);
