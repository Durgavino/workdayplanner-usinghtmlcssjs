

//display the date 
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


//adding color to the textarea*-->

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
  

    else (time > rowlistarr.length)
     {
      //document.getElementById(`textarea${index + 9}`).style.backgroundColor = 'gray';
      document.getElementById(`${index + 9}`).style.backgroundColor = 'grey';
    
    }

  }
}
timeblock();


//Local storage--*>
var sbtn0 = document.getElementById('sbtn0');


sbtn0.addEventListener('click', save);

function save() {

  var storedvalue = localStorage.getItem('textarea9');
  var textarea9 = document.getElementById('textarea9').value;

  if (storedvalue) {
    storedvalue.push(textarea9);
  }
  else {
    storedvalue = [textarea9];
  }
  localStorage.setItem('textarea9', JSON.stringify(storedvalue));
}

function get() {
  var storedvalue = localStorage.getItem('textarea9');
  if (storedvalue) {
    document.getElementById('textarea9').value = storedvalue;
  }
  localStorage.getItem('textarea9', JSON.parse(storedvalue));

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
  localStorage.setItem('textarea10', JSON.stringify(storedvalue1));
}

function get1() {
  var storedvalue1 = localStorage.getItem('textarea10');
  if (storedvalue1) {
    document.getElementById('textarea10').value = storedvalue1;
  }
  localStorage.getItem('textarea10', JSON.parse(storedvalue1));
}

get1();


var sbtn2 = document.getElementById('sbtn2');

sbtn2.addEventListener('click', save2);

function save2() {

  var storedvalue2 = localStorage.getItem('textarea11');
  var textarea11 = document.getElementById('textarea11').value;

  if (storedvalue2) {
    storedvalue2.push(textarea11);
  }
  else {
    storedvalue2 = [textarea11];
  }
  localStorage.setItem('textarea11', JSON.stringify(storedvalue2));
}

function get2() {
  var storedvalue2 = localStorage.getItem('textarea11');
  if (storedvalue2) {
    document.getElementById('textarea11').value = storedvalue2;
  }
  localStorage.getItem('textarea11', JSON.parse(storedvalue2));
}

get2();


var sbtn3 = document.getElementById('sbtn3');

sbtn3.addEventListener('click', save3);

function save3() {

  var storedvalue3 = localStorage.getItem('textarea12');
  var textarea12 = document.getElementById('textarea12').value;

  if (storedvalue3) {
    storedvalue3.push(textarea12);
  }
  else {
    storedvalue3 = [textarea12];
  }
  localStorage.setItem('textarea12', JSON.stringify(storedvalue3));
}

function get3() {
  var storedvalue3 = localStorage.getItem('textarea12');
  if (storedvalue3) {
    document.getElementById('textarea12').value = storedvalue3;
  }
  localStorage.getItem('textarea12', JSON.parse(storedvalue3));
}

get3();



var sbtn4 = document.getElementById('sbtn4');

sbtn4.addEventListener('click', save4);

function save4() {

  var storedvalue3 = localStorage.getItem('textarea1');
  var textarea1 = document.getElementById('textarea1').value;

  if (storedvalue3) {
    storedvalue3.push(textarea1);
  }
  else {
    storedvalue3 = [textarea1];
  }
  localStorage.setItem('textarea1', JSON.stringify(storedvalue3));
}

function get4() {
  var storedvalue3 = localStorage.getItem('textarea1');
  if (storedvalue3) {
    document.getElementById('textarea1').value = storedvalue3;
  }
  localStorage.getItem('textarea1', JSON.parse(storedvalue3));
}

get4();



var sbtn5 = document.getElementById('sbtn5');

sbtn5.addEventListener('click', save5);

function save5() {

  var storedvalue4 = localStorage.getItem('textarea2');
  var textarea2 = document.getElementById('textarea2').value;

  if (storedvalue4) {
    storedvalue4.push(textarea2);
  }
  else {
    storedvalue4 = [textarea2];
  }
  localStorage.setItem('textarea2', JSON.stringify(storedvalue4));
}

function get5() {
  var storedvalue4 = localStorage.getItem('textarea2');
  if (storedvalue4) {
    document.getElementById('textarea2').value = storedvalue4;
  }
  localStorage.getItem('textarea2', JSON.parse(storedvalue4));
}

get5();



var sbtn6 = document.getElementById('sbtn6');

sbtn6.addEventListener('click', save6);

function save6() {

  var storedvalue5 = localStorage.getItem('textarea3');
  var textarea3 = document.getElementById('textarea3').value;

  if (storedvalue5) {
    storedvalue5.push(textarea3);
  }
  else {
    storedvalue5 = [textarea3];
  }
  localStorage.setItem('textarea3', JSON.stringify(storedvalue5));
}

function get6() {
  var storedvalue5 = localStorage.getItem('textarea3');
  if (storedvalue5) {
    document.getElementById('textarea3').value = storedvalue5;
  }
  localStorage.getItem('textarea3', JSON.parse(storedvalue5));
}

get6();



var sbtn7 = document.getElementById('sbtn7');

sbtn7.addEventListener('click', save7);

function save7() {

  var storedvalue6 = localStorage.getItem('textarea4');
  var textarea4 = document.getElementById('textarea4').value;

  if (storedvalue6) {
    storedvalue6.push(textarea4);
  }
  else {
    storedvalue6 = [textarea4];
  }
  localStorage.setItem('textarea4', JSON.stringify(storedvalue6));
}

function get7() {
  var storedvalue6 = localStorage.getItem('textarea4');
  if (storedvalue6) {
    document.getElementById('textarea4').value = storedvalue6;
  }
  localStorage.getItem('textarea4', JSON.parse(storedvalue6));
}

get7();




var sbtn8 = document.getElementById('sbtn8');

sbtn8.addEventListener('click', save8);

function save8() {

  var storedvalue7 = localStorage.getItem('textarea5');
  var textarea5 = document.getElementById('textarea5').value;

  if (storedvalue7) {
    storedvalue7.push(textarea5);
  }
  else {
    storedvalue7 = [textarea5];
  }
  localStorage.setItem('textarea5', JSON.stringify(storedvalue7));
}

function get8() {
  var storedvalue7 = localStorage.getItem('textarea5');
  if (storedvalue7) {
    document.getElementById('textarea5').value = storedvalue7;
  }
  localStorage.getItem('textarea5', JSON.parse(storedvalue7));
}

get8();


