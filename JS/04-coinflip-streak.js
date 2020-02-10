let coinFlip;

do {
    coinFlip = parseInt(Math.random() * 2);
    console.log("Its Heads");
    if (coinFlip === 1) {
        console.log("Its Tails!");
    }
}
while(coinFlip === 0);