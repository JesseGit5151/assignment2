let miles,gallons,mpg,again = 'y';
do {
    miles = parseFloat(prompt('Enter miles driven.'));
    gallons = parseFloat(prompt('Enter size of tank in gallons'));
    if (!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0) {
        mpg = miles / gallons;
        document.write("Miles per gallon:" + parseInt(mpg) + '<br>')
    } else {
        alert('One or both entries are invalid');
    }

    // validate that entry. If it’s anything other than “y” or “n” the prompt should simply reappear until the user enters a valid entry. 
   
    do {
        again = prompt('Repeat entries? y or n')
    }
     while (again !== 'y' && again !== 'n');
} while (again === 'y');
document.write('Finished');
