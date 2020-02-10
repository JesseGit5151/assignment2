let i;

//Loop through 100
for (i = 1; i <= 100; i++) {
    //if i is divisible by 3: write Marco
    if (i % 3 === 0) {
        document.write("Marco!");
        //if i is divisible by 5: write Polo
    } else if (i % 5 === 0) {
        document.write('Polo!')
    }
    //Prints each number if not divisible by 3 or 5
    else {
        document.write(i);
    }
    //Newline after every iteration
    document.write( "<br>");
}