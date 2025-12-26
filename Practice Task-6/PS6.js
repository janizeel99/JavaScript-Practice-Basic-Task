function countVowels(str){
    let Vowels = 0
    for(const char of str){
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u" ||
           char === "A" || char === "E" || char === "I" || char === "O" || char === "U"){
            Vowels += 1
        }

    }
    console.log("Number of Vowels in the String is: " + Vowels)
    document.getElementById("p1").innerHTML = "Number of Vowels in the Given String : " + Vowels
}
