


const d = new Date();
let time = d.getHours();



var rowlist = document.querySelectorAll(".row");


var rowlistarr = Array.from(rowlist);

var index = 0;



function timeblock() {
  for (index = 0; index < rowlistarr.length; index++) {
    console.log(rowlistarr);
    if (time == rowlistarr.length) {
      document.querySelector(`#${i+9} .description`).setAttribute("style" ,"color:red");

    }
    else if (time < rowlistarr.length) {
     
      document.querySelector(`#${i+9} .description`).setAttribute("style" ,"color:green");

    }
    else if (time > rowlistarr.length) {
      document.querySelector(`#${i+9} .description`).setAttribute("style" ,"color:yellow");

    }

  }
}

timeblock();


var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];

const dates = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];

var currentday = document.getElementById("currentDay");



let day = weekday[d.getDay()];
let date = dates[d.getDate()];

const months = monthNames[d.getMonth()];

currentday.innerHTML = day + "," + months + " " + date; 