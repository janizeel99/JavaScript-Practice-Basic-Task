let num = [1,2,3,4,5,6,7,8,9,10];

num.forEach((value)=>{
    console.log(value * value);
})
document.getElementById("p1").innerHTML = "Square of Numbers from 1 to 10 using forEach Loop : " + num.map((value) => value * value);