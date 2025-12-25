//Program to print even and odd numbers from 1 to 100 using for loop
for(i = 1; i<=100; i++){
    if(i%2===0){
     document.getElementById("p1").innerHTML += "For Loop Number: " + i + "<br>";
 }
//  else if(i%2 !=0){
//      document.getElementById("p1").innerHTML += "For Loop Number: " + i + "<br>";
//  }
}



//game question for user guess a number between 1 to 10
//Practice QUESTIONS - 2
let gameNum = 2;
let userNum = prompt("Guess A Number Between 1 to 10");
console.log("User Enter A Number : "+ userNum);


while(userNum != gameNum){
   userNum = prompt("Wrong Number! Please Guess Again");
}
console.log("User Enter Correct Number : "+ userNum + " Congratulations You Guessed It Right!"); 
