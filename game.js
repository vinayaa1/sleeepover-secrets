let suspicion = 0;
let typingSpeed = 20;

// TYPEWRITER EFFECT
function typeText(element, text, i = 0) {
    if (i === 0) element.innerHTML = "";

    if (i < text.length) {
        element.innerHTML += text.charAt(i);
        setTimeout(() => typeText(element, text, i + 1), typingSpeed);
    }
}

// MAIN DISPLAY FUNCTION
function show(text, options = []) {
    const textBox = document.getElementById("text");
    const buttons = document.getElementById("buttons");

    typeText(textBox, text);
    buttons.innerHTML = "";

    options.forEach(opt => {
        let btn = document.createElement("button");
        btn.innerText = opt.text;
        btn.onclick = opt.action;
        buttons.appendChild(btn);
    });
}

// START GAME
function start() {
    suspicion = 0;

    show(
        "you arrive at the sleepover. fairy lights glow softly... but something feels wrong.",
        [
            { text: "look around", action: lookAround },
            { text: "talk to your friend", action: talkFriend }
        ]
    );
}

// LOOK AROUND
function lookAround() {
    suspicion++;

    show(
        "the lights flicker for a moment. you feel like you're being watched.",
        [
            { text: "go back", action: start }
        ]
    );
}

// TALK
function talkFriend() {
    show(
        "your friend smiles... but it doesn't feel real.",
        [
            { text: "ask what's wrong", action: suspicious },
            { text: "ignore it", action: normalEnding }
        ]
    );
}

// SUSPICIOUS PATH
function suspicious() {
    suspicion++;

    if (suspicion >= 2) {
        show(
            "she hesitates... 'there's someone else in the house...'",
            [
                { text: "investigate together", action: braveEnding }
            ]
        );
    } else {
        show(
            "she laughs it off... but you’re not convinced.",
            [
                { text: "go back", action: start }
            ]
        );
    }
}

// BAD PATH (too much ignoring)
function ignorePath() {
    suspicion += 2;

    show(
        "you ignore everything... but something is definitely wrong.",
        [
            { text: "continue", action: badEnding }
        ]
    );
}

// ENDINGS

function normalEnding() {
    show(
        "END: normal ending\n\nyou ignore the feeling and the night continues... but you never stop wondering.",
        []
    );
}

function braveEnding() {
    show(
        "END: brave ending\n\nyou and your friend walk into the dark hallway together... something is there.",
        []
    );
}

function badEnding() {
    show(
        "END: bad ending\n\nyou ignored everything. now you're alone in the dark house.",
        []
    );
}

function trueEnding() {
    show(
        "END: TRUE ENDING\n\nyou uncovered the truth... there was never just one friend in the house.",
        []
    );
}

// START GAME
start();