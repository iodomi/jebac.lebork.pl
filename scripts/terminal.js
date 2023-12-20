const output = document.getElementById('output');
const input = document.getElementById('input');

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        handleCommand();
        event.preventDefault();
    }
});

document.addEventListener('input', function() {
    handleInput();
});

document.addEventListener('click', function() {
    input.focus();
});

function handleCommand() {
    const command = input.value.trim().toLowerCase();
    input.value = '';

    switch (command) {
        case 'hello':
            hello();
            break;

        case 'help':
            help();
            break;

        default:
            const result = `\nbash: ${command}: command not found\n`;
            displayResult(result);
            break;
    }
}

function help() {
    const helpMessage = `
These shell commands are defined internally. Type 'help' to see this list.

help 
hello
    `;
    displayResult(helpMessage);
}

function hello() {
    const hello = `
Hello world
    `;
    displayResult(hello);
}

function displayResult(message) {
    output.textContent += message;
    output.scrollTop = output.scrollHeight;
}

function handleInput() {
    const inputValue = input.value;
    output.textContent = `jebac@lebork:~$ ${inputValue}`;
}
