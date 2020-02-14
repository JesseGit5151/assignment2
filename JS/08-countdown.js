let answer = parseInt(prompt('Please enter a number'));

//Write the answer then decrement by 1 til answer is less than 0
// do {
//     document.write (answer + "<br>"); 
//     answer--; 
// }
// while(answer >= 0);


for (answer; answer >= 0; answer--) {
    document.write(answer + "<br>")
}
