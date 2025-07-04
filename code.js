let userName;
let userAge;
let userMoney;
let MINAGE = 18;
let MAXAGE = 100;
let cars = ["BMW", "Camry", "Civic"]
let seats = ["2","4","5"];
let choice = prompt("Pick how much seats you want in your car");
function start()
 {
    userName = prompt("Welcome to Rob's rentals. Can I know your name ?")
    if ( !isNaN(userName) || userName == null || userName == "" || userName == " " ){
    userName = prompt("Invalid! You must enter a name")
    // check if user has clicked cancel
 if (userName == null){
   // end the program
   return;
 }
 }
   userAge = prompt("Nice name " + userName + ", Can I know your age to proceed ?")
    if (userAge == null || userAge == "" || userAge == " " || isNaN(userAge) || userAge < MINAGE || userAge > MAXAGE){
    userAge = prompt("Invalid! You must enter you age between " + MINAGE + " and " + MAXAGE)
     // check if user has clicked cancel
 if (userAge == null){
   // end the program
   return;
 }
}
 alert("Okay " + userName + " let's start your process")
 alert("Choose the car you want according to your seats. We have 3 options of seats, 2 seats, 4 seats, 5 seats")
  
 

 }
