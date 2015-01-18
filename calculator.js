function window.onload() {
    function pushCharacter(character) {
        var input = document.querySelector("#display");
        input.value = input.value + character;
    };

    var buttons = document.querySelectorAll(".button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function() { pushCharacter(buttons[i].innerHTML); }
    };

    function calculate() {
        var input = document.querySelector("#display");
        input.value = eval(input.value).toString();
    };
    var equalbutton = document.querySelector(".button-equals");
    equalbutton.onclick = calculate;

    function clear() {
        var input = document.querySelector("#display");
        input.value = "";
    };
    var clearbutton = document.querySelector(".clearbutton");
    clearbutton.onclick = clear;
};
