window.addEventListener("DOMContentLoaded", function () {

    let suspicion = 0;

    function show(text, options = []) {
        const textBox = document.getElementById("text");
        const buttons = document.getElementById("buttons");

        textBox.innerHTML = text;
        buttons.innerHTML = "";

        options.forEach(opt => {
            let btn = document.createElement("button");
            btn.innerText = opt.text;
            btn.onclick = opt.action;
            buttons.appendChild(btn);
        });
    }

    function start() {
        suspicion = 0;

        show(
            "you arrive at the sleepover... something feels off.",
            [
                { text: "look around", action: lookAround },
                { text: "talk to friend", action: talk }
            ]
        );
    }

    function lookAround() {
        suspicion++;

        show(
            "the lights flicker... you're being watched.",
            [
                { text: "go back", action: start }
            ]
        );
    }

    function talk() {
        show(
            "your friend smiles... but it feels forced.",
            [
                { text: "ask what's wrong", action: suspicious },
                { text: "ignore it", action: ending }
            ]
        );
    }

    function suspicious() {
        suspicion++;

        if (suspicion >= 2) {
            show(
                "she whispers: 'there's someone else in the house...'",
                [
                    { text: "investigate", action: ending2 }
                ]
            );
        } else {
            show("she says it's nothing...", [{ text: "back", action: start }]);
        }
    }

    function ending() {
        show("END: you ignored it... but something felt wrong.", []);
    }

    function ending2() {
        show("END: you walk into the dark hallway together...", []);
    }

    start();

});
