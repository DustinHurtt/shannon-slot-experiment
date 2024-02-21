class SlotMachine {
  constructor() {
    this.spinButton = document.getElementById("startSpinButton");
    this.godModeButton = document.getElementById("godMode");
    this.reels = [
      new Reel(),
      new Reel(),
      new Reel(),
    ];
    this.isGodMode = false;
    this.winnings = 0;
    this.winningsElement = document.querySelector(".winnings");

    this.spinButton.addEventListener("click", () => {
      this.startGame();
    });

    this.godModeButton.addEventListener("click", () => {
      this.godModeButton.classList.toggle("active");
      this.isGodMode = this.godModeButton.classList.contains('active');
    });
  }

  startGame() {

    let amounts = []

    let match = []

    let winAmount = 0

    this.reels.forEach((reel, i) => {
      // reel.spin(this.isGodMode);

      let image = 1

      let spinner = document.createElement('img')
      spinner.src = `../images/Reel${image + i}.png`
      spinner.id = `spinner${image + i}`

      console.log("This is the reel", reel)
  
      reel.element.appendChild(spinner)

      setTimeout(() => {

        reel.element.removeChild(spinner)
        reel.spin(this.isGodMode);
        amounts.push(Number(reel.element.getAttribute('data-win-amount')))
        
      }, 1500)



    });

    setTimeout(() => {
      for (let i = 0; i < amounts.length; i++) {
        if (i == 0) {
          if (amounts[0] == amounts[1]) {
            match.push(amounts[0])
            winAmount = amounts[0] 
          }
          if (amounts[0] == amounts[2]) {
            console.log("line 62**********************************888")
            match.push(amounts[0]) 
            winAmount = amounts[0] 
          }
          if(match.length == 2) {
            winAmount = amounts[0] * 3
            console.log("All three!!!!~")
          }
        }
        if (i == 1 && match.length < 2) {
          if (amounts[1] == amounts[2]) {
            match.push(amounts[1])
            winAmount = amounts[1] 
          }
          console.log("ON Second")
        }
        if (i == 2) {
          console.log("done!!!")
        }
      }
      console.log("This is the final!!!!!~", amounts, match, winAmount)
    }, 1600)

    setTimeout(() => {
      this.stopGame();
    }, 1000)
  }

  stopGame() {
    this.reels.forEach((reel) => {
      reel.stop();
    });
    this.checkWin();
  }

  printWinnings() {

  }

  checkWin() {
    const finalSymbols = [];
    this.reels.forEach((reel) => {
      let lastIndex = reel.currentSymbolIndex - 1;
      if(reel.currentSymbolIndex === 0) {
        lastIndex = reel.symbolArray.length - 1;
      }
      finalSymbols.push(reel.symbolArray[lastIndex])
    })

    const isWinner = finalSymbols.every((symbol) => {
      return finalSymbols[0].symbol === symbol.symbol;
    });

    if(isWinner) {
      this.winnings += finalSymbols[0].value;
    }

    this.winningsElement.textContent = this.winnings;
  }
}

const slots = new SlotMachine(); // Instance of game - slot machine

let spinButton = document.getElementById('startSpinButton')

spinButton.addEventListener('click', () => {
  console.log("spinning!!!!!!")
})
