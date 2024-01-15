document.addEventListener('DOMContentLoaded', function () {
    const appContainer = document.getElementById('app');

    document.addEventListener('keydown', function (event) {
        const keyName = event.key;
        const asciiValue = event.keyCode;

        
        appContainer.innerHTML = `
            <p>You pressed <span id="key-name">${keyName}</span></p>
            <p> <span id="ascii-value">${asciiValue}</span></p>
        `;
    });

    document.addEventListener('keyup', function () {
        
    });
});
