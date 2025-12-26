//practice set up a button using DOM manipulation
let newbtn = document.createElement("button");
newbtn.innerText = "Click Me!";

newbtn.style.color = "white";
newbtn.style.backgroundColor = "blue";


document.querySelector("body").prepend(newbtn);


//practice set give another class through css file without removing the previous class
let para = document.querySelector("p");
console.log(para);

para.classList.add("newclass");