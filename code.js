let userName;
let userAge;
let userMoney;
let MINAGE = 18;
let MAXAGE = 100;
let cars = ["2 seats","4 seats","5 seats"];
let choice = prompt("Pick a number from 0 to 4 to identify yourself");
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
 alert("Okay " + username + " let's start your process")
 alert("Choose the car you want according to your seats. We have 3 avalaible cars. Those are :- Toyota Camry, Honda Civic, BMW 3 series.")
 

      }
