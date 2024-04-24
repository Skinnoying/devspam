document.addEventListener('click', () => {
    let msgBox = document.querySelectorAll("[contenteditable='true']")[1];
    let msg = msgBox.innerText;
    let count = 1;

    // Prompt untuk memasukkan pesan dan jumlah pesan
    let pesan = prompt('Input Message:');
    let jumlah = parseInt(prompt('Number of Message:'));

    if (pesan && !isNaN(jumlah)) {
        (async () => {
            while (count <= jumlah) {
                await new Promise((resolve) => {
                    msgBox.dispatchEvent(new InputEvent("beforeinput", {
                        inputType: "insertText",
                        data: pesan,
                        bubbles: true,
                        cancelable: true
                    }));
                    resolve();
                });
                msgBox.dispatchEvent(
                    new KeyboardEvent('keydown', {
                        key: "Enter",
                        code: "Enter",
                        which: 13,
                        keyCode: 13,
                        bubbles: true,
                        view: window
                    })
                )
                await new Promise(resolve => setTimeout(resolve, 10));
                count++;
            }
        })();
    }
});