const btn = document.querySelector("#changeColour");
const h1 = document.querySelector("h1");

// const changeColour = rgb(233, 122, 133);

btn.addEventListener("click", () => {
    document.body.style.backgroundColor = changeColour();
    h1.innerText = changeColour();
});



function changeColour() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;

}