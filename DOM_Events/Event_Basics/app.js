const btn = document.querySelector("#v2");

btn.onclick = function () {
    console.log("You clicked me!");
    console.log("I hope it worked now");
}

function scream() {
    console.log("AAAAAAAAA");
    console.log("Stop touching me!");
}

btn.onmouseenter = scream;

document.querySelector("h1").onclick = function () {
    alert("you clicked the h1");
}