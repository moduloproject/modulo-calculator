window.onload = function() {
    var input = document.querySelector("#display");

    var pushCharacter = function(character) {
        /* This will push the character to the input.value */
        input.value = input.value + character;
    };
    var buttons = document.querySelectorAll(".button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function() { pushCharacter(buttons[i].innerHTML); }
    };

    var calculate = function() {
        input.value = eval(input.value).toString();
    };
    var equalbutton = document.querySelector(".button-equals");
    equalbutton.onclick = calculate;

    var clear = function() {
        input.value = "";
    };
    var clearbutton = document.querySelector(".clearbutton");
    clearbutton.onclick = clear;
};
