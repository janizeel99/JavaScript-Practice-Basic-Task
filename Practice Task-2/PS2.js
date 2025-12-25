let input = prompt("Enter a number:");
let number = input;

if (number % 5 === 0) {
    document.getElementById("pq").innerHTML = number + " is Multiple of 5.";
}
else{
    document.getElementById("pq").innerHTML = number + " is not Multiple of 5.";
}