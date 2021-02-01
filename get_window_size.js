//get window's height and width
var w_height = window.innerHeight;
var w_width = window.innerWidth;

//get window's history
var w_history = window.history.length;

//get screen's height and width
var s_height = window.screen.height;
var s_width = window.screen.width;

//change the content to new values
var elm_w_h = document.getElementById("window_height");
var elm_w_w = document.getElementById("window_width");
var elm_w_history = document.getElementById("items");
var elm_s_h = document.getElementById("screen_height");
var elm_s_w = document.getElementById("screen_width");

elm_w_h.textContent += " " + w_height;
elm_w_w.textContent += " " + w_width;

elm_w_history.textContent += " " + w_history;

elm_s_h.textContent += " " + s_height;
elm_s_w.textContent += " " + s_width;
