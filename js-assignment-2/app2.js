let first = Number(prompt())
let second = Number(prompt())

if (second >= first) {
    console.log("ture");
}
else {
    lo("false")
}

alert("check the variable that is positive, negative or zero")

let input = Number(prompt("check the variable that is positive, negative or zero"))

let number1 = 1
let number2 = 0
let number3 = -1

if (input >= number1) {
    alert("the value is positive")
}
else if (input = number2) {
    alert("the number is zero")
}
else {
    alert("number is negative")
}

alert("check the value is vowel or not")

let vowel = prompt()

let values = ["a", "e", "i", "o", "u"]

if (vowel = values[0] || values[1] || values[2] || values[3] || values[4]) {
    alert("the value given is vowel")
}
else{
    alert("the value given is not a vowel")
}



alert("login your likedin here")

alert("atention! your password is '12345' \n please enter correct password to login")


let password1 = "12345";

let EnterPassword1 = prompt();


if(EnterPassword1 = password1){
    window.location.href = "https://www.linkedin.com/in/hadi-khalid-270213313/?trk=opento_sprofile_details"
}
else{
    alert("password is not correct try again")
}

//chapter 13
let promt = Number(prompt())

if(promt >= 0 && promt < 6){
    alert("good morning")
}else if(promt > 6 && promt < 12){
    alert("good afternoon")
}
else if(promt > 12 && promt < 17){
    alert("good evening")
}
else{
    alert("good night")
}