function pushCharacter(character) {
    var input = document.querySelector("#display");
    input.value = input.value + character;
    console.log(character);
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
    [].forEach.call(buttons, function(button) {
        button.addEventListener("click", function() { pushCharacter(button.innerHTML); });
    });

    var equalbutton = document.querySelector(".button-equals");
    equalbutton.onclick = calculate;

    var clearbutton = document.querySelector(".clearbutton");
    clearbutton.onclick = clear;
}

$('#display').on('keypress', function(e){

    var code = (e.keyCode ? e.keyCode : e.which);
             if(code == 13) {
                 calculate()
             }
    });