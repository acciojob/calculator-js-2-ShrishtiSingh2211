//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('button');
    let currentInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const id = button.id;

            if (id === 'C') {
                currentInput = '';
                display.value = '';
            } else if (id === 'back') {
                currentInput = currentInput.slice(0, -1);
                display.value = currentInput;
            } else if (id === 'equal') {
                try {
                    currentInput = eval(currentInput).toString();
                    display.value = currentInput;
                } catch {
                    display.value = 'Error';
                }
            } else {
                const value = button.textContent;
                currentInput += value;
                display.value = currentInput;
            }
        });
    });
});
