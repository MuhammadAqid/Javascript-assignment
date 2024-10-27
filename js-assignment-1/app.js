//chapter 1

alert("welcome to our website")
alert("welcome to js land...\nHappy Coding!")
alert("Welcome to js land...")
alert("Happy coding!\n Prevent this page from creating additional dialogs")

console.log("this message is displayed in the developer console.");


//chapter 2

var message = "hello world"
alert(message)

//student bio data

var studentName = "John Doe";
var studentAge = 20;
var studentGrade = "A";
var studentMajor = "Computer Science";
alert("Name: " + studentName);
alert("Age: " + studentAge);
alert("Grade: " + studentGrade);
alert("subject: " + studentMajor);

// variable of email

var email = "example@example.com "
alert("My email address is" + email)

// variable of book

var book = "A smarter to learn JavaScript"
alert("I am trying to learn from book" + book)


//   script to display  message in browser through JS

var message = "Hello, this is your message displayed on the web page!"

var messageElement = document.getElementById("message")

messageElement.innerText = message;


// displaying special symbols in alert box

var symbols = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”"
alert(symbols)


// visitCounter

document.addEventListener('DOMContentLoaded', function () {
    // Get the visit count from local storage
    let visitCount = localStorage.getItem('visitCount');

    // If there's no visit count, initialize it
    if (visitCount === null) {
        visitCount = 0;
    } else {
        // Parse the visit count to an integer
        visitCount = parseInt(visitCount, 10);
    }

    // Increment the visit count
    visitCount += 1;

    // Store the updated visit count back to local storage
    localStorage.setItem('visitCount', visitCount);

    // Display the visit count to the user
    document.getElementById('visitCounter').textContent = `You have visited this site ${visitCount} times.`;
});



document.addEventListener('DOMContentLoaded', function () {
    // Declare and assign the birth year variable
    const birthYear = 2007;

    // Display the message in the browser
    document.getElementById('message1').textContent = `my birth year is ${birthYear}.`;
});



document.addEventListener('DOMContentLoaded', function () {

    // store visitor name , productTittle , quantity
    var visitorName = "john doe"
    var productTittle = "T-shirt"
    var quantity = 5

    // display message in browser
    var message = `${visitorName} Orderd ${quantity} ${productTittle}(s) on XYZ Clothing Store`
    document.getElementById('orderMessage').textContent = message;
})









