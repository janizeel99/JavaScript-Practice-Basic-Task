//Practice Question in JS
//Calculate Avg Marks of Studnets Given in Array Form


let marks = [92,76,85,94,56,62,46,89,67,73];

let sum = 0; 

for(let i of marks){
    sum += i
    document.getElementById("p1").innerHTML = "Total Sum Of Marks : " + sum;
}


let avg = sum/marks.length
document.getElementById("p2").innerHTML = "Total Avg Marks of 10 Students : " + avg




//Store items in Array and give 10% off and print final amount by given array....
let items = [230,800,456,3267,78546];
let i = 0;

document.getElementById("p3").innerHTML = "Value Before Discount is : " + items
for(let val of items){
    console.log(`Value At index is ${i} = ${val}`);
    let offer = val/10
    items[i] = items[i] - offer
    console.log(`Value After Offer is = ${items[i]}`);
    i++
}

document.getElementById("p4").innerHTML = "Value After Discount 10% off Price is : " + items