let suspicion = 0;

// wait until page loads
window.addEventListener("DOMContentLoaded", () => {
    start();
});

// change background scene
function setScene(scene) {
    document.body.className = scene;
}

// core UI renderer
function show(text, options = []) {
    const textBox = document.getElementById("text");
    const buttons = document.getElementById("buttons");

    textBox.innerHTML = text;
    buttons.innerHTML = "";

    options.forEach(opt => {
        const btn = document.createElement("button");
        btn.innerText = opt.text;
        btn.onclick = opt.action;
        buttons.appendChild(btn);
    });
}

// START
function start() {
    suspicion = 0;
    setScene("scene-intro");

    show(
        "you arrive at the sleepover. fairy lights glow softly, snacks are everywhere... but something feels off.",
        [
            { text: "look around", action: look },
            { text: "talk to friend", action: talk }
        ]
    );
}

// LOOK
function look() {
    suspicion++;
    setScene("scene-warning");

    show(
        "the lights flicker for a second. the room feels quieter than it should.",
        [
            { text: "go back", action: start }
        ]
    );
}

// TALK
function talk() {
    show(
        "your friend smiles... but it doesn’t reach her eyes.",
        [
            { text: "ask what's wrong", action: suspicious },
            { text: "ignore it", action: endingNormal }
        ]
    );
}

// SUSPICIOUS PATH
function suspicious() {
    suspicion++;
    setScene("scene-dark");

    if (suspicion >= 2) {
        show(
            "she lowers her voice: 'there’s someone else in the house...'",
            [
                { text: "investigate together", action: endingBrave }
            ]
        );
    } else {
        show(
            "she laughs it off... but you don’t believe her.",
            [
                { text: "back", action: start }
            ]
        );
    }
}

// ENDINGS

function endingNormal() {
    setScene("scene-intro");

    show(
        "END: normal ending — you ignored the feeling, but something never felt right.",
        []
    );
}

function endingBrave() {
    setScene("scene-dark");

    show(
        "END: brave ending — you walk into the dark hallway together... and the door slowly closes behind you.",
        []
    );
}
