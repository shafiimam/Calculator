let screen = document.getElementById('screen');
let screenValue = '';
buttons = document.querySelectorAll('button');
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('button is', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        } else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;

        } else if (buttonText == 'CE') {
            screenValue = screen.value.slice(0, -1);
            screen.value = screenValue;
        } else if (buttonText == '=') {
            screen.value = eval(screenValue);
        } else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}