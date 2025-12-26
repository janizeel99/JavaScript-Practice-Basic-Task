//take n numbers of input and store that numbers of array in empty array..
let n = prompt("Enter A Number : ");

let arr = [];

for(let i=1;i<=n;i++){
    arr[i-1] = i;
}
console.log(arr);


//ex-1
let sum = arr.reduce((res,cur)=>res+cur);
console.log("Array of Numbers Sum = ",sum);

//ex-2
let factorial = arr.reduce((res,cur)=>res*cur);
console.log("Array of Numbers Factorial = ",factorial);

