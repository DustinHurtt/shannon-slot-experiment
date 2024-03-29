class Reel {
  constructor() {
    this.defaultSymbols = [
      { symbol: "🍒", value: 10 },
      { symbol: "🍇", value: 20 },
      { symbol: "🍋", value: 30 },
      { symbol: "🍉", value: 40 },
      { symbol: "🍊", value: 60 },
    ];

    this.symbolArray = [...this.defaultSymbols];

    this.element = document.createElement("div");
    this.element.classList.add("reel");
    this.currentSymbolIndex = 0;
    this.spinInterval = null;
    document.querySelector(".slots").appendChild(this.element);
  }

  reelSymbolShuffler() { //Array randomizer 
    for (let i = this.symbolArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.symbolArray[i], this.symbolArray[j]] = [this.symbolArray[j], this.symbolArray[i]];
    }
  }

  spin(isGodMode) { 
    this.reelSymbolShuffler();
    if(isGodMode) {
      this.symbolArray = [...this.defaultSymbols];
    }

    let randomIndex = Math.floor(Math.random() * this.symbolArray.length)
    this.element.textContent = this.symbolArray[randomIndex].symbol
    this.element.setAttribute('data-win-amount', this.symbolArray[randomIndex].value)

    // let spinner = document.createElement('img')
    // spinner.src = '../images/Reel1.png'
    // spinner.id = 'spinner'

    // this.element.appendChild(spinner)

    // this.spinInterval = setInterval(() => {
    //   this.element.textContent = this.symbolArray[this.currentSymbolIndex].symbol;
    //   this.currentSymbolIndex = (this.currentSymbolIndex + 1) % this.symbolArray.length;
    // }, 200);
  }

  stop() {
    clearInterval(this.spinInterval);
  }
}
