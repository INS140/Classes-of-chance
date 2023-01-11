class Casino {
    constructor(name, isFakeCoin) {
        this.name = name
        this.timesPlayed = 0
        this.fakeCoin = isFakeCoin
    }

    playGame(betAmount) {
        this.timesPlayed++
        return this.fakeCoin || Math.random()<=0.5  ? console.log(`${this.name} Wins!`) : console.log(`You Won $${betAmount*(this.timesPlayed+1)}!`)
    }

    rollDie(d) {
        let roll = Math.floor(Math.random()*(d) + 1);
        console.log(`You rolled a ${roll}`)
    }
};

// TESTS
const myCasino = new Casino("HackerU Casino");
console.log(myCasino);
myCasino.playGame(5);
myCasino.playGame(15);
myCasino.playGame(25);
myCasino.playGame(35);

// BONUS TESTS
const myBonusCasino = new Casino("HackerU Bonus Casino", true);
console.log(myBonusCasino);
myBonusCasino.playGame(5);
myBonusCasino.playGame(15);
myBonusCasino.playGame(25);
myBonusCasino.playGame(35);

// Extra BONUS TESTS
const myExtraBonusCasino = new Casino("HackerU Extra Bonus Casino", false);
console.log(myExtraBonusCasino);
myExtraBonusCasino.rollDie(1);
myExtraBonusCasino.rollDie(6);
myExtraBonusCasino.rollDie(20);
myExtraBonusCasino.rollDie(100);
