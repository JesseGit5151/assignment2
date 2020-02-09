let coinFlip;

for (let i = 0; i < 11; i++) {
    coinFlip = parseInt(Math.random() * 2);
    console.log(coinFlip);
    if (coinFlip === 0) {
        console.log('Heads');
    } else {
        console.log('Tails');
    }
}