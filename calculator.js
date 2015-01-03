var pushCharacter = function(character) {}

var calculate = function() {}

var buttons = document.querySelectorAll(".button");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = pushCharacter(buttons[i].innerHTML);
}