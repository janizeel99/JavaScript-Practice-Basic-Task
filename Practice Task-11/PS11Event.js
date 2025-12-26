let mode = document.querySelector('#mode');


let modebtn = "light";

//let bodyhtml = document.querySelector("body");

mode.addEventListener("click",() => {
    if(modebtn === "light"){
        modebtn = "dark";
        document.querySelector("body").style.backgroundColor = "black";
        //or
        //document.querySelector("body").classList.add("dark");
        //or
        //bodyhtml.classList.add("dark")
        //bodyhtml.classList.remove("light")
    }
    else{
        modebtn = "light";
        document.querySelector("body").style.backgroundColor = "white";
        //or
        //document.querySelector("body").classList.add("light");
        //or
        //bodyhtml.classList.add("light")
    }
    console.log(modebtn);
});