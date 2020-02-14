//lab 6
//The future value app

let futureValue = 0, investment = 0, rate = 0, years = 0, i;


    do {
        investment = parseFloat(prompt('Enter investment amount as xxxx.xx'));
        console.log(investment)
    }
    while (isNaN(investment));
    do {
        rate = parseFloat(prompt('Enter a rate as xxxx.xx'));
        console.log(rate)
    }
    while (isNaN(rate) || rate < 0 || rate > 6);
    do {
        years = parseFloat(prompt('Enter number of years'));
    }
    while (isNaN(years) || years < 1 || years > 30);




futureValue = investment;
for (i = 1; i <= years; i++) {
    futureValue = futureValue + (futureValue * rate /100);
}
document.write("Investment amount: $" + investment + '<br>');
document.write("Interest rate: " + rate + '<br>');
document.write("Years: " + years + '<br>');
document.write("Future Value amount: $" + futureValue.toFixed(2));
