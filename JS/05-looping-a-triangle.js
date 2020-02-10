//Create variables to iterate through
let i;
let j;

//Loop through i up to 7 times
for (i = 1; i < 8; i++) {
    //Nested for loop to write '#' everytime the count is from 1 - 7
    for (j = 1; j <= i; j++) {
        document.write('#');
    }
    //Start a newline everytime i increases(i++)
    document.write('<br>');
}
