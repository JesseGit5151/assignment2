let p = document.querySelector('p');
console.log(p)
let fPrompt = parseInt(prompt('Please enter in a number'));
let sPrompt = parseInt(prompt('Please enter in a number'));

if (fPrompt > sPrompt) {
p.innerText = fPrompt;
} else if (fPrompt === sPrompt) {
    alert('Please enter two different numbers!');
}
 else {
    p.innerText = sPrompt;
}