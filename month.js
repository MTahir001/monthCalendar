//--------------------------Taking mm/yyyy from user------------------------
let mothYear = prompt("enter mm/yyyy : ");
const split = mothYear.split("/");
console.log(`moth : ${split[0]} and year : ${split[1]}`);

//--------------------------validate input from user----------------------
function checkDateFormat(split) {
  if (split[0] > 12) {
    alert("Please give valid Moth");
  }
}
checkDateFormat(split);

//-------------------------- get 1st date of that month-----------------
const firstDate = `${split[0]}/01/${split[1]}`;
console.log(firstDate);

//-------------------------- day on 1st date-----------------------------
const d = new Date(firstDate);
const today = d.getDay();
// console.log(d.getMonth())

//-------------------------- no of days in that month-----------------
var getDaysInMonth = function (month, year) {
  // Here January is 1 based
  //Day 0 is the last day in the previous month
  return new Date(year, month, 0).getDate();
  // Here January is 0 based
  // return new Date(year, month+1, 0).getDate();
};
const limit = getDaysInMonth(split[0], split[1]);

//-------------------------- accessing DOM TDs---------------

const alltd = document.getElementsByTagName("td");

let i = 1;
for (let k = 1; k <= 100; k++) {
  if (k >= today) {
    alltd[k].innerHTML = i;
    i = i + 1;

    if (limit < i) {
      break;
    }
  }
}
