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

const btn3 = document.querySelector("#v3");
btn3.addEventListener("mousedown", function () {
    alert("Clicked")
})


function twist() {
    console.log("TWIST!")
}
function shout() {
    console.log("SHOUT!")
}

const tasButton = document.querySelector("#tas");

// tasButton.onclick = twist;
// tasButton.onclick = shout; 

tasButton.addEventListener("click", () => { console.log("Shout") }, { once: true })
tasButton.addEventListener("click", shout)