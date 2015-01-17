var input = document.querySelector("input")/* Use document.querySelector("element's css selector") to target the input */;

var pushCharacter = function(character) {
    /* This will push the character to the input.value */
    input.value = input.value + character/* Guess what */;
};

var buttons = document.querySelectorAll(".button");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() { pushCharacter(buttons[i].innerHTML); }
};

var calculate = function() {
    /* Set input.value to eval(input.value).toString() */
    input.value = eval(input.value).toString();
};

var equalbutton = document.querySelector(".button-equals");/* Same for input, but instead with .button-equals */

equalbutton.onclick = calculate;

var clear = function() {
    /* Set the input.value to an empty string */
    input.value = "";
};

var clearbutton = document.querySelector(".clearbutton");
clearbutton.onclick = clear;
