
/* OPEN THE BIRTHDAY LETTER */
function openSurprise() {
    const letter = document.getElementById("birthday-letter");

    if (letter) {
        letter.hidden = false;
    }
}

/* CELEBRATE THE BIRTHDAY */
function celebrateBirthday() {
    const message = document.getElementById("celebration-message");

    if (message) {
        message.innerHTML =
            "🎉🎂 Happy Birthday 🎂🎉<br>" +
            "💗 Keep smiling and enjoy your special day! 💗";
    }
}

/* TRACK WHICH GIFTS HAVE BEEN OPENED */
const openedGifts = new Set();

/* OPEN A GIFT */
function openGift(number) {
    const messageId = number === 1 ? "message-one" : "message-two";
    const buttonId = number === 1 ? "gift-one" : "gift-two";

    const message = document.getElementById(messageId);
    const button = document.getElementById(buttonId);

    if (!message || !button) {
        return;
    }

    if (!openedGifts.has(number)) {
        message.hidden = false;
        button.setAttribute("aria-expanded", "true");
        openedGifts.add(number);
    }

    /* UPDATE GIFT PROGRESS */
    const progress = document.getElementById("gift-progress");

    if (progress) {
        progress.textContent =
            `You have opened ${openedGifts.size} of 2 gifts.`;
    }

    /* SHOW THE NEXT LINK AFTER BOTH GIFTS ARE OPENED */
    if (openedGifts.has(1) && openedGifts.has(2)) {
        const personalButton = document.getElementById("personal-button");

        if (personalButton) {
            personalButton.hidden = false;
        }
    }
}

