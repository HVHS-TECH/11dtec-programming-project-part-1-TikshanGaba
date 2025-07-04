let userName;
let userAge;
let userMoney;
let MINAGE = 18;
let MAXAGE = 100;
let cars = ["Camry","BMW","Focus","F-150"];
function start()
 {
    userName = prompt("Welcome to QuickRide rentals. Can I know your name ?")
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
alert("There are 4 cars you can rent : " + cars)
 }