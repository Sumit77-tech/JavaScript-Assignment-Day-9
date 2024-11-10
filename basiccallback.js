function displayMessage(name) {
    console.log(`Hello, ${name}!`); 
}

function greetUseInput(callback) {
    setTimeout(() => {
        const username = "Alice";
        callback(username);
    }, 1000);
}

greetUseInput(displayMessage);
