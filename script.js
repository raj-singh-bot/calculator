let button = document.getElementById('textview');
let value = button.value;


function keyPressed(key){
    let result = eval(key);
    console.log(result);
}
button.addEventListener('keydown', function(e) {
    //e.preventDefault();
    let value = e.key;
    let validInput = /^\d|\.|\+|\-|\*|\/|Backspace|Enter/;

    if (validInput == value) {
        keyPressed(value);
      }
});

