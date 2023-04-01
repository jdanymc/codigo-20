const btnSuma = document.querySelector(".btn-increase");
const valor = document.querySelector("#value");

btnSuma.addEventListener("click", () => {
  valor.innerHTML = +valor.innerHTML + 1;
  if (+valor.innerHTML > 0) {
    valor.style.color = "green";
  }
});

const btnReset = document.querySelector(".btn-reset");

btnReset.addEventListener("click", () => {
  valor.innerHTML = 0;
  valor.style.color = "#000";
});
const btnResta = document.querySelector(".btn-decrease");

btnResta.addEventListener("click", () => {
  valor.innerHTML = +valor.innerHTML - 1;
  if (+valor.innerHTML < 0) {
    valor.style.color = "red";
  }
});
