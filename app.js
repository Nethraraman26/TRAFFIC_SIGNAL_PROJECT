var redLight = document.getElementById("RED");
var yellowLight = document.getElementById("YELLOW");
var greenLight = document.getElementById("GREEN");

function red_light() {
    reset();
    redLight.classList.add("RED");

}

function yellow_light() {
    reset();
    yellowLight.classList.add("YELLOW");
}

function green_light() {
    reset();
    greenLight.classList.add("GREEN");
}
function reset() {
    redLight.classList.remove("RED");
    yellowLight.classList.remove("YELLOW");
    greenLight.classList.remove("GREEN");
}