


const d = new Date();
//const time = d.getHours();


const time = d.getHours() % 12 || 12;



var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];

//const dates = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];

var currentday = document.getElementById("currentDay");



let day = weekday[d.getDay()];


let date = d.getDate();

const months = monthNames[d.getMonth()];

currentday.innerHTML = day + "," + months + " " + date;

var rowlist = document.querySelectorAll(".row");


var rowlistarr = Array.from(rowlist);

var index = 0;


function timeblock() {

  for (index = 0; index < rowlistarr.length; index++) {
    console.log("time", time);
    console.log(rowlistarr.length);



    if (time == rowlistarr.length) {
      //document.getElementById(`textarea${index + 9}`).style.backgroundColor = 'red';
    
      document.getElementById(`${index + 9}`).style.backgroundColor = 'red';
    }

    else if (time < rowlistarr.length) {
     // document.getElementById(`textarea${index + 9}`).style.backgroundColor = 'green';
     document.getElementById(`${index + 9}`).style.backgroundColor = 'green';
    }
  

    else 
     {
      //document.getElementById(`textarea${index + 9}`).style.backgroundColor = 'gray';
      document.getElementById(`${index + 9} `).style.backgroundColor = 'grey';
    
    }

  }
}
timeblock();



var sbtn = document.getElementById('sbtn');


sbtn.addEventListener('click', save);

function save() {

  var storedvalue = localStorage.getItem('textarea9');
  var textarea9 = document.getElementById('textarea9').value;

  if (storedvalue) {
    storedvalue.push(textarea9);
  }
  else {
    storedvalue = [textarea9];
  }
  localStorage.setItem('text', JSON.stringify(storedvalue));
}

function get() {
  var storedvalue = localStorage.getItem('text');
  if (storedvalue) {
    document.getElementById('textarea9').value = storedvalue;
  }
  localStorage.getItem('text', JSON.parse(storedvalue));
}

get();

var sbtn1 = document.getElementById('sbtn1');

sbtn1.addEventListener('click', save1);

function save1() {

  var storedvalue1 = localStorage.getItem('textarea10');
  var textarea10 = document.getElementById('textarea10').value;

  if (storedvalue1) {
    storedvalue1.push(textarea10);
  }
  else {
    storedvalue1 = [textarea10];
  }
  localStorage.setItem('text', JSON.stringify(storedvalue1));
}

function get1() {
  var storedvalue1 = localStorage.getItem('text');
  if (storedvalue1) {
    document.getElementById('textarea10').value = storedvalue1;
  }
  localStorage.getItem('text', JSON.parse(storedvalue1));
}

get1();
