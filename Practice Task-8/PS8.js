
let marks = [92,78,65,91,95,67,34,56];

let newmarks = marks.filter((val)=>{
   return  val > 90;
})
console.log("List Of Students That Scored 90+ in Exam ",newmarks);
