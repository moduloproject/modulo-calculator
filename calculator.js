var input = /* Use document.querySelector("element's css selector") to target the input */;
var pushCharacter = function(character) {
    /* This will push the character to the input.value */
    input.value = input.value + /* Guess what */;
}
var buttons = document.querySelectorAll(".button");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = pushCharacter(buttons[i].innerHTML);
}

var calculate = function() {
    /* Set input.value to eval(input.value).toString() */
}
var equalbutton = /* Same for input, but instead with .button-equals */;
equalbutton.onclick = calculate();

/* Bonus exercise ! Add a clear button */
var clear = function() {
    /* Set the input.value to an empty string */
}
var clearbutton = /* Note that's there's no clear button in the html, and you have to add it yourself
                   * And reference it in the variable using document.querySelector("element's css selector") */
clearbutton.onclick = /* Guess :D */
