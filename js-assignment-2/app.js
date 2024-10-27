// chap 4
// //  rule  of naming js variable

// // legal or illegal

//illegal
// var na me;
// var 1name;
// var na@me;
// var na-me;
// var na(d);

//legal 
// var name1;
// var na_me;
// var name;
// var $name;
// var _name;

// // chapter 5

// //sum of two number result show in your browser

// var num1 = 2
// var num2 = 5

// // add two number
// var result = num1 + num2;

// // Output show in browser
// document.write(`sum of ${num1} and ${num2} is ${result}<br>`);

// // subtraction of two number

// var num1 = 5
// var num2 = 2

// var result = num1 - num2;

// document.write(`subtraction of ${num1} and ${num2} is ${result}<br>`);

// // multiplication of two number

// var val1 = 3;
// var val2 = 3;

// var result = val1 * val2;

// document.write (`multiplication of ${val1} and ${val2} is ${result}<br>`)

// //  division of two numnber

// var val1 = 6;
// var val2 = 3;

// var result = val1 / val2;

// document.write (`Division of ${val1} and ${val2} is ${result}<br>`)


// //take input from user

// var number = parseInt(prompt('Enter your number:'))

// //print Table

// for ( i = 1 ; i <= 10 ; i++){
//     document.getElementById('table').innerHTML +=
//     `${number} x ${i} = ${number*i}<br>`;
    
    
// } 

// // ---------------------------------

// value after declaration is undefined

// document.write('<h1>value after variable declaration is undefined</h1>')

// //initial value

// var number = 5

// document.getElementById('inital-value').innerHTML +=
// `initial value is : ${number}`;

// // -----------------------------------

// // value after incresment

// var a = 5
// var increment = ++a;


// document.getElementById('after-increment').innerHTML +=
// `value after increment is : ${increment}`

// // -------------------------------

// // value after addition

// var num1 = 6
// var num2 = 7

// var addition = num1 + num2;

// document.getElementById('addition').innerHTML +=
// `value after addition is : ${addition}`

// // -------------------------

// // value after decrement

// var x = 13
// var decrement = --x;

// document.getElementById('decrement').innerHTML +=
// `value after decrement is : ${decrement}`

// //-----------------------------------

// // reminder value

// var p = 12
// var q = 3

// var reminder = p / q

// document.getElementById('reminder').innerHTML +=
// `The reminder is : ${reminder}`ds

// // ---------------------------
// document.write("<h2>Calculate the cost of Tickets</h2>")

// // calculate the cost of buying 5 tickets

// var ticketPrice = 600
// var buyTickets = 5

// var totalCost = ticketPrice * buyTickets

// document.getElementById('cost-of-tickets').innerHTML  +=
// `The cost to buy 5 tickets to a movie is ${totalCost}PKR`

// // -------------------------------------

// // a. Store a Celsius temperature into a variable
// let celsiusTemp = 25; // Example Celsius temperature

// // b. Convert it to Fahrenheit & output "NNoC is NNoF"
// let fahrenheitTemp = (celsiusTemp * 9/5) + 32;
// document.write(`${celsiusTemp}*C is ${fahrenheitTemp}*F <br>`);

// // c. Now store a Fahrenheit temperature into a variable
// fahrenheitTemp = 77;  // Example Fahrenheit temperature

// // d. Convert it to Celsius & output "NNoF is NNoC"
// celsiusTemp = (fahrenheitTemp - 32) * 5/9;
// document.write (`${fahrenheitTemp}*F is  ${celsiusTemp}*C<br>`);

// q# 7

// document.write('<h1>Shopping Cart<h1/>' )

// //price of item 1
// var num1 = 650;
// var item1 ="price of item1 is" + num1
// document.write(item1 + "<br>" )

// // quantity of item 1
// var num2 = 3 ;
// var quantity1 = "quantity of item is 1 " + num2
// document.write(quantity1 + "<br>")

// // price of item 2
// var num2 = 100 ;
// var item2 = "Price of item is 2  " + num2
// document.write(item2 + "<br>")

// // quantity of item 2 
// var num3 = 7
// var quantity2 = "quantity of item 2 is " + num3;
// document.write(quantity2 + "<br>")

// // shipping charges
// var num4 = 100
// var charges = "Shipping charges " + num4;
// document.write(charges + "<br>")

// // total cost of your order

// var totalCost = num1 + num2 + num3 + num4
// document.write("Total cost of your order is" +" "+ totalCost)

// Q# 8

// document.write("<h1>Mark Sheet</h1>")

// // total marks

// var totalMarks = 1000;
// document.write("Total marks:" + totalMarks + "<br>")
// var markObtained = 950;
// document.write("Mark obtained:" + markObtained + "<br>")
// // percentage

// var percentage = markObtained*100/totalMarks;
// document.write("percentage:" + percentage + "%")