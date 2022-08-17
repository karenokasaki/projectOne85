// construir minha classe

class MemoryGame {
  constructor() {
    this.userName = ""; //vai vir do inputName
    this.points = 10; //estado de derrota quando points <= 0
    this.deck = [
      "./assets/harmonia.svg",
      "./assets/poder.svg",
      "./assets/projetar.svg",
      "./assets/refletir.svg",
      "./assets/harmonia.svg",
      "./assets/poder.svg",
      "./assets/projetar.svg",
      "./assets/refletir.svg",
    ];
  }

  renderDeck() {
    //randomizar a array this.deck e entregar ela pro forEach já randomizada.
    let deckRandom = this.deck.sort(() => {
      return Math.random() - 0.5;
    });

    //capturando o meu board
    let board = document.querySelector("#board");

    //iterar pelo meu deck
    deckRandom.forEach((imgSrc) => {
      let imgTag = document.createElement("img"); // <img />
      imgTag.src = imgSrc; // <img src="./assets/algumacoisa.svg" /> FRONT - CARD
      imgTag.classList.add("hide"); // <img src="./assets/algumacoisa.svg" class="hide" />

      let backImg = document.createElement("img"); // <img />
      backImg.src = "./assets/fe.svg";

      board.appendChild(imgTag);
      board.appendChild(backImg);
    });
  }
}
