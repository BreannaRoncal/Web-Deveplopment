var elm_greeting = document.getElementById("greeting");
var elm_name = document.getElementById("name");

function updateSign() {
  var greeting_input = document.getElementById("get_greeting").value;
  var name_input = document.getElementById("get_name").value;

  elm_greeting.textContent = greeting_input;

  elm_name.textContent = name_input + "!";
}

var current_time = new Date().toLocaleTimeString();
var current_date = new Date().toLocaleDateString();

var time_out = document.getElementById("time");
var date_out = document.getElementById("date");

time_out.textContent = current_time;
date_out.textContent = current_date;
