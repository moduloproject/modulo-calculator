window.onload = function() {
    pushCharacter = function(character) {
        var input = document.querySelector("#display");
        input.value = input.value + character;
    };

    var buttons = document.querySelectorAll(".button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function() { pushCharacter(buttons[i].innerHTML); }
    };

    calculate = function() {
        var input = document.querySelector("#display");
        input.value = eval(input.value).toString();
    };
    var equalbutton = document.querySelector(".button-equals");
    equalbutton.onclick = calculate;

    clear = function() {
        var input = document.querySelector("#display");
        input.value = "";
    };
    var clearbutton = document.querySelector(".clearbutton");
    clearbutton.onclick = clear;
};
