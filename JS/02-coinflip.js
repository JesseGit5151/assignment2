var coinFlip = parseInt(Math.random() * 2);
console.log(coinFlip);
let choice = prompt('HEADS or TAILS?').toUpperCase();


if (coinFlip === 0) {
    var flipResult = "HEADS";
} else {
    var flipResult = "TAILS";
}
if (flipResult === choice) {
    if (flipResult === "HEADS") {
        alert('You Win! Its Heads');
    } else  {
        alert('You Win! You chose Tails');
    }
}else {
    if (flipResult === "HEADS") {
        alert('You lost! you chose Tails but it was heads');
    } else  {
        alert('You lost! you chose Heads but it was tails');
    }
}

// if (coinFlip === choice) {
//     if (choice === "HEADS") {
//         alert('The flip was heads and you chose heads...You won!');
//     }
//     else {
//         alert('The flip was TAILS and you chose HEADS...you failed');
// }
// }
// else {
//     if(choice === "TAILS") {
//         alert('The flip was tails and you chose tails...You won');
//     } else {
//         alert('The flip was heads and you chose tails...You lose');
//     }
// }