let noButtonClickCount = 0;
let messageDisplayed = false;
const initGif = document.getElementById('initGif');
const bearGif = document.getElementById('bearGif');
const buttons = document.querySelector('.buttons');

function reply(response) {
    if (response === 'Yes') {
        const messageContainer = document.getElementById('retryMessage');
        messageContainer.innerHTML = "<p style='font-size: 28px;'>That's great! Looking forward to Valentine's Day</p>";
        const newMessage = document.createElement('div');
        newMessage.textContent = "(pls screenshot and send to partner)";
        retryMessage.appendChild(newMessage);
        messageContainer.style.display = 'block';
        initGif.style.display = 'none'; // Hide initial GIF
        bearGif.style.display = 'block'; // Show new GIF
        buttons.style.display = 'none'; // Hide buttons

    } else {
        noButtonClickCount++;

        if (noButtonClickCount === 3 && !messageDisplayed) {
            document.getElementById('retryMessage').textContent = "I see you're trying to select a different option. Let me just move out of your way";
            messageDisplayed = true;
        } else if (noButtonClickCount === 7) {
            document.getElementById('retryMessage').textContent = "I know you're sick, have an exam the day AND have a marketing report due but I am too far in to stop now...";
            messageDisplayed = true;
        } else if (!messageDisplayed) {
            document.getElementById('retryMessage').textContent = "My bad, I misread your input. Do you want to try again?";
        }

        document.getElementById('retryMessage').style.display = 'block';
        document.querySelector('.buttons').style.flexDirection = 'column';
        document.querySelector('.button:nth-child(2)').style.transform = `scale(${1 - 0.1 * noButtonClickCount})`;
        document.querySelector('.button:first-child').style.transform = `scale(${1 + 0.1 * noButtonClickCount})`;
        document.getElementById('bearGif').style.display = 'none'; // Hide the GIF

        if (noButtonClickCount >= 3) {
            // Move the No button to a new random position on the screen
            const noButton = document.querySelector('.button:nth-child(2)');
            noButton.style.position = 'absolute';
            const randomX = Math.floor(Math.random() * (window.innerWidth - noButton.offsetWidth));
            const randomY = Math.floor(Math.random() * (window.innerHeight - noButton.offsetHeight));
            noButton.style.left = randomX + 'px';
            noButton.style.top = randomY + 'px';
        }
    }
}
