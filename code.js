let userName;
let userAge;
let userMoney;
let MINAGE = 1;
let MAXAGE = 100;
function start()
 {
    userName = prompt("Oh hi, Maybe I forgot you.. What was your name again ?")
    if ( !isNaN(userName) || userName == null || userName == "" || userName == " " ){
    userName = prompt("Invalid! You must enter a name")
    // check if user has clicked cancel
 if (userName == null){
   // end the program
   return;
 }
 }
   userAge = prompt("Nice name " + userName + ", how old are you ?")
    if (userAge == null || userAge == "" || userAge == " " || isNaN(userAge) || userAge < MINAGE || userAge > MAXAGE){
    userAge = prompt("Invalid! You must enter you age between " + MINAGE + " and " + MAXAGE)
     // check if user has clicked cancel
 if (userAge == null){
   // end the program
   return;
 }
}
 userMoney = prompt("Oh you're " + userAge + ", how much pocket money do you get ?")
    if (userMoney == null || userMoney == "" || userMoney == " " || isNaN(userMoney) ){
        userMoney = prompt("Invalid! You must enter how much money do you have" + userName)
         // check if user has clicked cancel
        if (userMoney == null){
   // end the program
   return;
        }
        }
           alert("So, you're "+ userName + ", and you're "+ userAge + " years old and you get " + userMoney + " dollars as pocket money. Nice")
      }
