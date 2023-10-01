
let userChoice = prompt("Heads or Tails");
if (userChoice == "Heads"){
         userChoice == 0}
    else if(userChoice == "Tails"){
    userChoice == 1
    }


let randomNumber = Math.random();
if (randomNumber < 0.5)
    randomNumber = 0;

else
    randomNumber = 1;

    let computerChoice;
if (randomNumber == 0)
    computerChoice = "Heads";
else if (randomNumber == 1)
    computerChoice = "Tails";

    if (computerChoice == userChoice) {
        alert("You guessed right! The coin flip landed on "+ computerChoice)
    }else {
        alert("Sorry, the coin fiip landed on "+ computerChoice)}


        let birthYear = prompt("Enter your birthyear.");
    if((2023-birthYear)>21){
        alert("You are old enough to drink in the US")
    } else if((2023-birthYear)==21){
        alert("You are old enough to drink in the US..barely")
    } else {
        alert("Sorry, you are not old enough to drink in the US")
    }