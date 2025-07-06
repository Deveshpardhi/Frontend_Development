const max=prompt("Enter  max number");
const random=Math.floor(Math.random()*max) +1;
let guess=prompt("Guess a number");


while(true){
    if(guess=="Quit"){
        console.log("You quit");
        break;
    }   
    if(guess==random){
        console.log("You are rigth! Random no was ",random);
        break;
    }else if(guess< random){
        guess=prompt("Your guess was samaller than number.");
    }else{
        guess=prompt("Your guess was larger than number.");
    }
}