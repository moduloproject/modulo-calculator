function pushCharacter(character) {
    var input = document.querySelector("#display");
    input.value = input.value + character;
};
function calculate() {
    var input = document.querySelector("#display");
    input.value = eval(input.value).toString();
};
function clear() {
    var input = document.querySelector("#display");
    input.value = "";
};

window.onload = function() {
    var buttons = document.querySelectorAll(".button");
    var button;
    for (var i = 0; i < buttons.length; i++) {
        button = buttons[i];
        button.onclick = function() { pushCharacter(button.innerHTML); }
    };

    var equalbutton = document.querySelector(".button-equals");
    equalbutton.onclick = calculate;

    var clearbutton = document.querySelector(".clearbutton");
    clearbutton.onclick = clear;
}
