import { getUsers, createTable, createLoader } from "./data.js";
const button = document.querySelector("#main-btn");
const closeButton = document.querySelector(".close-btn");
const modal = document.querySelector(".modal");
const counter = document.querySelector(".counter");
const resetButton = document.querySelector(".btn-reset");
const modalContainer = document.querySelector(".modal-container");
const url = "https://jsonplaceholder.typicode.com/users"
const tableWithUsers = async () => {
  const loaderWrapper = createLoader();
  modalContainer.appendChild(loaderWrapper);
  const users = await getUsers(url);
  const div = await createTable(users);
  loaderWrapper.remove();
  modalContainer.appendChild(div);
};

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
  tableWithUsers();

  if (clickCounter > 5) {
    resetButton.classList.toggle("--active");
  }
};

const closeModal = () => {
  modal.classList.toggle("--open");
  resetButton.classList.remove("--active");
  const table = document.querySelector(".table-wrapper");
  table.remove();
};

const handleClickOutside = (e) => {
  if (e.target === modal) {
    closeModal();
  }
};

modal.addEventListener("click", handleClickOutside);
button.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
resetButton.addEventListener("click", resetCounter);
