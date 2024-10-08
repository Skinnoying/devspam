document.addEventListener('click', async () => {
    let msgBox = document.querySelectorAll("[contenteditable='true']")[1];
    let count = 1;

    // Prompt for Message
    let pesan = prompt('Input Message:');
    let jumlah = parseInt(prompt('Number of Messages:'));

    if (pesan && !isNaN(jumlah)) {
        while (count <= jumlah) {
            // Focus on the message box
            msgBox.focus();

            // Insert the message into the msgBox
            msgBox.innerText = pesan;

            // Trigger the input event
            msgBox.dispatchEvent(new InputEvent("input", {
                inputType: "insertText",
                data: pesan,
                bubbles: true,
                cancelable: true
            }));

            // Simulate pressing 'Enter'
            msgBox.dispatchEvent(new KeyboardEvent('keydown', {
                key: "Enter",
                code: "Enter",
                which: 13,
                keyCode: 13,
                bubbles: true
            }));

            // Blur the message box to simulate the send action
            msgBox.blur();

            // Wait for a longer interval to ensure the message is sent
            await new Promise(resolve => setTimeout(resolve, 1000));

            count++;
        }
    }
});
