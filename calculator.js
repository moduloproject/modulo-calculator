var input = /* Use document.querySelector("element") to target the input */;
var pushCharacter = function(character) {
    /* This will push the character to the input.value */
    input.value = input.value + /* Guess what */;
}

var calculate = function() {
    /* Set input.value to eval(input.value).toString() */
}

var buttons = document.querySelectorAll(".button");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = pushCharacter(buttons[i].innerHTML);
}
