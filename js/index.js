//manipulo o dom

//instanciando nossa classe MemoryGame
const game = new MemoryGame();

const buttonStart = document.querySelector("#inicio button");
const inicio = document.querySelector("#inicio");
const inputName = document.querySelector("#inicio input");
const name = document.querySelector("#name");
const points = document.querySelector("#points");

buttonStart.addEventListener("click", () => {
  game.renderDeck();
  inicio.style.display = "none";

  game.userName = inputName.value;

  name.innerText = game.userName;
  points.innerText = game.points;
});
